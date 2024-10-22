import OnePageScrollComponent from "../../components/OnePageScrollComponent";
import Introduction from "./components/Introduction";
import Title from "./components/Title";

function LandingPage() {
	return (
		<div className="wrapper">
			<OnePageScrollComponent
				componentList={[<Title key={"title"} />, <Introduction key={"introduction"} />]}
			/>
		</div>
	);
}

export default LandingPage;
