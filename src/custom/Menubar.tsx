import { Menubar as PRMenubar } from "primereact/menubar";
import type { MenuItem } from "primereact/menuitem";
import BasicDemo from "./BasicDemo";

import logoUrl from "../assets/gv-logo.svg"

type Props = { model: MenuItem[] };

export default function Menubar({ model }: Props) {
  const logo = <img src={logoUrl} alt=""  className="w-50"/>
  const searchBar = <BasicDemo />;

  return (
    <div className="w-full border-b-2 border-gray-300 bg-navbar sticky">
      <div className="max-w-7xl mx-auto px-10 xl:px-0 ">
      
        <PRMenubar
          start={logo}
          end={searchBar}
          model={model}
          className=""
          pt={{
            root: { className: "navbar-root" },
            menu: { className: "navbar-menu md:!flex !hidden" },
            menuitem: (options) => ({
              
              className: `navbar-item ${options?.context?.active ? 'is-active' : ''}`,

              onMouseEnter: (e: React.MouseEvent) => e.stopPropagation(),

              onMouseLeave: (e: React.MouseEvent) => e.stopPropagation(),

            }),
            submenu: { className: "navbar-submenu" },
            action: { className: "navbar-action" },
          }}
        />

      </div>
    </div>

  );

}
