import ScramblingText from "../../components/ScramblingText";
import Flowery from "./assets/flowery.png"
import FloweryBanner from "./assets/flowery-banner.png"

function DescriptionFlowery() {
    return (
        <div className="flex flex-col h-full bg-white mx-14 py-10">
            <div className="flex flex-col h-full items-center p-10">
                <div className="flex flex-col w-full items-center mb-4">
                    <img 
                        src={Flowery}
                        width={300}
                        height={300}
                    />
                    <span>
                        <ScramblingText
                            className="text-5xl font-GW text-[#FD5D0F]"
                            text="Flowery"
                        />
                    </span>
                </div>
                <p className="font-Watermelon text-2xl">
                    하루에 3가지 일을 성공하면 성공한 하루다, Flowery
                </p>
            </div>
            <div className="flex w-full justify-center px-10 mb-8">
                <div className="flex flex-col w-1/2 justify-center flex-wrap">
                    <p className="font-Suit text-lg mb-6 text-center">
                        Flowery는 <span className="text-[#FD5D0F]">"하루에 3가지 일을 성공하면 성공한 하루다!"</span>
                        <br/>라는 표어 하에 만들어지고 있는 <span className="font-bold">해빗 트래커 서비스</span>이며,
                        <br/>PM, 기획, 디자인, 개발 등의 분야를 포함하여
                        <br/><span className="font-bold">16명</span>이 진행하고 있는 대형 사이드 프로젝트입니다.
                    </p>
                    <p className="font-Suit text-lg mb-6 text-center">
                        저는 해당 프로젝트에서 <span className="text-amber-600">프로젝트 총괄</span>을 맡았으며,
                        <br/>이전에 창업하던 경험을 살려 해당 프로젝트를 진행했습니다.
                        <br/>2025년 새해와 함께 시작한 이 프로젝트는
                        <br/>현재 진행형으로 개발과 발전을 거듭하고 있습니다.
                    </p>
                    <p className="font-Suit text-lg mb-6 text-center">
                    저의 목표는 단순한 서비스를 만드는 것이 아닌,
                        <br/><span className="font-bold">지금까지 쌓고 공부한 지식</span>들을 활용하여
                        <br/><span className="text-red-800">대형 MSA 구조의 서비스</span>를 만들고,
                        <br/>동시에 <span className="text-blue-800">하나의 큰 팀을 운영하는</span> 경험을 쌓는 것이었습니다.
                    </p>

                    <p className="font-Suit text-lg text-center">
                        이하는 현재 프로젝트에서 현재 제 기여도의 요약입니다.
                    </p>
                </div>
            </div>
           
            <div className="flex w-full justify-center px-10 mb-8">
                <div className="flex flex-wrap flex-col w-1/2 justify-center items-center">
                    <p className="font-Suit text-2xl mb-8">
                        프로젝트 요약: <span className="text-emerald-700">프로젝트 총괄</span>
                    </p>
                    <span className="font-Suit text-lg text-center">
                        <ul>
                            <li>{'\u2022 Flowery 서비스 기획'}</li>
                            <li>{'\u2022 Flowery MSA 구조 설계 및 팀 별 업무 할당'}</li>
                            <li>{'\u2022 Kotlin 활용 마이크로서비스들의 보일러플레이팅 진행'}</li>
                            <li>{'\u2022 Kotlin, RabbitMQ 활용 CQRS 데이터베이스 서버 구조 설계 및 개발'}</li>
                            <li>{'\u2022 Go 활용 팔로잉/팔로워 GDB 서버 구조 설계 및 개발'}</li>
                            <li>{'\u2022 ELK 기술 스택, Filebeat 활용 로그 수집 및 시각화'}</li>
                            <li>{'\u2022 Prometheus & Grafana 활용 이벤트 모니터링 및 정보 시각화'}</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full items-center mb-4">
                    <img 
                        src={FloweryBanner}
                        height={300}
                    />
                </div>
            <div className="flex w-full px-10 justify-center mt-8">
                <button type="button" className="px-10" onClick={() => {
                    window.open("https://github.com/Flowery-org", "_blank")
                }}>
                    <p className="font-Suit text-2xl">
                    <span className="text-[#FD5D0F]">Flowery</span>는 성장하는 프로젝트입니다! <span className="border-b-[1px] border-black">링크</span>를 클릭하여 프로젝트를 구경해보세요 :)
                    </p>
                </button>
            </div>
        </div>
    );
}

export default DescriptionFlowery;
