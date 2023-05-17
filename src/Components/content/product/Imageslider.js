import React from "react";

const Imageslider = () => {
  return (
    <div className="flex w-4/5 max-w-[200px] md:max-w-[300px] lg:max-w-[200px] xl:max-w-xs xl:mb-8">
      <img className="h-auto w-full lg:hidden" src="../assets/img/Single Product/Gallery - 4.png" />
      <img className="hidden h-auto w-full lg:block" src="../assets/img/Single Product/Gallery.png" />
    </div>
  );
};

export default Imageslider;
