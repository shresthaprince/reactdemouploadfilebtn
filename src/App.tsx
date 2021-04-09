import React from "react";
import "./App.css";
import UploadButtonByRef from "./components/UploadButtonByRef";
import UploadButtonById from "./components/UploadButtonById";

function App() {
  return (
    <>
      <UploadButtonById />
      <UploadButtonByRef />
    </>
  );
}

export default App;
