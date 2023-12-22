import { Input, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import HeaderAuth from "./HeaderAuth";

const Header = () => {
  return (
    <Navbar className="shadow mb-6 py-2">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input />
      </NavbarContent>
      <HeaderAuth />
    </Navbar>
  );
};
export default Header;
