 

const Card2 = () => {
  return (
    <div className="flex mt-1 cursor-pointer">
      <div className="w-1/2">
        <img src="dior3.jpg" />
        <div className="text-white  absolute top-[1200px] ml-14 ">
          <h1 className="font-bold text-lg mb-3">FRAGRANCE & BEAUTY</h1>
          <h3>THE ART OF GIFTING</h3>
        </div>
      </div>
      <div className="w-1/2 ">
        <img src="dior4.jpg" />
        <div className="text-black absolute top-[1200px] ml-14 ">
          <h1 className="font-bold text-lg mb-3">LA COLLECTION PRIVÉE CHIRSTIAN DIOR</h1>
          <h3>GIFT IDEAS</h3>
        </div>
      </div>
      
    </div>
  );
};

export default Card2;