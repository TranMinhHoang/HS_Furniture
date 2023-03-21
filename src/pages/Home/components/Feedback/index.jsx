import images from '../../../../assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'styles/pagination.min.css';
import { Pagination } from 'swiper';

const listFeedback = [
  {
    id: 0,
    infoCustomer: 'Kirsty Hartley - Chorley, United Kingdom',
    content: 'Mọi thứ thật tuyệt vời. Ở đây tôi có thể tìm thấy mọi thứ mình mong muốn.',
    avatar: 'http://t0444.store.nhanh.vn/tp/T0444/img/banner_index_feedback_1.jpg',
  },
  {
    id: 1,
    infoCustomer: 'Craig Walsh - Portland, Oregon',
    content: 'Dịch vụ tuyệt vời, sản phẩm tuyệt vời, lại còn free ship nữa chứ !',
    avatar: 'http://t0444.store.nhanh.vn/tp/T0444/img/banner_index_feedback_2.jpg',
  },
  {
    id: 2,
    infoCustomer: 'Lynn Gordon - London, England',
    content: 'Tôi rất yêu thích phong cách và chất lượng các sản phẩm được bán tại đây.',
    avatar: 'http://t0444.store.nhanh.vn/tp/T0444/img/banner_index_feedback_3.jpg',
  },
];

function Feedback() {
  return (
    <div className="py-[30px]">
      <div
        className="relative max-w-full bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${images.banner.bannerFeedback})` }}
      >
        <div className="overlay"></div>
        <div className="grid wide">
          <div className="px-[20px]">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper px-[30px]"
            >
              {listFeedback.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="pt-[120px] pb-[80px] flex flex-col items-center">
                    <img
                      src={item.avatar}
                      alt=""
                      className="w-[100px] h-[100px] rounded-full border-white border-4 border-solid "
                    />
                    <span className="text-white text-[2.3rem] font-normal pt-[40px]">{item.content}</span>
                    <span className="text-white text-[1.8rem] font-normal pb-[150px]">{item.infoCustomer}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
