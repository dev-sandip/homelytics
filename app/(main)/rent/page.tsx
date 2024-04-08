"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CardContent,
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const page = () => {
  const [roomRent, setRoomRent] = useState(3000);
  const [waterBill, setWaterBill] = useState(32.5);
  const [wifiBill, setWifiBill] = useState(367.2525);
  const [eBill, setEBill] = useState(0);
  const [totalRent, setTotalRent] = useState(0);

  const calculateRent = () => {
    const monthlyRent = roomRent + waterBill + wifiBill + eBill;
    setTotalRent(monthlyRent);
  };
  return (
    <div className="flex flex-col gap-4 p-4 lg:p-6">
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="font-semibold text-lg md:text-xl">
          Room Rent
          <span className="font-normal text-gray-500 dark:text-gray-400">
            Paid till now
          </span>
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <Button size="icon" variant="outline">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
      <Card>
        <CardContent className="flex items-center gap-4">
          <div className="flex flex-col">
            <div className="font-semibold">Room Rent</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Paid till now
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex flex-col items-end">
              <div className="text-2xl font-semibold">Rs 1,200.00</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Total rent
              </div>
            </div>
            <Separator className="h-8" orientation="vertical" />
            <div className="flex flex-col items-end">
              <div className="text-2xl font-semibold">Rs 1,000.00</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Amount paid
              </div>
            </div>
            <Separator className="h-8" orientation="vertical" />
            <div className="flex flex-col items-end">
              <div className="text-2xl font-semibold">Rs 200.00</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Remaining
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Payments</CardTitle>
          <CardDescription>View your payments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-01-01</TableCell>
                <TableCell>Rs 500.00</TableCell>
                <TableCell>January payment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-02-01</TableCell>
                <TableCell>Rs 500.00</TableCell>
                <TableCell>February payment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-03-01</TableCell>
                <TableCell>Rs 500.00</TableCell>
                <TableCell>March payment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-01</TableCell>
                <TableCell>Rs 500.00</TableCell>
                <TableCell>April payment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-05-01</TableCell>
                <TableCell>Rs 500.00</TableCell>
                <TableCell>May payment</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Rent Calculator</CardTitle>
          <CardDescription>Calculate your rent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <Label className="text-sm" htmlFor="rent">
                Calulate Your Total Rent
              </Label>
              <Input
                id="Roomrent"
                type="number"
                value={roomRent}
                onChange={(e) => setRoomRent(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-sm" htmlFor="water bill">
                Water Bill
              </Label>
              <Input
                id="water"
                type="number"
                value={waterBill}
                onChange={(e) => setWaterBill(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-sm" htmlFor="wifi bill">
                Wifi Bill
              </Label>
              <Input
                onChange={(e) => setWifiBill(Number(e.target.value))}
                id="wifi"
                type="number"
                value={wifiBill}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-sm" htmlFor="electricity bill">
                Electricity Bill
              </Label>

              <Input
                onChange={(e) => setEBill(Number(e.target.value))}
                id="wifi"
                type="number"
                value={eBill}
              />
            </div>
            <Button
              className="md:col-start-1"
              type="submit"
              onClick={calculateRent}
            >
              Calculate
            </Button>
          </div>
          <div className="mt-4 prose">
            <p>
              Your total rent for this month is {""}
              <strong>Rs {totalRent}</strong>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
