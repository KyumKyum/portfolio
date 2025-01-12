import ScramblingText from "../../components/ScramblingText";
import ShieldBid from "./assets/shieldbid.png"

function DescriptionShieldBid() {
    return (
        <div className="flex flex-col h-full bg-white mx-14 py-10">
            <div className="flex flex-col h-full items-center p-10">
                <div className="flex flex-col w-full items-center mb-4">
                    <img 
                        src={ShieldBid}
                        width={300}
                        height={300}
                    />
                    <span>
                        <ScramblingText
                            className="text-5xl font-GW text-[#353839]"
                            text="S h i e l d B i d"
                        />
                    </span>
                </div>
                <p className="font-Watermelon text-2xl">
                    안전한 암호 화폐 경매소, ShieldBid
                </p>
            </div>
            <div className="flex w-full justify-center px-10 mb-8">
                <div className="flex flex-col w-1/2 justify-center flex-wrap">
                    <p className="font-Suit text-lg mb-6 text-center">
                        ShieldBid는 <span className="text-[#0E4A84]">한양대학교 IC-PBL 프로젝트</span>로서
                        <br /><span className="text-[#3E3456]">블록체인</span>과 <span className="text-[#3832A8]">영지식 증명 (ZKP)</span>을 기반으로 한
                        <br /><span className="italic">입찰가 비공개 경매 (Sealed-bid Auction) 플랫폼</span> 입니다.
                    </p>
                    <p className="font-Suit text-lg mb-6 text-center">
                        입찰가 비공개 경매는 입찰 금액이 비공개이며,
                        <br /><span className="italic">다른 입찰자의 금액을 알지 못하는 상태</span> 에서 진행되는 거래 방식입니다.
                        <br />이에 ShieldBid는 <span className="text-[#3E3456]">블록체인</span>을 활용하여 데이터 무결성을 확보하고
                        <br /><span className="text-[#3832A8]">영지식 증명 기술</span>을 활용하여 입찰가 검증 기능을 제공함으로서
                        <br />기존 경매 방식과는 차별화된 경매 서비스를 제공합니다.
                    </p>
                    <p className="font-Suit text-lg mb-6 text-center">
                        학부연구생 때 배웠던 <span className="text-violet-700">이더라움 블록체인</span>과 <span className="text-[#3832A8]">영지식 증명 기술</span>을 활용하여 서비스를 구현하였고,
                        <br/><span className="text-amber-600">Metamask</span>을 활용하여 성공적으로 서비스의 배포 Contract를 만들었습니다.
                        <br/>하지만 블록체인 배포 및 검증 작업은 상당히 오랜 시간이 걸리기 때문에
                        <br/>정상적인 서비스를 위해서는 추가적인 조치가 필요한 상황이었습니다.
                    </p>

                    <p className="font-Suit text-lg text-center">
                    이로 인해 발생하는 문제는 <span className="text-rose-800">MSA</span>구조로 백엔드를 설계하여
                        <br />블록체인 로직과 일반 서비스 로직의 <span className="text-cyan-600">비동기 파이프라인</span>을 구축하는 것으로 해결했습니다.
                        <br />해당 구조로 인해 Shieldbid는 블록체인을 사용함에도 불구하고
                        <br />사용자에게 <span className="font-bold">빠르고 원활한 서비스를 제공</span>할 수 있습니다.
                    </p>
                </div>
            </div>
           
            <div className="flex w-full justify-center px-10 mb-8">
                <div className="flex flex-wrap flex-col w-1/2 justify-center items-center">
                    <p className="font-Suit text-2xl mb-8">
                        프로젝트 요약: <span className="text-red-700">MSA 구조 설계 및 백엔드 개발</span>
                    </p>
                    <span className="font-Suit text-lg text-center">
                        <ul>
                            <li>{'\u2022 RabbitMQ 활용 Event-Driven MSA 구조 설계 및 개발'}</li>
                            <li>{'\u2022 Typescript, Kotlin 활용 각 마이크로서비스 개발'}</li>
                            <li>{'\u2022 Ethers 활용 이더리움 네트워크 상 로직 개발'}</li>
                            <li>{'\u2022 Caching 활용 서비스간 latency 최소화'}</li>
                            <li>{'\u2022 Shell Script 활용 Contract 배포 코드 자동화'}</li>
                            <li>{'\u2022 Flask 활용 NUGU AI Speaker 통신을 위한 인터페이스 게이트웨이 개발'}</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="flex w-full px-10 justify-center mt-8">
                <button type="button" className="px-10" onClick={() => {
                    window.open("https://github.com/KyumKyum/ShieldBid", "_blank")
                }}>
                    <p className="font-Suit text-2xl">
                        프로젝트에 대한 코드는 <span className="text-blue-950">Github</span>에 있습니다! :)
                    </p>
                    <p className="font-Suit text-sm mb-8">
                        (함께 개발을 진행한 팀원의 부탁으로 백엔드 코드만들 공개합니다.)
                    </p>
                </button>
            </div>
        </div>
    );
}

export default DescriptionShieldBid;
