import React from "react";
import ScorpioN from "../../components/image/carimages/suv/16993409-mahindra_scorpio_n.webp";
import bolero from "../../components/image/carimages/suv/bolero-neo-plus-exterior-right-front-three-quarter.webp";
import Creta from "../../components/image/carimages/suv/creta-n-line-exterior-right-front-three-quarter-26.webp";
import hector from "../../components/image/carimages/suv/hector-plus-exterior-right-front-three-quarter-13.webp";
import innova from "../../components/image/carimages/suv/innova-crysta-exterior-left-front-three-quarter.webp";
import xuv700 from "../../components/image/carimages/suv/xuv700-exterior-right-front-three-quarter-3.webp";
import { NavLink } from "react-router";
import Footer from "../Footer";

function SuvCar() {
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
          <NavLink to="/SuvCarBook">
            <img
              src={ScorpioN}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Mahindra
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Scorpio N
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/SuvCarBook"
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
          <NavLink to="/SuvCarBook">
            <img
              src={bolero}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Mahindra
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Bolero
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/SuvCarBook"
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
          <NavLink to="/SuvCarBook">
            <img
              src={Creta}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Hyundai
              </p>
              <p class="text-lg  text-black truncate block capitalize">Creta</p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/SuvCarBook"
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
          <a href="/SuvCarBook">
            <img
              src={hector}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                MG
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Hector
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/SuvCarBook"
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
          <a href="/HondaCity">
            <img
              src={innova}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Tyota
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                Innova
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/SuvCarBook"
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
          <a href="/HondaCity">
            <img
              src={xuv700}
              alt="Product"
              class="h-50 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Mahindra
              </p>
              <p class="text-lg  text-black truncate block capitalize">
                XUV 700
              </p>
              <div class="flex items-center py-5">
                <NavLink
                  to="/SuvCarBook"
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

export default SuvCar;
