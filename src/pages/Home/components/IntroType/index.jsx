import classNames from 'classnames/bind';
import styles from './IntroType.module.scss';

const cx = classNames.bind(styles);

function IntroType({ children, title }) {
  return (
    <div className="py-[30px]">
      <div className="grid wide">
        <div className={cx('row', 'no-gutters', 'px-[20px]')}>
          <div className={cx('header-container', 'c-12')}>
            <a href="" className={cx('heading')}>
              {title}
            </a>
          </div>
          <div className={cx('body', 'c-12')}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default IntroType;
