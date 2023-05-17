import React, { useState } from "react";

//Components
import Header from "../Components/header/Header";
import Content from "../Components/content/Content";
import BottomNav from "../Components/content/BottomNav";
import Filtersection from "../Components/Filtersection";

const Home = () => {
  const [active, setActive] = useState(false);
  return (
    <React.Fragment>
      {active && <div className="top-0 right-0 left-0 bottom-0 fixed bg-gray-400 z-50 opacity-60 md:hidden"></div>}
      <Header setActive={setActive} />
      <Content />
      <Filtersection active={active} setActive={setActive} />
      <BottomNav active={active} />
      
    </React.Fragment>
  );
};

export default Home;
