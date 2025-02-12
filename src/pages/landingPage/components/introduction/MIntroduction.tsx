import Myself from '../../../../assets/myself.jpg';
import GradientText from '../../../../components/GradientText';
import Birthday from '../../../../assets/birthday.svg?react';
import Github from '../../../../assets/github.svg?react';
import Email from '../../../../assets/email.svg?react';
import Velog from '../../../../assets/velog.svg?react';

function MIntroduction() {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-200 py-10">
            <p className="text-xl font-FS text-black mt-10">A Developer</p>
            <p className="text-xl font-FS text-black mb-10">Who Loves Developing ;)</p>
            <img src={Myself} alt="Myself" className="w-3/5 rounded-full" />
            <span className="text-base font-FS text-black my-4">
                <span className="mx-2">#풀스택개발자</span>
                <span className="mx-2">#데브옵스</span>
                <span className="mx-2">#아키텍쳐설계</span>
            </span>
            <span className="font-Suit text-black text-center">
                <p>안녕하세요! </p>
                <GradientText
                    className="font-bold"
                    startColor="from-blue-400"
                    middleColor="via-indigo-600"
                    endColor="to-violet-900"
                    text="개발이 좋아서 개발자가 된 "
                />
                <span>임규민 (Jay Lim)입니다.</span>
                <br />
                <br />
                <GradientText
                    className="font-bold"
                    startColor="from-red-400"
                    middleColor="via-orange-600"
                    endColor="to-yellow-900"
                    text="서비스의 구조를 설계하고 기능을 창조한다는 것"
                />
                <span>에</span>
                <p> 매력을 느끼고,
                    <GradientText
                        className="font-bold"
                        startColor="from-emerald-400"
                        middleColor="via-teal-600"
                        endColor="to-cyan-900"
                        text=" 끝없는 배움의 길에 재미를 느끼며"
                    />
                </p>

                <span> 성장하고 있습니다.</span>
                <br />
                <br />
                <span>현재 </span>
                <GradientText
                    className="font-bold"
                    startColor="from-cyan-400"
                    middleColor="via-sky-600"
                    endColor="to-blue-900"
                    text="서버 구조와 MSA 설계"
                />
                <span>에 관심이 있으며,</span>
                <br />
                <GradientText
                    className="font-bold"
                    startColor="from-fuchsia-400"
                    middleColor="via-pink-600"
                    endColor="to-rose-900"
                    text="데브옵스와 클라우드 엔지니어링"
                />
                <span>에 대해서</span>
                <p>공부하고 있습니다.</p>
            </span>
            <div className="flex flex-col mt-6">
                <div className="h-[20px] flex items-center px-4">
                    <Birthday width={16} height={16} />
                    <span className="text-sm font-Suit text-black ml-2">2000.06.13</span>
                </div>
                <div className="h-[20px] flex items-center px-4">
                    <Email width={16} height={16} />
                    <span className="text-sm font-Suit text-black ml-2">mycheesepasta@gmail.com</span>
                </div>
                <button
                    type="button"
                    className="h-[20px] flex items-center px-4"
                    onClick={() => {
                        window.open('https://github.com/KyumKyum', '_blank');
                    }}
                >
                    <Github width={16} height={16} />
                    <span className="text-sm font-Suit text-black ml-2">KyumKyum</span>
                </button>

                <button
                    type="button"
                    className="h-[20px] flex items-center px-4 border-black"
                    onClick={() => {
                        window.open('https://velog.io/@kyumericano/posts', '_blank');
                    }}
                >
                    <Velog width={16} height={16} />
                    <span className="text-sm font-Suit text-black ml-2">kyumericano.log</span>
                </button>

            </div>

        </div>
    );
}

export default MIntroduction;
