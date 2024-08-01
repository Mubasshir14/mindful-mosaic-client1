import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
    const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleSignIn = () => {
        
        signInWithGoogle()
            .then((res) => {
                const user = res.user;
                console.log(user);
                fetch('https://mindful-mosaic-server.onrender.com/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Profile Created Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const phone = form.phone.value;

        createUser(email, password)
            .then((res) => {
                const user = res.user;
                updateUserProfile(name, photo)
                    .then(() => {
                        fetch('https://plant-server-6tw1.onrender.com/user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => console.log(data));

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Profile Created Successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        });

                        navigate("/");
                    });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                });
            });
    };

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">
                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <div className="">
                                <h2 className="mb-3 text-3xl font-semibold text-center">Register Your Account</h2>
                                <p className="text-sm text-center dark:text-gray-600">Do you have an account?
                                    <Link to='/signin' className="focus:underline hover:underline text-red-600">Sign in here</Link>
                                </p>
                            </div>
                            <div className="my-6 space-y-4">
                                <button
                                    onClick={googleSignIn}
                                    aria-label="Login with Google"
                                    className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                    <p>Login with Google</p>
                                </button>
                            </div>
                            <div className="flex items-center w-full my-4">
                                <hr className="w-full dark:text-gray-600" />
                                <p className="px-3 dark:text-gray-600">OR</p>
                                <hr className="w-full dark:text-gray-600" />
                            </div>
                            <form onSubmit={handleSignUp} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                                    <input type="text" name='name' required placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Photo</label>
                                    <input type="text" required name="photo" placeholder="Photo URL" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                                    <input type="text" required name="phone" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                    <input type="email" name="email" placeholder="Email" required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className="md:col-span-2 col-span-1">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input type="password" name="password" required placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className="md:col-span-2 col-span-1">
                                    <button className="text-center w-full bg-blue-500 p-3 text-white rounded-lg">
                                        <span>Sign Up</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;
