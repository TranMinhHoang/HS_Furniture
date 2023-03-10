import Header from '../components/Header';
import Sidebar from './SideBar';
import styles from '../Layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderSidebar({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default HeaderSidebar;
