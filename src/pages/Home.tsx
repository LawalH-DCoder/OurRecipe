import Categories from "../component/Categories";
import LatestDiscovery from "../component/LatestDiscovery";
import RecipeOfMoment from "../component/RecipeOfMoment";

function Home() {
  return (
    <>
      <div className="text-[66px] tracking-[-2.5px] font-bold">
        The recipe app for every home chef!
      </div>
      <Categories />
      <RecipeOfMoment />
      <LatestDiscovery />
    </>
  );
}

export default Home;
