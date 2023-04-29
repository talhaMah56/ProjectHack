import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

export const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideModal} />;
};

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
      <img
        src={require("../imgs/guide.png")}
        alt="Monkey guide"
        className={classes.guide_img}
      />
      <button onClick={props.hideModal} className={classes.close_button}>
        Close
      </button>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <>
      {createPortal(<Backdrop hideModal={props.hideModal} />, portalElement)}
      {createPortal(
        <ModalOverlay hideModal={props.hideModal}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
