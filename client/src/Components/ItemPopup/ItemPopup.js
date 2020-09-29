import React from "react";
import Popup from "reactjs-popup";

export default function ItemPopup({ item, setPopupOpen, popupOpen }) {
  return (
    <Popup
      open={popupOpen}
      modal
      onClose={() => {
        setPopupOpen(false);
      }}
    >
      {(close) => (
        <div className="modale">
          <a
            className="close"
            onClick={() => {
              close();
            }}
          >
            &times;
          </a>
          <h4 className="header"> Produkt dodano </h4>
          <hr />
          <img
            class="popup__img"
            src={item.images[0]}
            height="200"
            width="200"
            alt=""
          />
          <div className="popup__text">
            <h4>{item.name}</h4>
            Masek w paczce: {item.packet} <br />
            Ilość paczek: {item.quantity} <br />
            Łącznie masek: {item.packet * item.quantity} <br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              Zamknij
            </button>
            <a href="/koszyk">
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                Przejdź do kasy
              </button>
            </a>
          </div>
        </div>
      )}
    </Popup>
  );
}
