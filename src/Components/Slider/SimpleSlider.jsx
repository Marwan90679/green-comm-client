import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import sliderImg1 from "../../assets/glen-carrie-y8dgMhxaoKk-unsplash.jpg";
import sliderImg2 from "../../assets/mtsjrdl-o7BeB6LE04E-unsplash.jpg";
import sliderImg3 from "../../assets/robert-katzki-KLcaQxlmhtk-unsplash.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

const SimpleSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="md:rounded-xl rounded-b-2xl text-center h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
          style={{ backgroundImage: `url(${sliderImg1})` }}
        >
          <Fade delay={200} duration={1000}>
            <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-amber-200 drop-shadow-2xl drop-shadow-black">
              Bring Nature to Your Doorstep
            </h3>
          </Fade>
          <p className="mt-4 text-sm sm:text-base md:text-xl text-white drop-shadow-2xl max-w-xl">
            Explore a wide variety of garden plants and tools for your dream
            garden.
          </p>

          <button className="mt-6 bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-6 py-2 rounded-full shadow-lg transition">
            Explore Garden
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="md:rounded-xl rounded-b-2xl text-center h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
          style={{ backgroundImage: `url(${sliderImg2})` }}
        >
          <Fade delay={200} duration={1000}>
            <h3 className="text-2xl drop-shadow-black sm:text-3xl md:text-5xl lg:text-7xl font-bold text-red-200 drop-shadow-2xl">
              Let Your Garden Tell a Story
            </h3>
          </Fade>
          <p className="mt-4 text-sm sm:text-base md:text-xl text-white drop-shadow-2xl max-w-xl">
            From blooms to tools — everything for a thriving, soulful space.
          </p>
          <button className="mt-6 bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-6 py-2 rounded-full shadow-lg transition">
            Explore Garden
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          className="md:rounded-xl rounded-b-2xl text-center h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4"
          style={{ backgroundImage: `url(${sliderImg3})` }}
        >
          <Fade delay={200} duration={1000}>
            <h3 className="text-2xl drop-shadow-black sm:text-3xl md:text-5xl lg:text-7xl font-bold text-purple-300 drop-shadow-2xl">
              Breathe in the Calm of Greenery
            </h3>
          </Fade>
          <p className="mt-4 text-sm sm:text-base md:text-xl text-white drop-shadow-2xl max-w-xl">
            A curated collection of garden plants for every corner of your life.
          </p>
          <button className="mt-6 bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-6 py-2 rounded-full shadow-lg transition">
            Explore Garden
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SimpleSlider;
