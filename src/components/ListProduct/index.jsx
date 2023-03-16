import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';

const cx = classNames.bind(styles);

function ListProduct() {
  return <div className={cx('list-product')}></div>;
}

export default ListProduct;
