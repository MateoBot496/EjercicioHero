import type { ReactNode } from "react";
import Navbar from "../components/navbar";

type Props = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <div className=" overflow-x-hidden flex flex-col items-center w-full min-h-[100dvh]  items-center">
        <Navbar></Navbar>
      {children}
    </div>
  );
}