import { useEffect, useState } from 'react';
import { cls } from '../utils/cls';

interface GibberishTextProps {
    text: string;
    className?: string;
}

const Character = ({ letter, className }: { letter: string; className?: string }) => {
    const [code, setCode] = useState(letter.toUpperCase().charCodeAt(0));

    useEffect(() => {
        let cnt = Math.floor(Math.random() * 10) + 5;
        const interval = setInterval(() => {
            setCode(() => Math.floor(Math.random() * 26) + 65);
            cnt--;
            if (cnt === 0) {
                setCode(letter.toUpperCase().charCodeAt(0));
                clearInterval(interval);
            }
        }, 60);

        return () => clearInterval(interval);
    }, [letter]);

    return <span className={cls('whitespace-pre text-foreground', className)}>{String.fromCharCode(code)}</span>;
};

function ScramblingText({ text, className }: GibberishTextProps) {
    return (
        <>
            {text.split('').map((letter, index) => {
                return <Character className={className} letter={letter} key={`${index}-${letter}`} />;
            })}
        </>
    );
}

export default ScramblingText;
