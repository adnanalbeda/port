/* Images */
import _970_875 from "./../../images/PNG/970-875.png";
import _970_875_2 from "./../../images/PNG/970-875_2.png";
import _970_875_3 from "./../../images/PNG/970-875_3.png";

/* Components */
import Visual from "./EN/Visual";
import MaxContainer from "./EN/Max_Container";
export default function Main() {
    return (
        // <!-- contain main informative part of the site -->
        <div id="main">
            <Visual
                Image_970_875={_970_875}
                Image_970_875_2={_970_875_2}
                Image_970_875_3={_970_875_3}
            />
            <MaxContainer />
        </div>
    );
}
