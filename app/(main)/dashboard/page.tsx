"use client";
import { useUser } from "@clerk/nextjs";
const page = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div>
      <h1 className="text-lg">Welcome,Mr {user.firstName}</h1>
    </div>
  );
};

export default page;
