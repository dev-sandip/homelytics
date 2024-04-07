"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Welcome to <span className="text-pink-500">Homelytics</span> 🚀!
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Developed By (@git-sandip)
          </div>

          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-black dark:bg-white rounded-2xl w-fit text-white dark:text-black "
                >
                  Go to Dashboard
                </Button>
              </Link>

              {/* <Button
                variant={"destructive"}
                size="lg"
                className="rounded-2xl w-fit text-white dark:text-black "
              >
                Logout
              </Button> */}
            </SignedIn>
            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl="/dashboard"
                afterSignUpUrl="/dashboard"
              >
                <Button
                  size="lg"
                  className="bg-black dark:bg-white rounded-2xl w-fit text-white dark:text-black "
                >
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </motion.div>
      </AuroraBackground>
    </>
  );
}
