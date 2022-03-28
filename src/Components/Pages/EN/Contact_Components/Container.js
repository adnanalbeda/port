import { useTranslation } from "react-i18next";
import EN from "./../../../../LocalLang/EN_Langouge.json";
// import EN from "./../../../../LocalLang/AR_Langouge.json";
// import EN from "./../../../../LocalLang/RU_Langouge.json";
export default function Container() {
    const [t, i18n] = useTranslation();
    return (
        <div className="container">
            <div className="row">
                <div
                    className="col-md-4 col-sm-5 wow fadeInLeft"
                    data-wow-delay="0.6s"
                >
                    {/* <!-- contact --> */}
                    <div className="contact">
                        <h3>{t("Contact.title")}</h3>
                        <p>{t("Contact.description")}</p>
                        <div className="wpcf7">
                            <form
                                encType="multipart/form-data"
                                className="wpcf7-form"
                                action="inc/process2.php"
                                id="contactform"
                            >
                                <div className="column">
                                    <span className="wpcf7-form-control-wrap text-field-required">
                                        <input
                                            type="text"
                                            placeholder={t(
                                                "Contact.textPlaceholder"
                                            )}
                                            size="12"
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required text-field-className wpcf7-use-title-as-watermark"
                                            defaultValue=""
                                            name="name"
                                        />
                                    </span>
                                </div>
                                <div className="column">
                                    <span className="wpcf7-form-control-wrap Emailfield">
                                        <input
                                            type="email"
                                            placeholder={t(
                                                "Footer.placeholderEmail"
                                            )}
                                            size="12"
                                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email email-className wpcf7-use-title-as-watermark"
                                            defaultValue=""
                                            name="email"
                                        />
                                    </span>
                                </div>
                                <div className="column">
                                    <span className="wpcf7-form-control-wrap text-field-required">
                                        <input
                                            type="tel"
                                            name="phone"
                                            defaultValue=""
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required text-field-className wpcf7-use-title-as-watermark"
                                            size="12"
                                            placeholder={t(
                                                "Contact.phonePlaceholder"
                                            )}
                                        />
                                    </span>
                                </div>

                                <div className="column">
                                    <span className="wpcf7-form-control-wrap text-field-required">
                                        <input
                                            type="tel"
                                            name="phone"
                                            defaultValue=""
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required text-field-className wpcf7-use-title-as-watermark"
                                            size="12"
                                            placeholder={t(
                                                "Contact.Placeholder-01"
                                            )}
                                        />
                                    </span>
                                </div>
                                <div className="column">
                                    <span className="wpcf7-form-control-wrap text-field-required">
                                        <input
                                            type="tel"
                                            name="phone"
                                            defaultValue=""
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required text-field-className wpcf7-use-title-as-watermark"
                                            size="12"
                                            placeholder={t(
                                                "Contact.Placeholder-02"
                                            )}
                                        />
                                    </span>
                                </div>
                                <div className="column">
                                    <span className="wpcf7-form-control-wrap text-field-required">
                                        <input
                                            type="tel"
                                            name="phone"
                                            defaultValue=""
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required text-field-className wpcf7-use-title-as-watermark"
                                            size="12"
                                            placeholder={t(
                                                "Contact.Placeholder-03"
                                            )}
                                        />
                                    </span>
                                </div>
                                <div className="column">
                                    <span className="wpcf7-form-control-wrap text-field-required">
                                        <input
                                            type="tel"
                                            name="phone"
                                            defaultValue=""
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required text-field-className wpcf7-use-title-as-watermark"
                                            size="12"
                                            placeholder={t(
                                                "Contact.Placeholder-04"
                                            )}
                                        />
                                    </span>
                                </div>
                                <div className="column">
                                    <span className="wpcf7-form-control-wrap text-field-required">
                                        <input
                                            type="tel"
                                            name="phone"
                                            defaultValue=""
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required text-field-className wpcf7-use-title-as-watermark"
                                            size="12"
                                            placeholder={t(
                                                "Contact.Placeholder-05"
                                            )}
                                        />
                                    </span>
                                </div>
                                <div className="column">
                                    <span className="wpcf7-form-control-wrap textarea">
                                        <textarea
                                            placeholder={t(
                                                "Contact.Placeholder-06"
                                            )}
                                            cols="39"
                                            rows="9"
                                            className="wpcf7-form-control wpcf7-textarea textarea-className wpcf7-use-title-as-watermark"
                                            name="comment"
                                        ></textarea>
                                    </span>
                                </div>
                                <input
                                    type="submit"
                                    value={t("Footer.ButtonFormValue")}
                                    id="contact-submit"
                                />
                            </form>
                        </div>
                        <div className="done-massage done-massage3">
                            <strong>{t("Footer.DoneMessage.Thanks")}</strong>
                            {t("Footer.DoneMessage.Message")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
