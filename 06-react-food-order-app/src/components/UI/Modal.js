import reactDom from "react-dom";
import { Fragment } from "react";

import classes from "./Modal.module.css"

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onHideCart}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays-root');

const Modal = (props) => {
  return (
    <Fragment>
      {
        reactDom.createPortal(
          <Backdrop onHideCart={props.onHideCart}/>,
          portalElement
        )
      }
      {
        reactDom.createPortal(
        <ModalOverlay>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal
