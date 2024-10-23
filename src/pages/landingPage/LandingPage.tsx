import OnePageScrollComponent from "../../components/OnePageScrollComponent";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Title from "./components/Title";

function LandingPage() {
	return (
		<div className="wrapper">
			<OnePageScrollComponent
				componentList={[<Title key={"title"} />, <Introduction key={"introduction"} />, <Projects key={"projects"} />]}
			/>
		</div>
	);
}

export default LandingPage;
