import React, { useRef } from "react";
import "./dialog.style.css";

export function Dialog() {
  const dialog = useRef();

  const openDialog = () => {
    dialog.current.showModal();
  };

  const closeDialog = () => {
    dialog.current.close();
  };

  return (
    <React.Fragment>
      <dialog ref={dialog}>
        <button autoFocus onClick={closeDialog}>
          Close
        </button>
        <p>This is Amazing Dialog</p>
      </dialog>
      <button onClick={openDialog}>Give me the money</button>
    </React.Fragment>
  );
}
