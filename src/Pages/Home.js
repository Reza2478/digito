import React from "react";

//Components
import Header from "../Components/header/Header";
import Sortfilter from "../Components/Sortfilter";
import Content from "../Components/content/Content";
import BottomNav from "../Components/content/BottomNav";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Sortfilter />
      <Content />
      <BottomNav/>
    </React.Fragment>
  );
};

export default Home;
