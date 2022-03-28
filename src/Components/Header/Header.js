import React, { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Header(props) {
    const [t, i18n] = useTranslation();

    return (
        // <!-- header of the page -->
        <header id="header" className="sticky-header">
            <div className="max-container">
                {/* <!-- main site logo --> */}
                <strong className="logo">
                    <a href="/">
                        <i className="icon">&</i>
                        <span className="img">
                            <img src={props.Logo} alt="Magic Photography" />
                        </span>
                    </a>
                </strong>
                {/* <!-- align-right --> */}
                <div className="align-right">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                            <div className="navbar-header">
                                <button
                                    type="button"
                                    className="navbar-toggle collapsed"
                                    data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">
                                        Toggle navigation
                                    </span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div
                                className="collapse navbar-collapse"
                                id="bs-example-navbar-collapse-1"
                            >
                                <ul className="nav navbar-nav" id="nav-smooth">
                                    <li className="active">
                                        <a
                                            href="/#wrapper"
                                            className="smoothanchor"
                                        >
                                            {t("header.link-01")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/#section1"
                                            className="smoothanchor"
                                        >
                                            {t("header.link-02")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/#section2"
                                            className="smoothanchor"
                                        >
                                            {t("header.link-03")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/#section3"
                                            className="smoothanchor"
                                        >
                                            {t("header.link-04")}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/#section5"
                                            className="smoothanchor"
                                        >
                                            {t("header.link-05")}
                                        </a>
                                    </li>

                                    <li>
                                        <select
                                            id="SelectLang"
                                            className="LangSelect"
                                            onChange={() => {
                                                let val =
                                                    document.getElementById(
                                                        "SelectLang"
                                                    );
                                                // val.value === "EN"
                                                //     ? i18n.changeLanguage("en")
                                                //     : val.value === "AR"
                                                //     ? i18n.changeLanguage("ar")
                                                //     : val.value === "RU"
                                                //     ? i18n.changeLanguage("ru")
                                                //             : "";
                                                switch (val.value) {
                                                    default:
                                                        i18n.changeLanguage(
                                                            "en"
                                                        );
                                                        break;
                                                    case "AR":
                                                        i18n.changeLanguage(
                                                            "ar"
                                                        );

                                                        break;
                                                    case "EN":
                                                        i18n.changeLanguage(
                                                            "en"
                                                        );
                                                        break;
                                                    case "RU":
                                                        i18n.changeLanguage(
                                                            "ru"
                                                        );
                                                        break;
                                                }
                                            }}
                                        >
                                            <option
                                                className="LangSelect_Option"
                                                defaultValue={"AR"}
                                            >
                                                AR
                                            </option>
                                            <option
                                                className="LangSelect_Option"
                                                defaultValue={"EN"}
                                            >
                                                EN
                                            </option>
                                            <option
                                                className="LangSelect_Option"
                                                defaultValue={"RU"}
                                            >
                                                RU
                                            </option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- /.navbar-collapse --> */}
                        </div>
                        {/* <!-- /.container-fluid --> */}
                    </nav>
                </div>
            </div>
        </header>
    );
}
