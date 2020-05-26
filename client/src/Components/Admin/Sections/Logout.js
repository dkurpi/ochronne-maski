import React from "react";
import Cookies from "js-cookie";

export default function Logout() {
  return (
    <>
      <div style={{ height: "5em" }}></div>
      <div className="logout">
        <a
          onClick={(e) => {
            Cookies.remove("maseczki-ochronne-admin");
          }}
          className="panel__menuItem"
          href="/zamowienia"
        >
          wyloguj
        </a>
        <div style={{ height: "1em" }}></div>
      </div>
    </>
  );
}
