import SliderTop from './components/SliderTop';
import Privacy from './components/Privacy';
import CategoryTop from './components/CategoryTop';
import images from '../../assets/images';
import CategoryBottom from './components/CategoryBottom';
import ProductTabShow from './components/CategoryProduct';
import Feedback from './components/Feedback';
import IntroType from './components/IntroType';
import ListProduct from '../../components/ListProduct';
import Banner from '../../components/Banner';
import IntroNews from './components/IntroNews';
import Brands from './components/Brands';

function Home() {
  return (
    <div className="section-home">
      <SliderTop />
      <Privacy />
      <CategoryTop />
      <IntroType title="Sản phẩm mới">
        <ListProduct type="new" />
      </IntroType>
      <div className="banner-intro-top py-[30px]">
        <div className="grid wide">
          <div className="row no-gutters px-[20px]">
            <Banner image={images.banner.bannerPromotion} effectLine />
          </div>
        </div>
      </div>
      <IntroType title="Sản phẩm được ưa thích">
        <ListProduct type="best seller" />
      </IntroType>
      <div className="banner-intro-top py-[30px]">
        <div className="grid wide">
          <div className="row no-gutters px-[20px]">
            <Banner image={images.banner.bannerBottom} effectLine />
          </div>
        </div>
      </div>
      <CategoryBottom />
      <ProductTabShow title="Sản phẩm đáng chú ý" isNavProduct firstType="outstanding" />
      <div className="banner-intro-top py-[30px]">
        <div className="grid wide">
          <div className="row no-gutters ">
            <div className="c-6 px-[20px]">
              <Banner image={images.banner.bannerWorkRoom1} effectLine to="/workroom" />
            </div>
            <div className="c-6 px-[20px]">
              <Banner image={images.banner.bannerWorkRoom2} effectLine to="/workroom" />
            </div>
          </div>
        </div>
      </div>
      <ProductTabShow title="Danh mục nổi bật" isNavCategory firstType="Phòng khách , Tủ, kệ ti vi , Ghế ngồi" />
      <Feedback />
      <IntroType title="Tin tức">
        <IntroNews />
      </IntroType>
      <Brands />
    </div>
  );
}

export default Home;
