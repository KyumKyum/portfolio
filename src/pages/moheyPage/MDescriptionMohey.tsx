import ScramblingText from "../../components/ScramblingText";
import Mohey from './assets/mohey.svg?react';
import IR from './assets/IR.jpg'
import Description from './assets/description.jpeg'
import Award from './assets/award.png'
import Banner from './assets/banner.jpg'

function MDescriptionMohey() {
    return (
        <div className="flex flex-col h-full bg-white mx-4 py-10">
            <div className="flex flex-col h-full items-center p-10">
                <div className="flex flex-col w-full items-center mb-4">
                    <Mohey
                        width={200}
                        height={200}
                    />
                    <span>
                        <ScramblingText
                            className="text-2xl font-GW text-[#007FFC]"
                            text="모여서 Hey! Mohey!"
                        />
                    </span>
                </div>
                <p className="font-Watermelon">
                    내 주변에서 시작되는 글로벌한 모임, 모헤이
                </p>
            </div>
            <div className="flex flex-col w-full px-10 mb-8">
                <div className="flex justify-center items-center mb-8">
                    <img
                        src={IR}
                        alt="IR"
                        width={300}
                    />
                </div>
                <div className="flex flex-col justify-center flex-wrap">
                    <p className="font-Suit text-xs mb-6 text-center">
                        모헤이는 학교 동기들과 시작한 <span className="text-rose-600">창업 프로젝트</span>로서
                        <br />국내 외국인, 한국인 20~30대가
                        <br /><span className="text-[#007FFc]">관심사 기반의 오프라인 모임</span>을 통해
                        <br /><span className="italic">"다국적 문화"</span> 를 경험하도록 돕는 모임 서비스 입니다.
                    </p>
                    <p className="font-Suit text-xs text-center">
                        처음에는 <span className="text-[#4CAF50]">백엔드 및 인프라 개발자</span>로서
                        <br /><span className="font-bold">채팅 서비스</span>와 <span className="font-bold">결제 시스템</span> 등을 개발하였으며,
                        <br />이후에는 <span className="text-[#FF9800]">개발 총괄 및 CTO</span>로서
                        <br /><span className="font-bold">로깅(Logging) 파이프라인</span>과 <span className="font-bold">모니터링 시스템</span>,
                        <br /><span className="font-bold">CI/CD 파이프라인</span> 개발과
                        <br /><span className="font-bold">실시간 서비스 서버 구조 설계</span> 등의 업무를 맡았습니다.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-full px-10 mb-8">
                <div className="flex justify-center items-center mb-8">
                    <img
                        src={Description}
                        alt="Description"
                        width={300}
                    />
                </div>
                <div className="flex flex-wrap flex-col justify-center">
                    <p className="font-Suit text-xs mb-6 text-center">
                        약 1년 3개월간의 서비스 시간 동안
                        <br />약 <span className="text-[#9756ff]">6000명</span>의 내외국인 유저를 모았으며,
                        <br />이를 통해 <span className="font-bold">시스템 안정성과 </span>
                        <br /><span className="font-bold">확장성을 고려한 서버 구조 설계</span>,
                        <br /><span className="font-bold">실시간 서비스 지원 능력</span>,
                        <br /> 그리고 <span className="font-bold">데이터 기반의 서비스 개선</span> 등
                        <br />여러 업무를 진행하며 많은 경험을 쌓았습니다.
                    </p>
                    <p className="font-Suit text-xs mb-6 text-center">
                        또한 해당 창업 활동을 진행하는 중
                        <br />이벤트를 앞둔 <span className="font-bold">대형 트래픽</span>에 대한 대응 방안,
                        <br />예상치 못한 <span className="font-bold">DoS 공격</span>에 대한 대처,
                        <br />서버 오류 해결을 위한 <span className="font-bold">실시간 서버 재베포 전략</span> 등
                        <br />개발자로서 특별한 일들을 경험하기도 했습니다.
                    </p>
                </div>

            </div>
            <div className="flex flex-col justify-center flex-wrap">
                <div className="flex justify-center items-center mb-8">
                    <img
                        src={Award}
                        alt="Award"
                        width={300}
                    />
                </div>
                <div className="flex flex-col justify-centerflex-wrap">
                    <p className="font-Suit mb-8 text-center">
                        프로젝트 요약: <span className="text-[#4CAF50]">백엔드 및 인프라 개발자</span>
                    </p>
                    <span className="font-Suit text-xs mb-6 text-center">
                        <ul>
                            <li>{'\u2022 Docker Compose 활용 AWS EC2에 서비스 배포'}</li>
                            <li>{'\u2022 PG사와 계약 후 온라인 결제 서비스 개발'}</li>
                            <li>{'\u2022 Nginx, Certbot 활용 리버스 프록시 및 https 설정'}</li>
                            <li>{'\u2022 채팅 및 유저 상태 반영 등 실시간 서비스 로직 개발'}</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full px-10 mb-8">
                <div className="font-Suit mb-8 text-center">
                    <p className="font-Suit text-2xl mb-8">
                        프로젝트 요약: <span className="text-[#FF9800]">개발 총괄 및 CTO</span>
                    </p>
                    <div className="flex justify-center items-center mb-8">
                        <img
                            src={Banner}
                            alt="Banner"
                            width={300}
                        />
                    </div>
                    <span className="font-Suit text-xs mb-6 text-center">
                        <ul>
                            <li>{'\u2022 CircleCI 활용 CI/CD 파이프라인 구축'}</li>
                            <li>{'\u2022 RabbitMQ 활용 Event-Streaming 구조 도입, 비동기 작업 처리 구조 구현'}</li>
                            <li>{'\u2022 Redis 활용 채팅 캐시 도입, 채팅 서비스 최적화'}</li>
                            <li>{'\u2022 Prometheus, Grafana 활용 모니터링 체계 구축'}</li>
                            <li>{'\u2022 GraphQL 활용 일부 서비스 구조 단순화'}</li>
                            <li>{'\u2022 서버와 데이터베이스 대상 Scale-Out 전략 구상 및 적용'}</li>
                        </ul>
                    </span>
                </div>

            </div>
            <div className="flex w-full px-10 justify-center">
                <p className="font-Suit text-sm text-center">
                    협업 활동과 갈등 상황,
                    <br />예상치 못한 상황과 그에 대한 대처 등,
                    <br />정말 많은 경험을 하였고, 그 모든 경험은
                    <br />저에게 개발자의 세계에 깊은 뿌리를 내리는
                    <br />양분이 되었습니다.
                    <br />
                    <br />모헤이 프로젝트는 저를 한층 더 깊이 있는
                    <br />개발자로 성장하게 해준
                    <br />매우 소중한 경험이었습니다. :)
                </p>
            </div>
        </div>
    );
}

export default MDescriptionMohey;
