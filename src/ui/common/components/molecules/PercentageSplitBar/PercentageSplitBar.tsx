import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import styles from './percentageSplitBar.styles'
import Pill from '../../atoms/Pill/Pill'

export type PercentageSplit = {
  order?: number
  percentage: number
  color: string
}

export type PercentageSplitBarProps = {
  containerStyle?: StyleProp<ViewStyle>
  total?: number
  splits: PercentageSplit[]
}

const PercentageSplitBar = (props: PercentageSplitBarProps) => {
  const { total, splits, containerStyle } = props

  return (
    <View style={[styles.container, containerStyle]}>
      {splits.sort((a, b) => (a.order || 0) - (b.order || 0)).map((split) => (
        <View key={split.order} style={[styles.splitBar, { width: `${split.percentage}%`, backgroundColor: split.color }]} />
      ))}
      {total && <Pill>{`${total}`}</Pill>}
    </View>
  )
}

export default PercentageSplitBar
