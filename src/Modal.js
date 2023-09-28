import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 5,
};

const Modal = ({ open, children }) => {
  if (!open) return null;
  console.log({ open });
  return ReactDom.createPortal(
    <>
      <div
        style={OVERLAY_STYLES}
        onClick={() => console.log("todo: close modal")}
      />
      <div style={MODAL_STYLES}>
        <button onClick={() => console.log("todo: exit modal")}>
          can you click me
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
