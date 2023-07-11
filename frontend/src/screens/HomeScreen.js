import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ParentSize } from "@visx/responsive";

import Header from "../components/Header";
import LoadingCard from "../components/LoadingOverlay";
import Message from "../components/Message";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

import ColumnChart from "../components/charts/ColumnChart";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HomeScreen() {
  const dispatch = useDispatch();

  // const productList = useSelector((state) => state.productList);
  // const { error, loading, products } = productList;

  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

  return (
    <>
      {/* {loading ? (
        <LoadingCard />
      ) : error ? (
        <Message message={error} />
      ) : (
        <div></div>
      )} */}

      <div class="flex overflow-y-hidden bg-zinc-950 min-h-screen justify-center">
        <div class="flex-1 flex flex-col lg:space-y-0 lg:flex-row">
          <Sidebar />

          <main className="py-8 space-y-8 w-full">
            <div className="px-4 sm:px-6 lg:px-8 text-white">
              {/* Start Card Header */}
              <div className="px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                  <div className="ml-4 mt-2">
                    <h1 className="text-3xl font-semibold leading-6 text-white">
                      Model Performance
                    </h1>
                  </div>
                  <div className="ml-4 mt-2 flex-shrink-0">
                    <button
                      type="button"
                      className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Test Filter Button
                    </button>
                  </div>
                </div>
              </div>
              {/* End Card Header */}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded shadow p-4">
                <h2 className="text-2xl font-bold">Card 1</h2>
                <ColumnChart width={500} height={300} />
              </div>

              <div className="bg-white rounded shadow p-4">
                <h2 className="text-2xl font-bold">Card 2</h2>
                <ColumnChart width={500} height={300} />
              </div>

              <div className="bg-white rounded shadow p-4">
                <h2 className="text-2xl font-bold">Card 3</h2>
                <p className="mt-2">Hello world</p>
              </div>

              {/* Add more cards as needed */}
            </div>
            <div className="px-4 sm:px-6 lg:px-8 text-white">
              {/* <Card /> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
