import React from "react";
import BYD from "../../components/image/carimages/electric/BYD-Emax.webp";
import xev from "../../components/image/carimages/electric/xev.webp";
import Citroen from "../../components/image/carimages/electric/Citroen eC3.webp";
import MG from "../../components/image/carimages/electric/MG-windsor.webp";
import Tiago from "../../components/image/carimages/electric/Tiago.webp";
import Tigor from "../../components/image/carimages/electric/Tigor.webp";
import { NavLink } from "react-router";
import Footer from "../Footer";

function ElectricCar() {
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
          <NavLink to="/ElectricCarBook">
            <img
              src={BYD}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                BYD
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                BYD-Emax
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/ElectricCarBook"
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
          <NavLink to="/ElectricCarBook">
            <img
              src={Citroen}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Citroen
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Citroen Ec3
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/ElectricCarBook"
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
          <NavLink to="/ElectricCarBook">
            <img
              src={MG}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                MG
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Windsor
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/ElectricCarBook"
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
          <a href="/ElectricCarBook">
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
              <p class="text-lg  text-black truncate block capitalize">
                Tiago ev
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/ElectricCarBook"
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
          <a href="/ElectricCarBook">
            <img
              src={Tigor}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Tata
              </p>
              <p class="text-lg  text-black truncate block capitalize">Tigor</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/ElectricCarBook"
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
          <a href="/ElectricCarBook">
            <img
              src={xev}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Mahindra
              </p>
              <p class="text-lg  text-black truncate block capitalize">Xev</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/ElectricCarBook"
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

export default ElectricCar;
