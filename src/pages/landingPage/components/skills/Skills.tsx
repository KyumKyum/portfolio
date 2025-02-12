import SkillCard from './SkillCard';

function Skills() {
    return (
        <div className="flex h-screen flex-col justify-center items-center bg-stone-800 py-10">
            <span className="w-full text-center text-5xl font-FS text-white my-10">Tech Stacks</span>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
                <SkillCard
                    title="Languages"
                    description="제가 개발할 때 즐겨 사용하는 언어입니다."
                    tags={[
                        { name: 'Typescript', bgColor: 'bg-[#007ACC]', textColor: 'text-white' },
                        { name: 'Kotlin', bgColor: 'bg-[#B125EA]', textColor: 'text-white' },
                        { name: "Java", bgColor: "bg-[#F89820]", textColor: "text-black" },
                        { name: 'Go', bgColor: 'bg-[#00ADD8]', textColor: 'text-white' },
                    ]}
                />
                <SkillCard
                    title="Frontend"
                    description="프론트엔드 개발 시 사용하는 프레임워크입니다."
                    tags={[
                        { name: 'React', bgColor: 'bg-[#61DAF8]', textColor: 'text-black' },
                        { name: 'NextJS', bgColor: 'bg-[#000000]', textColor: 'text-white' },
                        { name: 'Svelte Kit', bgColor: 'bg-[#FE3E00]', textColor: 'text-white' },
                    ]}
                />
                <SkillCard
                    title="Application"
                    description="모바일/데스크톱 앱 개발 시 사용하는 프레임워크입니다."
                    tags={[
                        { name: 'React Native', bgColor: 'bg-[#61DAF8]', textColor: 'text-black' },
                        { name: 'Android Native', bgColor: 'bg-[#A4C639]', textColor: 'text-black' },
                        { name: 'Electron', bgColor: 'bg-[#0881D1]', textColor: 'text-white' },
                    ]}
                />
                <SkillCard
                    title="Backend"
                    description="백앤드 개발 시 사용하는 프레임워크입니다."
                    tags={[
                        { name: 'Express', bgColor: 'bg-[#000000]', textColor: 'text-white' },
                        { name: 'NestJS', bgColor: 'bg-[#E0243E]', textColor: 'text-white' },
                        { name: 'Spring Boot', bgColor: 'bg-[#6DB33F]', textColor: 'text-black' },
                        { name: 'Ktor', bgColor: 'bg-[#087CFA]', textColor: 'text-white' },
                        { name: 'Gin', bgColor: 'bg-[#3698a6]', textColor: 'text-white'}
                    ]}
                />
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
                <SkillCard
                    title="ORM"
                    description="사용하는 데이터베이스 ORM 툴입니다."
                    tags={[
                        { name: 'Prisma', bgColor: 'bg-[#4081a9]', textColor: 'text-white' },
                        { name: 'TypeORM', bgColor: 'bg-[#FFAB00]', textColor: 'text-black' },
                    ]}
                />
                <SkillCard
                    title="DevOps / Monitoring"
                    description="사용 가능한 데브옵스/모니터링 플랫폼과 툴입니다."
                    tags={[
                        { name: 'Docker', bgColor: 'bg-[#2496ED]', textColor: 'text-white' },
                        { name: 'Nginx', bgColor: 'bg-[#009639]', textColor: 'text-white' },
                        { name: 'CircleCI', bgColor: 'bg-[#343434]', textColor: 'text-white' },
                        { name: 'Prometheus', bgColor: 'bg-[#E6522C]', textColor: 'text-white' },
                        { name: 'Grafana', bgColor: 'bg-[#F46800]', textColor: 'text-black' },
                        { name: 'ELK', bgColor: 'bg-[#00BFB3]', textColor: 'text-black'},
                    ]}
                />
                <SkillCard
                    title="MSA Architecture"
                    description="MSA 구조를 설계할 때 사용하는 플랫폼과 툴입니다."
                    tags={[
                        { name: 'Redis', bgColor: 'bg-[#D82C20]', textColor: 'text-white' },
                        { name: 'GraphQL', bgColor: 'bg-[#E10098]', textColor: 'text-white' },
                        { name: 'Grpc', bgColor: 'bg-[#244B5A]', textColor: 'text-white' },
                        { name: 'RabbitMQ', bgColor: 'bg-[#FF6600]', textColor: 'text-black' },
                    ]}
                />
                <SkillCard
                    title="Currently Studying"
                    description="현재 공부하고 있는 언어와 기술들입니다."
                    tags={[
                        { name: 'Rust', bgColor: 'bg-[#B7410E]', textColor: 'text-white' },
                        { name: 'Kubernetes', bgColor: 'bg-[#326CE5]', textColor: 'text-white' },
                        { name: 'Istio', bgColor: 'bg-[#466BB0]', textColor: 'text-white' },
                        { name: 'Ansible', bgColor: 'bg-[#000000]', textColor: 'text-white' },
                        { name: 'ArgoCD', bgColor: 'bg-[#EF7B4D]', textColor: 'text-black' },
                        { name: 'Apache Kafka', bgColor: 'bg-[#231F20]', textColor: 'text-white' },
                    ]}
                />
            </div>
        </div>
    );
}

export default Skills;
