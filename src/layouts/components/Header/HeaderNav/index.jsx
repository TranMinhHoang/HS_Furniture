import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderNav.module.scss';
import navigations from './navigations';

const cx = classNames.bind(styles);

function HeaderNav() {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className={cx('header-nav')}>
      <div className={cx('grid wide')}>
        <nav>
          <ul className={cx('nav-list')}>
            {navigations.map((item, index) => (
              <li key={index} className={cx('nav-item', activeLink === item.path && 'nav-item-active')}>
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
