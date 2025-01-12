import type TagProps from '../interfaces/TagProps';

const ProjectTags: Record<string, TagProps> = {
    Backend: {
        name: '백엔드',
        bgColor: 'bg-teal-100',
        textColor: 'text-teal-800',
    },
    FullStack: {
        name: '풀스택',
        bgColor: 'bg-green-100',
        textColor: 'text-green-800',
    },
    DevOps: {
        name: '데브옵스',
        bgColor: 'bg-orange-100',
        textColor: 'text-orange-800',
    },
    StartUp: {
        name: '창업',
        bgColor: 'bg-fuchsia-100',
        textColor: 'text-fuchsia-800',
    },
    Architectures: {
        name: '아키텍쳐 설계',
        bgColor: 'bg-red-100',
        textColor: 'text-red-800',
    },
    Traffics: {
        name: '대용량 트래픽 처리',
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-800',
    },
    MSA: { name: 'MSA', bgColor: 'bg-violet-100', textColor: 'text-violet-800' },
    Awards: {
        name: '대회 수상',
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-800',
    },
    Blockchain: { name: '블록체인', bgColor: 'bg-indigo-100', textColor: 'text-indigo-800' },
    ZKP: { name: 'ZKP', bgColor: 'bg-sky-100', textColor: 'text-sky-800' },
    Leading: { name: '프로젝트 리딩', bgColor: 'bg-amber-100', textColor: 'text-amber-800'}
};

export default ProjectTags;
