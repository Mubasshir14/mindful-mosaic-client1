import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { FaTimes } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';

const BookMark = () => {
    const { user } = useContext(AuthContext);
    const [savedBlogs, setSavedBlogs] = useState([]);

    useEffect(() => {
        const fetchSavedBlogs = async () => {
            if (!user) return;
            try {
                const response = await axios.get(`https://mindful-mosaic-server.onrender.com/savedBlogs?userId=${user.uid}`);
                setSavedBlogs(response.data);
            } catch (error) {
                console.error('Error fetching saved blogs:', error);
            }
        };

        fetchSavedBlogs();
    }, [user]);

    const handleDeleteItem = async (itemId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`https://mindful-mosaic-server.onrender.com/savedBlogs/${itemId}`, {
                        method: 'DELETE',
                    });

                    if (!response.ok) {
                        const errorText = await response.text();
                        throw new Error(`Failed to delete item: ${errorText}`);
                    }

                    setSavedBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== itemId));

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your item has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error('Error deleting item:', error);
                    Swal.fire({
                        title: "Error!",
                        text: error.message || "There was a problem deleting your item.",
                        icon: "error"
                    });
                }
            }
        });
    };

    return (
        <div className="min-h-[calc(100vh-400px)] mt-12 max-w-screen-xl mx-auto">

            <div>
            <h1 className="md:text-3xl text-white text-xl  font-cinzel font-semibold text-center mb-6">Manage Your Read List</h1>
                <div className="my-12 p-3 grid grid-cols-1 md:grid-cols-3 gap-4">
   
                    {savedBlogs.map(blog => (
                        <div key={blog._id} className="relative bg-black card flex border-2  shadow-xl">
                            <div className="absolute top-2 right-4 p-1 bg-blue-400/85 text-white rounded-lg font-cinzel">
                                {/* <FaTimes
                                    className="text-red-500 cursor-pointer"
                                    onClick={() => handleDeleteItem(blog._id)}
                                /> */}
                                Read
                            </div>
                            <figure className="px-10 pt-10">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body bg-black items-center text-center">
                                <h2 className="card-title text-white">{blog.title}</h2>
                                <p className='text-white'>{blog.description.substring(0, 100)}...</p>
                                <div className="card-actions flex justify-between">
                                    <Link to={`/blog/${blog._id}`} className="btn btn-primary">Read Again</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookMark;
