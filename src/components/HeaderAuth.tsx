"use client";
import { signInAction, signOutAction } from "@/actions";

import {
  Avatar,
  Button,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

const HeaderAuth = () => {
  const session = useSession();
  const isLogged = session?.data?.user;

  return (
    <NavbarContent justify="end">
      {isLogged && (
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Avatar src={session?.data?.user?.image || ""} />
          </PopoverTrigger>
          <PopoverContent>
            <form action={signOutAction}>
              <Button type="submit" color="secondary" variant="flat">
                Sign out
              </Button>
            </form>
          </PopoverContent>
        </Popover>
      )}
      {!isLogged && (
        <NavbarItem>
          <form action={signInAction}>
            <Button type="submit" color="secondary" variant="flat">
              Sign in
            </Button>
          </form>
        </NavbarItem>
      )}
    </NavbarContent>
  );
};
export default HeaderAuth;
