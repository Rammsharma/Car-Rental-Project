import React from "react";
import supro from "../../components/image/carimages/Van/Mahindra Supro.webp";
import hiace from "../../components/image/carimages/Van/Hiace_front.jpg";
import van from "../../components/image/carimages/Van/a-img923-2937-auhfqi-250x250.jpg";
import urbania from "../../components/image/carimages/Van/urbania.webp";
import travelor from "../../components/image/carimages/Van/tempo-traveler-a-c-rental-services.jpg";
import minivans from "../../components/image/carimages/Van/vans.webp";
import { NavLink } from "react-router";
import Footer from "../Footer";

function VanCar() {
  return (
    <>
      <div class="text-center p-10 category">
        <h2 className="text-lg font-bold text-indigo-700 uppercase">
          Choose Your Van
        </h2>
        <hr class="w-48 h-1 mx-auto my-4 bg-indigo-100 border-0 rounded md:my-0 dark:bg-indigo-700" />
      </div>
      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <div class="w-62 bg-white shadow-md rounded-xl ">
          <NavLink to="/VanCarBook">
            <img
              src={supro}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Mahindra
              </p>
              <p class="text-lg  text-black truncate block capitalize">Supro</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/VanCarBook"
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
          <NavLink to="/VanCarBook">
            <img
              src={van}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Mahindra
              </p>
              <p class="text-lg  text-black truncate block capitalize">Van</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/VanCarBook"
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
          <NavLink to="/VanCarBook">
            <img
              src={hiace}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Toyota
              </p>
              <p class="text-lg  text-black truncate block capitalize">Hiace</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/VanCarBook"
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
          <a href="/VanCarBook">
            <img
              src={urbania}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Force
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Urbania
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/VanCarBook"
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
          <a href="/VanCarBook">
            <img
              src={travelor}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Force
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Travelor
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/VanCarBook"
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
          <a href="/VanCarBook">
            <img
              src={minivans}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Maruti
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Mini Van
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/VanCarBook"
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

export default VanCar;
