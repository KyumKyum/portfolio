import CareerCard from "./CareerCard";
import SellerNote from "../../../../assets/sellernote.png"
import Mohey from "../../../../assets/mohey.png"
import SnP from "../../../../assets/snp.png"
import Zkrypto from "../../../../assets/zkrypto.png"

function Careers() {
    return (
        <div className="flex min-h-svh flex-col justify-center items-center bg-yellow-500 py-10">
            <span className="w-full text-center text-5xl font-FS text-black my-4">
                Careers
            </span>
            <div className="flex flex-wrap justify-center items-center w-full h-full gap-6 m-4">
                <CareerCard cardImageUrl={SellerNote} title="(주) 셀러노트" description="백엔드 인턴, 2020.12 ~ 2021.02" details={[
                    {
                        title: "챗봇 백엔드 서버 개발", descriptions: [
                            "Go 활용 물류 분류 로직 및 벡엔드 서버 개발",
                            "TDD 방법론 활용한 개발 경험"
                        ]
                    },
                    {
                        title: "사내 메일 서비스 개발", descriptions: [
                            "Typescript 활용 Gmail기반의 서비스 로직 개발",
                            "OAuth 2.0 통한 Google APIs 활용 경험 "
                        ]
                    }
                ]} />
                <CareerCard cardImageUrl={Mohey} title="Mohey, 모헤이" description="CTO, 2022.09 ~ 2023.12" details={[
                    {
                        title: "서버 구조 설계 및 개발 총괄",
                        descriptions: [
                            "Redis, GraphQL, RabbitMQ 활용 MSA 구조 설계",
                            "채팅, 위치 확인, 유저 상태 반영 등 실시간 서비스 로직 및 구조 설계",
                        ]
                    },
                    {
                        title: "배포 및 인프라 개발",
                        descriptions: [
                            "Docker 활용 AWS EC2에 배포",
                            "Nginx, Certbot 활용 리버스 프록시 및 https 설정 경험",
                        ]
                    },
                    {
                        title: "자세한 활동은 Projects & Works를 확인해주세요!"
                    }
                ]} />
                <CareerCard cardImageUrl={SnP} title="SnP Lab" description="연구원 (보안), 2023.09 ~ 2024.02" details={[
                    {
                        title: "FIDO 표준 기반 Passkey 도입 방안 연구",
                        descriptions: [
                            "WWDC22 및 Apple 공식 문서 분석, 기존 비밀번호의 취약점 보완 가능성 연구",
                            "FIDO 표준 공식 문서 분석 및 정리, 국내 도입 가능 방안 연구",
                        ]
                    },
                    {
                        title: "방송 투표 가용성 및 어뷰징 방지 방안 연구",
                        descriptions: [
                            "Apache Kafka, Kubernetes 활용 대용량 트래픽 수용 가능 아키텍쳐 설계",
                            "Emulator 탐지, SBT 활용 어뷰징 방지 방안 연구",
                        ]
                    }
                ]} />
                <CareerCard cardImageUrl={Zkrypto} title="(주) 지크립토" description="연구원 (개발), 2024.03 ~ 2024.08" details={[
                    {
                        title: "NFC 기술을 활용한 본인 인증 로직 개발",
                        descriptions: [
                            "Kotlin 활용 APDU 데이터 형식 Read/Write 가능한 서비스 로직 및 드라이버 개발",
                            "해당 기술 접목하여 회사 서비스 개발, ID4Africa 2024에 참여",
                        ]
                    },
                    {
                        title: "대용량 알림 서비스 개발",
                        descriptions: [
                            "Typescript 활용 event-Streaming 구조의 대용량 알림 서비스 개발",
                            "Fire & Forget 전략과 분산락 활용 TPS 7K 이상 감당 가능한 서버 구조 개발",
                        ]
                    },
                    {
                        title: "자세한 활동은 Projects & Works를 확인해주세요!"
                    }
                ]} />
            </div>
        </div>
    );
}

export default Careers;