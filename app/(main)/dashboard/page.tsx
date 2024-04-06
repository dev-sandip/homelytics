"use client";
import { Header } from "@/components/Header";
import { useUser } from "@clerk/nextjs";
const page = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div>
      <Header />
      Welcome ,Mr.{user.firstName}
    </div>
  );
};

export default page;
