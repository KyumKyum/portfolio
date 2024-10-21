import OnePageScrollComponent from "../../components/OnePageScrollComponent";
import Introduction from "./components/Introduction";

function LandingPage() {
	return (
		<div className="wrapper">
			<OnePageScrollComponent
				componentList={[<Introduction key={"introduction"} />]}
			/>
		</div>
	);
}

export default LandingPage;
