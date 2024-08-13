import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Nav = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const { user, logOut } = useContext(AuthContext);


    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleToggle = (e) => {
        setTheme(e.target.checked ? 'retro' : 'light');
    };

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message));
    };

    const navItem = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/bookmark">Mark As Read</NavLink></li>
            <li>
                {user && (
                    <NavLink to="/readtime">Reading Progress</NavLink>
                )}
            </li>
            <li className="md:hidden">
                {/* <label className="flex cursor-pointer gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input
                        onChange={handleToggle}
                        type="checkbox"
                        checked={theme === 'retro'}
                        className="toggle theme-controller bg-base-content" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label> */}
            </li>
            <li className="block md:hidden">
                <div className=" justify-center items-center gap-2 mt-6 lg:flex lg:mt-0 lg:-mx-2">
                    {user ? (
                        <>
                            <img src={user?.photoURL} alt="User Avatar" className="w-10 h-10 rounded-full mx-2 border-2" />
                            <Link onClick={handleLogOut} to="/" className="btn bg-blue-500 border-none outline-none text-white">
                                Sign Out
                            </Link>
                        </>
                    ) : (
                        <Link to="/login" className="btn bg-blue-500 border-none outline-none text-white">
                            Sign In
                        </Link>
                    )}
                </div>
            </li>
        </>
    );

    return (
        <div className="font-cinzel  h-[50px]">
            <div className="navbar fixed z-10   bg-base-300/85 border-b-2 border-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu gap-4 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 dark:text-white shadow">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className="font-bold  font-cinzel btn-ghost text-sm md:text-2xl">Mindful  <span className="">Mosaic</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-black font-bold gap-4 menu-horizontal mr-6 px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex gap-4 p-1">
                    {/* <label className="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            checked={theme === 'retro'}
                            className="toggle theme-controller bg-base-content" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label> */}
                    <div className="hidden md:flex justify-center items-center gap-2 mt-6 lg:flex lg:mt-0 lg:-mx-2 ">
                        {user ? (
                            <>
                                <img src={user?.photoURL} alt="User Avatar" className="w-10 h-10 rounded-full mx-2 border-2" />
                                <Link onClick={handleLogOut} to="/" className="btn bg-blue-500 border-none outline-none text-white">
                                    Sign Out
                                </Link>

                            </>
                        ) : (
                            <Link to="/login" className="btn bg-blue-500 border-none outline-none  text-white">
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nav;
