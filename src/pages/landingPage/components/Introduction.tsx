import { motion } from 'framer-motion'
import ScrollingText from "../../../components/ScrollingText";
import IntroductionWords from "../constants/IntroductionTexts";
import Arrow from "../../../assets/arrow.svg?react"
import BouncingComponent from '../../../components/BouncingComponent';


function Introduction() {
    return (
        <div className="flex h-screen flex-col justify-center items-center bg-white">
            <div className="flex flex-col justify-center items-end w-full h-4/5 px-6">
                <p className="text-6xl text-black font-FS">
                    Hello There!
                </p>
                <ScrollingText
                    className="text-6xl text-black font-FS"
                    words={IntroductionWords}
                    backText=" 개발자입니다. :)"
                />
            </div>
            <div className="flex flex-col justify-center items-center text-lg font-Flight text-black mb-5">
                <p>
                    개발을 좋아하는 개발자, 임규민의 포트폴리오
                </p>
            </div>
            <BouncingComponent>
                <Arrow width={30} height={30} stroke="#000000" fill="#000000" />
            </BouncingComponent>
        </div>
    );
}

export default Introduction;