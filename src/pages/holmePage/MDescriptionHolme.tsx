import ScramblingText from "../../components/ScramblingText";
import Holme from "./assets/holme.svg?react"
import Architecture from "./assets/architecture.svg?react"
import HolmeImage from "../../assets/holme.png"
import LgAward from "./assets/lgAward.jpg"
import SktAward from "./assets/sktAward.jpg"

function MDescriptionHolme() {
    return (
        <div className="flex flex-col h-full bg-white mx-4 py-10">
            <div className="flex flex-col h-full items-center p-10">
                <div className="flex flex-col w-full items-center mb-4">
                    <Holme />
                    <span>
                        <ScramblingText
                            className="text-2xl font-GW text-[#A6093A]"
                            text="홈 + 옮기다 = Holme"
                        />
                    </span>
                </div>
                <p className="font-Watermelon">
                    어디서든 나의 스마트 홈 설정을 한번에, 홂
                </p>
            </div>
            <div className="flex flex-col w-full px-10 mb-8">
                <div className="flex justify-center items-center px-4">
                    <img
                        src={HolmeImage}
                        alt="Holme"
                        width={300}
                    />
                </div>
                <div className="flex flex-col justify-center flex-wrap">
                    <p className="font-Suit text-xs mb-6 text-center">
                        Holme은 <span className="text-[#0E4A84]">한양대학교 IC-PBL 프로젝트</span>로서
                        <br /><span className="text-[#a0447a]">MATTER 기술</span>을 기반으로 한
                        <br /><span className="italic">숙박시설 용 스마트 홈 설정 마이그레이션 서비스</span> 입니다.
                    </p>
                    <p className="font-Suit text-xs text-center">
                        Holme은 IoT기기들이 있는 <span className="text-[#f3af61]">스마트 호텔</span>과 같은 공간에서
                        <br /><span className="text-teal-700">QR코드</span>를 통해 본인의 스마트 홈 설정을
                        <br />곧바로 적용할 수 있습니다.
                        <br />즉, 새로운 환경에서도 내 집처럼 생활할 수 있는
                        <br /><span className="italic">"이동 가능한 집"</span> 을 소프트웨어적으로
                        <br />구현한 프로젝트 입니다.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-full px-10 mb-8">
                <div className="flex justify-center items-center px-4 mb-8">
                    <Architecture
                        width={300}
                        height={100}
                    />
                </div>
                <div className="flex flex-wrap flex-col justify-center items-center">
                    <p className="font-Suit text-xs mb-6 text-center">
                        이 프로젝트는
                        <br /><span className="text-stone-500">LG</span>와 <span className="text-red-800">SK Telecom</span>이 협력하여 진행되었으며,
                        <br />다양한 항목에서 우수한 평가를 받아
                        <br />양사 모두에게서 <span className="text-amber-600">최우수 상</span>을 수상했습니다.
                    </p>
                    <p className="font-Suit text-xs text-center">
                        저는 해당 프로젝트의 <span className="font-bold">개발 총괄</span>을 맡았고,
                        <br />기존에 공부하던 것을 바탕으로
                        <br /><span className="font-bold"> MSA 구조의 서비스를 </span>설계하였습니다.
                        <br />평소에 눈여겨보던<span className="font-bold"> gRPC </span>를 사용하여
                        <br />백엔드 서버와 IoT 기기간
                        <br />빠른 소통이 가능하도록 개발하였고,
                        <br /><span className="font-bold">ChatGPT API</span>를 활용하여
                        <br />Generative AI를 간단하게 구현하는 등
                        <br />개발자로서 특별한 일들을 경험하기도 했습니다.
                    </p>
                </div>

            </div>
            <div className="flex flex-col w-full px-10 mb-8">
                <div className="flex justify-center items-center px-4 mb-8">
                    <img
                        src={LgAward}
                        alt="LgAward"
                        width={300}
                    />
                </div>
                <div className="flex flex-col justify-center flex-wrap mb-8">
                    <p className="font-Suit text-xs text-center mb-6">
                        너무나도 촉박했던<span className="font-bold"> AI Speaker의 timeout 문제</span>,
                        <br />생각보다 <span className="font-bold">자료가 부족했던 </span>Matter 기술,
                        <br />서로 다른 분야에서 전문가였던
                        <br /><span className="font-bold"> 팀원간 커뮤니케이션 코스트 문제</span>,
                        <br />처음 계획했던 방향과<span className="font-bold"> 달라져가는 결과물 </span>등
                        <br />예상치 못한 문제들도 직면을 했었습니다.
                    </p>
                    <p className="font-Suit text-xs text-center mb-6">
                        <span className="font-bold">gRPC</span>와 <span className="font-bold">캐싱</span>을 통해 timeout 문제를 해결하고,
                        <br />서로 협력하여 Matter 기술에 대한
                        <br /><span className="font-bold"> 자료 조사를 진행했으며 </span>,
                        <br /> <span className="font-bold">Slack</span>와 같은 협업툴을 사용하여
                        <br />커뮤니케이션 코스트를 낮추고,
                        <br />기획을 보다 확실히 하여<span className="font-bold"> Demo를 완성하는 </span>과정을 통해
                        <br />해당 문제들을 하나하나 극복해 나아갔습니다.
                    </p>
                    <p className="font-Suit text-xs text-center">
                        이 모든 노력의 결과는, 위에서 언급했다시피
                        <br /><span className="font-bold">양사 모두에게서 최우수상을 수상함으로</span>
                        <br />입증이 되었습니다.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-full px-10 mb-8">
                <div className="flex flex-wrap flex-col justify-center items-center">
                    <div className="flex justify-center items-center px-4">
                        <img
                            src={SktAward}
                            alt="SktAward"
                            width={300}
                        />
                    </div>
                    <p className="font-Suit text-cemter mb-8">
                        프로젝트 요약: <span className="text-[#4c00ff]">팀 리딩 및 개발 총괄</span>
                    </p>
                    <span className="font-Suit text-xs text-center">
                        <ul>
                            <li>{'\u2022 gRPC와 HTTP Request를 활용한 서버 - IoT 기기간 MSA 구조 설계'}</li>
                            <li>{'\u2022 ChatGPT API 활용 Generative AI 서비스 제공'}</li>
                            <li>{'\u2022 Caching 활용 서비스간 latency 최소화'}</li>
                            <li>{'\u2022 RN 일부 개발 진행, 팀원 교육 후 개발 지도'}</li>
                            <li>{'\u2022 Flask 활용 NUGU AI Speaker 통신을 위한 인터페이스 게이트웨이 개발'}</li>
                            <li>{'\u2022 Go, Kotlin활용 백엔드 로직과 IoT 인스턴스 개발'}</li>
                        </ul>
                    </span>
                </div>

            </div>
            <div className="flex w-full px-10 justify-center mt-8">
                <button type="button" className="px-2" onClick={() => {
                    window.open("https://flame-sun-524.notion.site/HOLME-d41cf1a8e87b4c71b638a93c58ca63f2", "_blank")
                }}>
                    <p className="font-Suit text-sm mb-8">
                        프로젝트에 대한 자세한 설명과 시연 영상은<br /><span className="text-[#A6093A]">테크 블로그에</span> 있습니다! :)
                    </p>
                </button>
            </div>
        </div>
    );
}

export default MDescriptionHolme;
