import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getServerSession } from "next-auth";

const AppBar = async () => {
  const session = await getServerSession();

  console.log("session" + session);

  return (
    <header className=" p-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <h1 className="text-xl font-bold">Simple chat app</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost">Home</Button>
            </li>
            <li>
              <Button variant="ghost">About</Button>
            </li>
            <li>
              <Button variant="ghost">Contact</Button>
            </li>
            <li>
              {session != null ? (
                <LogoutButton />
              ) : (
                <Button asChild variant="ghost">
                  <Link href="/auth/login">Login</Link>
                </Button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
