import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import LoadingState from "./LoadingState";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const blogsPerPage = 6;

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://mindful-mosaic-server.onrender.com/blog');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Calculate the current blogs to display
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Determine total number of pages
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div className="my-12 max-w-screen-xl mx-auto">
            <h1 className="md:text-3xl text-white text-xl  font-cinzel font-semibold text-center">All Blogs</h1>
            <h1 className='text-center text-white font-cinzel font-bold my-3 text-sm md:text-xl'>Dive Into Our Complete
                Blog Collection</h1>
            {loading ? (
                <LoadingState />
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 p-3">
                        {currentBlogs.map(b => <BlogCard key={b._id} b={b} />)}
                    </div>

                    <div className="pagination flex justify-center items-center mt-4">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="mx-2 text-white">Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AllBlogs;
