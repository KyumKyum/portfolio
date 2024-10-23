import ProjectCard from "./ProjectCard";
import ProjectTags from "../constants/ProjectTags";
import Mohey from "../../../assets/mohey.png"
import Holme from "../../../assets/holme.png"
import Zkrypto from "../../../assets/zkrypto.png"

function Projects() {
    return (
        <div className="flex h-screen flex-col justify-center p-8 bg-black">
            <span className="w-full text-center text-4xl font-FS text-white my-10">
                Let Me Introduce My Projects & Works!
            </span>
            <div className="flex flex-wrap justify-center gap-6">
                <ProjectCard cardImageUrl={Mohey} title="Mohey (모헤이)" description={"외국인 유학생들과 한국인 대학생들을 대상으로 한 창업 활동"} tags={[
                    ProjectTags.FullStack,
                    ProjectTags.DevOps,
                    ProjectTags.Architectures,
                    ProjectTags.StartUp,
                    ProjectTags.Traffics
                ]} />
                <ProjectCard cardImageUrl={Holme} title="HOLME (홂)" description={"MATTER 기반 숙박 시설용 스마트 홈 설정 마이그레이션 서비스"} tags={[
                    ProjectTags.FullStack,
                    ProjectTags.Architectures,
                    ProjectTags.MSA,
                    ProjectTags.Awards
                ]} />
                <ProjectCard cardImageUrl={Zkrypto} title="Zkrypto & SnP Lab" description={"NFC 기능 및 대용량 알림 서비스를 개발한 연구 활동"} tags={[
                    ProjectTags.Backend,
                    ProjectTags.NFC,
                    ProjectTags.Architectures,
                    ProjectTags.MSA,
                    ProjectTags.Traffics
                ]} />
                {/* <ProjectCard />
                <ProjectCard />
                <ProjectCard /> */}
            </div>
        </div>
    )
}

export default Projects;