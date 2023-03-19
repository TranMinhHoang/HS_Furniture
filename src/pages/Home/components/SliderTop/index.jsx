import images from '../../../../assets/images';
import classNames from 'classnames/bind';
import styles from './SliderTop.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'styles/pagination.min.css';
import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/core';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Autoplay, Keyboard, Pagination, Navigation]);

const cx = classNames.bind(styles);

function SliderTop() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={cx('slider-top')}>
      <div className={cx('container')}>
        <Swiper
          className={cx('slider-wrapper')}
          slidesPerView={1}
          loop={true}
          spaceBetween={3}
          autoHeight={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {images.sliderTop.map((img, index) => (
            <SwiperSlide key={index} className={cx('slider-content')}>
              <img src={img} alt={`banner ${index + 1}`} className={cx('slider-img')} />
            </SwiperSlide>
          ))}
          <div ref={prevRef} className={cx('nav-icon', 'prev-icon')}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </div>
          <div ref={nextRef} className={cx('nav-icon', 'next-icon')}>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default SliderTop;
