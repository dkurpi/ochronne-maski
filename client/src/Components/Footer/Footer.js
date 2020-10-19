import React from "react";

function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <footer class="page-footer font-small blue  pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3 contact__footer">
              <h5 class="text-uppercase">Kontakt</h5>
              <div>
                <a href="tel:534325980">
                  <i className="fas fa-mobile-alt footer_contact"></i>534 325
                  980
                </a>
              </div>
              <div>
                <a href="mailto:info@ochronne-maski.pl">
                  <i className="fas fa-envelope footer_contact"></i>
                  info@ochronne-maski.pl
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
    </>
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
                      Wysyłka paczki do 24h.
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
                      <hr />
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
                      <div>
                        <a href="mailto:info@ochronne-maski.pl">
                          <i className="fas fa-envelope footer_contact"></i>
                          info@ochronne-maski.pl
                        </a>
                      </div>
                      <div>
                        <a href="tel:534325980">
                          <i className="fas fa-mobile-alt footer_contact"></i>
                          534 325 980
                        </a>
                      </div>
                      <hr />
                      <p style={{ fontWeight: "400" }}>
                        Krawiectwo Konfekcyjne kacztex
                      </p>
                      Franciszek Kaczor
                      <br />
                      34-713 Skawa
                      <br />
                      Skawa 558A
                      <br />
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
                            Skawie
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
                          Czym są ciasteczka?
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
                          Firma używa ciasteczek w różnych celach: by strony i
                          aplikacje działały szybciej i by były łatwiejsze w
                          użyciu, aby lepiej dopasować treści i reklamy do
                          twoich oczekiwań i zainteresowań oraz do zbierania
                          anonimowych, zagregowanych statystyk, które pomagają w
                          poprawianiu funkcjonalności i zawartości stron i
                          aplikacji. Używając ciasteczek w wyżej opisany sposób
                          nigdy nie identyfikujemy tożsamości użytkowników na
                          podstawie informacji przechowywanych w ciasteczkach.
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
