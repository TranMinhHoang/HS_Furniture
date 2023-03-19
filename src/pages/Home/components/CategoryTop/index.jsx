import classNames from 'classnames/bind';
import styles from './CategoryTop.module.scss';
import images from '../../../../assets/images';
import Button from '../../../../components/Button';

const cx = classNames.bind(styles);

const listCategory = [
  {
    label: 'Hàng mới về',
    img: images.categoryTop.newProduct,
  },
  {
    label: 'Khuyến mãi hot',
    img: images.categoryTop.promotion,
  },
  {
    label: 'Bán chạy nhất',
    img: images.categoryTop.bestSeller,
  },
];

function CategoryTop() {
  return (
    <div className={cx('banner-category-top', 'p-t-b-30')}>
      <div className="grid wide">
        <div className="row no-gutters">
          {listCategory.map((item, index) => (
            <div key={index} className="c-4 p-l-r-20">
              <div className={cx('banner-block')}>
                <img src={item.img} alt="" className={cx('banner-img')} />
                <p className={cx('label')}>{item.label}</p>
                <Button hover className={cx('btn')}>
                  Xem ngay
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryTop;
