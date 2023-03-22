//Components
import Header from "./Components/header/Header";
import Sortfilter from "./Components/Sortfilter";
import Content from "./Components/content/Content";
import React from "react";

//Context
import ProductContextProvider from "./Context/ProductContextProvider";
import FilterContextProvider from "./Context/FilterContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <FilterContextProvider>
        <Header />
        <Sortfilter />
        <Content />
      </FilterContextProvider>
    </ProductContextProvider>
  );
}

export default App;
