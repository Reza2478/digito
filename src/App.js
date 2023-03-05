//Components
import Header from "./Components/header/Header";
import Sortfilter from "./Components/Sortfilter";
import Content from "./Components/content/Content";
import React from "react";

//Context
import ProductContextProvider from "./Context/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <Header />
      <Sortfilter />
      <Content />
    </ProductContextProvider>
  );
}

export default App;
