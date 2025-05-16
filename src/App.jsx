import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/products/ProductDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" Component={Homepage}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/products">
            <Route index Component={Products} />
            <Route path=":id" Component={ProductDetail} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
};

export default App
