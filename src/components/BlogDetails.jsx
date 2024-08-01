import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import LoadingState from "./LoadingState";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { AuthContext } from "./AuthProvider";
import { toast } from 'react-toastify';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentContent, setCommentContent] = useState('');

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:5000/blog/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:5000/comments/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("Please log in to post a comment.");
            navigate("/login");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    blogId: id,
                    content: commentContent,
                    authorName: user.displayName,
                    authorPhoto: user.photoURL,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to post comment');
            }

            const newComment = await response.json();
            setComments([...comments, newComment]);
            setCommentContent('');
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    if (loading) {
        return <LoadingState />;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!blog) {
        return <div className="text-center">No blog found.</div>;
    }

    const { title, author, author_image, image, category, description } = blog;

    return (
        <div className="my-12">
            <button onClick={() => navigate(-1)} className="flex items-center space-x-2 hover:text-blue-400">
                <FaArrowAltCircleLeft className="w-6 h-6" />
                <span>Back</span>
            </button>
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
                    <img
                        className="object-cover w-full lg:w-1/2 rounded-xl h-72 lg:h-auto"
                        src={image}
                        alt={title}
                    />
                    <div className="lg:w-1/2">
                        <p className="text-sm text-blue-500 uppercase">{category}</p>
                        <h1 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-white font-cinzel">{title}</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
                        <div className="flex items-center mt-6">
                            <img
                                className="object-cover object-center w-10 h-10 rounded-full"
                                src={author_image}
                                alt={author}
                            />
                            <div className="ml-4">
                                <h1 className="text-sm text-gray-700 dark:text-gray-200">{author}</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-10">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Comments</h2>
                <form onSubmit={handleCommentSubmit} className="mt-6">
                    <textarea
                        className="w-full p-4 text-gray-600 bg-gray-100 rounded-md focus:outline-none focus:bg-white"
                        placeholder="Write a comment..."
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        required
                    />
                    <button type="submit" className="mt-4 px-6 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                        Post Comment
                    </button>
                </form>
                <div className="space-y-4 mt-4">
                    {comments.length === 0 ? (
                        <p className="text-gray-600 dark:text-gray-300">No comments yet. Be the first to comment!</p>
                    ) : (
                        comments.map(comment => (
                            <div key={comment._id} className="p-4 bg-gray-100 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <img
                                        className="object-cover object-center w-8 h-8 rounded-full"
                                        src={comment.authorPhoto || "default-avatar.png"}
                                        alt={comment.authorName || "Anonymous"}
                                    />
                                    <p className="ml-2 text-gray-600 dark:text-gray-300">{comment.authorName || "Anonymous"}</p>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
