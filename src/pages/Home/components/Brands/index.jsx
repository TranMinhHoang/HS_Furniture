import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Navigation]);

const listBrand = [
  {
    name: 'Light Chair',
    img: 'https://img.cdn.vncdn.io/cdn-pos/ced45f-64461/brand/20191225_OrrsVseaQJwm0IlDiyLCcNvc.png',
  },
  {
    name: "LARNER'S",
    img: 'https://img.cdn.vncdn.io/cdn-pos/ced45f-64461/brand/20191225_HmFcHKACS9xQGgoa3CvzMtlz.png',
  },
  {
    name: 'Avatar Home',
    img: 'https://img.cdn.vncdn.io/cdn-pos/ced45f-64461/brand/20191225_xrRVo14IAqMkL50vQ7ha2ctC.png',
  },
  {
    name: 'City Furniture',
    img: 'https://img.cdn.vncdn.io/cdn-pos/ced45f-64461/brand/20191225_GnFuW7jce5USs6zRw7RBuqOL.png',
  },
  {
    name: 'Wages Furniture',
    img: 'https://img.cdn.vncdn.io/cdn-pos/ced45f-64461/brand/20191225_z9kNYVPaFHwAz0ndx7XwVFQH.png',
  },
  {
    name: 'MAGNUSSEN',
    img: 'https://img.cdn.vncdn.io/cdn-pos/ced45f-64461/brand/20191225_8A5bBs57f2IQ62c5BF5lyO45.png',
  },
];

function Brands() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="py-[30px] bg-[#fafafa] border-t border-[#ebebeb] border-solid">
      <div className="grid wide">
        <div className="px-[20px]">
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="mySwiper cursor-grab mt-[20px] h-[90px]"
          >
            {listBrand.map((item, index) => (
              <SwiperSlide key={index} className="px-[20px] flex items-center justify-center h-full">
                <img src={item.img} alt="" className="h-full w-full object-contain" />
              </SwiperSlide>
            ))}
            <div ref={prevRef} className="nav-icon-slider prev-icon-slider">
              <FontAwesomeIcon icon={faCaretLeft} />
            </div>
            <div ref={nextRef} className="nav-icon-slider next-icon-slider">
              <FontAwesomeIcon icon={faCaretRight} />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Brands;
