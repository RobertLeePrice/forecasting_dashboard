import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { logout } from "../actions/userActions";
import LinkButton from "./common/LinkButton";
import logo from "../images/fleur-de-lis.svg";

const navigation = [
  { text: "Dashboard", href: "/", current: true },
  { text: "Team", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="min-h-full mb-4">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        class="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.text}
                            href={item.href}
                            className={classNames(
                              item.current ? "text-black" : "text-black",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {userInfo ? (
                        <>
                          <button
                            type="button"
                            className="rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>

                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="flex max-w-xs items-center rounded-full bg-indigo-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                                <span className="sr-only">Open user menu</span>
                                {/* TODO: Refractor into reusable userImage component */}
                                {userInfo && userInfo.imageUrl ? (
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src={userInfo.imageUrl}
                                    alt={userInfo.first_name}
                                  />
                                ) : (
                                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold text-md">
                                    {userInfo.first_name
                                      .split(" ")
                                      .map((word) => word[0])
                                      .join("")
                                      .toUpperCase()}
                                    {userInfo.last_name
                                      .split(" ")
                                      .map((word) => word[0])
                                      .join("")
                                      .toUpperCase()}
                                  </div>
                                )}
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
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to={"/profile"}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Profile
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      onClick={logoutHandler}
                                      to={"/login"}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Logout
                                    </Link>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </>
                      ) : (
                        <LinkButton
                          to="/login"
                          color="green"
                          icon={UserCircleIcon}
                        >
                          Login
                        </LinkButton>
                      )}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:text-green focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden ">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 text-center items-center justify-between">
                  {navigation.map((item) => (
                    <Link
                      key={item.text}
                      to={item.href}
                      className={classNames(
                        item.current ? "text-black" : "text-black",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.text}
                    </Link>
                  ))}
                  <Link
                    to="/login"
                    className="text-white bg-green block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Login
                  </Link>
                </div>
                {userInfo ? (
                  <div className="border-t border-green pt-4 pb-3">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        {/* TODO: Refractor into reusable userImage component */}
                        {userInfo.imageUrl ? (
                          <img
                            className="h-8 w-8 rounded-full"
                            src={userInfo.imageUrl}
                            alt={userInfo.first_name}
                          />
                        ) : (
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold text-lg">
                            {userInfo.first_name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-black">
                          {userInfo.first_name}
                        </div>
                        <div className="text-sm font-medium text-black">
                          {userInfo.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ) : null}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
