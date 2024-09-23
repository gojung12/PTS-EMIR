/* eslint-disable react/no-unescaped-entities */
import "../index.css";
import "boxicons/css/boxicons.min.css";
import "boxicons";

const DropDown = () => {
  return (
    <div className="cursor-pointer font-['cinzel']">
     <ul className="list-none flex space-x-3 text-sm ml-10  mt-6">
        <li>GIFT</li>
        <li>WHAT'S NEW</li>
        <li>WOMEN'S FASHION</li>
        <li>MEN'S FASHION</li>
        <li>BAGS</li>
        <li>JEWELRY & TIMEPIECES</li>
        <li>KIDS & BABY</li>
        <li>HAUTE COUTURE</li>
        <li>FASHION SHOWS</li>
        <li>DIOR WORLD</li>
     </ul>
    </div>
    
  );
};

export default DropDown;
