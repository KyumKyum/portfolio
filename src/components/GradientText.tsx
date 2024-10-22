import { cls } from "../utils/cls"

interface GraditentTextProps {
    text: string
    className?: string,
    startColor: string,
    middleColor: string,
    endColor: string,
}

function GradientText({
    text,
    className,
    startColor,
    middleColor,
    endColor
}: GraditentTextProps) {
    return (
        <span className={cls("bg-size bg-gradient-to-r bg-clip-text text-transparent from-30% via-50% to-80%", className, startColor, middleColor, endColor)}>{text}</span>
    );
}

export default GradientText;