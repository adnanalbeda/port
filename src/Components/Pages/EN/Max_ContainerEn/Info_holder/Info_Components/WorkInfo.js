import { useTranslation } from "react-i18next";
export default function WorkInfo(props) {
    const [t, i18n] = useTranslation();
    return (
        // {/* <!-- work info --> */}
        <div className="info work">
            <div id="section3" className="smooth-section"></div>
            <div className="txt-frame wow fadeInLeft" data-wow-delay="0.6s">
                <h2 className="tild">{t("infoWork.tild")}</h2>
                <span className="num">{t("infoWork.num")}</span>
                <ul className="filter">
                    <li className="active">
                        <a href="#a">{t("infoWork.filter-01")}</a>
                    </li>
                    <li>
                        <a href="#a" data-filter=".work-p">
                            {t("infoWork.filter-02")}
                        </a>
                    </li>
                    <li>
                        <a href="#a" data-filter=".work-b">
                            {t("infoWork.filter-03")}
                        </a>
                    </li>
                    <li>
                        <a href="#a" data-filter=".work-w">
                            {t("infoWork.filter-04")}
                        </a>
                    </li>
                    <li>
                        <a href="#a" data-filter=".work-m">
                            {t("infoWork.filter-05")}
                        </a>
                    </li>
                    <li>
                        <a href="#a" data-filter=".work-i">
                            {t("infoWork.filter-06")}
                        </a>
                    </li>
                </ul>
                <a href="#a" className="more">
                    {t("infoWork.mored")}
                </a>
            </div>
            <div className="img-frame">
                <div className="img-area" id="masonry-container">
                    <div
                        className="item work-i work-w wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <img src={props.Image_780_292} alt="img description" />
                        <div className="caption">
                            <div className="c1">
                                <div className="c2">
                                    <strong className="title">
                                        {t("infoWork.Placeholder-title-01")}
                                    </strong>
                                    <p>{t("infoWork.BrandingIdentity-01")}</p>
                                    <ul className="icons">
                                        <li>
                                            <a
                                                href={
                                                    props.PlaceholderImage_570_438
                                                }
                                                className="lightbox"
                                            >
                                                <i className="icon-resize-full-alt"></i>
                                                <span>resize</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#a">
                                                <i className="icon-attach"></i>
                                                <span>attach</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="item work-m work-p wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <img
                            src={props.Image_780_292_2}
                            alt="img description"
                        />
                        <div className="caption">
                            <div className="c1">
                                <div className="c2">
                                    <strong className="title">
                                        {t("infoWork.Placeholder-title-02")}
                                    </strong>
                                    <p>{t("infoWork.BrandingIdentity-02")}</p>
                                    <ul className="icons">
                                        <li>
                                            <a
                                                href={
                                                    props.PlaceholderImage_570_438
                                                }
                                                className="lightbox"
                                            >
                                                <i className="icon-resize-full-alt"></i>
                                                <span>resize</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#a">
                                                <i className="icon-attach"></i>
                                                <span>attach</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="item work-i work-b wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <img src={props.Image_390_583} alt="img description" />
                        <div className="caption">
                            <div className="c1">
                                <div className="c2">
                                    <strong className="title">
                                        {t("infoWork.Placeholder-title-03")}
                                    </strong>
                                    <p>{t("infoWork.BrandingIdentity-03")}</p>
                                    <ul className="icons">
                                        <li>
                                            <a
                                                href={
                                                    props.PlaceholderImage_570_438
                                                }
                                                className="lightbox"
                                            >
                                                <i className="icon-resize-full-alt"></i>
                                                <span>resize</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#a">
                                                <i className="icon-attach"></i>
                                                <span>attach</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="item add work-w work-p wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <img src={props.Image_780_291} alt="img description" />
                        <div className="caption">
                            <div className="c1">
                                <div className="c2">
                                    <strong className="title">
                                        {t("infoWork.Placeholder-title-04")}
                                    </strong>
                                    <p>{t("infoWork.BrandingIdentity-04")}</p>
                                    <ul className="icons">
                                        <li>
                                            <a
                                                href={
                                                    props.PlaceholderImage_570_438
                                                }
                                                className="lightbox"
                                            >
                                                <i className="icon-resize-full-alt"></i>
                                                <span>resize</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#a">
                                                <i className="icon-attach"></i>
                                                <span>attach</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="item work-i work-b wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <img
                            src={props.Image_780_292_3}
                            alt="img description"
                        />
                        <div className="caption">
                            <div className="c1">
                                <div className="c2">
                                    <strong className="title">
                                        {t("infoWork.Placeholder-title-05")}
                                    </strong>
                                    <p>{t("infoWork.BrandingIdentity-05")}</p>
                                    <ul className="icons">
                                        <li>
                                            <a
                                                href={
                                                    props.PlaceholderImage_570_438
                                                }
                                                className="lightbox"
                                            >
                                                <i className="icon-resize-full-alt"></i>
                                                <span>resize</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#a">
                                                <i className="icon-attach"></i>
                                                <span>attach</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="item add work-m work-p wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <img
                            src={props.Image_780_292_4}
                            alt="img description"
                        />
                        <div className="caption">
                            <div className="c1">
                                <div className="c2">
                                    <strong className="title">
                                        {t("infoWork.Placeholder-title-06")}
                                    </strong>
                                    <p>{t("infoWork.BrandingIdentity-06")}</p>
                                    <ul className="icons">
                                        <li>
                                            <a
                                                href={
                                                    props.PlaceholderImage_570_438
                                                }
                                                className="lightbox"
                                            >
                                                <i className="icon-resize-full-alt"></i>
                                                <span>resize</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#a">
                                                <i className="icon-attach"></i>
                                                <span>attach</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
