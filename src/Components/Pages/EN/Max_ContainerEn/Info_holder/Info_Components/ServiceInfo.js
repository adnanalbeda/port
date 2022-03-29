import { useTranslation } from "react-i18next";
export default function WorkInfo(props) {
    const [t, i18n] = useTranslation();
    return (
        // <!-- service info -->
        <div className="info service-area">
            <div className="txt-frame">
                <ul className="services">
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                        <h3>
                            <i className={t("ServiceInfo.Service-01.icon")}></i>
                            <span>{t("ServiceInfo.Service-01.heading")}</span>
                        </h3>
                        <p>{t("ServiceInfo.Service-01.description")}</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                        <h3>
                            <i className={t("ServiceInfo.Service-02.icon")}></i>
                            <span>{t("ServiceInfo.Service-02.heading")}</span>
                        </h3>
                        <p>{t("ServiceInfo.Service-02.description")}</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                        <h3>
                            <i className={t("ServiceInfo.Service-03.icon")}></i>
                            <span>{t("ServiceInfo.Service-03.heading")}</span>
                        </h3>
                        <p>{t("ServiceInfo.Service-03.description")}</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                        <h3>
                            <i className={t("ServiceInfo.Service-04.icon")}></i>
                            <span>{t("ServiceInfo.Service-04.heading")}</span>
                        </h3>
                        <p>{t("ServiceInfo.Service-04.description")}</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                        <h3>
                            <i className={t("ServiceInfo.Service-05.icon")}></i>
                            <span>{t("ServiceInfo.Service-05.heading")}</span>
                        </h3>
                        <p>{t("ServiceInfo.Service-05.description")}</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                        <h3>
                            <i className={t("ServiceInfo.Service-06.icon")}></i>
                            <span>{t("ServiceInfo.Service-06.heading")}</span>
                        </h3>
                        <p>{t("ServiceInfo.Service-06.description")}</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                        <h3>
                            <i className={t("ServiceInfo.Service-07.icon")}></i>
                            <span>{t("ServiceInfo.Service-07.heading")}</span>
                        </h3>
                        <p>{t("ServiceInfo.Service-07.description")}</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                        <h3>
                            <i className={t("ServiceInfo.Service-08.icon")}></i>
                            <span>{t("ServiceInfo.Service-08.heading")}</span>
                        </h3>
                        <p>{t("ServiceInfo.Service-08.description")}</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                        <h3>
                            <i className={t("ServiceInfo.Service-09.icon")}></i>
                            <span>{t("ServiceInfo.Service-09.heading")}</span>
                        </h3>
                        <p>{t("ServiceInfo.Service-09.description")}</p>
                    </li>
                </ul>
            </div>
            <div className="img-frame wow fadeInRight" data-wow-delay="0.6s">
                <h2 className="tild">{t("ServiceInfo.tild")}</h2>
                <span className="num">{t("ServiceInfo.num")}</span>
                <a href="#" className="more">
                    {t("ServiceInfo.more")}
                </a>
            </div>
        </div>
    );
}
