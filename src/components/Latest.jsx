import { useEffect, useState } from "react";
import LoadingState from "./LoadingState";
import BlogCard from "./BlogCard";


const Latest = () => {
    const [blog, setBlog] = useState([]);
    const [most, setMost] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(() => {
        fetch('https://mindful-mosaic-server.onrender.com/blog')
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setMost(data.filter(blog => blog.category2 === 'latest'));

                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching :", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingState />
    }
    return (
        <div>
            <div className="my-24 max-w-screen-xl mx-auto">
            <h1 className="md:text-3xl text-white text-xl font-cinzel font-semibold text-center">The Latest Scoop</h1>
        <h1 className='text-center text-white font-cinzel font-bold my-3 text-sm md:text-xl'>Explore our most recent posts and keep your knowledge up-to-date</h1>
            {/* <h1 className="text-3xl font-cinzel font-semibold text-center"></h1> */}
            <div className="grid grid-cols-1 p-3 md:grid-cols-3 gap-6 mt-6">
                {
                    most.map(b => (
                        <BlogCard key={b._id} b={b} />
                    ))
                }
            </div>
        </div>
        </div>
    );
};

export default Latest;