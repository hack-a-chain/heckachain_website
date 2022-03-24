import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Header({ move }) {
  const navigation = [
    { name: "Audits", href: "#", current: true },
    { name: "Development", href: "#", current: false },
    { name: "Resources", href: "#", current: false },
    { name: "About", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div
            className={`fixed w-full left-0 right-0 mx-auto px-2 sm:px-6 lg:px-20 transition-colors ease-in-out delay-150 duration-500 ${
              move
                ? "bg-white backdrop-filter backdrop-blur-sm bg-opacity-20"
                : "bg-black"
            }`}
          >
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-grayHack focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-12 w-auto"
                    src={move ? "/main/4.png" : "/main/3.png"}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-12 w-auto"
                    src={move ? "/main/4.png" : "/main/3.png"}
                    alt="Workflow"
                  />
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:bg-grayHack hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-gray-300 hover:bg-grayHack focus:bg-grayHack hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
