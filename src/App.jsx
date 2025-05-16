import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
function App() {
  return (
    <>
      <div className="container h-full w-full md:h-[90%]  md:w-[80%]  rounded-xl flex flex-col md:flex-row gap-5">
        <div className="leftcontainer h-full w-full md:w-[30%] bg-[#1E1E1F] rounded-none md:rounded-3xl  ">
          <Sidebar></Sidebar>
        </div>
        <div className="rightcontainer h-full w-full md:w-[70%] bg-[#1E1E1F]   rounded-none  md:rounded-3xl relative   outline-1 outline-white outline-dashed ">
          <Header></Header>
        </div>
      </div>
    </>
  );
}

export default App;
