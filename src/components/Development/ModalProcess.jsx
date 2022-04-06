import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import TabsModal from "./TabsModal";

export default function ModalProcess({ open, setOpen, title, content }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative bg-grayHack inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover opacity-40"
                  src="/graphics/grafismo-01.png"
                  alt="background"
                />
                <div
                  className="absolute inset-0 bg-grayHack mix-blend-multiply"
                  aria-hidden="true"
                />
              </div>

              <div className="relative px-4 py-5 sm:px-6 sm:flex sm:justify-center sm:items-center">
                <h2 className="text-3xl font-bold text-white">{title}</h2>
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="text-white bg-transparent rounded-md hover:text-gray-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white"
                    onClick={() => setOpen(false)}
                  >
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="relative px-4 pt-5 pb-4 sm:pt-0 sm:pb-4">
                {/* {content} */}
                <TabsModal content={content} />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
