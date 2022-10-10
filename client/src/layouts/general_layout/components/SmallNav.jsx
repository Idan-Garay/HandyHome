import React from "react";
import Avatar from "./Avatar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function SmallNav() {
  return (
    <nav className="nav-bar border col-span-2 sm:hidden flex justify-end items-center pr-4 bg-slate-500">
      <div className="relative inline-block text-left"></div>
    </nav>
  );
}

export default SmallNav;
