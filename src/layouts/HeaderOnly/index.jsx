import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../Layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default HeaderOnly;
