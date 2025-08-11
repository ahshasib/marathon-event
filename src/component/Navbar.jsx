import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext/AuthProvider';
import Swal from 'sweetalert2';
import ThemeToggle from './ThemeToggle';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUserCircle, FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiMenu, FiX } from 'react-icons/fi'; // hamburger and close icons

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Logout Successful!',
          text: `${user.email}!`,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      })
      .catch(() => { });
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/" className="text-white text-lg md:text-xl" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/allmarathon" className="text-white text-lg md:text-xl" onClick={() => setMobileMenuOpen(false)}>Marathons</NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="text-white text-lg md:text-xl" onClick={() => setMobileMenuOpen(false)}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/members" className="text-white text-lg md:text-xl" onClick={() => setMobileMenuOpen(false)}>Members</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard" className="text-white text-lg md:text-xl" onClick={() => setMobileMenuOpen(false)}>Dashboard</NavLink> 
        </li>
      )}
    </>
  );

  const buttonClasses = "btn bg-white text-black rounded-none px-6 py-2 text-lg border-none shadow-lg hover:bg-gray-400 hover:bg-opacity-40 transition";

  return (
    <div>
      {/* Top Bar */}
      <div className="text-black py-3 px-4 flex justify-between items-center text-sm" style={{ backgroundColor: '#E8FF02' }}>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2"><FaEnvelope /> support@milesmaster.com</span>
          <span className="flex items-center gap-2"><FaPhoneAlt /> +880 1234-567890</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform
          ${isScrolled
            ? 'bg-gray-900 bg-opacity-70 shadow-lg scale-100'
            : 'bg-transparent shadow-none scale-95 opacity-90 top-10'
          } text-white`}
      >
        <div className="navbar w-11/12 mx-auto py-2 flex items-center justify-between">

          {/* Logo section 10% */}
          <div className="navbar-start flex-shrink-0" style={{ width: '10%' }}>
            <NavLink to="/" className="flex items-center gap-2">
              <img src="./cardio.png" alt="logo" className="w-10 rounded-md" />
              <h1 className="text-3xl text-white">MilesMaster</h1>
            </NavLink>
          </div>

          {/* Menu items center 70%, flex to center */}
          <div className="navbar-center hidden md:flex" style={{ width: '70%', justifyContent: 'center' }}>
            <ul className="menu menu-horizontal px-1 gap-5">
              {menuItems}
            </ul>
          </div>

          {/* Login/logout + theme toggle 20% */}
          <div className="navbar-end hidden md:flex items-center justify-end gap-5 flex-shrink-0" style={{ width: '20%' }}>
            {user ? (
              <>
                <img src={user.photoURL || '/avatar.png'} alt="User" className="w-8 h-8 rounded-full" />
                <button onClick={handleLogout} className={buttonClasses}>Logout</button>
              </>
            ) : (
              <>
                <FaUserCircle size={28} className="text-white" />
                <NavLink to="/login" className={buttonClasses}>Login</NavLink>
                <NavLink to="/register" className={buttonClasses}>Register</NavLink>
              </>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-white text-3xl focus:outline-none"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-900 bg-opacity-90 w-full py-4 shadow-lg">
            <ul className="flex flex-col gap-4 px-6">
              {menuItems}
              {user ? (
                <li className="flex items-center gap-3">
                  <img src={user.photoURL || '/avatar.png'} alt="User" className="w-8 h-8 rounded-full" />
                  <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className={buttonClasses}>
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li><NavLink to="/login" className={buttonClasses} onClick={() => setMobileMenuOpen(false)}>Login</NavLink></li>
                  <li><NavLink to="/register" className={buttonClasses} onClick={() => setMobileMenuOpen(false)}>Register</NavLink></li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
