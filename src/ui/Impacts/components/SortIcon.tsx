import { ColorValue } from 'react-native'
import { Svg, Path, Rect } from 'react-native-svg'

export const SortIcon = ({
  size = 19,
  color = '#000000',
}: {
  size?: number
  color?: ColorValue
}) => (
  <Svg width={size} height={size} viewBox="0 0 19 13" fill="none">
    <Path
      fill={color}
      d="M7.668 8.752a1.24 1.24 0 0 0-1.603 0l-.931.824V1.003C5.134.449 4.626 0 4 0c-.626 0-1.134.45-1.134 1.003v8.573l-.93-.824a1.24 1.24 0 0 0-1.604 0 .923.923 0 0 0 0 1.419l2.866 2.535c.442.391 1.16.393 1.604 0l2.866-2.535a.923.923 0 0 0 0-1.419Z"
    />
    <Rect
      width={1}
      height={9}
      x={18}
      y={1}
      fill={color}
      stroke={color}
      rx={0.5}
      transform="rotate(90 18 1)"
    />
    <Rect
      width={1}
      height={6}
      x={15}
      y={6}
      fill={color}
      stroke={color}
      rx={0.5}
      transform="rotate(90 15 6)"
    />
    <Rect
      width={1}
      height={3}
      x={12}
      y={11}
      fill={color}
      stroke={color}
      rx={0.5}
      transform="rotate(90 12 11)"
    />
  </Svg>
)