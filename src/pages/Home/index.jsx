import SliderTop from './components/SliderTop';
import Privacy from './components/Privacy';
import CategoryTop from './components/CategoryTop';
import ProductType from './components/ProductType';
import images from '../../assets/images';
import Banner from './components/Banner';
import CategoryBottom from './components/CategoryBottom';

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
    </div>
  );
}

export default Home;
