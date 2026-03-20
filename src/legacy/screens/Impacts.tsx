import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Impact } from '../../domain/models/Impact.model';
import { useEffect, useState } from 'react';
import { GetImpactsForActiveFactorsUseCase } from '../../domain/useCases/GetImpactsForActiveFactorsUseCase/GetImpactsForActiveFactors.useCase';
import { OUTCOMES } from '../../domain/types/outcome';
import { SortIcon } from '../../ui/Impacts/components/SortIcon';
import { ImpactBar } from './components/ImpactBar';
import Text from "@/ui/common/components/atoms/Text/Text";

export default function Impacts() {
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState<'Best' | 'Worst'>('Best')
  const [impacts, setImpacts] = useState<Impact[]>([])

  const toggleSortBy = () => {
    setSortBy(prev => prev === 'Best' ? 'Worst' : 'Best')
  }

  const getImpacts = async () => {
    const impactsResult = await new GetImpactsForActiveFactorsUseCase().execute({
      outcome: OUTCOMES.ENERGY,
    })
    if (impactsResult.success) {
      setImpacts(impactsResult.value)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getImpacts()
  }, [])

  // Bug fix: filter out impacts with low data
  const impactsWithEnoughData = impacts.filter(impact => !impact.hasLowData);
  const maxImpact = Math.max(...impactsWithEnoughData.map(impact => Math.abs(impact.impact)))
  const sortedImpacts = impactsWithEnoughData.sort((a, b) => {
    if (sortBy === 'Best') {
      return b.impact - a.impact
    }
    return a.impact - b.impact
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="primary600" style={styles.title}>Energy</Text>

        <TouchableOpacity onPress={toggleSortBy} style={styles.sortButton}>
          <Text variant="primary400">{sortBy}</Text>
          <SortIcon />
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.listContainer}>
          {sortedImpacts.map(impact => {
            const { factor, impact: impactValue, with: withValue, without: withoutValue } = impact
            const impactColor = impactValue > 0 ? '#3BB7B0' : '#FF8787';

            return (
              <View key={factor.id} style={styles.factorItem}>
                <View style={styles.row}>
                  <Text variant="primary500" style={styles.factorName}>{factor.name}</Text>
                  <Text variant="primary700" style={[styles.impactText, { color: impactColor }]}>
                    {impactValue > 0 ? '+' : ''}{impactValue.toFixed(0)}%
                  </Text>
                </View>

                <ImpactBar impact={impactValue} maxImpact={maxImpact} />

                <View style={styles.row}>
                  <Text variant="primary400" style={styles.valueText}>
                    With: {withValue.toFixed(1)}
                  </Text>
                  <Text variant="primary400" style={styles.valueText}>
                    Without: {withoutValue.toFixed(1)}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  listContainer: {
    flex: 1,
    paddingBottom: 40,
  },
  factorItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  factorName: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  valueText: {
    fontSize: 14,
    color: '#666',
  },
  impactText: {
    fontSize: 16,
  },
}); 