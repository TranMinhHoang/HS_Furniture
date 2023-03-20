import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './ProductTabShow.module.scss';
import ListProductSlider from '../../../../components/ListProduct/ListProductSilder';

const cx = classNames.bind(styles);

const navProduct = [
  { name: 'Sản phẩm nổi bật', type: 'outStanding' },
  { name: 'Sản phẩm mới', type: 'new' },
  { name: 'Sản phẩm được ưa thích', type: 'best seller' },
];

const navCategory = [
  { name: 'Phòng khách', type: 'Phòng khách , Tủ, kệ ti vi , Ghế ngồi' },
  { name: 'Phòng ăn', type: 'Phòng ăn' },
  { name: 'Phòng ngủ', type: 'Phòng ngủ' },
  { name: 'Phòng làm việc', type: 'Phòng làm việc' },
];

function ProductTabShow({ title, isNavProduct = false, isNavCategory = false, firstType }) {
  const [isActive, setIsActive] = useState(0);
  const [type, setType] = useState(firstType);

  const handleActive = (index, type) => {
    setIsActive(index);
    setType(type);
  };

  return (
    <div className="py-[30px]">
      <div className="grid wide">
        <div className={cx('row', 'no-gutters', 'px-[20px]')}>
          <div className={cx('header-container', 'c-12')}>
            <p className={cx('heading')}>{title}</p>
            <ul className="flex">
              {isNavProduct &&
                navProduct.map((item, index) => (
                  <li
                    key={index}
                    className={cx('nav-item', isActive === index && 'nav-item-active')}
                    onClick={() => {
                      handleActive(index, item.type);
                    }}
                  >
                    <span>{item.name}</span>
                  </li>
                ))}
              {isNavCategory &&
                navCategory.map((item, index) => (
                  <li
                    key={index}
                    className={cx('nav-item', isActive === index && 'nav-item-active')}
                    onClick={() => {
                      handleActive(index, item.type);
                    }}
                  >
                    <span>{item.name}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className={cx('body', 'c-12')}>
            <ListProductSlider type={type} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTabShow;
