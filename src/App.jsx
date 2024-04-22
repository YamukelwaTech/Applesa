import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemView from "./Components/ItemView";
import AddAdress from "./Components/AddAdress";
import Bag from "./Components/Bag";
import AddPayment from "./Components/AddPayment";
import DashBoard from "./Components/Dashboard";
import CheckOut from "./Components/CheckOut";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/item/:id" element={<ItemView />} />
        <Route path="/Bag" element={<Bag />} />
        <Route path="/Checkout" element={<CheckOut />} />
        <Route path="/AddPayment" element={<AddPayment />} />
        <Route path="/AddAdress" element={<AddAdress />} />
      </Routes>
    </Router>
  );
}

export default App;
