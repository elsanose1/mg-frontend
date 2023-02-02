import React, { Fragment } from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};
export const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = ({ children, hide }) => {
  return (
    <Fragment>
      <Backdrop onClick={hide} />
      <ModalOverlay>{children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
