import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
        <Modal open={isOpen}>Fancy MODAL</Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </div>
  );
}

export default App;
