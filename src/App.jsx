// import Navbar from "./component/Navbar";
// import DropDown from "./component/DropDown";
// import Card2 from "./component/Card2";
// import Text from "./component/Text";
// import Footer from "./component/Footer";
// import Fragrance from "./Pages/Fragrance";
// import CardFashion from "./component/CardFashion";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Fashion from "./Pages/Fashion";
import { NoMatch } from "./component/NoMatch";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Fashion/>}></Route>
        <Route index element={<Fashion />} />
        <Route path="/Fragrance" element={<NoMatch/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
