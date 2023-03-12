import classNames from 'classnames/bind';
import styles from './ButtonPrimary.module.scss';

const cx = classNames.bind(styles);

function ButtonPrimary({ children, className }) {
  return <button className={cx('btn', className)}>{children}</button>;
}

export default ButtonPrimary;
