import React from "react";
import {Routes ,Route} from 'react-router-dom'

//Components
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Productdetail from "./Pages/Productdetail";
import Shopcart from "./Pages/Shopcart";

//Context
import ProductContextProvider from "./Context/ProductContextProvider";
import FilterContextProvider from "./Context/FilterContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <FilterContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:id" element={<Productdetail/>} />
          <Route path='/category' element={<Category/>} />
          <Route path='/shopcart' element={<Shopcart/>} />
        </Routes>
      </FilterContextProvider>
    </ProductContextProvider>
  );
}

export default App;
