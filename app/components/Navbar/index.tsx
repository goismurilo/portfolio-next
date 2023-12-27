"use client";

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, SunIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { menuItens } from "../../utils/menuItens";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState("Home");

  return (
    <header className="fixed w-full z-50 bg-surface-background shadow-lg lg:shadow-[#00000040]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">goismurilo logotipo</span>
            <Image
              src="/logo-with-name.svg"
              alt="goisMurilo Logo"
              width={120}
              height={60}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Popover.Group className="hidden lg:flex lg:gap-x-12 text-sm leading-6">
            {menuItens.map((item, key) => {
              return (
                <a
                  key={key}
                  href={item.href}
                  onClick={() => setItemSelected(item.name)}
                  data-selected={itemSelected === item.name}
                  className="data-[selected=true]:font-semibold"
                >
                  {item.name !== "Theme" && item.name}
                  {item.name === "Theme" && <SunIcon className="w-6 h-6" />}
                </a>
              );
            })}
          </Popover.Group>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-surface-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-ml-6">
              <span className="sr-only">Your Company</span>
              {/* TODO: Test UX -> soon no name */}
              <Image
                src="/logo-with-name.svg"
                alt="goisMurilo Logo"
                width={180}
                height={80}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2."
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-text-secondary">
              <div className="space-y-2 py-6">
                {menuItens
                  .map((item, key) => {
                    return (
                      <a
                        key={key}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name !== "Theme" && item.name}
                        {item.name === "Theme" && <SunIcon className="w-6" />}
                      </a>
                    );
                  })
                  .filter((item, key) => key < 4)}
              </div>
              <div className="py-6 flex gap-4 text-base font-semibold leading-7">
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg p-3 bg-surface-secondary cursor-pointer items-center flex"
                >
                  EN
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg p-3 bg-surface-secondary cursor-pointer items-center flex"
                >
                  <SunIcon width="1.5rem" height="1.5rem" />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
