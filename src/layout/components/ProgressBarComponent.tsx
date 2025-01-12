import { useEffect, useState } from "react";

import { cls } from '../../utils/cls';

interface ProgressBarProps {
  size: number;
  progress: number;
  circleWidth?: number;
  progressWidth?: number;
}

function ProgressBar({
  size,
  progress,
  circleWidth = 12,
  progressWidth = 12,
}: ProgressBarProps) {
  const [shouldUseValue, setShouldUseValue] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldUseValue(true);
    }, 250);
    return () => clearTimeout(timeout);
  }, []);

  const currentProgress = Math.min(100, Math.max(0, progress));

  const radius = size / 2 - Math.max(progressWidth, circleWidth) / 2;
  const circumference = Math.PI * radius * 2;
  const percentage = shouldUseValue ? circumference * ((100 - currentProgress) / 100) : circumference;


  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-90deg)" }}
      >
        <title>Progress Bar - Circle</title>
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={`${circleWidth}px`}
          strokeDasharray="10px 0"
          strokeDashoffset="0px"
          className={cls("duration-500 text-rose-200/40")}
        />
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke="currentColor"
          className={cls("duration-500 text-rose-600")}
          strokeWidth={`${progressWidth}px`}
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={`${circumference}px`}
          strokeDashoffset={`${percentage}px`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xs text-rose-700" // Apply bold font styling
          style={{ fill: '#c72c48', transform: 'rotate(90deg)', transformOrigin: 'center' }} // Rotate text to be horizontal
        >
          {`${currentProgress}%`}
        </text>
      </svg>
    </div>
  );

}

export default ProgressBar;