import { observer } from "mobx-react";
import viewportStore from "../../store/ViewportStore";
import DescriptionFlowery from "./DescriptionFlowery";
import MDescriptionFlowery from "./MDescriptionFlowery";


const FloweryPage = observer(() => {
    return (
        <div className="wrapper bg-[#FD5D0F]">
            {viewportStore.width > 760 ? <DescriptionFlowery /> : <MDescriptionFlowery />}
        </div>
    );
})

export default FloweryPage;
