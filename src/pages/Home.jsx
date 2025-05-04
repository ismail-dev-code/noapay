import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slideImg from "../assets/hero.jpg";
import slideImg2 from "../assets/sld41.png";
import slideImg3 from "../assets/slide2.jpg";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 gap-6">
     
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">
          NoaPay-{" "}
          <span className="font-normal text-primary">Pay Bills at Ease</span>
        </h1>

        <p className="text-xl text-gray-500 mb-4">
          <span className="font-bold">NoaPay</span> is your all-in-one digital platform to manage, track, and pay
          your bills fast, secure, and hassle-free.
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
            <img className="rounded-2xl w-full" src={slideImg} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-2xl w-full" src={slideImg2} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-2xl w-full" src={slideImg3} alt="Slide 3" />
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
