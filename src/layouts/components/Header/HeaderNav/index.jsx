import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './HeaderNav.module.scss';
import navigations from './navigations';

const cx = classNames.bind(styles);

function HeaderNav() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  console.log(location);
  // useEffect(() => {
  //   setActiveLink(location.pathname);
  // }, [location.pathname]);

  return (
    <div className={cx('header-nav')}>
      <div className={cx('grid wide')}>
        <nav className="p-l-r-20">
          <ul className={cx('nav-list')}>
            {navigations.map((item, index) => (
              <li
                key={index}
                className={cx(
                  'nav-item',
                  (location.pathname === item.path ||
                    item.children?.some((child) => location.pathname === child.path)) &&
                    'nav-item-active',
                )}
              >
                <Link to={item.path} className={cx('nav-item-link')}>
                  {item.name}
                </Link>
                {item.children && (
                  <>
                    <FontAwesomeIcon icon={faCaretRight} className={cx('nav-item-icon')} />
                    <ul className={cx('nav-child-list')}>
                      {item.children.map((childItem, childIndex) => (
                        <li key={childIndex} className={cx('nav-child-item')}>
                          <Link to={childItem.path} className={cx('nav-child-item-link')}>
                            {childItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNav;
