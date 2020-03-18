import React, { Suspense } from "react";

function Footer() {
  return (
    <footer class="page-footer font-small blue mt-5 pt-4">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h5 class="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>

          <hr class="clearfix w-100 d-md-none pb-3" />

          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Płatności i dostawa</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Formy płatności</a>
              </li>
              <li>
                <a href="#!">Czas i koszty dostawy</a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Informacje</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Regulamin</a>
              </li>
              <li>
                <a href="#!">Polityka prywatności</a>
              </li>
              <li>
                <a href="#!">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> Velluto Giorno</a>
      </div>
    </footer>
  );
}

export default Footer;
