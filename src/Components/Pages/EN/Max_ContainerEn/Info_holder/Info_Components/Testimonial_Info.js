import { useTranslation } from "react-i18next";
export default function TestimonialsInfo(props) {
    const [t, i18n] = useTranslation();
    return (
        // {/* <!-- testimonial info --> */}
        <div className="info testimonial">
            <div className="txt-frame wow fadeInLeft" data-wow-delay="0.6s">
                <h2 className="tild">{t("infoTestimonial.tild")}</h2>
                <span className="num">{t("infoTestimonial.num")}</span>
                <a href="#a" className="more">
                    {t("infoTestimonial.more")}
                </a>
            </div>
            <div className="img-frame wow fadeInUp" data-wow-delay="0.6s">
                <div className="slider">
                    <div className="mask">
                        <div className="slide">
                            <blockquote>
                                <q>{t("infoTestimonial.blockquote-01")}</q>
                                <cite>
                                    <span className="heading4">
                                        {t("infoTestimonial.UserBlock-01")}
                                    </span>
                                    <span className="designation">
                                        {t("infoTestimonial.designation-01")}
                                    </span>
                                </cite>
                            </blockquote>
                            <div className="images">
                                <img
                                    src={props.Image_472_617_2}
                                    alt="img description"
                                />
                            </div>
                        </div>
                        <div className="slide">
                            <blockquote>
                                <q>{t("infoTestimonial.blockquote-02")}</q>
                                <cite>
                                    <span className="heading4">
                                        {t("infoTestimonial.UserBlock-02")}
                                    </span>
                                    <span className="designation">
                                        {t("infoTestimonial.designation-02")}
                                    </span>
                                </cite>
                            </blockquote>
                            <div className="images">
                                <img
                                    src={props.Image_472_617}
                                    alt="img description"
                                />
                            </div>
                        </div>
                        <div className="slide">
                            <blockquote>
                                <q>{t("infoTestimonial.blockquote-03")}</q>
                                <cite>
                                    <span className="heading4">
                                        {t("infoTestimonial.UserBlock-03")}
                                    </span>
                                    <span className="designation">
                                        {t("infoTestimonial.designation-03")}
                                    </span>
                                </cite>
                            </blockquote>
                            <div className="images">
                                <img
                                    src={props.Image_472_617_3}
                                    alt="img description"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pagination">
                        <ul className="mask-inner">
                            <li>
                                <a href="#a">
                                    <img
                                        src={props.Image_472_617_2}
                                        alt="img description"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#a">
                                    <img
                                        src={props.Image_472_617}
                                        alt="img description"
                                    />
                                </a>
                            </li>
                            <li className="active">
                                <a href="#a">
                                    <img
                                        src={props.Image_472_617_3}
                                        alt="img description"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
