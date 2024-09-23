import "../index.css";
import "boxicons/css/boxicons.min.css";
import "boxicons";

const Navbar = () => {
  return (
    <div className=" border-b-2 ">
      <div className="flex items-center justify-between mb-3">
        <div className="flex ml-10 mt-5 font-['cinzel'] font-semibold">
          <a href="/" className="">Fashion & Accessories</a>
          <a href="Fragrance" className="ml-5" >Fragrance & Beauty</a>
        </div>
        <div className="flex items-center justify-center">
          <img src="LogoDior.png" alt="Logo Dior" className="h-6 mt-4 mr-[360px]" />
        </div>
        <div className="flex items-center justify-end mr-10">
          <i className="bx bx-search text-2xl mt-5 cursor-pointer " ></i>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
