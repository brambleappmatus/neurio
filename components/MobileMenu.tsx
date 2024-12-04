'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  menuItems: {
    label: string;
    href: string;
    submenu?: { label: string; href: string; }[];
  }[];
  onNavigate: (href: string) => void;
}

export function MobileMenu({ isOpen, setIsOpen, menuItems, onNavigate }: MobileMenuProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-white dark:bg-black shadow-xl">
                    <div className="px-4 sm:px-6 py-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
                          Menu
                        </Dialog.Title>
                        <button
                          type="button"
                          className="rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                          onClick={() => setIsOpen(false)}
                        >
                          <XMarkIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 sm:px-6">
                      <div className="space-y-1">
                        {menuItems.map((item) => (
                          <div key={item.label} className="space-y-1">
                            <button
                              onClick={() => {
                                onNavigate(item.href);
                                setIsOpen(false);
                              }}
                              className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {item.label}
                            </button>
                            {item.submenu && (
                              <div className="pl-4 space-y-1">
                                {item.submenu.map((subItem) => (
                                  <button
                                    key={subItem.label}
                                    onClick={() => {
                                      onNavigate(subItem.href);
                                      setIsOpen(false);
                                    }}
                                    className="w-full text-left px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                                  >
                                    {subItem.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}