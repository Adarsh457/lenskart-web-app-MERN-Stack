import { useContext, React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context-and-reducer/StoreContext";
import { FaRegHeart, FaQuestionCircle } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown, IoMdSettings, IoIosLogOut } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const { products, likedProducts, dispatch, user } = useContext(StoreContext);
  const [toggle, setToggle] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const CartItem = products.reduce((a, b) => a + b.Qty, 0);
  const handleOpenModal = () => {
    dispatch({
      type: "TOGGLE_LIKED_PRODUCTS_MODAL",
      payload: true,
    });
  };
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="sticky top-0 bg-white z-40">
      <div className="flex flex-row justify-between items-center p-5 shadow relative">
        <div className="image_container flex flex-row justify-between items-center">
          <Link to="/">
            <img
              src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
              alt="Lens"
              className="w-32 md:w-40"
            />
          </Link>
          <img
            src="https://static5.lenskart.com/media/uploads/lenskart-helpline-number-new-9999899998-desktop.png"
            alt=""
            className="w-28 ml-2 md:w-40 md:ml-6"
          />
        </div>
        <div className="searchBarHolder w-64 md:w-1/3">
          <div className="search_baar_container">
            <form action="#">
              <input
                type="text"
                autoComplete="false"
                placeholder="Search your Item Here!"
                className="w-full p-1 md:p-2 bg-transparent rounded border-1 ring-1 ring-black outline-none "
              />
            </form>
          </div>
        </div>
        <div
          className={`actionLinksContainers shadow md:shadow-none md:flex md:flex-row md:justify-between md:items-center md:relative md:h-auto md:left-auto md:w-1/3 bg-white w-1/2 p-5 font-sans absolute inset-0 -left-full h-screen flex flex-col-reverse justify-around ${toggle && "left-0 transition-all duration-500"}`}
        >
          <div className="cross_menu absolute top-2 right-0 p-5 md:hidden">
            <button onClick={() => setToggle(false)}>
              <RxCross1 />
            </button>
          </div>
          <div className="actionLinks ml-5">Track Order</div>
          <div className="actionLinks flex flex-row justify-between items-center ml-5">
            <Link
              className="actionLinks flex flex-row items-center relative"
              onClick={handleOpenModal}
              to="/"
            >
              <FaRegHeart className="icon mr-2 mb-2 text-xl" />
              <span>
                Whishlist
                <span className="bg-red-500 text-white rounded-full w-5 h-5 absolute -top-3 left-3 text-center">
                  {likedProducts.length}
                </span>
              </span>
            </Link>
          </div>
          <div className="">
            <Link
              className="actionLinks flex flex-row items-center relative ml-5"
              to="/cart"
            >
              <BsHandbag className="icon mr-2 mb-2 text-xl" />
              <span>
                Cart
                <span className="bg-red-500 text-white rounded-full w-5 h-5 absolute -top-2 left-2 text-center">
                  {CartItem}
                </span>
              </span>
            </Link>
          </div>
          <div className="actionLinks flex flex-row ml-5">
            {token ? (
              <div className=" group/profile">
                <button
                  className="group shadow border-2 rounded-3xl flex justify-around items-center"
                  onClick={() => setToggleProfile((prev) => !prev)}
                >
                  <CgProfile className="text-xl m-2" />
                  <div className="flex items-center">
                    <p className=" font-semibold mr-1">Profile</p>
                    <IoIosArrowDown className="md:text-xl m-2" />
                  </div>
                </button>
                <div
                  className={`absolute -top-4 bg-white p-4 border rounded-bl-xl rounded-tl-xl shadow-md h-96 w-72  ${toggleProfile ? "-right-5" : "-right-full"}`}
                >
                  <div className="">
                    <RxCross1
                      className=" absolute top-2 right-2 cursor-pointer border rounded-full w-8 h-8 p-2 shadow-md"
                      onClick={() => setToggleProfile(false)}
                    />
                    <div className="mt-10 flex justify-between  items-center flex-wrap">
                      <CgProfile className=" text-3xl md:text-5xl" />
                      <div className="">
                        <p className="md:text-xl font-bold">{user?.userName}</p>
                        <Link
                          to=""
                          className=" text-blue-500 capitalize font-bold "
                        >
                          view & update profile{" "}
                        </Link>
                      </div>
                    </div>
                    <br />
                    <hr />
                  </div>
                  <ul className="mt-6">
                    <li className="flex  items-centermt-4 cursor-pointer">
                      <CgProfile className=" text-xl" />
                      <span className="ml-4">{user?.userName}</span>
                    </li>
                    <li className="flex  items-center mt-4 cursor-pointer">
                      <MdEmail className=" text-xl" />
                      <span className="ml-4">{user?.email}</span>
                    </li>
                    <li className="flex  items-center mt-4 cursor-pointer">
                      {" "}
                      <IoMdSettings className=" text-xl" />{" "}
                      <span className="ml-4">Settings</span>
                    </li>
                    <li className="flex  items-center mt-4 cursor-pointer">
                      {" "}
                      <FaQuestionCircle className=" text-xl" />{" "}
                      <span className="ml-4">FAQ's</span>
                    </li>
                    <li
                      className="flex  items-center mt-4 cursor-pointer"
                      onClick={handleLogout}
                    >
                      <IoIosLogOut className=" text-xl" />
                      <span className="ml-4">Logout</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="">
                <Link to="/login">
                  <span className="mr-1 ">Sign In </span>&
                </Link>
                <Link to="/register">
                  <span className="ml-1">Sign Up </span>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setToggle((prev) => !prev)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
