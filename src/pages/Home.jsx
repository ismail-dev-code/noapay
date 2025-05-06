import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slideImg from "../assets/hero.jpg";
import slideImg2 from "../assets/sld41.png";
import slideImg3 from "../assets/slide2.jpg";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaHandPointUp, FaLock } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="md:text-5xl text-3xl font-bold mb-2">
            NoaPay-{" "}
            <span className="font-normal text-primary">Pay Bills at Ease</span>
          </h1>

          <p className="text-gray-500 mb-4">
            <span className="font-bold">NoaPay</span> is your all-in-one digital
            platform to manage, track, and pay your bills — fast, secure, and
            hassle-free. Whether it's electricity, water, internet, or any other
            essential service, NoaPay ensures everything is just a few clicks
            away.
          </p>

          <button className="btn bg-primary text-white">Bills</button>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            <SwiperSlide>
              <img
                className="rounded-2xl w-full"
                src={slideImg}
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl w-full"
                src={slideImg2}
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl w-full"
                src={slideImg3}
                alt="Slide 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="text-center md:p-0 p-4 mt-8 md:mt-24">
        <h1 className="md:text-4xl text-3xl font-bold mb-1.5 md:mb-3">
          Why should you choose NoaPay?
        </h1>
        <p className="text-gray-500">
          Here’s Top 4 reasons why using a NoaPay account for manage your money.
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:p-0 p-4 md:gap-6 gap-5 mt-6 md:mt-12">
          <div className="text-left space-y-3 cursor-pointer border border-gray-300 hover:bg-gray-100 p-4 rounded-md">
            <FaHandPointUp size={30} className="text-success" />
            <h1 className="text-2xl font-bold">Easy to use</h1>
            <p className="text-gray-500">
              NoaPay is designed with simplicity in mind — making it effortless
              for anyone to manage and pay bills without confusion or
              complexity.
            </p>
          </div>
          <div className="text-left space-y-3 cursor-pointer border border-gray-300 hover:bg-gray-100 p-4 rounded-md">
            <IoArrowRedoSharp size={30} className="text-success" />
            <h1 className="text-2xl font-bold">Faster Payments</h1>
            <p className="text-gray-500">
              Make bill payments instantly with NoaPay — no delays, no waiting.
              Get real-time confirmation and stay ahead of due dates
              effortlessly.
            </p>
          </div>
          <div className="text-left space-y-3 cursor-pointer border border-gray-300 hover:bg-gray-100 p-4 rounded-md">
            <TbCoinTakaFilled size={30} className="text-success" />
            <h1 className="text-2xl font-bold">Lower Fees</h1>
            <p className="text-gray-500">
              Save more with NoaPay — enjoy secure bill payments with minimal
              service charges and no hidden fees.
            </p>
          </div>
          <div className="text-left space-y-3 cursor-pointer border border-gray-300 hover:bg-gray-100 p-4 rounded-md">
            <FaLock size={30} className="text-success" />
            <h1 className="text-2xl font-bold">100% secure</h1>
            <p className="text-gray-500">
              Your data and transactions are fully protected with advanced
              encryption and trusted security protocols — giving you complete
              peace of mind every time you pay.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:p-0 p-4 my-12 md:my-24">
        <div className="w-full md:w-1/2">
          <img
            className="rounded-2xl w-full"
            src={slideImg2}
            alt="How NoaPay Works"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            How does it work?
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Using NoaPay is simple. Just sign in, add your bill details, and
            make payments in a few quick steps. Track your history, get
            reminders, and stay on top of all your bills — all in one place.
          </p>
          <ol className="list-inside text-gray-600 mt-4 space-y-4 text-base md:text-lg">
            <li className="flex items-start gap-2">
              <TiTick className="text-success mt-1" size={24} />
              Sign up or log in to your NoaPay account.
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-success mt-1" size={24} />
              Add your utility or service bill information.
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-success mt-1" size={24} />
              Choose your preferred payment method and pay securely.
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-success mt-1" size={24} />
              Receive instant confirmation and track your payment history
              anytime.
            </li>
          </ol>
          <Link to={"/register"} className="btn-success btn md:mt-6 mt-3 text-sm text-white">
            Open a Free Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
