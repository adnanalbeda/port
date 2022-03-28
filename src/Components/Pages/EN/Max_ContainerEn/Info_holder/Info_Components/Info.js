import { useTranslation } from "react-i18next";
export default function Info(props) {
    const [t, i18n] = useTranslation();
    return (
        // {/* <!-- info --> */}
        <div className="info">
            <div id="section1" className="smooth-section"></div>
            <div className="img-frame wow fadeInLeft" data-wow-delay="0.6s">
                <div className="text">
                    <span className="num">{t("info.num")}</span>
                    <h2 className="tild">{t("info.tild")}</h2>
                    <div className="box">
                        <div className="box-inner">
                            <h3>{t("info.Name")}</h3>
                            <p>{t("info.Description")}</p>
                        </div>
                    </div>
                </div>
                <div className="image wow fadeInRight" data-wow-delay="0.6s">
                    <img src={props.Image_570_715} alt="img description" />
                </div>
            </div>
            <div className="txt-frame wow fadeInUp" data-wow-delay="0.6s">
                <h3>{t("info.title")}</h3>
                <p>{t("info.AboutUs")}</p>
                <div className="signature">
                    <img src={props.Signature} alt="signature" />
                </div>
            </div>
        </div>
    );
}
