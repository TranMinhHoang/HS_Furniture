import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({ image }) {
  return (
    <Link to="/" className={cx('banner')}>
      <img src={image} alt="" className="w-full" />
      <div className={cx('effect-line')}></div>
    </Link>
  );
}

export default Banner;
