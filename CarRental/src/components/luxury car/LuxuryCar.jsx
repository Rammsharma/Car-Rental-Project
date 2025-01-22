import React from "react";
import BMW1 from "../../components/image/carimages/luxury/2-series-gran-coupe-exterior-right-front-three-quarter-3.webp";
import Mercedes from "../../components/image/carimages/luxury/e-class-exterior-right-front-three-quarter-2.webp";
import Audi from "../../components/image/carimages/luxury/exterior_audi-a4_front-left-side_930x620.webp";
import Audi1 from "../../components/image/carimages/luxury/jyhp9ua_1545009.webp";
import Range from "../../components/image/carimages/luxury/range-rover-velar-exterior-right-front-three-quarter-4.webp";
import BMW from "../../components/image/carimages/luxury/s48050b_1640711.webp";
import { NavLink } from "react-router";
import Footer from "../Footer";
function LuxuryCar() {
  return (
    <>
      <div class="text-center p-10 category">
        <h2 class="text-lg font-bold text-indigo-700 uppercase">
          Choose Your Luxury Car
        </h2>
        <hr class="w-48 h-1 mx-auto my-4 bg-indigo-100 border-0 rounded md:my-0 dark:bg-indigo-700" />
      </div>
      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <div class="w-62 bg-white shadow-md rounded-xl ">
          <NavLink to="/LuxuryBook">
            <img
              src={BMW1}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                BMW
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                BMW 2-Series
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/LuxuryBook"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </NavLink>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl ">
          <NavLink to="/LuxuryBook">
            <img
              src={Mercedes}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Mercedes
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                E-class
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/LuxuryBook"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </NavLink>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl ">
          <NavLink to="/LuxuryBook">
            <img
              src={Audi}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Audi
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Audi A4
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/LuxuryBook"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </NavLink>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl ">
          <a href="/LuxuryBook">
            <img
              src={Audi1}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Audi
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Audi Q5
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/LuxuryBook"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl ">
          <a href="/LuxuryBook">
            <img
              src={Range}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Range Rover
              </p>
              <p class="text-lg  text-black truncate block capitalize">Velar</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/LuxuryBook"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Select
                </NavLink>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl ">
          <a href="/LuxuryBook">
            <img
              src={BMW}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                BMW
              </p>
              <p class="text-lg  text-black truncate block capitalize">X3</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/LuxuryBook"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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

export default LuxuryCar;
