import { useState } from "react";
import "./App.css";
import Manufetectures from "./Components/Manufecturer";
import Mobile from "./Components/Mobile";
function App() {
  let data = [
   {
      os: ["Android", "Blackberry", "Iphone", "Windows"],
      manu: ["Samsung", "HTC", "Apple", "Micromax"],
    },

  {
      headOs: "Mobile Operating System",
      headManu: "Mobile Manufetectures",
    },
  ];

  return (
    <div className="App">
      <Mobile data = {data}/>
      <Manufetectures data = {data} />
    </div>


  );
}

export default App;
