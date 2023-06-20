import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

//Components
import Featuresform from "../Components/content/adminpanel/Featuresform";
import Sidepanel from "../Components/content/adminpanel/Sidepanel";
import Colorpalette from "../Components/content/adminpanel/Colorpalette";

const AdminPanel = () => {
  const [selected, setSelected] = useState("features");
  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-12 gap-4 text-slate-600 md:grid-rows-[55px_minmax(500px,_1fr)]">
        <div className="col-span-12 grid h-[100vh] grid-cols-12 gap-3  ">
          {drawer === false && <Bars3Icon className="absolute top-4 right-4 h-7 w-7 cursor-pointer drop-shadow-lg md:hidden" onClick={() => setDrawer(true)} />}
          {/* Desktop */}
          <div className="hidden md:col-span-3 md:flex lg:col-span-2  ">
            <Sidepanel fn={setSelected} selected={selected}/>
          </div>
          {/* Mobile */}
          {drawer && (
            <div className="col-span-12 flex">
              <Sidepanel fn={setSelected} drawer={setDrawer} selected={selected}/>
            </div>
          )}
          {(drawer === false &&selected==='features')&& <Featuresform drawer={drawer} />}
          {(drawer === false &&selected==='colorpalette')&& <Colorpalette/>}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
