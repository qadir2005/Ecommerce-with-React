import React, { Fragment, useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const cartItems = useSelector((state) => state.cart);

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login';
  };

  return (
    <div className='bg-white sticky top-0 z-50'>
      {/* Mobile Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900"
                    style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {user && (
                    <Link to={'/order'} className="-m-2 block p-2 font-medium text-gray-900"
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Order
                    </Link>
                  )}

                  {user?.user?.email === "admin@gmail.com" && (
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900"
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Dashboard
                    </Link>
                  )}

                  {user ? (
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  ) : (
                    <Link to={'/signup'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                  )}

                  <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                      alt="User Profile" />
                  </Link>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2560px-Flag_of_Pakistan.svg.png"
                      alt="Pakistan Flag"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      PAK
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Main Navbar */}
      <header className="relative bg-white mb-2">
        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl"
          style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div>
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex">
                    <h1 className='text-2xl font-bold text-[#242323] px-2 py-1 rounded'
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Apna<span className='text-[#a77f44]'>Store</span> 
                    </h1>
                  </div>
                </Link>
              </div>

              {/* Navbar Links */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700"
                    style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  {user ? (
                    <Link to={'/order'} className="text-sm font-medium text-gray-700"
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Order
                    </Link>
                  ) : (
                    <Link to={'/signup'} className="text-sm font-medium text-gray-700"
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                  )}

                  {user?.user?.email === 'admin@gmail.com' && (
                    <Link to={'/dashboard'} className="text-sm font-medium text-gray-700"
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Dashboard
                    </Link>
                  )}

                  {user && (
                    <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer"
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  )}
                </div>

                {/* Country Selection */}
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2560px-Flag_of_Pakistan.svg.png"
                      alt="Pakistan Flag"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === 'dark' ? 'white' : '', }}>
                      PAK
                    </span>
                  </a>
                </div>

                {/* Theme Toggle */}
                <button onClick={toggleMode} className="hidden  h-7 w-7 ml-3 lg:block">
                  {mode === 'dark' ? (
                    <FiSun className='text-xl text-white ml-3' />
                  ) : (
                    <BsFillCloudSunFill style={{fontSize: 25}} className='mr-3 text-xl ml-3  text-yellow-500' />
                  )}
                </button>

                {/* Cart Icon */}
                <Link to={'/cart'} className="relative text-gray-700 ml-4">
                  <IoCartSharp className="text-2xl"
                    style={{ color: mode === 'dark' ? 'white' : '', }} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
