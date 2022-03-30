import NavLink from "./NavLink";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function Form() {
  const projectType = [
    { id: 1, name: "Blockchain Development" },
    { id: 2, name: "Security Audit" },
  ];

  const [selectedProjectType, setSelectedProjectType] = useState(
    projectType[0]
  );

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div id="form" className="sectionForm py-16 md:px-24 lg:px-8 lg:py-20">
      <div data-aos="zoom-in-down" className="containerForm">
        <h2 className="text-3xl sm:text-4xl">Contact us</h2>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Email Address</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Telegram</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Source code/github (optional)</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Website (optional)</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Company (optional)</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="inputBox textarea">
              {/* <textarea required></textarea> */}
              <input type="text" name="" required />

              <span className="text">Project short description (optional)</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="px-4 w-full max-w-xs mt-7 mb-2">
          <Listbox
            value={selectedProjectType}
            onChange={setSelectedProjectType}
          >
            {({ open }) => (
              <>
                <Listbox.Label className="block text-base font-medium text-white">
                  Type of project
                </Listbox.Label>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm">
                    <span className="block truncate font-medium">
                      {selectedProjectType.name}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      static
                      className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      {projectType.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-primary text-white"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {person.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-primary",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>

        <div className="row100">
          <div className="col flex flex-col sm:flex-row justify-center items-start sm:justify-start sm:items-center">
            <input
              type="submit"
              value="Submit"
              className="text-white px-5 py-2 border border-white rounded cursor-pointer"
            />
            <span className="text-white mt-4 ml-0 sm:ml-4 sm:mt-0">
              In a hurry?
              <NavLink
                className="ml-2 hover:text-primary"
                href="https://t.me/hackachain"
                target="blank"
              >
                Contact us on telegram for a faster reply
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
