import _ from 'lodash';

interface DetailProps {
    title: string;
    descriptions?: string[];
}

interface CareerCardProps {
    cardImageUrl?: string;
    title?: string;
    description?: string;
    details?: DetailProps[];
}

function CareerCard({ cardImageUrl, title, description, details }: CareerCardProps) {
    return (
        <div className="flex w-[450px] h-[320px] bg-stone-100 shadow-sm rounded-lg">
            <div className={'flex rounded-l-lg bg-white w-1/3 h-full p-4'}>
                <img src={cardImageUrl} alt="career" className="object-contain w-full h-full" />
            </div>
            <div className="h-full w-2/3 flex flex-col justify-around p-4">
                <div className="h-1/4 w-full flex flex-col">
                    <p className="text-xl w-full font-Suit font-bold text-center">{title}</p>
                    <p className="text-sm w-full font-Suit text-center">{description}</p>
                </div>
                <div className="h-3/4 w-full flex flex-col justify-center">
                    {details &&
                        _.map(details, (detail) => {
                            return (
                                <ul key={detail.title} className="mb-2">
                                    <li className="text-[14px] mx-1 font-Suit font-bold text-black">{detail.title}</li>
                                    {_.map(detail.descriptions, (description, index) => {
                                        return <li key={index} className="text-xs font-Suit text-slate-800">- {description}</li>;
                                    })}
                                </ul>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default CareerCard;
