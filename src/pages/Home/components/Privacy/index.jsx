import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Privacy.module.scss';
import images from '../../../../assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

const listPrivacy = [
  {
    label: 'Giao hàng miễn phí',
    title: 'Đơn hàng trên 500k',
    img: images.privacy.delivery,
    backgroundColor: '#2976d2',
  },
  {
    label: 'Đổi trả miễn phí',
    title: 'Trong 7 ngày đầu',
    img: images.privacy.exchange,
    backgroundColor: '#de2c2c',
  },
  {
    label: 'Tư vấn trực tuyến',
    title: 'Hỗ trợ 24/7',
    img: images.privacy.advisory,
    backgroundColor: '#27d367',
  },
  {
    label: 'Thanh toán',
    title: 'Bảo mật thanh toán',
    img: images.privacy.payment,
    backgroundColor: '#ac29d1',
  },
];

function Privacy() {
  const [isHover, setIsHover] = useState(false);

  const handleOnHover = (e) => {
    console.log(e);
    // // setIsHover(true);
    // e.target.style.borderColor =
  };

  const handleOffHover = () => {
    setIsHover(false);
  };

  return (
    <div className={cx('privacy', 'p-t-b-30')}>
      <div className="grid wide">
        <div className="row no-gutters ">
          {listPrivacy.map((item, index) => (
            <div key={index} className={cx('privacy-block', 'c-3', 'p-l-r-20')}>
              <div
                className={cx('privacy-icon')}
                style={{ backgroundColor: item.backgroundColor, '--background-color': item.backgroundColor }}
              >
                <div className={cx('privacy-border')}>
                  <img src={item.img} alt="" className={cx('privacy-img')} />
                </div>
              </div>
              <div className={cx('privacy-content')}>
                <p className={cx('privacy-label')}>{item.label}</p>
                <p className={cx('privacy-title')}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Privacy;
