import Info from "./Info_Components/Info";
import TeamInfo from "./Info_Components/Team_Info";
import WorkInfo from "./Info_Components/WorkInfo";
import ServiceInfo from "./Info_Components/ServiceInfo";
import TestimonialsInfo from "./Info_Components/Testimonial_Info";
import PriceInfo from "./Info_Components/Price_Info";

/* Images */
import SignatureImage from "./../../../../../images/Signature.jpg";
import _375_465 from "./../../../../../images/PNG/375-465.png";
import _375_465_2 from "./../../../../../images/PNG/375-465_2.png";
import _375_465_3 from "./../../../../../images/PNG/375-465_3.png";
import _570_715 from "./../../../../../images/PNG/570-715.png";
import _570_715_2 from "./../../../../../images/PNG/570-715_2.png";
import _570_715_3 from "./../../../../../images/PNG/570-715_3.png";
import _780_292 from "./../../../../../images/PNG/780-292.png";
import _780_292_2 from "./../../../../../images/PNG/780-292_2.png";
import _780_292_3 from "./../../../../../images/PNG/780-292_3.png";
import _780_292_4 from "./../../../../../images/PNG/780-292_4.png";
import _780_291 from "./../../../../../images/PNG/780-291.png";
import _570_438_P from "./../../../../../images/PNG/placeholder-img-570-438.png";
import _390_583 from "./../../../../../images/PNG/390-583.png";
//=====
import _472_617 from "./../../../../../images/PNG/472-617.png";
import _472_617_2 from "./../../../../../images/PNG/472-617_2.png";
import _472_617_3 from "./../../../../../images/PNG/472-617_3.png";

export default function Info_Holder() {
    return (
        <div className="info-holder">
            <Info Signature={SignatureImage} Image_570_715={_570_715} />

            <TeamInfo
                Image_375_465={_375_465}
                Image_375_465_2={_375_465_2}
                Image_375_465_3={_375_465_3}
                Image_570_715={_570_715}
                Image_570_715_2={_570_715_2}
                Image_570_715_3={_570_715_3}
            />
            <WorkInfo
                Image_390_583={_390_583}
                Image_780_292={_780_292}
                Image_780_292_2={_780_292_2}
                Image_780_292_3={_780_292_3}
                Image_780_292_4={_780_292_4}
                Image_780_291={_780_291}
                PlaceholderImage_570_438={_570_438_P}
            />
            <TestimonialsInfo
                Image_472_617={_472_617}
                Image_472_617_2={_472_617_2}
                Image_472_617_3={_472_617_3}
            />
            <PriceInfo />
            <ServiceInfo />
        </div>
    );
}
