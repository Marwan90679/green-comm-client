import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderImg1 from "../../assets/glen-carrie-y8dgMhxaoKk-unsplash.jpg";
import sliderImg2 from "../../assets/mtsjrdl-o7BeB6LE04E-unsplash.jpg";
import sliderImg3 from "../../assets/robert-katzki-KLcaQxlmhtk-unsplash.jpg";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

const SimpleSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {/* Slide Template */}
      {[sliderImg1, sliderImg2, sliderImg3].map((img, idx) => {
        const textData = [
          {
            title: "Bring Nature to Your Doorstep",
            subtitle: "Explore a wide variety of garden plants and tools for your dream garden.",
            textColor: "text-amber-200",
          },
          {
            title: "Let Your Garden Tell a Story",
            subtitle: "From blooms to tools — everything for a thriving, soulful space.",
            textColor: "text-red-200",
          },
          {
            title: "Breathe in the Calm of Greenery",
            subtitle: "A curated collection of garden plants for every corner of your life.",
            textColor: "text-purple-200",
          },
        ];

        return (
          <SwiperSlide key={idx}>
            <div
              className="relative md:rounded-xl rounded-b-2xl text-center h-[70vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Optional dark overlay */}
              <div className="absolute inset-0 bg-black/30 md:rounded-xl rounded-b-2xl"></div>

              <Fade delay={200} duration={1000} cascade>
                <div className="relative z-10 max-w-3xl text-center px-4">
                  <h3
                    className={`text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold ${textData[idx].textColor} drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]`}
                  >
                    {textData[idx].title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base md:text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] backdrop-blur-sm">
                    {textData[idx].subtitle}
                  </p>
                  <button className="mt-6 bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-6 py-2 rounded-full shadow-lg transition">
                    Explore Garden
                  </button>
                </div>
              </Fade>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SimpleSlider;
