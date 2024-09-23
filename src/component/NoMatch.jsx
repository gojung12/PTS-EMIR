import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import DropDown from "../component/DropDown";
import Text from "../component/Text";
import CardFragrance from "../component/CardFragrance";
export const NoMatch = () => {
  return (
    <div className="">
      <div className="w-full  bg-white">
        <Navbar></Navbar>
        <DropDown></DropDown>
        <CardFragrance></CardFragrance>
        <Text></Text>
        <Footer></Footer>
      </div>
    </div>
  );
};
