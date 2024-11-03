import { observer } from "mobx-react";
import viewportStore from "../../store/ViewportStore";
import DescriptionMohey from "./DescriptionMohey";
import MDescriptionMohey from "./MDescriptionMohey";

const MoheyPage = observer(() => {
    return (
        <div className="wrapper bg-[#007FFC]">
            {viewportStore.width > 760 ? <DescriptionMohey /> : <MDescriptionMohey />}
        </div>
    );
})

export default MoheyPage;
