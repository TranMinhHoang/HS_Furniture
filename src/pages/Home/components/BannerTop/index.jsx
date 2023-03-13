import images from '../../../../assets/images';
import classNames from 'classnames/bind';
import styles from './SliderTop.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'styles/pagination.min.css';
import 'styles/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Keyboard, Pagination, Navigation]);

const cx = classNames.bind(styles);

function SliderTop() {
  return (
    <div className={cx('slider-top')}>
      <div className={cx('slider-wrapper')}>
        <Swiper
          slidesPerView={1}
          direction={'horizontal'}
          loop={true}
          spaceBetween={3}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
        >
          {images.sliderTop.map((img, index) => (
            // <div key={index} className={cx('slider-item')}>
            <SwiperSlide key={index}>
              <img src={img} alt="" className="slider-item-img" />
            </SwiperSlide>
            // </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderTop;
