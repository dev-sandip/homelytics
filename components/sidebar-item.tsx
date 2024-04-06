"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  Icon: React.ReactNode;
  href: string;
};

export const SidebarItem = ({ label, Icon, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "outline" : "default"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <span className="mr-5"> {Icon}</span>
        {label}
      </Link>
    </Button>
  );
};
