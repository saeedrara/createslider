import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import { FreeMode } from "swiper";
import ProductCard from "./components/ProductCard";
//import images

import img1 from "./img/img 1.jpg";
import img2 from "./img/img 2.jpg";
import img3 from "./img/img 3.jpg";
import img4 from "./img/img 4.jpg";
import img5 from "./img/img 5.jpg";
import img6 from "./img/img 6.jpg";

const ProductSlider = () => {
  return (
    <div className="container py-4 px-4 justify-content-center bg-dark">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }}
      >
        <SwiperSlide>
          <ProductCard
            data={{ imgSrc: img1, price: "$10", title: "goodthings" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            data={{ imgSrc: img2, price: "$10", title: "goodthings" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            data={{ imgSrc: img3, price: "$10", title: "goodthings" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            data={{ imgSrc: img4, price: "$10", title: "goodthings" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            data={{ imgSrc: img5, price: "$10", title: "goodthings" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            data={{ imgSrc: img6, price: "$10", title: "goodthings" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
