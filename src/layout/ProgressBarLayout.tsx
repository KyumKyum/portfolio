import _ from 'lodash';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import ProgressBar from './components/ProgressBarComponent';
import { observer } from 'mobx-react';
import viewportStore from '../store/ViewportStore';

interface ProgressBarLayoutProps {
    componentList: ReactNode[];
    mobileComponentList?: ReactNode[];
}

const ProgressBarLayout = observer(({ componentList, mobileComponentList }: ProgressBarLayoutProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const top = wrapperRef.current?.scrollTop || 0;
            const pageHeight = wrapperRef.current?.scrollHeight || 1;
            const viewportHeight = window.innerHeight;
            const totalScrollableHeight = pageHeight - viewportHeight;

            const progress = Math.ceil((top / totalScrollableHeight) * 100);
            setScrollProgress(progress);
        };

        const wrapperRefCur = wrapperRef.current;

        wrapperRefCur?.addEventListener('scroll', updateScrollProgress);

        updateScrollProgress();

        return () => {
            wrapperRefCur?.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);




    const activeComponentList = viewportStore.width < 760 ? mobileComponentList : componentList;

    return (
        <div ref={wrapperRef} className="relative top-0 w-full h-svh transition duration-500 overflow-y-auto">
            {_.map(activeComponentList, (component, index) => (
                <div key={`${component?.toString()}_${index}`} className="w-full">
                    {component}
                </div>
            ))}
            <div className="sticky flex justify-center items-center bottom-0 left-0 w-16 h-16">
                <ProgressBar size={50} progress={scrollProgress} />
            </div>
        </div>
    );
});
export default ProgressBarLayout;
