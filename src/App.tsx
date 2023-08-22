
import { observer } from "mobx-react";
import React from "react";
import Canvas from "./components/canvas/Canvas";

const App = observer(() => {
  const notifyOutput = () => {
    console.log('notify output');
  }
  
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <h2 className="navbar-brand mx-3">Floor Designer & Booking Prototype</h2>
      </nav>
      <Canvas notifyOutput={notifyOutput}></Canvas>
    </>
  );
});

export default App;