import { observer } from "mobx-react";
import viewportStore from "../../store/ViewportStore";
import DescriptionHolme from "./DescriptionHolme";
import MDescriptionHolme from "./MDescriptionHolme";


const HolmePage = observer(() => {
    return (
        <div className="wrapper bg-[#A6093A]">
            {viewportStore.width > 760 ? <DescriptionHolme /> : <MDescriptionHolme />}
        </div>
    );
})

export default HolmePage;
