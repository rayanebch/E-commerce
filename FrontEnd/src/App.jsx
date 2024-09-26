import Navbar from "./Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Shop } from "./Pages/Shop";
export default function App() {
  return (
      <div className="font-poppins">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/mens" element={<ShopCategory category="mens"/>}></Route>-
          <Route path="/womens" element={<ShopCategory category="women"/>}></Route>
          <Route path="/kids" element={<ShopCategory category="kid"/>}></Route>
          <Route path=":productId" element={<Product/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<LoginSignup/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
  )
}