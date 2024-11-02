import _ from 'lodash';
import { cls } from '../../../../utils/cls';
import type TagProps from '../../interfaces/TagProps';

interface SkillCardProps {
    title?: string;
    description?: string;
    tags: TagProps[];
}

function SkillCard({ title, description, tags }: SkillCardProps) {
    return (
        <button
            type="button"
            className="transition ease-in-out delay-150 flex flex-col w-[200px] h-[250px] bg-stone-100 shadow-sm rounded-lg hover:scale-110"
        >
            <div className="h-full flex flex-col justify-evenly p-4">
                <div>
                    <p className="text-xl font-FS text-start mb-3">{title}</p>
                    <p className="text-sm font-Suit text-start">{description}</p>
                </div>
                <div className="flex flex-wrap gap-y-1">
                    {_.map(tags, (tag) => {
                        return (
                            <span
                                key={tag.name}
                                className={cls(
                                    'text-[12px] px-[6px] mx-1 rounded-sm font-bold shadow-lg',
                                    `${tag.bgColor} ${tag.textColor}`,
                                )}
                            >
                                {tag.name}
                            </span>
                        );
                    })}
                </div>
            </div>
        </button>
    );
}

export default SkillCard;
