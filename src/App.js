import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
/* Routers */
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* Css Files */
import "./Css/animate.css";
import "./Css/bootstrap.css";
// import "./Css/font-awesome.min.css";
import "./style.css";
import "./Css/fonts.css";
import "./Css/responsive.css";
import "./Css/color/color.css";
import "./AWDSMainRU.css";
import "./AWDSMainAR.css";
/* LOGO */
import Logo from "./images/logo.svg";
import FooterLogo from "./images/logo-footer.svg";
/* Pages */
import Main from "./Components/Pages/Main";
// import MainAR from "./Components/Pages/MainAR";
import Contact from "./Components/Pages/Contact";

/* Components */
import Header from "./Components/Header/Header";
// import HeaderAR from "./Components/Header/HeaderAR";
import Footer from "./Components/Footer/Footer";
function App() {
    return (
        <div className="App">
            <div id="pre-loader" className="loader-container">
                <div className="loader">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div id="wrapper">
                <Header Logo={Logo} />
                {/* <HeaderAR Logo={Logo} /> */}
                <Router>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/order" element={<Contact />} />
                    </Routes>
                </Router>
                {/* <Main /> */}
                {/* <MainAR /> */}
                <Footer Footer_Logo={FooterLogo} />
                <span id="back-top" className="fa fa-arrow-up"></span>
            </div>
        </div>
    );
}

export default App;
