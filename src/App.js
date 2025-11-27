import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/Home";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import SupplyChain from "./components/SupplyChain";
import Analytics from "./components/Analytics";
import Alerts from "./components/Alerts";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import AddProduct from "./components/AddProducts";
import CreateShipment from "./components/CreateShipment";
import UpdateInventory from "./components/UpdateInventory";
import ExportReport from "./components/ExportReport";
import RunForecast from "./components/RunForcast";
import Demo from "./components/Demo";
import About from "./components/About";
import Features from "./components/Features";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/supplychain" element={<SupplyChain />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/addproducts" element={<AddProduct />} />
      <Route path="/createshipment" element={<CreateShipment />} />
      <Route path="/updateinventory" element={<UpdateInventory />} />
      <Route path="/exportreport" element={<ExportReport />} />
      <Route path="/runforecast" element={<RunForecast />} />
      <Route path="/bookademo" element={<Demo />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}

export default App;
