import React from "react";
import "./App.css";
import Claims from "./containers/Claims";

function App() {
  return (
    <div className="App">
      <div className="h-screen w-screen bg-gray-100">
        <div className="p-4 h-full">
          <Claims />
        </div>
      </div>
    </div>
  );
}

export default App;
