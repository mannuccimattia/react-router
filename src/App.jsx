import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/products/ProductDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route Component={DefaultLayout}>

            <Route path="/" Component={Homepage} />
            <Route path="/about" Component={About} />
            <Route path="/products">

              <Route index Component={Products} />
              <Route path=":id" Component={ProductDetail} />

            </Route>

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
};

export default App
