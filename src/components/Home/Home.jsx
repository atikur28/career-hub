import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import "../Header/Header.css"

const Home = () => {
    return (
        <div>
            <div className="bg-color">
              <Banner></Banner>
            </div>
            <div className="container mx-auto">
              <CategoryList></CategoryList>
              <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;