import React from "react";

function BigNav() {
  return (
    <>
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
    </>
  );
}

export default BigNav;
