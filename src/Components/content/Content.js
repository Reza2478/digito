import React from "react";

//Components
import Sidebar from "./sidebar/Sidebar";
import Selectfilter from "./Selectfilter";

const Content = () => {
  return (
    <div className="container mx-auto mb-9 grid max-w-screen-2xl grid-cols-12 gap-4 md:grid-rows-[55px_minmax(500px,_1fr)] md:px-4 lg:px-6">
      <Sidebar />
      <Selectfilter />
    </div>
  );
};

export default Content;
