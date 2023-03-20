import classNames from 'classnames/bind';
import ListProduct from 'components/ListProduct';
import styles from './ProductType.module.scss';

const cx = classNames.bind(styles);

function ProductType({ title, type }) {
  return (
    <div className="py-[30px]">
      <div className="grid wide">
        <div className={cx('row', 'no-gutters', 'px-[20px]')}>
          <div className={cx('header-container', 'c-12')}>
            <a href="" className={cx('heading')}>
              {title}
            </a>
          </div>
          <div className={cx('body', 'c-12')}>
            <ListProduct type={type} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductType;
