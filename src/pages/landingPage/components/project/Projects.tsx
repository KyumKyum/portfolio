import ProjectCard from './ProjectCard';
import ProjectTags from '../../constants/Tags';
import Mohey from '../../../../assets/mohey.png';
import Holme from '../../../../assets/holme.png';
import Honsool from '../../../../assets/honsool.png';
import Character from '../../../../assets/character.png';
import Niscord from '../../../../assets/niscord.png';
import Myself from '../../../../assets/myself.jpg';
import SimpleProjectCard from './SimpleProjectCard';
import ShieldBid from '../../../../assets/shieldbid.png';
import Flowery from '../../../../assets/flowery.png';
import Joseph from '../../../../assets/joseph.png';

function Projects() {
    return (
        <div className="flex h-screen flex-col justify-center p-8 bg-black py-10">
            <span className="w-full text-center text-5xl font-FS text-white mb-4">My Projects</span>
            <span className="w-full text-center text-xl font-Suit text-white mb-10">카드를 클릭하시면 프로젝트에 대한 설명을 보실 수 있습니다. :)</span>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
                <ProjectCard
                    cardImageUrl={Mohey}
                    title="Mohey (모헤이)"
                    description={'국내 거주 외국인, 한국인 대상 관심사 기반 모임 플랫폼 창업 활동'}
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
                    cb={() => {
                        window.location.assign("/holme");
                    }}
                />
                <ProjectCard
                    cardImageUrl={ShieldBid}
                    title="ShieldBid"
                    description={'블록체인과 영지식 증명 기반 온라인 경매 서비스'}
                    tags={[
                        ProjectTags.Backend,
                        ProjectTags.MSA,
                        ProjectTags.Architectures,
                        ProjectTags.Blockchain,
                        ProjectTags.ZKP
                    ]}
                    cb={() => {
                        window.location.assign("/shieldbid");
                    }}
                />
                <ProjectCard
                    cardImageUrl={Flowery}
                    title="Flowery"
                    description={'모든 할 일을 완료하여 꽃을 피우는 해빗 트래커 서비스'}
                    tags={[
                        ProjectTags.Backend,
                        ProjectTags.MSA,
                        ProjectTags.Leading,
                        ProjectTags.Architectures
                    
                    ]}
                    cb={() => {
                        window.location.assign("/flowery");
                    }}
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
                <SimpleProjectCard
                    cardImageUrl={Joseph}
                    title="Christian People"
                    description="본인의 개신교 신앙과 성격이 어떤 성경 인물과 닮았는지 알려주는 서비스"
                    cb={() => {
                        window.open('https://www.christianpeople.site/', '_blank');
                    }}
                />
            </div>
        </div>
    );
}

export default Projects;
