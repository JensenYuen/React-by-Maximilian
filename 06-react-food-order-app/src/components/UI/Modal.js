import reactDom from "react-dom";
import { Fragment } from "react";

import classes from "./Modal.module.css"

const ModalOverlay = (props) => {
  return (
    <div></div>
  );
};

const Modal = () => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <ModalOverlay

        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default Modal
