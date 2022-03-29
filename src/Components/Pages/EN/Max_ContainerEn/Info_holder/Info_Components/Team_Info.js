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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                    >
                                        <g transform="translate(-1409 -2274)">
                                            <g
                                                transform="translate(1409 2274)"
                                                fill="none"
                                                stroke="#272727"
                                                stroke-width="1"
                                            >
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="36"
                                                    stroke="none"
                                                />
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="35.5"
                                                    fill="none"
                                                />
                                            </g>
                                            <path
                                                d="M43.957,23.677l1.169-7.618H37.817V11.116C37.817,9.032,38.838,7,42.111,7h3.323V.515A40.525,40.525,0,0,0,39.536,0c-6.02,0-9.954,3.649-9.954,10.254V16.06H22.89v7.618h6.691V42.093h8.235V23.677Z"
                                                transform="translate(1411.109 2289)"
                                                fill="#272727"
                                            />
                                        </g>
                                    </svg>
                                    <span>facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="https://www.twitter.com"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                    >
                                        <g transform="translate(-1597 -2274)">
                                            <g
                                                transform="translate(1597 2274)"
                                                fill="none"
                                                stroke="#272727"
                                                stroke-width="1"
                                            >
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="36"
                                                    stroke="none"
                                                />
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="35.5"
                                                    fill="none"
                                                />
                                            </g>
                                            <path
                                                d="M20.967,42.323a11.052,11.052,0,0,0,0,22.1,11.052,11.052,0,0,0,0-22.1Zm0,18.232a7.185,7.185,0,1,1,7.012-7.183,7.112,7.112,0,0,1-7.012,7.183ZM34.708,41.871a2.516,2.516,0,1,1-2.516-2.577A2.541,2.541,0,0,1,34.708,41.871Zm7.143,2.616c-.16-3.452-.929-6.51-3.4-9.029S33.01,32.15,29.64,31.976c-3.473-.2-13.882-.2-17.355,0-3.36.163-6.345.952-8.814,3.471S.242,41.025.073,44.477c-.2,3.558-.2,14.222,0,17.78.16,3.452.929,6.51,3.4,9.029s5.444,3.308,8.814,3.481c3.473.2,13.882.2,17.355,0,3.37-.163,6.355-.952,8.814-3.481s3.229-5.577,3.4-9.029C42.049,58.7,42.049,48.044,41.851,44.487ZM37.365,66.074a7.188,7.188,0,0,1-4,4.1c-2.769,1.125-9.339.865-12.4.865s-9.64.25-12.4-.865a7.188,7.188,0,0,1-4-4.1c-1.1-2.837-.845-9.568-.845-12.7s-.244-9.875.845-12.7a7.188,7.188,0,0,1,4-4.1c2.769-1.125,9.339-.865,12.4-.865s9.64-.25,12.4.865a7.188,7.188,0,0,1,4,4.1c1.1,2.837.845,9.568.845,12.7S38.463,63.247,37.365,66.074Z"
                                                transform="translate(1612.075 2256.175)"
                                                fill="#272727"
                                            />
                                        </g>
                                    </svg>
                                    <span>twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="tiktok"
                                    href="https://www.tiktok.com"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                    >
                                        <g transform="translate(-1508 -2274)">
                                            <g
                                                transform="translate(1508 2274)"
                                                fill="none"
                                                stroke="#272727"
                                                stroke-width="1"
                                            >
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="36"
                                                    stroke="none"
                                                />
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="35.5"
                                                    fill="none"
                                                />
                                            </g>
                                            <path
                                                d="M38,17.749A17.762,17.762,0,0,1,27.617,14.43V29.542A13.744,13.744,0,1,1,15.76,15.923v7.6a6.31,6.31,0,1,0,4.416,6.019V0h7.441a10.245,10.245,0,0,0,.157,1.875h0a10.331,10.331,0,0,0,4.558,6.783A10.268,10.268,0,0,0,38,10.361Z"
                                                transform="translate(1524.872 2288)"
                                                fill="#272727"
                                            />
                                        </g>
                                    </svg>
                                    <span>tiktok</span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                    >
                                        <g transform="translate(-1409 -2274)">
                                            <g
                                                transform="translate(1409 2274)"
                                                fill="none"
                                                stroke="#272727"
                                                stroke-width="1"
                                            >
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="36"
                                                    stroke="none"
                                                />
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="35.5"
                                                    fill="none"
                                                />
                                            </g>
                                            <path
                                                d="M43.957,23.677l1.169-7.618H37.817V11.116C37.817,9.032,38.838,7,42.111,7h3.323V.515A40.525,40.525,0,0,0,39.536,0c-6.02,0-9.954,3.649-9.954,10.254V16.06H22.89v7.618h6.691V42.093h8.235V23.677Z"
                                                transform="translate(1411.109 2289)"
                                                fill="#272727"
                                            />
                                        </g>
                                    </svg>
                                    <span>facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="https://www.twitter.com"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                    >
                                        <g transform="translate(-1597 -2274)">
                                            <g
                                                transform="translate(1597 2274)"
                                                fill="none"
                                                stroke="#272727"
                                                stroke-width="1"
                                            >
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="36"
                                                    stroke="none"
                                                />
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="35.5"
                                                    fill="none"
                                                />
                                            </g>
                                            <path
                                                d="M20.967,42.323a11.052,11.052,0,0,0,0,22.1,11.052,11.052,0,0,0,0-22.1Zm0,18.232a7.185,7.185,0,1,1,7.012-7.183,7.112,7.112,0,0,1-7.012,7.183ZM34.708,41.871a2.516,2.516,0,1,1-2.516-2.577A2.541,2.541,0,0,1,34.708,41.871Zm7.143,2.616c-.16-3.452-.929-6.51-3.4-9.029S33.01,32.15,29.64,31.976c-3.473-.2-13.882-.2-17.355,0-3.36.163-6.345.952-8.814,3.471S.242,41.025.073,44.477c-.2,3.558-.2,14.222,0,17.78.16,3.452.929,6.51,3.4,9.029s5.444,3.308,8.814,3.481c3.473.2,13.882.2,17.355,0,3.37-.163,6.355-.952,8.814-3.481s3.229-5.577,3.4-9.029C42.049,58.7,42.049,48.044,41.851,44.487ZM37.365,66.074a7.188,7.188,0,0,1-4,4.1c-2.769,1.125-9.339.865-12.4.865s-9.64.25-12.4-.865a7.188,7.188,0,0,1-4-4.1c-1.1-2.837-.845-9.568-.845-12.7s-.244-9.875.845-12.7a7.188,7.188,0,0,1,4-4.1c2.769-1.125,9.339-.865,12.4-.865s9.64-.25,12.4.865a7.188,7.188,0,0,1,4,4.1c1.1,2.837.845,9.568.845,12.7S38.463,63.247,37.365,66.074Z"
                                                transform="translate(1612.075 2256.175)"
                                                fill="#272727"
                                            />
                                        </g>
                                    </svg>
                                    <span>twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="tiktok"
                                    href="https://www.tiktok.com"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                    >
                                        <g transform="translate(-1508 -2274)">
                                            <g
                                                transform="translate(1508 2274)"
                                                fill="none"
                                                stroke="#272727"
                                                stroke-width="1"
                                            >
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="36"
                                                    stroke="none"
                                                />
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="35.5"
                                                    fill="none"
                                                />
                                            </g>
                                            <path
                                                d="M38,17.749A17.762,17.762,0,0,1,27.617,14.43V29.542A13.744,13.744,0,1,1,15.76,15.923v7.6a6.31,6.31,0,1,0,4.416,6.019V0h7.441a10.245,10.245,0,0,0,.157,1.875h0a10.331,10.331,0,0,0,4.558,6.783A10.268,10.268,0,0,0,38,10.361Z"
                                                transform="translate(1524.872 2288)"
                                                fill="#272727"
                                            />
                                        </g>
                                    </svg>
                                    <span>tiktok</span>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                    >
                                        <g transform="translate(-1409 -2274)">
                                            <g
                                                transform="translate(1409 2274)"
                                                fill="none"
                                                stroke="#272727"
                                                stroke-width="1"
                                            >
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="36"
                                                    stroke="none"
                                                />
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="35.5"
                                                    fill="none"
                                                />
                                            </g>
                                            <path
                                                d="M43.957,23.677l1.169-7.618H37.817V11.116C37.817,9.032,38.838,7,42.111,7h3.323V.515A40.525,40.525,0,0,0,39.536,0c-6.02,0-9.954,3.649-9.954,10.254V16.06H22.89v7.618h6.691V42.093h8.235V23.677Z"
                                                transform="translate(1411.109 2289)"
                                                fill="#272727"
                                            />
                                        </g>
                                    </svg>
                                    <span>facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="https://www.twitter.com"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                    >
                                        <g transform="translate(-1597 -2274)">
                                            <g
                                                transform="translate(1597 2274)"
                                                fill="none"
                                                stroke="#272727"
                                                stroke-width="1"
                                            >
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="36"
                                                    stroke="none"
                                                />
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="35.5"
                                                    fill="none"
                                                />
                                            </g>
                                            <path
                                                d="M20.967,42.323a11.052,11.052,0,0,0,0,22.1,11.052,11.052,0,0,0,0-22.1Zm0,18.232a7.185,7.185,0,1,1,7.012-7.183,7.112,7.112,0,0,1-7.012,7.183ZM34.708,41.871a2.516,2.516,0,1,1-2.516-2.577A2.541,2.541,0,0,1,34.708,41.871Zm7.143,2.616c-.16-3.452-.929-6.51-3.4-9.029S33.01,32.15,29.64,31.976c-3.473-.2-13.882-.2-17.355,0-3.36.163-6.345.952-8.814,3.471S.242,41.025.073,44.477c-.2,3.558-.2,14.222,0,17.78.16,3.452.929,6.51,3.4,9.029s5.444,3.308,8.814,3.481c3.473.2,13.882.2,17.355,0,3.37-.163,6.355-.952,8.814-3.481s3.229-5.577,3.4-9.029C42.049,58.7,42.049,48.044,41.851,44.487ZM37.365,66.074a7.188,7.188,0,0,1-4,4.1c-2.769,1.125-9.339.865-12.4.865s-9.64.25-12.4-.865a7.188,7.188,0,0,1-4-4.1c-1.1-2.837-.845-9.568-.845-12.7s-.244-9.875.845-12.7a7.188,7.188,0,0,1,4-4.1c2.769-1.125,9.339-.865,12.4-.865s9.64-.25,12.4.865a7.188,7.188,0,0,1,4,4.1c1.1,2.837.845,9.568.845,12.7S38.463,63.247,37.365,66.074Z"
                                                transform="translate(1612.075 2256.175)"
                                                fill="#272727"
                                            />
                                        </g>
                                    </svg>
                                    <span>twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="tiktok"
                                    href="https://www.tiktok.com"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                    >
                                        <g transform="translate(-1508 -2274)">
                                            <g
                                                transform="translate(1508 2274)"
                                                fill="none"
                                                stroke="#272727"
                                                stroke-width="1"
                                            >
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="36"
                                                    stroke="none"
                                                />
                                                <circle
                                                    cx="36"
                                                    cy="36"
                                                    r="35.5"
                                                    fill="none"
                                                />
                                            </g>
                                            <path
                                                d="M38,17.749A17.762,17.762,0,0,1,27.617,14.43V29.542A13.744,13.744,0,1,1,15.76,15.923v7.6a6.31,6.31,0,1,0,4.416,6.019V0h7.441a10.245,10.245,0,0,0,.157,1.875h0a10.331,10.331,0,0,0,4.558,6.783A10.268,10.268,0,0,0,38,10.361Z"
                                                transform="translate(1524.872 2288)"
                                                fill="#272727"
                                            />
                                        </g>
                                    </svg>
                                    <span>tiktok</span>
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
