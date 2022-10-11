import React, { Fragment } from 'react'
import Avatar from "./Avatar";
import { Menu, Transition } from "@headlessui/react";

function AvatarMenu() {
  return (
    <Menu as="div" className=" relative inline-block  ">
          <div className="">
            <Menu.Button 
            style={{padding: "8px", "minWidth":"70px"}}
            >
              <Avatar />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : " font-semibold text-black bg-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm text-right`}
                    >
                      See Profile
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1 block sm:hidden">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : " font-semibold text-black bg-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Discover
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="p-1 mt-2">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : " text-black bg-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Log out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
  )
}

export default AvatarMenu