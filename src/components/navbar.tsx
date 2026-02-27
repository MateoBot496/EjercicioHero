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

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

export const Navbar = ({ search, setSearch }: any) => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Busqueda por post id"
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

  const miMenu = ["Enlace 1", "Enlace 2", "Enlace 3"];

  return (
    <HeroUINavbar
      shouldHideOnScroll
      className="w-full border-2 rounded-xl"
      disableAnimation={true}
      maxWidth="xl"
    >
      <NavbarBrand>
        <Link to="/">
          <p className="font-bold text-inherit">LOGO DE PRUEBA</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex">
        {miMenu.map((i, id) => (
          <NavbarMenuItem key={id}>{i}</NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex" />
      </NavbarContent>

      <NavbarMenu className="flex flex-col items-center">
        {miMenu.map((i, id) => (
          <NavbarMenuItem key={id}>
            <Link to="/docs">{i}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent className="sm:hidden" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </HeroUINavbar>
  );
};
