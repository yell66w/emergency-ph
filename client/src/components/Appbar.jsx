import React, { useState } from "react";
import { MdNotifications, MdCreate } from "react-icons/md";
const Appbar = ({ onSignOut, currentUser }) => {
  const [isAccountButtonOpen, setIsAccountButtonOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const onNotifClick = () => {
    if (isAccountButtonOpen) {
      setIsAccountButtonOpen(false);
    }
    setIsNotificationOpen(!isNotificationOpen);
  };
  const onAccountClick = () => {
    if (isNotificationOpen) {
      setIsNotificationOpen(false);
    }
    setIsAccountButtonOpen(!isAccountButtonOpen);
  };

  return (
    <div className="shadow h-16 flex tracking-wider items-center px-6 text-gray-800 ">
      <h1 className="font-bold  text-lg">EMERGENCY</h1>
      <div className="ml-4 w-full">
        <input
          className="bg-gray-200 text-xs font-medium rounded-full px-4 py-3 w-64 focus:outline-none"
          type="search"
          placeholder="Search..."
        />
      </div>

      <ul className="flex ml-auto items-center text-sm font-medium">
        <li className="px-2">
          <MdCreate size={25} className="text-red-600 cursor-pointer" />
        </li>
        <li className="px-2">
          <MdNotifications
            onClick={onNotifClick}
            size={25}
            className="text-red-600 cursor-pointer"
          />
          {isNotificationOpen ? (
            <div class="origin-top-right absolute right-24 top-12 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Notifications
                </a>

                <form method="POST" action="#">
                  <button
                    type="submit"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          ) : null}
        </li>
        <li className="px-2">
          <button
            onClick={onAccountClick}
            className="flex justify-center items-center text-red-600 cursor-pointer focus:outline-none w-10 h-10 border border-red-600 bg-transparent rounded-full"
          >
            <p className="text-lg">{currentUser.firstName[0]}</p>
          </button>
          {isAccountButtonOpen ? (
            <div class="origin-top-right absolute right-10 top-12 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Account settings
                </a>

                <button
                  onClick={onSignOut}
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default Appbar;
