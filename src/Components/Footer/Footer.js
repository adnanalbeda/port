import { useTranslation } from "react-i18next";

export default function Footer(props) {
    const [t, i18n] = useTranslation();
    return (
        <footer id="footer">
            <div className="max-container">
                <div className="f1">
                    <div className="holder">
                        <strong className="logo-footer">
                            <a href="/">
                                <i className="icon">{t("Footer.Icon")}</i>
                                <span className="img">
                                    <img
                                        alt="Magic Photography"
                                        src={props.Footer_Logo}
                                    />
                                </span>
                            </a>
                        </strong>
                        {/* <!-- footer-txt --> */}
                        <div className="footer-txt">
                            <div className="text">
                                <p>{t("Footer.Text")}</p>
                                <div className="contact">
                                    <address>
                                        <span className="yellow">
                                            {t("Footer.Line-01.Sort")}
                                        </span>
                                        {t("Footer.Line-01.Content")}
                                        <br />
                                        {t("Footer.Line-01.NewLine")}
                                    </address>
                                    <span className="email">
                                        <span className="yellow">
                                            {t("Footer.Line-02.Sort")}
                                        </span>
                                        <a href="mailto:&#105;&#110;&#102;&#111;&#046;&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                                            {t("Footer.Line-02.Email")}
                                        </a>
                                    </span>
                                    <span className="tel">
                                        <span className="yellow">
                                            {t("Footer.Line-03.Sort")}
                                        </span>
                                        <a href="tel:00123456789">
                                            {t("Footer.Line-03.PhoneNumber")}
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame">
                        <div className="wpcf7">
                            <form
                                action="inc/process.php"
                                className="wpcf7-form f-contact-form"
                                encType="multipart/form-data"
                            >
                                <h3>{t("Footer.titleForm")}</h3>
                                <div className="rows">
                                    <span className="wpcf7-form-control-wrap text-field-required">
                                        <input
                                            type="text"
                                            name="text-field-required"
                                            defaultValue=""
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required text-field-className wpcf7-use-title-as-watermark"
                                            size="12"
                                            placeholder={t(
                                                "Footer.placeholderName"
                                            )}
                                        />
                                    </span>
                                </div>
                                <div className="rows">
                                    <span className="wpcf7-form-control-wrap Emailfield">
                                        <input
                                            type="email"
                                            name="Emailfield"
                                            defaultValue=""
                                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email email-className wpcf7-use-title-as-watermark"
                                            size="12"
                                            placeholder={t(
                                                "Footer.placeholderEmail"
                                            )}
                                        />
                                    </span>
                                </div>
                                <div className="rows">
                                    <span className="wpcf7-form-control-wrap textarea">
                                        <textarea
                                            name="textarea"
                                            className="wpcf7-form-control wpcf7-textarea textarea-className wpcf7-use-title-as-watermark"
                                            rows="9"
                                            cols="39"
                                            placeholder={t(
                                                "Footer.placeholderTextarea"
                                            )}
                                        ></textarea>
                                    </span>
                                </div>
                                <input
                                    id="submit"
                                    type="submit"
                                    value={t("Footer.ButtonFormValue")}
                                />
                            </form>
                            <div className="done-massage">
                                <strong>
                                    {t("Footer.DoneMessage.Thanks")}
                                </strong>
                                {t("Footer.DoneMessage.Message")}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f2">
                    {/* <!-- sub-nav --> */}
                    <ul className="sub-nav">
                        <li>
                            <a href="#wrapper">{t("header.link-01")}</a>
                        </li>
                        <li>
                            <a href="#section1">{t("header.link-02")}</a>
                        </li>
                        <li>
                            <a href="#section2">{t("header.link-03")}</a>
                        </li>
                        <li>
                            <a href="#section3">{t("header.link-04")}</a>
                        </li>
                        <li>
                            <a href="#section5">{t("header.link-05")}</a>
                        </li>
                    </ul>
                    <span className="copyright">
                        {t("Footer.CopyRight.Copy")}
                        <a href="/">{t("Footer.CopyRight.Link")}</a> &copy;
                        <span id="dt">{new Date().getFullYear()}</span>
                        {t("Footer.CopyRight.AllRights")}
                    </span>
                </div>
            </div>
        </footer>
    );
}
