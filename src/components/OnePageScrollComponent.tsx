import _ from 'lodash';
import { useEffect, useRef, type ReactNode } from 'react';

interface OnePageScrollComponentProps {
    componentList: ReactNode[];
}

function OnePageScrollComponent({ componentList }: OnePageScrollComponentProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wheelHandler = (e: Event) => {
            e.preventDefault();
            const { deltaY } = e as WheelEvent;
            const top = wrapperRef.current?.scrollTop || 0;
            const pageHeight = window.innerHeight;
            const page = Math.floor(top / pageHeight);
            if (deltaY > 0) {
                const donwPage = page + 1
                console.log(donwPage)
                wrapperRef.current?.scrollTo({
                    top: pageHeight * donwPage,
                    behavior: 'smooth',
                });
            } else {
                const upPage = page - 1;
                console.log(upPage)
                wrapperRef.current?.scrollTo({
                    top: pageHeight * upPage,
                    behavior: 'smooth',
                });
            }
        };
        const wrapperRefCur = wrapperRef.current;
        wrapperRefCur?.addEventListener('wheel', wheelHandler);

        return () => {
            wrapperRefCur?.removeEventListener('wheel', wheelHandler);
        };
    }, []);

    return (
        <div ref={wrapperRef} className="relative top-0 w-full h-svh transition duration-500 overflow-y-auto">
            {_.map(componentList, (component, index) => {
                return (
                    <div key={`component_${index}`} className="w-full h-full">
                        {component}
                    </div>
                );
            })}
        </div>
    );
}

export default OnePageScrollComponent;
