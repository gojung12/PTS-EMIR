/* eslint-disable react/no-unescaped-entities */
const CardFashion = () => {
  return (
    <div className="flex mt-6 cursor-pointer">
      <div className="w-1/2">
        <img src="Dior1.jpg" />
        <div className="text-white absolute top-40 ml-14">
          <h1 className="font-bold text-lg mb-3">WOMEN'S FASHION</h1>
          <h3>GIFT FOR HER</h3>
        </div>
      </div>
      <div className="w-1/2 ">
        <img src="Dior2.jpg" />
        <div className="text-white absolute top-40 ml-14">
          <h1 className="font-bold text-lg mb-3">MEN'S FASHION</h1>
          <h3>GIFTS FOR HIM</h3>
        </div>
      </div>
      
    </div>
  );
};

export default CardFashion;
