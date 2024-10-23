import type TagProps from "../interfaces/TagProps";

const ProjectTags: Record<string, TagProps> = {
	Backend: { name: "백엔드", color: "bg-teal-600" },
	FullStack: { name: "풀스택", color: "bg-green-600" },
	DevOps: { name: "데브옵스", color: "bg-orange-600" },
	StartUp: { name: "창업", color: "bg-fuchsia-600" },
	Architectures: { name: "아키텍쳐 설계", color: "bg-red-600" },
	Traffics: { name: "대용량 트래픽 처리", color: "bg-blue-600" },
	MSA: { name: "MSA", color: "bg-violet-600" },
	Awards: { name: "대회 수상", color: "bg-yellow-600" },
	NFC: { name: "NFC", color: "bg-indigo-600" },
};

export default ProjectTags;
