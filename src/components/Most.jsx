import { useEffect, useState } from "react";
import LoadingState from "./LoadingState";
import BlogCard from "./BlogCard";


const Most = () => {
    const [blog, setBlog] = useState([]);
    const [most, setMost] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(() => {
        fetch('https://mindful-mosaic-server.onrender.com/blog')
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setMost(data.filter(blog => blog.category1 === 'most'));

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
        <div className="my-24">
            <h1 className="md:text-3xl text-xl  font-cinzel font-semibold text-center">Most Read Blogs</h1>
            <h1 className='text-center font-cinzel font-bold my-3 text-sm md:text-xl'>
            Discover What’s Capturing Attention</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {
                    most.map(b => (
                        <BlogCard key={b._id} b={b} />
                    ))
                }
            </div>
        </div>
    );
};

export default Most;