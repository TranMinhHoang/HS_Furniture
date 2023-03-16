import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HeaderMain.module.scss';
import { Link } from 'react-router-dom';
import images from 'assets/images';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Button from '../../../../components/Button';

const cx = classNames.bind(styles);

function HeaderMain() {
  return (
    <div className={cx('header-main')}>
      <div className={cx('grid wide')}>
        <div className="row no-gutters p-l-r-20 align-items-center">
          <div className={cx('header-main-logo', 'c-3')}>
            <Link to="/">
              <img src={images.logo} alt="" />
            </Link>
          </div>
          <div className={cx('header-main-search', 'c-4')}>
            <form action="/search" method="get" className={cx('form-search')}>
              <input type="text" className={cx('form-search-input')} placeholder="Nhập từ khóa cần tìm..." />
              <button type="submit" className={cx('form-search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('form-search-icon')} />
              </button>
            </form>
          </div>
          <div className={cx('header-main-control', 'c-5')}>
            <div className={cx('control-user', 'control-box', 'c-6')}>
              <div className={cx('control-left', 'c-3')}>
                <FontAwesomeIcon icon={faUser} className={cx('form-control-icon')} />
              </div>
              <div className={cx('control-right', 'c-9', 'control-right-user')}>
                <p className={cx('control-title')}>Tài khoản</p>
                <div className={cx('control-content')}>
                  <Link to="/signin" className={cx('control-text')}>
                    Đăng nhập
                  </Link>
                  <span className={cx('control-text-span')}>*</span>
                  <Link to="/signup" className={cx('control-text')}>
                    Đăng ký
                  </Link>
                </div>
              </div>
              {/* signed */}
              {/* <div className={cx('control-right', 'c-9', 'control-right-user')}>
              <p className={cx('control-title')}>Trần Minh Hoàng</p>
              <div className={cx('control-content')}>
                <Link to="/profile" className={cx('control-text')}>
                  Thông tin
                </Link>
                <span className={cx('control-text-span')}>*</span>
                <Link to="/" className={cx('control-text')}>
                  Đăng xuất
                </Link>
              </div>
            </div> */}
            </div>

            <Tippy
              delay={[0, 400]}
              interactive={true}
              placement="bottom-end"
              render={(attrs) => (
                <div className={cx('header-cart')} tabIndex="-1" {...attrs}>
                  {/* no cart */}
                  {/* <div className={cx('header-no-cart')}>
                    <img src={images.noCart} alt="" className={cx('header-no-cart-img')} />
                    <span className={cx('header-no-cart-msg')}>Chưa có sản phẩm</span>
                  </div> */}
                  <div className={cx('header-cart-list')}>
                    <p className={cx('header-cart-heading')}>Sản phẩm đã thêm</p>
                    <ul className={cx('header-cart-list-item')}>
                      <li className={cx('header-cart-item')}>
                        <img
                          src="https://cf.shopee.vn/file/3d628516f69086550e353463e9110225"
                          alt=""
                          className={cx('header-cart-img')}
                        />
                        <div className={cx('header-cart-item-info')}>
                          <span className={cx('header-cart-item-name', 'c-8')}>
                            Vợt cầu lông Fuwin thi đấu chuyên nghiệp tặng kèm túi thể thao
                          </span>
                          <div className={cx('header-cart-item-price-wrap', 'c-4')}>
                            <span className={cx('header-cart-item-price')}>1.199.000đ</span>
                          </div>
                        </div>
                      </li>
                      <li className={cx('header-cart-item')}>
                        <img
                          src="https://cf.shopee.vn/file/3d628516f69086550e353463e9110225"
                          alt=""
                          className={cx('header-cart-img')}
                        />
                        <div className={cx('header-cart-item-info')}>
                          <span className={cx('header-cart-item-name', 'c-8')}>
                            Vợt cầu lông Fuwin thi đấu chuyên nghiệp tặng kèm túi thể thao
                          </span>
                          <div className={cx('header-cart-item-price-wrap', 'c-4')}>
                            <span className={cx('header-cart-item-price')}>1.199.000đ</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className={cx('header-cart-foot')}>
                      <Link to="/cart" className={cx('header-view-cart')}>
                        <Button primary className={cx('header-view-cart-btn')}>
                          Xem giỏ hàng
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            >
              <div className={cx('control-cart', 'control-box', 'c-5')}>
                <div className={cx('control-left', 'c-3')}>
                  <FontAwesomeIcon icon={faCartShopping} className={cx('form-control-icon')} />
                </div>
                <Link to="/cart" className={cx('control-cart-link', 'control-right', 'c-9')}>
                  <p className={cx('control-title')}>Giỏ hàng</p>
                  <div className={cx('control-content')}>
                    <span className={cx('count-cart')}>0</span>
                    <span>Sản phẩm</span>
                  </div>
                </Link>
              </div>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={cx('control-cart', 'control-box', 'c-5')}>
<div className={cx('control-left', 'c-3')}>
  <FontAwesomeIcon icon={faCartShopping} className={cx('form-control-icon')} />
</div>
<Link to="/cart" className={cx('control-cart-link', 'control-right', 'c-9')}>
  <p className={cx('control-title')}>Giỏ hàng</p>
  <div className={cx('control-content')}>
    <span className={cx('count-cart')}>0</span>
    <span>Sản phẩm</span>
  </div>
</Link>

<div className={cx('header-cart')}>
  <div className={cx('header-no-cart')}>
    <img src={images.noCart} alt="" className={cx('header-no-cart-img')} />
    <span className={cx('header-no-cart-msg')}>Chưa có sản phẩm</span>
  </div>
  {/* <h4 className={cx("header-cart-heading")}>Sản phẩm đã thêm</h4>
                      <ul className={cx("header-cart-list-item")}>
                          <li className={cx("header-cart-item")}>
                              <img src="https://cf.shopee.vn/file/3d628516f69086550e353463e9110225" alt="" className={cx("header-cart-img")}/>
                              <div className={cx("header-cart-item-info")}>
                                  <div className={cx("header-cart-item-head")}>
                                      <span className={cx("header-cart-item-name")}>Vợt cầu lông Fuwin thi đấu chuyên nghiệp tặng kèm túi thể thao</span>
                                      <div className={cx("header-cart-item-price-wrap")}>
                                          <span className={cx("header-cart-item-price")}>1.199.000đ</span>
                                          <span className={cx("header-cart-item-multify")}>x</span>
                                          <span className={cx("header-cart-item-quantity")}>2</span>
                                      </div>
                                  </div>
                                  <div className={cx("header-cart-item-body")}>
                                      <span className={cx("header-cart-item-description")}>Phân loại: Trắng</span>
                                      <span className={cx("header-cart-item-remove")}>Xóa</span>
                                  </div>
                              </div>
                          </li>
                          <li className={cx("header-cart-item")}>
                              <img src="https://cdn.chanhtuoi.com/uploads/2020/01/kem-tri-mun-tot-nhat-4-1579518651.jpg.webp" alt="" className={cx("header-cart-img")}/>
                              <div className={cx("header-cart-item-info")}>
                                  <div className={cx("header-cart-item-head")}>
                                      <h5 className={cx("header-cart-item-name")}>Kem trị mụn Decumar</h5>
                                      <div className={cx("header-cart-item-price-wrap")}>
                                          <span className={cx("header-cart-item-price")}>379.000đ</span>
                                          <span className={cx("header-cart-item-multify")}>x</span>
                                          <span className={cx("header-cart-item-quantity")}>1</span>
                                      </div>
                                  </div>
                                  <div className={cx("header-cart-item-body")}>
                                      <span className={cx("header-cart-item-description")}>Phân loại: 325ml</span>
                                      <span className={cx("header-cart-item-remove")}>Xóa</span>
                                  </div>
                              </div>
                          </li>
                          <li className={cx("header-cart-item")}>
                              <img src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2022/06/00001814-cetaphil-gentle-skin-cleanse-500ml-8021-62ae_large.JPG" alt="" className={cx("header-cart-img")}/>
                              <div className={cx("header-cart-item-info")}>
                                  <div className={cx("header-cart-item-head")}>
                                      <h5 className={cx("header-cart-item-name")}>Sữa rửa mặt Cetaphil</h5>
                                      <div className={cx("header-cart-item-price-wrap")}>
                                          <span className={cx("header-cart-item-price")}>521.000đ</span>
                                          <span className={cx("header-cart-item-multify")}>x</span>
                                          <span className={cx("header-cart-item-quantity")}>1</span>
                                      </div>
                                  </div>
                                  <div className={cx("header-cart-item-body")}>
                                      <span className={cx("header-cart-item-description")}>Phân loại: 500ml</span>
                                      <span className={cx("header-cart-item-remove")}>Xóa</span>
                                  </div>
                              </div>
                          </li>
                      </ul> 
  <a href="#" className={cx('header-cart-view-cart btn btn--primary')}>
    Xem giỏ hàng
  </a>*/
}
// </div>
// </div> */}

export default HeaderMain;
