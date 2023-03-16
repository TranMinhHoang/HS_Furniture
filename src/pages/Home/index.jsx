import SliderTop from './components/SliderTop';
import Privacy from './components/Privacy';
import BannerCategoryTop from './components/BannerCategoryTop';
import NewProducts from './components/NewProducts';

function Home() {
  return (
    <div className="section-home">
      <SliderTop />
      <Privacy />
      <BannerCategoryTop />
      <NewProducts />
    </div>
  );
}

export default Home;
