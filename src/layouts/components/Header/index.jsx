import {
  faCartShopping,
  faHeadphones,
  faHouseChimney,
  faMagnifyingGlass,
  faTruck,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from 'assets/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('header')}>
      <div className={cx('header-top')}>
        <div className="grid wide">
          <div className="p-l-r-20 row no-gutters">
            <div className={cx('header-top-left', 'c-8')}>
              <div className={cx('header-top-address')}>
                <FontAwesomeIcon className={cx('header-top-icon')} icon={faHouseChimney} />
                <span>Số 23 ngõ 638 Ngô Gia Tự, Đức Giang, Long Biên, Hà Nội</span>
              </div>
              <div className={cx('header-top-hotline')}>
                <FontAwesomeIcon className={cx('header-top-icon')} icon={faHeadphones} />
                <span>0397225122</span>
              </div>
            </div>
            <div className={cx('header-top-right', 'c-4')}>
              <span>Miễn phí vận chuyển với đơn hàng trên 500.000đ</span>
              <FontAwesomeIcon className={cx('header-top-icon')} icon={faTruck} />
            </div>
          </div>
        </div>
      </div>
      <div className={cx('header-main')}>
        <div className={cx('grid wide')}>
          <div className="row no-gutters p-l-r-20 align-items-center">
            <div className={cx('header-main-logo', 'c-3')}>
              <Link to="/">
                <img src={images.logo} alt="" />
              </Link>
            </div>
            <div className={cx('header-main-search', 'c-4')}>
              <form action="/search" method="get" className={cx('form-search')}>
                <input type="text" className={cx('form-search-input')} placeholder="Nhập từ khóa cần tìm..." />
                <button type="submit" className={cx('form-search-btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('form-search-icon')} />
                </button>
              </form>
            </div>
            <div className={cx('header-main-control', 'c-5')}>
              <div className={cx('control-user', 'control-box', 'c-6')}>
                <div className={cx('control-left', 'c-3')}>
                  <FontAwesomeIcon icon={faUser} className={cx('form-control-icon')} />
                </div>
                <div className={cx('control-right', 'c-9')}>
                  <p className={cx('control-title')}>Tài khoản</p>
                  <div className={cx('control-content')}>
                    <Link to="/signin" className={cx('control-sign')}>
                      Đăng nhập
                    </Link>
                    <span>*</span>
                    <Link to="/signup" className={cx('control-sign')}>
                      Đăng ký
                    </Link>
                  </div>
                </div>
              </div>
              <div className={cx('control-cart', 'control-box', 'c-5')}>
                <div className={cx('control-left', 'c-3')}>
                  <FontAwesomeIcon icon={faCartShopping} className={cx('form-control-icon')} />
                </div>
                <Link to="/cart" className={cx('control-cart-link', 'control-right', 'c-9')}>
                  <p className={cx('control-title')}>Giỏ hàng</p>
                  <div className={cx('control-content')}>
                    <span className={cx('count-cart')}>0</span>
                    <span>Sản phẩm</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('header-nav')}></div>
    </div>
  );
}

export default Header;
