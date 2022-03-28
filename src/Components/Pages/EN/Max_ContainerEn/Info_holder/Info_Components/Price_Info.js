import { useTranslation } from "react-i18next";
export default function PriceInfo() {
    const [t, i18n] = useTranslation();
    return (
        // {/* <!-- price info --> */}
        <div className="info price">
            <div id="section5" className="smooth-section"></div>
            <div className="img-frame wow fadeInLeft" data-wow-delay="0.6s">
                <h2 className="tild">{t("infoPrice.tild")}</h2>
                <span className="num">{t("infoPrice.num")}</span>
                <a href="/order" className="more">
                    {t("infoPrice.more")}
                </a>
            </div>
            <div className="txt-frame">
                <ul className="pricing">
                    <li
                        className="wow fadeInUp"
                        id="firstPrice"
                        data-wow-delay="0.6s"
                    >
                        <div className="icon">
                            <div className="ico-text">
                                <div className="ico-box">
                                    <span className="price">
                                        <sup>{t("infoPrice.Icon_Dollar")}</sup>
                                        {t("infoPrice.Package_1.Dollar_Prices")}
                                    </span>
                                    <span className="month">
                                        {t(
                                            "infoPrice.Package_1.Dirham_Prices"
                                        ) + t("infoPrice.Icon_Dirham")}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <strong className="package">
                            {t("infoPrice.Package_1.Plan")}
                        </strong>
                        <ul className="list">
                            <li>{t("infoPrice.Package_1.Server_One")}</li>
                            <li>{t("infoPrice.Package_1.Server_Two")}</li>
                            <li>{t("infoPrice.Package_1.Server_Three")}</li>
                            <li>{t("infoPrice.Package_1.Server_Four")}</li>
                            <li>{t("infoPrice.Package_1.Server_Five")}</li>
                        </ul>
                        <a href="/order" className="plan">
                            {t("infoPrice.SelectPlan")}
                        </a>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.8s">
                        <div className="icon">
                            <div className="ico-text">
                                <div className="ico-box">
                                    <span className="price">
                                        <sup>{t("infoPrice.Icon_Dollar")}</sup>
                                        {t("infoPrice.Package_2.Dollar_Prices")}
                                    </span>
                                    <span className="month">
                                        {t(
                                            "infoPrice.Package_2.Dirham_Prices"
                                        ) + t("infoPrice.Icon_Dirham")}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <strong className="package">
                            {t("infoPrice.Package_2.Plan")}
                        </strong>
                        <ul className="list">
                            <li>{t("infoPrice.Package_2.Server_One")}</li>
                            <li>{t("infoPrice.Package_2.Server_Two")}</li>
                            <li>{t("infoPrice.Package_2.Server_Three")}</li>
                            <li>{t("infoPrice.Package_2.Server_Four")}</li>
                            <li>{t("infoPrice.Package_2.Server_Five")}</li>
                        </ul>
                        <a href="/order" className="plan">
                            {t("infoPrice.SelectPlan")}
                        </a>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="1s">
                        <div className="icon">
                            <div className="ico-text">
                                <div className="ico-box">
                                    <span className="price">
                                        <sup>{t("infoPrice.Icon_Dollar")}</sup>
                                        {t("infoPrice.Package_3.Dollar_Prices")}
                                    </span>
                                    <span className="month">
                                        {t(
                                            "infoPrice.Package_3.Dirham_Prices"
                                        ) + t("infoPrice.Icon_Dirham")}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <strong className="package">
                            {t("infoPrice.Package_3.Plan")}
                        </strong>
                        <ul className="list">
                            <li>{t("infoPrice.Package_3.Server_One")}</li>
                            <li>{t("infoPrice.Package_3.Server_Two")}</li>
                            <li>{t("infoPrice.Package_3.Server_Three")}</li>
                            <li>{t("infoPrice.Package_3.Server_Four")}</li>
                            <li>{t("infoPrice.Package_3.Server_Five")}</li>
                        </ul>
                        <a href="/order" className="plan">
                            {t("infoPrice.SelectPlan")}
                        </a>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="1.2s">
                        <div className="icon">
                            <div className="ico-text">
                                <div className="ico-box">
                                    <span className="price">
                                        <sup>{t("infoPrice.Icon_Dollar")}</sup>
                                        {t("infoPrice.Package_4.Dollar_Prices")}
                                    </span>
                                    <span className="month">
                                        {t(
                                            "infoPrice.Package_4.Dirham_Prices"
                                        ) + t("infoPrice.Icon_Dirham")}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <strong className="package">
                            {t("infoPrice.Package_4.Plan")}
                        </strong>
                        <ul className="list">
                            <li>{t("infoPrice.Package_4.Server_One")}</li>
                            <li>{t("infoPrice.Package_4.Server_Two")}</li>
                        </ul>
                        <a href="/order" className="plan">
                            {t("infoPrice.SelectPlan")}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
