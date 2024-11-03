interface SimpleProjectCardProps {
    cardImageUrl?: string;
    title?: string;
    description?: string;
    cb?: () => void;
}

function SimpleProjectCard({ cardImageUrl, title, description, cb }: SimpleProjectCardProps) {
    return (
        <button
            type="button"
            className="transition ease-in-out delay-150 flex w-[200px] h-[120px] bg-stone-100 shadow-sm rounded-lg hover:scale-110"
            onClick={cb}
        >
            <div className={'flex justify-center items-center w-2/6 h-full bg-white rounded-l-lg'}>
                <img src={cardImageUrl} alt="banner" className="w-2/3 h-2/3 object-contain rounded-l-lg" />
            </div>
            <div className="w-4/6 h-full flex flex-col justify-around p-4">
                <div>
                    <p className="text-[12px] font-Suit font-bold text-start">{title}</p>
                    <p className="text-[10px] font-Suit text-start">{description}</p>
                </div>
            </div>
        </button>
    );
}

export default SimpleProjectCard;
