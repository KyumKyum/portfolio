import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cls } from '../utils/cls';
import type { WordsProps } from '../pages/landingPage/interfaces/WordProps';

interface ScrollingTextProps {
    className?: string;
    scrollClassName?: string;
    frontText?: string;
    backText?: string;
    words: WordsProps[];
}

function ScrollingText({ className, scrollClassName, frontText, backText, words }: ScrollingTextProps) {
    const [index, setIndex] = useState(0);

    const total = words.length;
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current + 1) % total);
        }, 1500);
        return () => clearInterval(interval);
    }, [total]);

    return (
        <div className='z-10'>
            <span className={className}>
                {frontText}
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={`words_${index}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.08 }}
                        className={cls('inline-block', scrollClassName, className, words[index].color)}
                    >
                        {words[index].word}
                    </motion.h1>
                </AnimatePresence>
                <span>{backText}</span>
            </span>
        </div>
    );
}

export default ScrollingText;
