import React from "react";
import {Routes ,Route} from 'react-router-dom'

//Components
import Home from "./Pages/Home";
import Category from "./Pages/Category";

//Context
import ProductContextProvider from "./Context/ProductContextProvider";
import FilterContextProvider from "./Context/FilterContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <FilterContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:id" />
          <Route path='/category' element={<Category/>} />
        </Routes>
      </FilterContextProvider>
    </ProductContextProvider>
  );
}

export default App;
