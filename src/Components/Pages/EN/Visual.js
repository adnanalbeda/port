import { useTranslation } from "react-i18next";
export default function Visual(props) {
    const [t, i18n] = useTranslation();
    return (
        // <!-- visual -->
        <div className="visual">
            <div className="max-container">
                <div className="slideshow" id="main-slider">
                    <div className="slide">
                        <div className="caption">
                            <div className="text">
                                <span className="txt">
                                    {t("visual.txt-01")}
                                </span>
                                <h1>
                                    <span className="icon">&</span>
                                    <span className="light">
                                        {t("visual.light-01")}
                                    </span>
                                    <span className="add">
                                        {t("visual.add-01")}
                                    </span>
                                    <span className="add2">
                                        {t("visual.add-02-01")}
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <div className="image">
                            <img
                                src={props.Image_970_875}
                                alt="img description"
                            />
                        </div>
                        <span className="box"></span>
                        <ul className="social-networks">
                            <li>
                                <a
                                    className="facebook"
                                    href="https://facebook.com"
                                >
                                    <i className="icon-facebook"></i>
                                    <span className="hidden">facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="https://www.twitter.com"
                                >
                                    <i className="icon-twitter"></i>
                                    <span className="hidden">twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="instagram"
                                    href="https://www.instagram.com"
                                >
                                    <i
                                        className="fab fa-tiktok"
                                        aria-hidden="true"
                                    ></i>
                                    <span className="hidden">tiktok</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="slide">
                        <div className="caption">
                            <div className="text">
                                <span className="txt">
                                    {t("visual.txt-02")}
                                </span>
                                <h1>
                                    <span className="icon">&</span>
                                    <span className="light">
                                        {t("visual.light-02")}
                                    </span>
                                    <span className="add">
                                        {t("visual.add-02")}
                                    </span>
                                    <span className="add2">
                                        {t("visual.add-02-02")}
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <div className="image">
                            <img
                                src={props.Image_970_875_2}
                                alt="img description"
                            />
                        </div>
                        <span className="box"></span>
                        <ul className="social-networks">
                            <li>
                                <a
                                    className="facebook"
                                    href="https://www.facebook.com"
                                >
                                    <i className="icon-facebook"></i>
                                    <span className="hidden">facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="https://www.twitter.com"
                                >
                                    <i className="icon-twitter"></i>
                                    <span className="hidden">twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="Instagram"
                                    href="https://www.instagram.com"
                                >
                                    <i
                                        className="fab fa-tiktok"
                                        aria-hidden="true"
                                    ></i>
                                    <span className="hidden">tiktok</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="slide">
                        <div className="caption">
                            <div className="text">
                                <span className="txt">
                                    {t("visual.txt-03")}
                                </span>
                                <h1>
                                    <span className="icon">&</span>
                                    <span className="light">
                                        {t("visual.light-03")}
                                    </span>
                                    <span className="add">
                                        {t("visual.add-03")}
                                    </span>
                                    <span className="add2">
                                        {t("visual.add-02-03")}
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <div className="image">
                            <img
                                src={props.Image_970_875_3}
                                alt="img description"
                            />
                        </div>
                        <span className="box"></span>
                        <ul className="social-networks">
                            <li>
                                <a
                                    className="facebook"
                                    href="https://www.facebook.com"
                                >
                                    <i className="icon-facebook"></i>
                                    <span className="hidden">facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="https://www.twitter.com"
                                >
                                    <i className="icon-twitter"></i>
                                    <span className="hidden">twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="instagram"
                                    href="https://www.instagram.com"
                                >
                                    <i
                                        className="fab fa-tiktok"
                                        aria-hidden="true"
                                    ></i>
                                    <span className="hidden">tiktok</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
