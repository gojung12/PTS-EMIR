import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import DropDown from "../component/DropDown";
import Card2 from "../component/Card2";
import Text from "../component/Text";
import CardFragrance from "../component/CardFragrance";

function Fragrance() {
  return (
    <>
      <div className="w-full  bg-white">
        <Navbar></Navbar>
        <DropDown></DropDown>
        <CardFragrance></CardFragrance>
        <Card2></Card2>
        <Text></Text>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Fragrance;
