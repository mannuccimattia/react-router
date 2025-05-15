import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" Component={Homepage}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/products" Component={Products}></Route>

        </Routes>

      </BrowserRouter>
    </>
  )
};

export default App
