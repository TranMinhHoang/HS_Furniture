import {
  faCartShopping,
  faHeadphones,
  faHouseChimney,
  faMagnifyingGlass,
  faTruck,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import images from 'assets/images';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from 'assets/images';

const cx = classNames.bind(styles);

function Header() {
  // console.log(images);
  return (
    <div className={cx('header')}>
      <div className={cx('header-top')}>
        <div className="grid wide">
          <div className={'row no-gutters ' + cx('p-l-r-20')}>
            <div className={cx('header-top-left') + ' c-8'}>
              <div className={cx('header-top-address')}>
                <FontAwesomeIcon className={cx('header-top-icon')} icon={faHouseChimney} />
                <span>Số 23 ngõ 638 Ngô Gia Tự, Đức Giang, Long Biên, Hà Nội</span>
              </div>
              <div className={cx('header-top-hotline')}>
                <FontAwesomeIcon className={cx('header-top-icon')} icon={faHeadphones} />
                <span>0397225122</span>
              </div>
            </div>
            <div className={cx('header-top-right') + ' c-4'}>
              <span>Miễn phí vận chuyển với đơn hàng trên 500.000đ</span>
              <FontAwesomeIcon className={cx('header-top-icon')} icon={faTruck} />
            </div>
          </div>
        </div>
      </div>
      <div className={cx('header-main')}>
        <div className={cx('grid wide')}>
          <div className={'row no-gutters ' + cx('p-l-r-20')}>
            <div className={cx('header-main-logo')}>
              <Link to="/">
                <img src={images.logo} alt="" />
              </Link>
            </div>
            <div className={cx('header-main-search')}>
              <form action="/search" method="get" className={cx('form-search')}>
                <input type="text" className={cx('form-search-input')} />
                <button type="submit" className={cx('form - search - btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
            <div className={cx('header-main-control')}>
              <div className={cx('control-user')}>
                <div className={cx('control-left')}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={cx('control-right')}>
                  <div className={cx('control-title')}>Tài khoản</div>
                  <div className={cx('control-content')}>
                    <Link to="/signin">Đăng nhập</Link>
                    <span>*</span>
                    <Link to="/signup">Đăng ký</Link>
                  </div>
                </div>
              </div>
              <div className={cx('control-cart')}>
                <div className={cx('control-left')}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <Link to="/cart">
                  <div className={cx('control-right')}>
                    <div className={cx('control-title')}>Giỏ hàng</div>
                    <div className={cx('control-content')}>
                      <p className={cx('count-cart')}>0</p>
                      <span>sản phẩm</span>
                    </div>
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
