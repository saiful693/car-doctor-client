import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {
            user?.email ? <li><NavLink to="/bookings">My Bookings</NavLink></li>
                : ''
        }
    </>

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(console.error())
    }

    return (
        <div className="navbar  bg-base-100 h-28 my-4">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <button className="btn btn-outline btn-error">Appointment</button>
                {
                    user?.email ? <button onClick={handleLogout} className="btn btn-warning">LogOut</button>
                        : <Link to="/login"><button className="btn btn-warning">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;