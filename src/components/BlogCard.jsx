import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./AuthProvider";

const BlogCard = ({ b }) => {
    const { author, author_image, image, category, title, description, _id, date, time_to_read } = b;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSaveClick = async () => {
        if (!user) {
            // toast.error("Please Log In To Add To Read List.");
            navigate("/login");
            return;
        }

        const blogDetails = {
            author,
            author_image,
            image,
            category,
            title,
            description,
            _id,
            date,
            time_to_read,
            userId: user.uid // Include user ID
        };

        try {
            const response = await axios.post('https://mindful-mosaic-server.onrender.com/savedBlogs', blogDetails);
            console.log(response.data);
            toast.success("Added To Read List Successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to Add To List!");
        }
    };

    return (
        <div className="bg-bage rounded-lg shadow-lg overflow-hidden">
            <img className="object-cover w-full h-48 md:h-56 lg:h-64" src={image} alt="" />
            <div className="p-6">
                <div className="flex justify-between">
                    <p className="text-sm bg-blue-500/15 p-2 rounded-lg text-blue-500 uppercase">{category}</p>
                    <p className="text-sm bg-blue-500/15 p-2 rounded-lg text-blue-500 uppercase">{date}</p>
                </div>
                <Link to={`/blog/${_id}`} className="block mt-2 text-xl font-semibold text-gray-800 dark:text-white">
                    {title}
                </Link>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {description.substring(0, 200)}...
                </p>
                <div className="flex items-center justify-between">
                    <Link
                        to={`/blog/${_id}`}
                        className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</Link>
                    <p className="text-sm bg-blue-500/15 p-2 rounded-lg text-blue-500 ">{time_to_read} <span className="ml-1">Minutes To Read</span></p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center mt-4">
                        <img className="object-cover w-10 h-10 rounded-full" src={author_image} alt="" />
                        <div className="ml-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">{author}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Researcher</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between lg:gap-2 gap-1 mt-4">
                        <button className="p-3 hover:btn rounded-lg text-sm bg-blue-500/15 text-blue-500" onClick={handleSaveClick}>
                            Mark As Read{/* <CiBookmarkCheck className="text-xl " /> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
