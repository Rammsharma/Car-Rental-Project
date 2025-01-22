import React from "react";
import mimage from "./image/mimage.jpg";
import Form from "./Form";
import Categories from "../../src/components/categories";
import Footer from "./Footer";
import Review from "../../src/components/Review";
import video2 from "../../src/components/image/video2.mov";
import BookingSteps from "./BookingSteps";
import { NavLink } from "react-router";
import Banner from "../components/banner/banner";

function Main() {
  return (
    <>
      <div>
        <section className="relative bg-center bg-no-repeat bg-blend-multiply flex flex-col h-screen">
          {/* Video Container */}
          <div className="relative flex-1">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>
            <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-24">
              <h1 className="text-white text-4xl font-bold sm:text-6xl"></h1>
              <p className="text-white mt-8 text-lg sm:text-xl"></p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mt-20 pt-20">
                <NavLink
                  to="/About"
                  type="button"
                  className="text-white bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-400"
                >
                  About us
                </NavLink>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex-shrink-0">
            <Banner />
            <Categories />
            <BookingSteps />

            <Review />
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
