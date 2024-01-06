import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import HeaderAuth from "./HeaderAuth";
import SearchInput from "./SearchInput";
import { Suspense } from "react";

const Header = () => {
  return (
    <Navbar className="shadow mb-6 py-2">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Suspense>
          <SearchInput />
        </Suspense>
      </NavbarContent>
      <HeaderAuth />
    </Navbar>
  );
};
export default Header;
