import ScramblingText from "../../components/ScramblingText";

function MoheyPage() {
    return (
        <div className="wrapper h-svh flex flex-col bg-stone-100">
            <div className="w-full flex justify-center items-center m-10">
                <ScramblingText
                    className="text-6xl font-GW text-[#007FFC]"
                    text="Mohey! 모헤이!"
                />
            </div>
        </div>
    );
}

export default MoheyPage;
