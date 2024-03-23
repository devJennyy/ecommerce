
import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";import { IoMdCart } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function App() {
  return (
    <>
      {/*Main Container*/}
      <div className="w-full h-full bg-white">
        {/*Navbar*/}
        <div className="flex flex-row justify-between items-center bg-[#F0F2F3]">
          <div className="flex flex-row justify-start items-center px-36 p-5 text-[26px] text-[#F48E28] font-semibold gap-2">
            <IoFastFoodSharp />
            <p className="text-[#272343]">Fast</p>
            <p className="text-[#F48E28]">Foods</p>
          </div>

          <div className="relative">
            <CiSearch className="absolute mt-2" />
            <input className="pl-6" />
          </div>
          

          <div className="border-2 text-[#9A9CAA]">
            <p>Search here...</p>
          </div>
        </div>

        {/*Sub-Navbar*/}
        <div className="flex flex-row justify-between items-center px-36 p-5 border-b-[1px] text-[14px]">
          <div className="flex flex-row justify-center items-center gap-5 border-[1px] border-[#E1E3E5] rounded-[4px] py-[10px] px-[20px] text-[#272343]">
            <GiHamburgerMenu />
            <button>All Categories</button>
          </div>
          <div className="flex flex-row justify-center items-center font-[8px] gap-10 text-[#8B8BA5]">
            <button>Home</button>
            <button>Menu</button>
            <button>Service</button>
            <button>Testimonial</button>
          </div>
          <div className="flex flex-row justify-center items-center gap-5 text-[#8B8BA5]">
            <p>Contact:</p>
            <p className="text-[#272343]">(+639) 000-000-0000</p>
          </div>
        </div>

        {/*Body*/}
      </div>
    </>
  );
}

export default App;
