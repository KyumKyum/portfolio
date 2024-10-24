import OnePageScrollComponent from "../../components/OnePageScrollComponent";
import Careers from "./components/Careers";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Title from "./components/Title";

function LandingPage() {
	return (
		<div className="wrapper">
			<OnePageScrollComponent
				componentList={[<Title key={"title"} />, <Introduction key={"introduction"} />, <Projects key={"projects"} />, <Skills key={"skills"} />, <Careers key={"careers"} />]}
			/>
		</div>
	);
}

export default LandingPage;
