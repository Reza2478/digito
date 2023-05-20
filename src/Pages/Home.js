import React, { useState } from "react";

//Components
import Header from "../Components/header/Header";
import Content from "../Components/content/Content";
import BottomNav from "../Components/content/BottomNav";
import Filtersection from "../Components/Filtersection";
import Footer from "../Components/content/Footer";

const Home = () => {
  const [active, setActive] = useState(false);
  return (
    <React.Fragment>
      {active && <div className="fixed top-0 right-0 left-0 bottom-0 z-50 bg-gray-400 opacity-60 md:hidden"></div>}
      <Header setActive={setActive} />
      <Content />
      <Filtersection active={active} setActive={setActive} />
      <Footer />
      <BottomNav active={active} />
    </React.Fragment>
  );
};

export default Home;
