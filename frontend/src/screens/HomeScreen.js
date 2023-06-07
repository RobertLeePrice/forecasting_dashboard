import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import LoadingCard from "../components/LoadingOverlay";
import Message from "../components/Message";
import Navbar from "../components/Navbar";

function HomeScreen() {
  const dispatch = useDispatch();
  // const productList = useSelector((state) => state.productList);
  // const { error, loading, products } = productList;

  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

  return (
    <>
      {/* <Header /> */}
      {/* {loading ? (
        <LoadingCard />
      ) : error ? (
        <Message message={error} />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )} */}

      <div class="flex h-screen overflow-y-hidden bg-zinc-950 min-h-screen justify-center">
        <div class="flex-1 flex flex-col lg:space-y-0 lg:flex-row">
          {/* <!-- Navigation --> */}

          <Navbar />

          <Header />

          {/* <!-- Content --> */}
          {/* <div class="flex-1 px-2 sm:px-0">
            <div class="flex justify-between items-center">
              <h3 class="text-3xl font-extralight text-white/50">Groups</h3>
              <div class="inline-flex items-center space-x-2">
                <a
                  class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </a>
                <a
                  class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
