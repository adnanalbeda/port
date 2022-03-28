import { useTranslation } from "react-i18next";
export default function Clientarea(props) {
    const [t, i18n] = useTranslation();
    return (
        // {/* <!-- client-area --> */}
        <ul className="client-area">
            <li className="wow fadeInUp" data-wow-delay="0.6s">
                <div className="box">
                    <i className="ico heart">
                        <img src={props.Icon_02} alt="img description" />
                    </i>
                    <strong className="title">
                        {t("ClientArea.Icon-02.Title")}
                    </strong>
                    <span className="count counter">
                        {t("ClientArea.Icon-02.Count")}
                    </span>
                </div>
            </li>
            <li className="wow fadeInUp" data-wow-delay="0.8s">
                <div className="box">
                    <i className="ico task">
                        <img src={props.Icon_03} alt="img description" />
                    </i>
                    <strong className="title">
                        {t("ClientArea.Icon-03.Title")}
                    </strong>
                    <span className="count counter">
                        {t("ClientArea.Icon-03.Count")}
                    </span>
                </div>
            </li>
            <li className="wow fadeInUp" data-wow-delay="1s">
                <div className="box">
                    <i className="ico days Icon_04">
                        <img src={props.Icon_04} alt="img description" />
                    </i>
                    <strong className="title">
                        {t("ClientArea.Icon-04.Title")}
                    </strong>
                    <span className="count counter">
                        {t("ClientArea.Icon-04.Count")}
                    </span>
                </div>
            </li>
        </ul>
    );
}
