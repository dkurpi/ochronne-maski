import React from "react";

function Footer() {
  return (
    <footer class="page-footer font-small blue mt-5 pt-4">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h5 class="text-uppercase">Kontakt</h5>
            <div>
              <a href="tel:600441542">
                <i className="fas fa-mobile-alt footer_contact"></i>600 441 542
              </a>
            </div>
          </div>

          <hr class="clearfix w-100 d-md-none pb-3" />

          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Płatności i dostawa</h5>

            <ul class="list-unstyled">
              <li>
                <a href="/dostawa">Formy płatności</a>
              </li>
              <li>
                <a href="/dostawa">Czas i koszty dostawy</a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Informacje</h5>

            <ul class="list-unstyled">
              <li>
                <a href="/regulamin">Regulamin</a>
              </li>
              <li>
                <a href="/regulamin">Polityka prywatności</a>
              </li>
              <li>
                <a href="/kontakt">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="/"> Velluto Giorno</a>
      </div>
    </footer>
  );
}

function Delivery() {
  return (
    <>
      <div className="height6em"></div>
      <div className="container">
        <div id="content" class="content-lift site-content">
          <div class="row">
            <div id="primary" class="col-sm-12">
              <main id="blog" class="site-main blog-main" role="blog">
                <article
                  id="post-44364"
                  class="post-44364 page type-page status-publish hentry"
                >
                  <div class="content-area">
                    <header class="entry-header">
                      <h1 class="entry-title">Dostawa i formy płatności</h1>{" "}
                    </header>

                    <div class="entry-content">
                      <p>
                        <hr />
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>Dostawa</span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Dostawę zamówionych produktów realizujemy za
                          pośrednictwem firmy kurierskiej DPD
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Koszt przesyłki naliczamy zgodnie z taryfikatorem:
                        </span>
                      </p>

                      <ol>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            13,99 zł przesyłka za wcześniejszym przelewem na
                            konto
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            21,99 zł przesyłka pobraniowa
                          </span>
                        </li>
                      </ol>
                      <br />
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          W przypadku wysyłki za granicę koszt zgodnie z
                          cennikiem Poczty Polskiej.
                        </span>
                      </p>
                      <hr />
                      <h3>
                        <span style={{ fontWeight: "400" }}>
                          Formy płatności
                        </span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Istnieje możliwość płatności w dwóch formach:
                        </span>
                      </p>

                      <ol>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Przelew na konto
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Płatności przy pobraniu paczki
                          </span>
                        </li>
                      </ol>
                      <br />
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          W razie pytań prosimy o kontakt. Więcej informacji
                          znajdziesz w zakładce <a href="/kontakt">kontakt</a>
                        </span>
                      </p>
                      <br />
                      <hr />
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Contact() {
  return (
    <>
      <div className="height6em"></div>
      <div className="container">
        <div id="content" class="content-lift site-content">
          <div class="row">
            <div id="primary" class="col-sm-12">
              <main id="blog" class="site-main blog-main" role="blog">
                <article
                  id="post-44364"
                  class="post-44364 page type-page status-publish hentry"
                >
                  <div class="content-area">
                    <header class="entry-header">
                      <h1 class="entry-title">Kontakt</h1>{" "}
                    </header>
                    <hr />
                    <div class="entry-content">
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Krawiectwo Konfekcyjne kacztex
                        </span>
                      </p>
                      Franciszek Kaczor
                      <br />
                      34-713 Skawa
                      <br />
                      Skawa 558A
                      <br />
                      <span style={{ fontWeight: "400" }}>
                        <a href="tel:600441542">Tel. 600441542</a>
                      </span>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Terms() {
  return (
    <>
      <div className="height6em"></div>
      <div className="container">
        <div id="content" class="content-lift site-content">
          <div class="row">
            <div id="primary" class="col-sm-12">
              <main id="blog" class="site-main blog-main" role="blog">
                <article
                  id="post-44364"
                  class="post-44364 page type-page status-publish hentry"
                >
                  <div class="content-area">
                    <header class="entry-header">
                      <h1 class="entry-title">Polityka prywatności</h1>{" "}
                    </header>

                    <div class="entry-content">
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Polityka prywatności serwisu ochronne-maski.pl
                        </span>
                        <hr />
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>
                          Informacje ogólne
                        </span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Niniejsza Polityka Prywatności określa zasady
                          przetwarzania i ochrony danych osobowych przekazanych
                          przez Użytkowników w związku z korzystaniem przez nich
                          z usług sklepu internetowego ochronne-maski.pl
                        </span>
                      </p>
                      {/* ////punkty */}
                      <ol>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Administratorem danych osobowych zawartych w
                            serwisie jest firma Velluto Giorno z siedzibą w
                            Rabce-Zdrój
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            W trosce o bezpieczeństwo powierzonych nam danych
                            opracowaliśmy wewnętrzne procedury i zalecenia,
                            które mają zapobiec udostępnieniu danych osobom
                            nieupoważnionym. Kontrolujemy ich wykonywanie i
                            stale sprawdzamy ich zgodność z odpowiednimi aktami
                            prawnymi - ustawą o ochronie danych osobowych,
                            ustawą o świadczeniu usług drogą elektroniczną, a
                            także wszelkiego rodzaju aktach wykonawczych i
                            aktach prawa wspólnotowego.
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Dane Osobowe przetwarzane są na podstawie zgody
                            wyrażanej przez Użytkownika oraz w przypadkach, w
                            których przepisy prawa upoważniają Administratora do
                            przetwarzania danych osobowych na podstawie
                            przepisów prawa lub w celu realizacji zawartej
                            pomiędzy stronami umowy.
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Serwis realizuje funkcje pozyskiwania informacji o
                            użytkownikach i ich zachowaniach w następujący
                            sposób: oprzez dobrowolnie wprowadzone w
                            formularzach informacje, oprzez dobrowolnie
                            wprowadzone w formularzach informacje,
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Serwis zbiera informacje dobrowolnie podane przez
                            użytkownika.
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Dane podane w formularzu są przetwarzane w celu
                            wynikającym z funkcji konkretnego formularza np. w
                            celu dokonania procesu obsługi kontaktu
                            informacyjnego
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Dane osobowe pozostawione w serwisie nie zostaną
                            sprzedane ani udostępnione osobom trzecim, zgodnie z
                            przepisami Ustawy o ochronie danych osobowych.
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Do danych zawartych w formularzu przysługuje wgląd
                            osobie fizycznej, która je tam umieściła. Osoba ta
                            ma również praw do modyfikacji i zaprzestania
                            przetwarzania swoich danych w dowolnym momencie.
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Zastrzegamy sobie prawo do zmiany w polityce ochrony
                            prywatności serwisu, na które może wpłynąć rozwój
                            technologii internetowej, ewentualne zmiany prawa w
                            zakresie ochrony danych osobowych oraz rozwój
                            naszego serwisu internetowego. O wszelkich zmianach
                            będziemy informować w sposób widoczny i zrozumiały.
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <span style={{ fontWeight: "400" }}>
                            Zastrzegamy sobie prawo do zmiany w polityce ochrony
                            prywatności serwisu, na które może wpłynąć rozwój
                            technologii internetowej, ewentualne zmiany prawa w
                            zakresie ochrony danych osobowych oraz rozwój
                            naszego serwisu internetowego. O wszelkich zmianach
                            będziemy informować w sposób widoczny i zrozumiały.
                          </span>
                        </li>
                      </ol>
                      <br />
                      <hr />
                      W razie wątpliwości co któregokolwiek z zapisów niniejszej
                      polityki prywatności jesteśmy do dyspozycji - nasze dane
                      znaleźć można w zakładce - KONTAKT.
                      <br /> <br />
                      <hr />
                      <h3>
                        <span style={{ fontWeight: "200" }}>
                          Co to są ciasteczka?
                        </span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "200" }}>
                          Ciasteczka (ang. cookies) to niewielkie pliki,
                          zapisywane i przechowywane na twoim komputerze,
                          tablecie lub smartphonie podczas gdy odwiedzasz różne
                          strony w internecie. Ciasteczko zazwyczaj zawiera
                          nazwę strony internetowej, z której pochodzi, "długość
                          życia" ciasteczka (to znaczy czas jego istnienia) oraz
                          przypadkowo wygenerowany unikalny numer służący do
                          identyfikacji przeglądarki, z jakiej następuje
                          połączenie ze stroną internetową.
                        </span>
                      </p>
                      <br />
                      <h3>
                        <span style={{ fontWeight: "200" }}>
                          Do czego używamy ciasteczek?
                        </span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "200" }}>
                          AB Amadeusz Bogacz używa ciasteczek w różnych celach:
                          by strony i aplikacje działały szybciej i by były
                          łatwiejsze w użyciu, aby lepiej dopasować treści i
                          reklamy do twoich oczekiwań i zainteresowań oraz do
                          zbierania anonimowych, zagregowanych statystyk, które
                          pomagają w poprawianiu funkcjonalności i zawartości
                          stron i aplikacji. Używając ciasteczek w wyżej opisany
                          sposób nigdy nie identyfikujemy tożsamości
                          użytkowników na podstawie informacji przechowywanych w
                          ciasteczkach.
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Template() {
  return (
    <>
      <div className="container">
        <div id="content" class="content-lift site-content">
          <div class="row">
            <div id="primary" class="col-sm-12">
              <main id="blog" class="site-main blog-main" role="blog">
                <article
                  id="post-44364"
                  class="post-44364 page type-page status-publish hentry"
                >
                  <div class="content-area">
                    <header class="entry-header">
                      <h1 class="entry-title">Terms &amp; Conditions</h1>{" "}
                    </header>

                    <div class="entry-content">
                      <h3>
                        <span style={{ fontWeight: "400" }}>
                          Limitation of Liability
                        </span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          The bootstrap themes shall not be held accountable for
                          any direct, indirect, special, accidental or
                          considerable damages that includes but not bound to,
                          loss of data or profit caused due to use or inability
                          to use the products that we provide under any
                          circumstances, even if the bootstrap themes or legit
                          representative has been considered the possibility of
                          such damages. You are soley held responsible of any
                          costs caused, if your use of materials from this site
                          results in the need for servicing, repair or
                          correction of equipment or data.
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>
                          Licensing Policy
                        </span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          The Bootstrap themes are released under the GNU
                          General Public License v2 or later.&nbsp;
                        </span>
                        <span style={{ fontWeight: "400" }}>
                          You can use all our themes for personal and commercial
                          use.&nbsp;
                        </span>
                        <span style={{ fontWeight: "400" }}>
                          Please go through the{" "}
                        </span>
                        <a href="https://thebootstrapthemes.com/licensing-policy/">
                          <span style={{ fontWeight: "400" }}>
                            licensing policy page
                          </span>
                        </a>
                        <span style={{ fontWeight: "400" }}>
                          {" "}
                          for licensing details.
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>
                          Product Compatibility
                        </span>
                      </h3>
                      <ol>
                        <li style={{ fontWeight: "400" }}>
                          <strong>WordPress Themes:</strong>
                          <span style={{ fontWeight: "400" }}>
                            <br />
                          </span>
                          <span style={{ fontWeight: "400" }}>
                            The products are developed to be compatible with the
                            latest version of WordPress because we always strive
                            to stay up-to-date with the latest version of
                            WordPress. You might experience certain performance
                            or functionality glitches with the products if you
                            use any version prior to that.
                          </span>
                        </li>
                        <li style={{ fontWeight: "400" }}>
                          <strong>HTML Themes:</strong>
                          <span style={{ fontWeight: "400" }}>
                            <br />
                          </span>
                          <span style={{ fontWeight: "400" }}>
                            The products designed are developed possess static
                            features. Whereas, in need of forms or any other
                            dynamic features, you will have to code as per your
                            product requirement.
                          </span>
                        </li>
                      </ol>
                      <h3>
                        <span style={{ fontWeight: "400" }}>Delivery</span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Any kind of information related to your purchased
                          product(s) will be emailed to the email address that
                          you have provided once we receive your payment. This
                          process usually takes few minutes, but for some issue
                          might get extended to 24 hours. In case you do not
                          receive your email up to the allocated time period,
                          you can contact us through our contact page. Also, you
                          can access the products that you have purchased from
                          your account in the bootstrap theme after logging in.
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>Ownership</span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          The Bootstrap Themes claims ownership on all of its
                          products. Hence, you may not demand your any kind of
                          proprietorship over any of our products, modified or
                          unmodified. We provide our products without any
                          warranty, as it is. You cannot hold our legit person
                          accountable to any kind of damage including, but not
                          limited to direct, indirect, special, incidental or
                          consequential damages or other losses caused due to
                          inefficiency in using our products.
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>
                          Browser Compatibility
                        </span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          We are solely concerned with providing the best
                          possible quality in products to our users. Thus, we
                          make it sure that our themes and templates are
                          compatible across most major browsers including the
                          latest version of modern web browsers such as Safari,
                          Firefox, Internet explorer 9+ and Chrome.
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>Updates</span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          We provide our license holders who have an active and
                          valid subscription and licence key with one click
                          updates. As long as the license key generated from the
                          purchase is valid and active, you can get access to
                          the updates. We have provision of updates for a 1 year
                          time period.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          We advise you to constantly get updated with the
                          current version of our themes for your usage. Since,
                          we constantly update our themes to be compatible with
                          the latest version of WordPress.
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>Theme Support</span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Please go through to{" "}
                        </span>
                        <a href="https://thebootstrapthemes.com/help-support-policy/">
                          <span style={{ fontWeight: "400" }}>
                            Help and Support Policy page
                          </span>
                        </a>
                        <span style={{ fontWeight: "400" }}>
                          {" "}
                          for further details.
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>Price Changes</span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Please be informed that it is our sole right to modify
                          or disallow, permanently or temporarily a subscription
                          at any point of time and from time to time with or
                          without any prior notice.
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>Refund Policy</span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Please go through to{" "}
                        </span>
                        <a href="https://thebootstrapthemes.com/refund-policy/">
                          <span style={{ fontWeight: "400" }}>
                            Refund Policy page
                          </span>
                        </a>
                        <span style={{ fontWeight: "400" }}>
                          {" "}
                          for further details.
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>Email</span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          We occasionally send you emails concerned with the
                          purchase of the product(s) from our company. We also
                          send you email newsletters concerning the WordPress
                          and bootstrap themes promotions and updates. We assure
                          you that we do not sell or release your email to any
                          third party vendors. You may withdraw your emails at
                          any time without fine or penalty.{" "}
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>
                          License Agreement:
                        </span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          We believe that you have provided your full consent
                          and read and agreed to the Terms and Conditions
                          mentioned and explained on this page while purchasing
                          our product(s). We hold the right to change or modify
                          the present Terms and Conditions solely without any
                          prior consent or notice.
                        </span>
                      </p>
                      <h3>
                        <span style={{ fontWeight: "400" }}>Severability</span>
                      </h3>
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          If any part of this agreement is declared
                          unenforceable or invalid, all remaining clauses in
                          this agreement shall remain binding on the customer.
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Footer, Contact, Delivery, Terms };
