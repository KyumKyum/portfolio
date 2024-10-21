import _ from "lodash";
import { useEffect, useRef, type ReactNode } from "react";

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
            if (deltaY > 0) {
                console.log(deltaY, top, pageHeight)
                console.log(pageHeight * (Math.floor(top / pageHeight) + 1))
                wrapperRef.current?.scrollTo({
                    top: pageHeight * (Math.floor(top / pageHeight) + 1),
                    behavior: "smooth"
                });
            } else {
                console.log(deltaY, top, pageHeight)
                console.log(pageHeight * (Math.floor(top / pageHeight) - 1))
                wrapperRef.current?.scrollTo({
                    top: pageHeight * (Math.floor(top / pageHeight) - 1),
                    behavior: "smooth"
                });
            }

        }
        const wrapperRefCur = wrapperRef.current;
        wrapperRefCur?.addEventListener("wheel", wheelHandler);

        return () => {
            wrapperRefCur?.removeEventListener("wheel", wheelHandler);
        }
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative top-0 w-full h-svh transition duration-500 overflow-y-auto">
            {_.map(componentList, (component, index) => {
                return (
                    <div
                        key={`component_${index}`}
                        className="w-full h-full"
                    >
                        {component}
                    </div>
                )
            })}
        </div>
    );
}

export default OnePageScrollComponent;