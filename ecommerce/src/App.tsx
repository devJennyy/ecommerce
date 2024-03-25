import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";
import { IoArrowBack, IoArrowForward, IoFastFoodSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaMinus, FaOpencart, FaPlus, FaRegUser, FaShoppingBasket } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { FaBasketShopping } from "react-icons/fa6";

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
            <button className="flex flex-row justify-center items-center gap-[8px] bg-white py-[10px] w-[120px] h-[44px] rounded-[8px] hover:scale-95 transition-all hover:bg-[#F48E28] hover:text-white">
              <LuShoppingCart />
              <p className="text-[12px] font-medium">Cart</p>
              <p className="text-[10px] font-medium text-white bg-[#F48E28] px-[6px] py-[2px] rounded-full">
                2
              </p>
            </button>

            <button className="flex flex-row justify-center items-center gap-[8px] bg-white py-[10px] w-[44px] h-[44px] rounded-[8px] hover:scale-95 transition-all hover:bg-[#F48E28] hover:text-white">
              <IoMdHeartEmpty />
            </button>

            <button className="flex flex-row justify-center items-center gap-[8px] bg-white py-[10px] w-[44px] h-[44px] rounded-[8px] hover:scale-95 transition-all hover:bg-[#F48E28] hover:text-white">
              <FaRegUser />
            </button>
          </div>
        </div>

        {/*Sub-Navbar*/}
        <div className="flex flex-row justify-between items-center px-60 p-5 border-b-[1px] text-[14px] font-medium">
          <button className="flex flex-row justify-center items-center gap-5 border-[1px] border-[#E1E3E5] rounded-[4px] py-[10px] px-[20px] text-[#272343] hover:scale-95 transition-all hover:bg-[#F48E28] hover:text-white">
            <GiHamburgerMenu />
            <p>All Categories</p>
          </button>
          <div className="flex flex-row justify-center items-center gap-10 text-[#8B8BA5]">
            <button className="hover:scale-95 transition-all hover:text-[#F48E28]">
              Home
            </button>
            <button className="hover:scale-95 transition-all hover:text-[#F48E28]">
              Menu
            </button>
            <button className="hover:scale-95 transition-all hover:text-[#F48E28]">
              Service
            </button>
            <button className="hover:scale-95 transition-all hover:text-[#F48E28]">
              Testimonial
            </button>
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
            <p className="text-[14px] font-semibold text-[#F48E28] pb-2">
              TRY OUR BEST LIMITED EDITION!
            </p>
            <p className="text-[45px]/[50px] font-bold text-[#272343] pb-6">
              DOUBLE CHEESE BURGER
            </p>
            <p className="text-[14px] font-normal text-[#68707D] w-[515px] pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit
              sed tortor etiam volutpat ipsum.{" "}
            </p>
            <p className="text-[25px] font-bold text-[#272343]">$18.00</p>
            <p className="text-[15px] line-through font-medium text-[#B7BCC8]">
              $25.00
            </p>

            <div className="flex flex-row justify-center items-center gap-20 pt-10">
              <div className="flex flex-row justify-center items-center gap-5 bg-[#F2F2F2] w-[134px] h-[48px] rounded-[48px]">
                <button className="bg-[#F48E28] px-[10px] py-[10px] rounded-full text-white hover:scale-95 transition-all">
                  <FaPlus />
                </button>

                <p className="text-[20px] font-bold">1</p>
                <button className="bg-[#F48E28] px-[10px] py-[10px] rounded-full text-white hover:scale-95 transition-all">
                  <FaMinus />
                </button>
              </div>

              <button className="flex flex-row justify-center items-center bg-[#F48E28] text-white text-[16px] font-semibold w-[285px] h-[50px] rounded-[10px] gap-4 hover:scale-95 transition-all border-2 border-[#F48E28] hover:bg-white hover:border-[#F48E28] hover:text-[#F48E28]">
                <FaBasketShopping size={20} />
                <p> Add to cart</p>
              </button>
            </div>
          </div>
        </div>

        {/*Menu*/}
        <div className="flex flex-row justify-center items-center ps-60 w-[900px] gap-[30px]">
          <div className="flex justify-center items-center text-[#F48E28] rounded-full bg-white w-[52px] h-[52px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
            <IoArrowBack/>
          </div>
          <button className="flex flex-col justify-center items-start text-left bg-white w-[130px] h-[138px] rounded-[30px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] pl-4">
            <p className="text-[12px] font-bold">Cake</p>
            <p className="text-[10px] font-normal">Chocolate</p>
            <p className="text-[10px] font-bold">$18.00</p>
          </button>

          <button className="flex flex-col justify-center items-start text-left bg-white w-[130px] h-[138px] rounded-[30px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] pl-4">
            <p className="text-[12px] font-bold">Cake</p>
            <p className="text-[10px] font-normal">Chocolate</p>
            <p className="text-[10px] font-bold">$18.00</p>
          </button>

          <button className="flex flex-col justify-center items-start text-left bg-white w-[130px] h-[138px] rounded-[30px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] pl-4">
            <p className="text-[12px] font-bold">Cake</p>
            <p className="text-[10px] font-normal">Chocolate</p>
            <p className="text-[10px] font-bold">$18.00</p>
          </button>
          <div className="flex justify-center items-center text-[#F48E28] rounded-full bg-white w-[52px] h-[52px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
            <IoArrowForward/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
