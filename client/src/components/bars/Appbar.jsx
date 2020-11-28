import React, { useEffect, useState } from "react";
import { MdNotifications } from "react-icons/md";
import { NotificationService } from "../../services/NotificationService";
const Appbar = ({ onSignOut, currentUser }) => {
  const [isAccountButtonOpen, setIsAccountButtonOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const _notifications = new NotificationService();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getAllMyNotifications = async () => {
      try {
        const res = await _notifications.getAllMyNotifications();
        console.log(res);
        setNotifications(res);
      } catch (error) {}
    };
    getAllMyNotifications();
  }, []);
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
      <h1 className="font-bold text-red-600  text-lg">
        <span className="text-gray-800">Emergency</span>PH
      </h1>
      <div className="ml-4 w-full">
        {/* <input
          className="bg-gray-200 text-xs font-medium rounded-full px-4 py-3 w-64 focus:outline-none"
          type="search"
          placeholder="Search..."
        /> */}
      </div>

      <ul className="flex ml-auto items-center text-sm font-medium">
        <li className="px-2"></li>
        <li className="px-2">
          <MdNotifications
            onClick={onNotifClick}
            size={25}
            className="text-red-600 cursor-pointer"
          />
          {isNotificationOpen ? (
            <div class="origin-top-right absolute right-24 top-12 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  class="block px-4 py-2 tracking-normal border-b text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-default"
                  role="menuitem"
                >
                  Notifications
                </div>

                {notifications != null || notifications != undefined ? (
                  notifications.length > 0 ? (
                    notifications.map((notification) => {
                      return (
                        <button
                          key={notification.id}
                          type="submit"
                          class=" w-full border-b mb-2 flex flex-col text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          role="menuitem"
                        >
                          <div className="flex flex-row  w-full mb-4">
                            <span className=" text-xs">
                              {notification.phone}
                            </span>
                            <p className="ml-auto text-gray-600 text-xs ">
                              {notification.address}
                            </p>
                          </div>
                          <span className="font-medium text-base">
                            {notification.victim_name}
                          </span>

                          <div className="flex w-full flex-col ">
                            <p className="text-gray-600 text-base">
                              {notification.description}
                            </p>
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    <p className="px-4 font-normal pb-2">No Notifications</p>
                  )
                ) : (
                  <p className="px-4 font-normal pb-2">No Notifications</p>
                )}
              </div>
            </div>
          ) : null}
        </li>
        <li className="px-2">
          <button
            onClick={onAccountClick}
            className="flex justify-center items-center text-red-600 cursor-pointer focus:outline-none w-10 h-10 border border-red-600 bg-transparent rounded-full"
          >
            <p className="text-lg">{currentUser.firstName[0].toUpperCase()}</p>
          </button>
          {isAccountButtonOpen ? (
            <div class="origin-top-right absolute right-10 top-12 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {/* <div
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Account settings
                </div> */}

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
