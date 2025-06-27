import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ImpactBarProps {
  impact: number;
  maxImpact: number;
}

export const ImpactBar: React.FC<ImpactBarProps> = ({ impact, maxImpact }) => {
  // Clamp the fill ratio between 0 and 1
  const fillRatio = Math.min(Math.abs(impact), maxImpact) / maxImpact;
  const isPositive = impact >= 0;
  const fillColor = isPositive ? '#3BB7B0' : '#FF8787';

  // Fill style: width is fillRatio * 50% (since center is 0, full bar is ±maxImpact)
  // The bar is split in half: left for negative, right for positive
  return (
    <View style={styles.barContainer}>
      <View style={styles.barBackground}>
        {isPositive ? (
          <View
            style={[
              styles.barFill,
              {
                left: '50%',
                width: `${fillRatio * 50}%`,
                backgroundColor: fillColor,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              },
            ]}
          />
        ) : (
          <View
            style={[
              styles.barFill,
              {
                right: '50%',
                width: `${fillRatio * 50}%`,
                backgroundColor: fillColor,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
            ]}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    width: '100%',
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  barFill: {
    position: 'absolute',
    top: 0,
    height: 10,
  },
}); 