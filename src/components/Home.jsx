import AllBlogs from "./AllBlogs";
import Banner from "./Banner";
import GetTouch from "./GetTouch";
import ProfileCard from "./ProfileCard";



const Home = () => {
    return (
        <div>
            <Banner />
            <AllBlogs />
            <GetTouch />
            <ProfileCard/>
        </div>
    );
};

export default Home;