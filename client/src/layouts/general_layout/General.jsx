import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Logo from "./components/Logo";

function General({ children }) {
  return (
    <div className="flex flex-col text-black h-screen w-screen">
      <div
        className="border grow-0 grid"
        style={{ gridTemplate: "100% / 1fr 5fr 2fr" }}
      >
        <Logo/>
        {/* small nav */}
        <nav className="nav-bar border hidden sm:block"></nav>
        <div className="profile-nav border hidden sm:block">
          <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
              <Menu.Item>
                <a
                  className="ui-active:bg-blue-500 ui-active:text-red ui-not-active:bg-red ui-not-active:text-green"
                  href="/account-settings"
                >
                  Account settings
                </a>
              </Menu.Item>
              {/* ... */}
            </Menu.Items>
          </Menu>
        </div>
      </div>

      <div className="content grow flex flex-col">
        {children}
      </div>

      {/* insert footer if existing */}
    </div>
  );
}

export default General;
