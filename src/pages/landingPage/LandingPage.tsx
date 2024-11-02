import ProgressBarLayout from '../../layout/ProgressBarLayout';
import Careers from './components/careers/Careers';
import MCareers from './components/careers/MCareers';
import Finale from './finale/Finale';
import Introduction from './components/introduction/Introduction';
import MIntroduction from './components/introduction/MIntroduction';
import MProjects from './components/project/MProjects';
import Projects from './components/project/Projects';
import MSkills from './components/skills/MSkills';
import Skills from './components/skills/Skills';
import MTitle from './components/title/MTitle';
import Title from './components/title/Title';
import MFinale from './finale/MFinale';

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
                mobileComponentList={[
                    <MTitle key={'mtitle'} />,
                    <MIntroduction key={'mintroduction'} />,
                    <MProjects key={'mprojects'} />,
                    <MSkills key={'mskills'} />,
                    <MCareers key={'mcareers'} />,
                    <MFinale key={'mfinale'} />
                ]}
            />
        </div>
    );
}

export default LandingPage;
