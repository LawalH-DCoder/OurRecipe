import Categories from "../component/Categories";
import LatestDiscovery from "../component/LatestDiscovery";
import RecipeOfMoment from "../component/RecipeOfMoment";
import HeroSection from "../component/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <RecipeOfMoment />
      <LatestDiscovery />
    </>
  );
}

export default Home;
