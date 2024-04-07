"use client";
import { useUser } from "@clerk/nextjs";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, CreditCard, DollarSign } from "lucide-react";
const page = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
            Welcome back,
            <span className="font-normal text-gray-500 dark:text-gray-400">
              {user.firstName} {user.lastName}
            </span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            You last logged in at{" "}
            {user.lastSignInAt?.toString().toLocaleString()}
          </p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Pending Rent</CardTitle>
          <CardDescription>
            Review and manage your pending rent.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CreditCard className="h-8 w-8" />
            <div className="grid gap-1">
              <div className="font-semibold">Room Rent</div>
              <div>Due on 25th June, 2022</div>
            </div>
          </div>
        </CardContent>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CreditCard className="h-8 w-8" />
            <div className="grid gap-1">
              <div className="font-semibold">Wifi Bills</div>
              <div>Due on 25th June, 2022</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Loan amount</CardTitle>
          <CardDescription>View your current loan amount</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8" />
            <div className="text-4xl font-bold">$10,000</div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Today's schedule</CardTitle>
          <CardDescription>View your schedule for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-2xl font-semibold">Meeting with investors</div>
            <Button className="ml-auto" size="icon" variant="outline">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            10:00 AM - 11:00 AM
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default page;
