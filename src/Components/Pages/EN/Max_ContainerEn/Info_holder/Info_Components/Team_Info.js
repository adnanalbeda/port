import { useTranslation } from "react-i18next";
export default function TeamInfo(props) {
    const [t, i18n] = useTranslation();
    return (
        // {/* <!-- team info --> */}
        <div className="info team">
            <div id="section2" className="smooth-section"></div>
            <div className="txt-frame wow fadeInUp" data-wow-delay="0.6s">
                <ul className="text-box team1">
                    <li>
                        <h2>
                            <a href="#a">{t("infoTeam.team-01-Name")}</a>
                        </h2>
                        <span>{t("infoTeam.team-01-Job")}</span>
                        <ul className="social-networks">
                            <li>
                                <a
                                    className="facebook"
                                    href="https://www.facebook.com"
                                >
                                    <i className="icon-facebook"></i>
                                    <span>facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="https://www.twitter.com"
                                >
                                    <i className="icon-twitter"></i>
                                    <span>twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="instagram"
                                    href="https://www.instagram.com"
                                >
                                    <i
                                        className="fa fa-instagram"
                                        aria-hidden="true"
                                    ></i>
                                    <span>instagram</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>{t("infoTeam.team-01-Description")}</p>
                    </li>
                </ul>
                <ul className="text-box team2">
                    <li>
                        <h2>
                            <a href="#a">{t("infoTeam.team-02-Name")}</a>
                        </h2>
                        <span>{t("infoTeam.team-02-Job")}</span>
                        <ul className="social-networks">
                            <li>
                                <a
                                    className="facebook"
                                    href="https://www.facebook.com"
                                >
                                    <i className="icon-facebook"></i>
                                    <span>facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="https://www.twitter.com"
                                >
                                    <i className="icon-twitter"></i>
                                    <span>twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="instagram"
                                    href="https://www.instagram.com"
                                >
                                    <i
                                        className="fa fa-instagram"
                                        aria-hidden="true"
                                    ></i>
                                    <span>instagram</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>{t("infoTeam.team-02-Description")}</p>
                    </li>
                </ul>
                <ul className="text-box team3">
                    <li>
                        <h2>
                            <a href="#a">{t("infoTeam.team-03-Name")}</a>
                        </h2>
                        <span>{t("infoTeam.team-03-Job")}</span>
                        <ul className="social-networks">
                            <li>
                                <a
                                    className="facebook"
                                    href="https://www.facebook.com"
                                >
                                    <i className="icon-facebook"></i>
                                    <span>facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="https://www.twitter.com"
                                >
                                    <i className="icon-twitter"></i>
                                    <span>twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="instagram"
                                    href="https://www.instagram.com"
                                >
                                    <i
                                        className="fa fa-instagram"
                                        aria-hidden="true"
                                    ></i>
                                    <span>instagram</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>{t("infoTeam.team-03-Description")}</p>
                    </li>
                </ul>
                <div className="img-holder wow fadeInUp" data-wow-delay="0.5s">
                    <div className="box box1">
                        <div className="img">
                            <a href="#a" className="team1-opener">
                                <img
                                    src={props.Image_375_465}
                                    alt="img description"
                                />
                            </a>
                        </div>
                        <div className="txt-box">
                            <h3>
                                <a href="#a" className="team1-opener">
                                    {t("infoTeam.team-01-opener")}
                                </a>
                            </h3>
                            <span className="designation">
                                {t("infoTeam.designation-01")}
                            </span>
                        </div>
                    </div>
                    <div className="box box2">
                        <div className="img">
                            <a href="#a" className="team2-opener">
                                <img
                                    src={props.Image_375_465_2}
                                    alt="img description"
                                />
                            </a>
                        </div>
                        <div className="txt-box">
                            <h3>
                                <a href="#a" className="team2-opener">
                                    {t("infoTeam.team-02-opener")}
                                </a>
                            </h3>
                            <span className="designation">
                                {t("infoTeam.designation-02")}
                            </span>
                        </div>
                    </div>
                    <div className="box box3">
                        <div className="img">
                            <a href="#a" className="team3-opener">
                                <img
                                    src={props.Image_375_465_3}
                                    alt="img description"
                                />
                            </a>
                        </div>
                        <div className="txt-box">
                            <h3>
                                <a href="#a" className="team3-opener">
                                    {t("infoTeam.team-03-opener")}
                                </a>
                            </h3>
                            <span className="designation">
                                {t("infoTeam.designation-03")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-frame">
                <div className="image wow fadeInRight" data-wow-delay="0.6s">
                    <a href="#a">
                        <img
                            src={props.Image_570_715}
                            alt="img description"
                            className="team1-img"
                        />
                        <img
                            src={props.Image_570_715_2}
                            alt="img description"
                            className="team2-img"
                        />
                        <img
                            src={props.Image_570_715_3}
                            alt="img description"
                            className="team3-img"
                        />
                    </a>
                </div>
                <div className="text wow fadeInRight" data-wow-delay="0.3s">
                    <h2 className="tild">{t("infoTeam.tild")}</h2>
                    <span className="num">{t("infoTeam.num")}</span>
                    <a href="#a" className="more">
                        {t("infoTeam.more")}
                    </a>
                </div>
            </div>
        </div>
    );
}
