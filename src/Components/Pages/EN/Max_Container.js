import InfoHolder from "./Max_ContainerEn/Info_holder/Info_Holder";
import Clientarea from "./Max_ContainerEn/Client_Area/ClientArea";

/* Image For Clientarea */
import Icon_02 from "./../../../images/ico-11.svg";
import Icon_03 from "./../../../images/ico-12.svg";
import Icon_04 from "./../../../images/ico-13.svg";
export default function Max_containerEn(props) {
    return (
        <div className="max-container">
            {/* <!-- info holder --> */}
            <InfoHolder />
            <Clientarea Icon_02={Icon_02} Icon_03={Icon_03} Icon_04={Icon_04} />
        </div>
    );
}
