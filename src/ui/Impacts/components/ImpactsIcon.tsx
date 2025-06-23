import { Svg, Path } from 'react-native-svg'

export const ImpactsIcon = ({
  size = 24,
  strokeColor = '#C0BFC5',
}: {
  size?: number;
  strokeColor?: string;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <Path
      d="M5.363 24.816H0M29.322 22.133v5.363M32.002 24.814h-5.363M15.998 7.75V4M5.035 8.55l2.652 2.652M26.952 8.55l-2.651 2.652M14.023 19.73v-4.58l1.973-1.972 1.973 1.973v4.834"
      stroke={strokeColor}
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <Path
      d="M15.932 25.144a3.041 3.041 0 100-6.083 3.041 3.041 0 000 6.083zM31.056 19.061h-3.75c0-6.237-5.074-11.311-11.311-11.311S4.683 12.824 4.683 19.06H.933C.934 10.743 7.678 4 15.996 4s15.06 6.743 15.06 15.061z"
      stroke={strokeColor}
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </Svg>
)