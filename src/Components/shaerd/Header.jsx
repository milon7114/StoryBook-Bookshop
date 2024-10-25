import logo from "../../assets/logo/Story BooK.png";
import { IoMoon } from "react-icons/io5";
import { TbLayoutGridFilled } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";
import { MdFolderDelete } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import SearchBook from "../Books/SearchBook";
// import AddBook from "../book/AddBook";

const Divider = () => {
  return (
    <hr className="border border-t-2 border-black dark:border-white mt-5 mb-5" />
  );
};

export default function Header() {
  return (
    <>
      <nav className="py-3 fixed top-0 w-full z-50 bg-gray-300 dark:bg-[#071104] shadow-md transition-colors duration-500">
        <div className="container mx-auto flex items-center justify-between px-5">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="StoryBook"
              className="h-[45px] sm:h-[50px] md:h-[55px]"
            />
            <p className="text-[#071104] dark:text-white font-bold text-2xl">
              STORYBOOK
            </p>
          </a>
          {/* searchbar */}
          <div className="hidden md:block">
            <SearchBook />
          </div>        
          
          <div className="flex gap-4">
            {/* grid Icon */}
            <TbLayoutGridFilled className="text-[#071104] dark:text-white text-3xl" />
            {/* wishlist */}
            <AiFillHeart className="text-[#071104] dark:text-white text-3xl" />
            {/* delete folder */}
            <MdFolderDelete className="text-[#071104] dark:text-white text-3xl" />
            {/* Moon Icon for dark mode */}
            <IoMoon className="text-[#ee9d3a] dark:text-white text-3xl" />
          </div>

          {/* Add Button */}
          {/* <div className="hidden md:block">
            <AddBook />
          </div> */}
          
        </div>
        <Divider />
        <div className="container mx-auto flex items-center justify-start space-x-5 px-5">
          <CiFilter className="text-gray-800 dark:text-white text-3xl" />
          <button className="dark:text-white text-black border border-black dark:border-white rounded-md px-2 py-1">
            Filter by Rating
          </button>
          <button className="dark:text-white text-black border border-black dark:border-white rounded-md px-2 py-1">
            Filter by Price
          </button>
          <button className="dark:text-white text-black border border-black dark:border-white rounded-md px-2 py-1">
            Filter by Name
          </button>
        </div>        
      </nav>
    </>
  );
}
