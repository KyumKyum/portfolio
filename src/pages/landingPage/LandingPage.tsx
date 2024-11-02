import ProgressBarLayout from '../../layout/ProgressBarLayout';
import Careers from './components/Careers';
import Finale from './components/Finale';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Title from './components/Title';

function LandingPage() {
    return (
        <div className="wrapper">
            <ProgressBarLayout
                componentList={[
                    <Title key={'title'} />,
                    <Introduction key={'introduction'} />,
                    <Projects key={'projects'} />,
                    <Skills key={'skills'} />,
                    <Careers key={'careers'} />,
                    <Finale key={'finale'} />,
                ]}
            />
        </div>
    );
}

export default LandingPage;
