import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";
import { IoFastFoodSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

function App() {
  return (
    <>
      {/*Main Container*/}
      <div className="w-full h-full bg-white">
        {/*Navbar*/}
        <div className="flex flex-row justify-between items-center bg-[#F0F2F3] px-60 py-5">
          <div className="flex flex-row justify-start items-center text-[26px] text-[#F48E28] font-semibold gap-2">
            <IoFastFoodSharp />
            <p className="text-[#272343]">Fast</p>
            <p className="text-[#F48E28]">Foods</p>
          </div>

          <div className="flex items-center relative w-[413px]">
            <CiSearch className="absolute right-0 text-[22px] mr-4" />
            <input
              className="pl-2 rounded-[5px] py-[10px] pr-[50px] w-full text-[16px]"
              placeholder="  Search here...."
            />
          </div>

          <div className="flex flex-row justify-center items-center gap-3">
            <button className="flex flex-row justify-center items-center gap-[8px] bg-white py-[10px] w-[120px] h-[44px] rounded-[8px]">
              <LuShoppingCart />
              <p className="text-[12px] font-medium">Cart</p>
              <p className="text-[10px] font-medium text-white bg-[#F48E28] px-[6px] py-[2px] rounded-full">
                2
              </p>
            </button>

            <button className="flex flex-row justify-center items-center gap-[8px] bg-white py-[10px] w-[44px] h-[44px] rounded-[8px]">
              <IoMdHeartEmpty />
            </button>

            <button className="flex flex-row justify-center items-center gap-[8px] bg-white py-[10px] w-[44px] h-[44px] rounded-[8px]">
              <FaRegUser />
            </button>
          </div>
        </div>

        {/*Sub-Navbar*/}
        <div className="flex flex-row justify-between items-center px-60 p-5 border-b-[1px] text-[14px]">
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
        <div className="flex flex-row justify-between items-center px-60">
          <img src="/images/main-burger.svg" />
          <div className="flex flex-1 flex-col justify-start items-start text-left pl-48">
            <p className="text-[14px] font-semibold text-[#F48E28]">
              TRY OUR BEST LIMITED EDITION!
            </p>
            <p className="text-[45px] font-bold text-[#272343]">
              DOUBLE CHEESE BURGER
            </p>
            <p className="text-[14px] font-normal text-[#68707D] w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit
              sed tortor etiam volutpat ipsum.{" "}
            </p>
            <p className="text-[30px] font-bold text-[#272343]">$18.00</p>
            <p className="text-[20px] font-bold text-[#B7BCC8]">$25.00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
