import React from "react";
import {Routes ,Route} from 'react-router-dom'

//Components
import Home from "./Pages/Home";

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
        </Routes>
      </FilterContextProvider>
    </ProductContextProvider>
  );
}

export default App;
