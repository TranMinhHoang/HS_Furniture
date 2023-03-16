import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, className, primary = false, hover = false }) {
  return (
    <button className={cx('btn', className, primary && 'primary', hover && 'hover')}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
