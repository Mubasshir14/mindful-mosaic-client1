import AllBlogs from "./AllBlogs";
import Banner from "./Banner";
import GetTouch from "./GetTouch";
import Latest from "./Latest";
import Most from "./Most";
import ProfileCard from "./ProfileCard";



const Home = () => {
    return (
        <div>
            <Banner />
            <Latest/>
            <AllBlogs />
            <Most/>
            <GetTouch />
            <ProfileCard/>
        </div>
    );
};

export default Home;