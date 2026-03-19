import React from "react";
import { Circle, Path, Svg } from "react-native-svg";

import { MoodScore } from "../home.types";

type MoodFaceIconProps = {
  moodScore: MoodScore;
  color: string;
  size?: number;
};

const MoodFaceIcon = ({ moodScore, color, size = 18 }: MoodFaceIconProps) => {
  const mouthPathByMood: Record<MoodScore, string> = {
    1: "M8 15.25C9.4 13.85 10.9 13.25 12 13.25C13.1 13.25 14.6 13.85 16 15.25",
    2: "M8.4 14.7C9.6 13.9 10.7 13.55 12 13.55C13.3 13.55 14.4 13.9 15.6 14.7",
    3: "M8.6 14H15.4",
    4: "M8.4 13.3C9.6 14.1 10.7 14.45 12 14.45C13.3 14.45 14.4 14.1 15.6 13.3",
    5: "M8 12.75C9.4 14.15 10.9 14.75 12 14.75C13.1 14.75 14.6 14.15 16 12.75",
  };

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
      <Circle cx="9" cy="10" r="1" fill={color} />
      <Circle cx="15" cy="10" r="1" fill={color} />
      <Path d={mouthPathByMood[moodScore]} stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
};

export default MoodFaceIcon;
