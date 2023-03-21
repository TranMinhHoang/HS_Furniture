import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({ image, effectLine, to }) {
  let Comp = 'div';

  if (to) {
    Comp = Link;
  }

  return (
    <Comp to={to} className={cx('banner')}>
      <img src={image} alt="" className="w-full" />
      {effectLine && <div className={cx('effect-line')}></div>}
    </Comp>
  );
}

export default Banner;
