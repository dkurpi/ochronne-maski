import React from "react";
import Cookies from "js-cookie";

export default function PopupContent({ close }) {
  return (
    <div className="modale">
      <a
        className="close"
        onClick={() => {
          close();
        }}
      >
        &times;
      </a>
      <h4 className="header"> Zamównie przyjęte do realizacji</h4>
      <hr />
      Zamówienie zostało pomyślnie wysłane. Prosimy oczekiwać na <b>
        SMS
      </b> lub <b>e-mail</b>.
      <br />
      <br />
      Jeżeli nie widzą Państwo mail'a prosimy o sprawdzenie zakładki - SPAM.
      <div className="actions">
        <button
          className="button"
          onClick={() => {
            close();
            window.location = "/";
            Cookies.remove("maski-ochronne");
          }}
        >
          Zamknij
        </button>
      </div>
    </div>
  );
}
