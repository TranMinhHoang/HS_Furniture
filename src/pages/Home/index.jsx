import SliderTop from './components/SliderTop';
import Privacy from './components/Privacy';
import CategoryTop from './components/CategoryTop';
import ProductType from './components/ProductType';
import images from '../../assets/images';
import Banner from './components/Banner';
import CategoryBottom from './components/CategoryBottom';
import ProductTabShow from './components/CategoryProduct';
import Feedback from './components/Feedback';

function Home() {
  return (
    <div className="section-home">
      <SliderTop />
      <Privacy />
      <CategoryTop />
      <ProductType title="Sản phẩm mới" type="new" />
      <div className="banner-intro-top py-[30px]">
        <div className="grid wide">
          <div className="row no-gutters px-[20px]">
            <Banner image={images.banner.bannerPromotion} />
          </div>
        </div>
      </div>
      <ProductType title="Sản phẩm được ưa thích" type="best seller" />
      <div className="banner-intro-top py-[30px]">
        <div className="grid wide">
          <div className="row no-gutters px-[20px]">
            <Banner image={images.banner.bannerBottom} />
          </div>
        </div>
      </div>
      <CategoryBottom />
      <ProductTabShow title="Sản phẩm đáng chú ý" isNavProduct firstType="outStanding" />
      <div className="banner-intro-top py-[30px]">
        <div className="grid wide">
          <div className="row no-gutters ">
            <div className="c-6 px-[20px]">
              <Banner image={images.banner.bannerWorkRoom1} />
            </div>
            <div className="c-6 px-[20px]">
              <Banner image={images.banner.bannerWorkRoom2} />
            </div>
          </div>
        </div>
      </div>
      <ProductTabShow title="Danh mục nổi bật" isNavCategory firstType="Phòng khách , Tủ, kệ ti vi , Ghế ngồi" />
      <Feedback />
    </div>
  );
}

export default Home;
