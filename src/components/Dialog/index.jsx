import React, { useRef } from "react";
import "./dialog.style.css";

export function Dialog() {
  //O UseRef serve para criar uma referência mutável que persiste por todo o ciclo de vida do componente. Ele é comumente usado para acessar diretamente elementos DOM ou armazenar valores mutáveis que não causam uma nova renderização quando alterados. De forma simples, ele permite que você mantenha uma referência a um elemento ou valor entre renderizações sem disparar uma atualização do componente. Alternativa ao document.getElementById ou outras manipulações diretas do DOM (pois o document.getElementById retorna null).
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
