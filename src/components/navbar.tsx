import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
} from "@heroui/navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";
import { setFilter } from "@/store/filterSlice";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(search));
  }, [search]);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Busqueda de post..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );

  const miMenu = ["Docs", "About", "Contact us"];

  return (
    <HeroUINavbar
      shouldHideOnScroll
      className="w-full bg-black-200 flex justify-center items-center shadow-xl"
      maxWidth="xl"
    >
      <NavbarBrand>
        <Link to="/">
          <p className="font-bold text-inherit">LOGO DE PRUEBA</p>
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden lg:flex" />
      </NavbarContent>

      <NavbarMenu className="flex flex-col items-center mt-10 max-h-[20dvh]">
        {miMenu.map((i, id) => (
          <NavbarMenuItem key={id}>
            <Link
              className="hover:text-red-200 hover:text-subtitled"
              to="/docs"
            >
              {i}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </HeroUINavbar>
  );
};
