import React, { Suspense, useState } from "react";
import PageContent from "./Components/PageContent.js";
import NavBar from "./Components/NavBar/NavBar.js";
import { Footer } from "./Components/Footer/Footer.js";
import * as serviceWorker from './serviceWorker';
import './setupProxy.js';
// import "./css/popup.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar cart={cart} />
      <PageContent setCart={setCart} cart={cart} />
      <Footer />
    </Suspense>
  );
}
serviceWorker.unregister();

export default App;
