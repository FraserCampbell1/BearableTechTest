import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Impact } from '../../domain/models/Impact.model';
import { useEffect, useState } from 'react';
import { GetImpactsForActiveFactorsUseCase } from '../../domain/useCases/GetImpactsForActiveFactorsUseCase/GetImpactsForActiveFactors.useCase';
import { OUTCOMES } from '../../domain/types/outcome';
import { SortIcon } from '../../ui/Impacts/components/SortIcon';
import { ImpactBar } from './components/ImpactBar';

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

  const maxImpact = Math.max(...impacts.map(impact => Math.abs(impact.impact)))
  const sortedImpacts = impacts.sort((a, b) => {
    if (sortBy === 'Best') {
      return b.impact - a.impact
    }
    return a.impact - b.impact
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Impacts on Energy</Text>

      <TouchableOpacity onPress={toggleSortBy} style={styles.sortButton}>
        <SortIcon />
        <Text>{sortBy}</Text>
      </TouchableOpacity>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.listContainer}>
          {sortedImpacts.map(impact => {
            const { factor, impact: impactValue, with: withValue, without: withoutValue } = impact
            const impactColor = impactValue > 0 ? '#4CAF50' : '#F44336';

            return (
              <View key={factor.id} style={styles.factorItem}>
                <View style={styles.moodContainer}>
                  <Text style={styles.factorName}>{factor.name}</Text>
                  <Text style={[styles.impactText, { color: impactColor }]}>
                    {impactValue > 0 ? '+' : ''}{impactValue.toFixed(0)}%
                  </Text>
                </View>

                <ImpactBar impact={impactValue} maxImpact={maxImpact} />
                
                <View style={styles.moodContainer}>
                  <Text style={styles.moodText}>
                    With: {withValue.toFixed(1)}
                  </Text>
                  <Text style={styles.moodText}>
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
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  listContainer: {
    flex: 1,
  },
  factorItem: {
    padding: 16,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  factorName: {
    fontSize: 18,
    fontWeight: '600',
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodText: {
    fontSize: 16,
    color: '#666',
  },
  impactText: {
    fontSize: 16,
    fontWeight: '600',
  },
}); 