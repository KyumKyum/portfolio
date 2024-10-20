import ScramblingText from "../../../components/ScramblingText";

function TitleSection() {
    return (
        <div className="flex h-screen flex-col justify-between p-8 bg-[#342d2c]">
            <div className="flex flex-col items-end">
                <div>
                    <ScramblingText
                        text="A Developer"
                        className="font-FS text-5xl text-white"
                    />
                </div>
                <div>
                    <ScramblingText
                        text="Who Loves Developing ;)"
                        className="font-FS text-5xl text-white"
                    />
                </div>
            </div>

        </div>
    )
}

export default TitleSection;