import React, { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  //O UseRef serve para criar uma referência mutável que persiste por todo o ciclo de vida do componente. Ele é comumente usado para acessar diretamente elementos DOM ou armazenar valores mutáveis que não causam uma nova renderização quando alterados. De forma simples, ele permite que você mantenha uma referência a um elemento ou valor entre renderizações sem disparar uma atualização do componente. Alternativa ao document.getElementById ou outras manipulações diretas do DOM (pois o document.getElementById retorna null).
  const dialogRef = useRef();

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  // useEffect(() => {
  //   const dialog = dialogRef.current;
  //   dialog?.addEventListener("close", onClose);
  //   return () => {
  //     dialog?.removeEventListener("close", onClose);
  //   };
  // }, [onClose]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <React.Fragment>
      <dialog className="dialog" ref={dialogRef}>
        <div className="btn-close-wrapper">
          <button autoFocus onClick={onClose} className="btn-close">
            <IconClose />
          </button>
        </div>
        <div className="card-body">{children}</div>
      </dialog>
    </React.Fragment>
  );
}
