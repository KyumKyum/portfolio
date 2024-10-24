import ProjectCard from './ProjectCard';
import ProjectTags from '../constants/Tags';
import Mohey from '../../../assets/mohey.png';
import Holme from '../../../assets/holme.png';
import Zkrypto from '../../../assets/zkrypto.png';
import Honsool from '../../../assets/honsool.png';
import Character from '../../../assets/character.png';
import Niscord from '../../../assets/niscord.png';
import Myself from '../../../assets/myself.jpg';
import SimpleProjectCard from './SimpleProjectCard';

function Projects() {
    return (
        <div className="flex h-screen flex-col justify-center p-8 bg-black">
            <span className="w-full text-center text-5xl font-FS text-white my-10">Projects & Works</span>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
                <ProjectCard
                    cardImageUrl={Mohey}
                    title="Mohey (모헤이)"
                    description={'외국인 유학생들과 한국인 대학생들을 대상으로 한 창업 활동'}
                    tags={[
                        ProjectTags.FullStack,
                        ProjectTags.DevOps,
                        ProjectTags.Architectures,
                        ProjectTags.StartUp,
                        ProjectTags.Traffics,
                    ]}
                    cb={() => {
                        window.location.assign("/mohey");
                    }}
                />
                <ProjectCard
                    cardImageUrl={Holme}
                    title="HOLME (홂)"
                    description={'MATTER 기반 숙박 시설용 스마트 홈 설정 마이그레이션 서비스'}
                    tags={[ProjectTags.FullStack, ProjectTags.Architectures, ProjectTags.MSA, ProjectTags.Awards]}
                />
                <ProjectCard
                    cardImageUrl={Zkrypto}
                    title="Zkrypto & SnP Lab"
                    description={'NFC 기능 및 대용량 알림 서비스를 개발한 연구 활동'}
                    tags={[
                        ProjectTags.Backend,
                        ProjectTags.NFC,
                        ProjectTags.Architectures,
                        ProjectTags.MSA,
                        ProjectTags.Traffics,
                    ]}
                />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                <SimpleProjectCard
                    cardImageUrl={Honsool}
                    title="혼술라이프"
                    description="게시물 업로드와 랭킹 시스템을 구현한 있는 간단한 앱 서비스"
                    cb={() => {
                        window.open('https://github.com/KyumKyum/FORIF-2020-1-Hackathon', '_blank');
                    }}
                />
                <SimpleProjectCard
                    cardImageUrl={Character}
                    title="전투적 다이어트!"
                    description="음식들을 피해 다이어트를 성공하는 탄막 슈팅 게임"
                    cb={() => {
                        window.open('https://github.com/KyumKyum/forif-2019-2-unity-hackathon', '_blank');
                    }}
                />
                <SimpleProjectCard
                    cardImageUrl={Niscord}
                    title="Niscord"
                    description="Discord와 같이 실시간 채팅, 실시간 P2P 화상통화를 구현한 서비스"
                    cb={() => {
                        window.open('https://github.com/orgs/Niscord/repositories', '_blank');
                    }}
                />
                <SimpleProjectCard
                    cardImageUrl={Myself}
                    title="Gamechatban"
                    description="게임 채팅을 학습하여 채팅의 유독성을 측정하는 머신 러닝 모델"
                    cb={() => {
                        window.open('https://kyumkyum.github.io/gamechatban.github.io/', '_blank');
                    }}
                />
            </div>
        </div>
    );
}

export default Projects;
