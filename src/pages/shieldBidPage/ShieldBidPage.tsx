import { observer } from "mobx-react";
import viewportStore from "../../store/ViewportStore";
import DescriptionShieldBid from "./DescriptionShieldBid";
import MDescriptionShieldBid from "./MDescriptionShieldBid";


const ShieldBidPage = observer(() => {
    return (
        <div className="wrapper bg-[#353839]">
            {viewportStore.width > 760 ? <DescriptionShieldBid /> : <MDescriptionShieldBid />}
        </div>
    );
})

export default ShieldBidPage;
