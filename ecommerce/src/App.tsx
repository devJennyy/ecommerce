
import "./App.css";import { IoMdCart } from "react-icons/io";

function App() {
  return (
    <>
      {/*Main Container*/}
      <div className="w-full h-full bg-white">
        {/*Navbar*/}
        <div className="flex flex-row justify-between items-center px-36 p-5 border-b-[1px] gap-[100px]">
          <h1 className="text-[30px] font-semibold text-[#323232]">sneakers</h1>
          <div className="flex flex-1 flex-row justify-start items-center text-[17px] font-[8px] gap-10 text-[#8B8BA5]">
            <p>Collection</p>
            <p>Men</p>
            <p>Women</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-5 text-[#8B8BA5]">
            <IoMdCart size={25} />
            <img src="/images/profile-icon.svg" className="w-[30px]" />
          </div>
        </div>

        {/*Body*/}
        <div className="">
          
        </div>
      </div>
    </>
  );
}

export default App;
