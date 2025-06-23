import { Svg, Path } from 'react-native-svg'

export const HomeIcon = ({
  size = 24,
  fillColor = '#C0BFC5',
  color = '#fff',
}: {
  size?: number;
  fillColor?: string;
  color?: string;
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <Path
      d="M31 14a1 1 0 01-.625-.219L16 2.281 1.625 13.78a1 1 0 01-1.25-1.562l15-12a1 1 0 011.25 0l15 12A1 1 0 0131 14z"
      fill={fillColor}
    />
    <Path
      d="M16 4.842l-12 9.6V29a1 1 0 001 1h22a1 1 0 001-1V14.442l-12-9.6z"
      fill={fillColor}
    />
    <Path d="M11 24a5 5 0 0110 0v8H11v-8z" fill={color} />
  </Svg>
)
