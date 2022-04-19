import { Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavLink from "./NavLink";

export default function Header({ move }) {
  const navigation = [
    { name: "Services", href: "#ourprocess", current: true },
    { name: "Clients", href: "#customers", current: false },
    { name: "Team", href: "#team", current: false },
    { name: "About", href: "#about", current: false },
    { name: "Contact", href: "#form", current: false },
  ];

  return (
    <Popover as="nav">
      {({ open }) => (
        <div className="relative" style={{zIndex: '9999'}}>
          <div
            className={`fixed w-full left-0 right-0 mx-auto px-2 sm:px-6 lg:px-20 transition-colors ease-in-out delay-200 duration-500 z-50 ${
              move
                ? "bg-white backdrop-filter backdrop-blur-sm bg-opacity-10"
                : "bg-black"
            }`}
          >
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-grayHack focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink href="/">
                    <img
                      className="block lg:hidden h-10 sm:h-12 w-auto cursor-pointer"
                      src="/main/3.png"
                      alt="Workflow"
                    />
                  </NavLink>

                  <NavLink href="/">
                    <img
                      className="hidden lg:block h-12 w-auto cursor-pointer"
                      src="/main/3.png"
                      alt="Workflow"
                    />
                  </NavLink>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      className="text-white hover:bg-primary hover:bg-opacity-50 px-3 py-2 rounded-md text-lg font-semibold"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Popover.Panel
            className="sm:hidden flex top-16 fixed z-50 w-full bg-grayHack shadow-lg border-b border-primary"
          >
            <div className="px-2 pt-2 pb-3 space-y-2 w-full rounded ">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-gray-300 hover:bg-primary focus:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Popover.Panel>
        </div>
      )}
    </Popover>
  );
}
