import React from "react";
import celerio from "../../components/image/carimages/mini car/celerio-exterior-right-front-three-quarter-5.webp";
import i10 from "../../components/image/carimages/mini car/grand-i10-nios-exterior-right-front-three-quarter-15.webp";
import kiger from "../../components/image/carimages/mini car/kiger-exterior-right-front-three-quarter-9.webp";
import punch from "../../components/image/carimages/mini car/punch-exterior-right-front-three-quarter-55.webp";
import swift from "../../components/image/carimages/mini car/swift-exterior-right-front-three-quarter.webp";
import Tiago from "../../components/image/carimages/mini car/tiago-exterior-right-front-three-quarter-28.webp";
import { NavLink } from "react-router";
import Footer from "../Footer";

function MiniCar() {
  return (
    <>
      <div class="text-center p-10 category">
        <h2 className="text-lg font-bold text-indigo-700 uppercase">
          Choose Your Electric Car
        </h2>
        <hr class="w-48 h-1 mx-auto my-4 bg-indigo-100 border-0 rounded md:my-0 dark:bg-indigo-700" />
      </div>
      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <div class="w-62 bg-white shadow-md rounded-xl ">
          <NavLink to="/MiniCarBook">
            <img
              src={celerio}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Maruti Suzuki
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Celerio
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/MiniCarBook"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </NavLink>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl ">
          <NavLink to="/MiniCarBook">
            <img
              src={i10}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Hyundai
              </p>
              <p class="text-lg  text-black truncate block capitalize">i10</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/MiniCarBook"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </NavLink>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl ">
          <NavLink to="/MiniCarBook">
            <img
              src={kiger}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Kia
              </p>
              <p class="text-lg  text-black truncate block capitalize">Kiger</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/MiniCarBook"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </NavLink>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl ">
          <a href="/MiniCarBook">
            <img
              src={punch}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Tata
              </p>
              <p class="text-lg  text-black truncate block capitalize">Punch</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/MiniCarBook"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl ">
          <a href="/MiniCarBook">
            <img
              src={swift}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Maruti Suzuki
              </p>
              <p class="text-lg  text-black truncate block capitalize">Swift</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/MiniCarBook"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl ">
          <a href="/MiniCarBook">
            <img
              src={Tiago}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Tata
              </p>
              <p class="text-lg  text-black truncate block capitalize">Tiago</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/MiniCarBook"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default MiniCar;
