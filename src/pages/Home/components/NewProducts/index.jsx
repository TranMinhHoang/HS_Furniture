import classNames from 'classnames/bind';
import styles from './NewProducts.module.scss';

const cx = classNames.bind(styles);

function NewProducts() {
  return (
    <div className={cx('new-products', 'p-t-b-30')}>
      <div className="grid wide">
        <div className="row no-gutters p-l-r-20">
          <div className={cx('header')}>
            <a href="" className={cx('heading')}>
              Sản phẩm mới
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
