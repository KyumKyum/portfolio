import { motion } from 'framer-motion';
import ScrollingText from '../../../../components/ScrollingText';
import IntroductionWords from '../../constants/IntroductionTexts';
import Arrow from '../../../../assets/arrow.svg?react';
import Background from '../../../../assets/background.png';
import BouncingComponent from '../../../../components/BouncingComponent';

function MTitle() {
    return (
        <div className="flex h-screen flex-col justify-center items-center bg-white">
            <div className="relative flex flex-col justify-center items-center w-full h-4/5 px-6">
                <motion.img
                    src={Background}
                    alt="Background"
                    width={390}
                    height={390}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="object-cover z-0"
                />
                <p className=" text-3xl text-black font-FS z-10">Hello There! 저는</p>
                <ScrollingText
                    className="text-3xl text-black font-FS z-10"
                    words={IntroductionWords}
                />
                <p className=" text-3xl text-black font-FS z-10">개발자입니다. :)</p>
            </div>
            <div className="flex flex-col justify-center items-center text-lg font-Suit font-bold text-black mb-5">
                <p>개발을 좋아하는 개발자, 임규민의 포트폴리오</p>
            </div>
            <BouncingComponent>
                <Arrow width={30} height={30} stroke="#000000" fill="#000000" />
            </BouncingComponent>
        </div>
    );
}

export default MTitle;
