import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { getListProduct } from '../../apis/productAPI';

const cx = classNames.bind(styles);

function ListProduct({ type }) {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const listProductAPI = async () => {
      const listProduct = await getListProduct(type);
      setListProduct(type ? listProduct.filter((product) => product.type === type) : listProduct);
    };
    listProductAPI();
  }, []);
  return (
    <div className="row sm-gutter">
      {listProduct.map((product) => (
        <div key={product.id} className="col c-2">
          <a href="" className={cx('product-item')}>
            <div className={cx('product-item-img')} style={{ backgroundImage: `url(${product?.images?.[0]})` }}></div>
            <div className={cx('product-item-info')}>
              <p className={cx('prodcut-item-name')}>{product.name}</p>
              {product.sale.isSale ? (
                <>
                  <div className={cx('product-item-price')}>
                    <span className={cx('product-item-price-old')}>
                      {product.price.toLocaleString('de-DE')}
                      <span className={cx('product-item-price-unit')}>đ</span>
                    </span>
                    <span className={cx('product-item-price-curr')}>
                      {(product.price - product.price * product.sale.discount).toLocaleString('de-DE')}
                      <span className={cx('product-item-price-unit')}>đ</span>
                    </span>
                  </div>
                  <div className={cx('product-item-sale')}>
                    <span className={cx('sale-percent')}>{product.sale.discount * 100}%</span>
                    <span className={cx('sale-label')}>GIẢM</span>
                  </div>
                </>
              ) : (
                <div className={cx('product-item-price')}>
                  <span className={cx('product-item-price-curr')}>
                    {product.price.toLocaleString('de-DE')}
                    <span className={cx('product-item-price-unit')}>đ</span>
                  </span>
                </div>
              )}
              <div className={cx('product-item-btn')}>
                <Button primary hover>
                  Đặt hàng
                </Button>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ListProduct;
