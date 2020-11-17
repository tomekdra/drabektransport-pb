import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LazyComponent from "./components/LazyComponent/LazyComponent";
import ScrollToTop from "./components/ScrollToTop";

const Home = React.lazy(() => import("./components/Home"));
const Certificates = React.lazy(() =>
  import("./components/Certificates/Certificates")
);
const ContactUs = React.lazy(() => import("./components/ContactUs/ContactUs"));
const PageNotFound = React.lazy(() =>
  import("./components/PageNotFound/PageNotFound")
);
const Privacy = React.lazy(() => import("./components/Privacy/Privacy"));
const Services = React.lazy(() => import("./components/Services/Services"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={LazyComponent()}>
        <ScrollToTop />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/certyfikaty"} component={Certificates} />
          <Route path={"/kontakt"} component={ContactUs} />
          <Route path={"/privacy"} component={Privacy} />
          <Route path={"/uslugi"} component={Services} />
          <Route path={"/onas"} component={AboutUs} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
