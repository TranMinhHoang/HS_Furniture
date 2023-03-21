import classNames from 'classnames/bind';
import styles from './CategoryBottom.module.scss';
import images from '../../../../assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/css';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from 'config';

SwiperCore.use([Navigation]);

const cx = classNames.bind(styles);

const listCategory = [
  {
    name: 'Phòng khách',
    img: images.categoryBottom.livingRoom,
    path: config.routes.livingroom,
  },
  {
    name: 'Phòng ăn',
    img: images.categoryBottom.diningRoom,
    path: config.routes.diningroom,
  },
  {
    name: 'Phòng ngủ',
    img: images.categoryBottom.bedroom,
    path: config.routes.bedroom,
  },
  {
    name: 'Phòng làm việc',
    img: images.categoryBottom.workRoom,
    path: config.routes.workroom,
  },
  {
    name: 'Bếp',
    img: images.categoryBottom.kitchen,
    path: config.routes.kitchen,
  },
];

function CategoryBottom() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      className={cx('category-bottom', 'py-[30px]', 'my-[30px]')}
      style={{ backgroundImage: `url(${images.categoryBottom.background})` }}
    >
      <div className={cx('overlay')}></div>
      <div className="grid wide">
        <div className="px-[20px] cursor-grab">
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            direction={'horizontal'}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            className="mySwiper"
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {listCategory.map((item, index) => (
              <SwiperSlide key={index} className={cx('slide')}>
                <Link to={item.path} className={cx('link')}>
                  <img src={item.img} alt="" />
                  <div className={cx('info')}>
                    <h2 className={cx('title')}>{item.name}</h2>
                    <p className="text-white text-[1.6rem]">Tìm hiểu thêm</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            <div ref={prevRef} className={cx('nav-icon-slider', 'prev-icon-slider')}>
              <FontAwesomeIcon icon={faCaretLeft} />
            </div>
            <div ref={nextRef} className={cx('nav-icon-slider', 'next-icon-slider')}>
              <FontAwesomeIcon icon={faCaretRight} />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CategoryBottom;
