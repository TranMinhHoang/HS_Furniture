import { faHeadphones, faHouseChimney, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import HeaderMain from './HeaderMain';
import HeaderNav from './HeaderNav';

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
      <HeaderMain />
      <HeaderNav />
    </div>
  );
}

export default Header;
