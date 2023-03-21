import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import styles from './IntroNews.module.scss';

const cx = classNames.bind(styles);

const listNews = [
  {
    id: 0,
    date: '21 / 03',
    year: 2023,
    title: '15 Xu Hướng Thiết Kế Nội Thất Mới Nhất',
    content:
      'Bạn đã sẵn sàng để đón nhận những thứ sẽ trở thành xu hướng thiết kế nội thất trong năm sau và nhiều nhiều năm sau nữa?Một năm mới lại tới với những sự khởi đầu mới, tại sao không bắt đầu từ ngay trong chính căn nhà của bạn? Khi nhắc đến những chất liệu và thiết kế là xu hướng của các năm trước, chắc chắn những chuyên gia, stylish không chỉ về nội thất mà còn là designer, kiến trúc sư, decorator là những người hiểu rõ hơn ai hết.',
    img: 'https://img.cdn.vncdn.io/cdn-pos/ced45f-64461/art/20191221_fiEaWWCws6ifFshGA0GGuNOh.jpg',
  },
  {
    id: 1,
    date: '22 / 03',
    year: 2023,
    title: 'Giải pháp thiết kế nội thất nhà ống hiện đại',
    content:
      'Nhà ống là hình thể của loại hình nhà phố phổ biến hiện nay, đặc điểm chung của nhà ống là không gian nhà chật hẹp, thiếu ánh sáng, không khí tự nhiên. Tuy nhiên, với cách thiết kế nội thất hài hòa về kiến trúc và môi trường xung quanh hợp lý trong cách bố trí, sắp xếp nội thất sẽ giúp căn nhà của bạn trở nên sang trọng, hiện đại.',
    img: 'https://img.cdn.vncdn.io/cdn-pos/ced45f-64461/art/20191221_9YyoIFbwQYpkQ3aGQXi3mQjk.jpg',
  },
  {
    id: 2,
    date: '22 / 03',
    year: 2023,
    title: 'Trang trí không gian nội thất đẹp với chất liệu gỗ cao cấp',
    content:
      'Gỗ là chất liệu quen thuộc và gần gũi với cuộc sống của người Việt từ xưa đến nay. Vì thế, trang trí không gian nội thất đẹp với chất liệu gỗ tự nhiên hay công nghiệp chắc chắn sẽ là sự lựa chọn của nhiều gia đình.',
    img: 'https://img.cdn.vncdn.io/cdn-pos/ced45f-64461/art/20191221_4Wxr9zVOprA7jtzKyjUsRtUj.jpg',
  },
  {
    id: 3,
    date: '25 / 03',
    year: 2023,
    title: 'SẢN PHẨM NỘI THẤT THÔNG MINH CHẤT LƯỢNG TẠI HÀ NỘI',
    content:
      'Để có một ngôi nhà đẹp thì nội thất chính là yếu tố quyết định. Những đồ nội thất bạn sở hữu trong ngôi nhà của bạn sẽ nói lên tính cách, gu thẩm mỹ và năng lực về tài chính của bạn. Nhất là trong cuộc sống hiện nay, xu hướng ở những căn hộ chung cư cao thường là rất nhiều. Vì thế cho nên những sản phẩm về nội thất thông minh là lựa chọn tuyệt vời để tiết kiệm không gian cho ngôi nhà.',
    img: 'https://img.cdn.vncdn.io/cdn-pos/ced45f-64461/art/20191221_09O71QBNAAjf39746Md9XJDZ.jpg',
  },
];

function IntroNews() {
  return (
    <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper cursor-grab mt-[20px] ">
      {listNews.map((item) => (
        <SwiperSlide key={item.id} className={cx('slider-item')}>
          <div className="relative">
            <img src={item.img} alt="" className="h-[194px] w-full object-cover" />
            <div className={cx('date-box')}>
              <span>{item.date}</span>
              <span>{item.year}</span>
            </div>
          </div>
          <div className="p-[20px]">
            <a href="" className={cx('title')}>
              {item.title}
            </a>
            <p className={cx('content')}>{item.content}</p>
            <button className={cx('btn')}>Xem thêm</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default IntroNews;
