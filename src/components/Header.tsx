import { signInAction, signOutAction } from "@/actions";
import { auth } from "@/auth";
import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  const isLogged = session?.user;

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input />
      </NavbarContent>
      <NavbarContent justify="end">
        {isLogged && (
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Avatar src={session?.user?.image || ""} />
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
    </Navbar>
  );
};
export default Header;
