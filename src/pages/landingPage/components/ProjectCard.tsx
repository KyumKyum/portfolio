import _ from "lodash";
import { cls } from "../../../utils/cls";
import type TagProps from "../interfaces/TagProps";

interface ProjectCardProps {
    cardImageUrl?: string,
    title?: string,
    description?: string,
    tags?: TagProps[]
}

function ProjectCard({ cardImageUrl, title, description, tags }: ProjectCardProps) {
    return (
        <button type="button" className="transition ease-in-out delay-150 flex flex-col w-[200px] h-[300px] bg-stone-300 shadow-sm rounded-lg hover:scale-110">
            <div className={cls("flex justify-center items-center w-full h-2/6 bg-white rounded-t-lg bg-cover")}>
                <img src={cardImageUrl} alt="banner" className="w-1/2 h-1/2 object-contain rounded-t-lg" />
            </div>
            <div className="h-4/6 flex flex-col justify-around p-4">
                <div>
                    <p className="text-lg font-Suit font-bold text-start">{title}</p>
                    <p className="text-xs font-Suit text-start">{description}</p>
                </div>
                <div className="flex flex-wrap gap-y-1">
                    {_.map(tags, (tag) => {
                        return (
                            <span key={tag.name} className={cls("text-[10px] px-[6px] mx-1 rounded-sm text-white font-bold shadow-lg", `${tag.color}`)}>{tag.name}</span>
                        )
                    })}
                </div>
            </div>
        </button>
    )
}

export default ProjectCard;