import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Impact } from '../../domain/models/Impact.model';
import { useEffect, useState } from 'react';
import { GetImpactsForActiveFactorsUseCase } from '../../domain/useCases/GetImpactsForActiveFactorsUseCase/GetImpactsForActiveFactors.useCase';
import { OUTCOMES } from '../../domain/types/outcome';

export default function Impacts() {
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState<'best' | 'worst'>('best')
  const [impacts, setImpacts] = useState<Impact[]>([])

  const toggleSortBy = () => {
    setSortBy(prev => prev === 'best' ? 'worst' : 'best')
  }

  const getImpacts = async () => {
    const impactsResult = await new GetImpactsForActiveFactorsUseCase().execute({
      outcome: OUTCOMES.MOOD,
    })
    if (impactsResult.success) {
      setImpacts(impactsResult.value)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getImpacts()
  }, [])

  const sortedImpacts = impacts.sort((a, b) => {
    // TODO - check this
    if (sortBy === 'best') {
      return b.impact - a.impact
    }
    return a.impact - b.impact
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Mood Impact Factors</Text>
        <Button title="Sort by" onPress={toggleSortBy} />
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.listContainer}>
          {sortedImpacts.map(impact => {
            const { factor, impact: impactValue, with: withValue, without: withoutValue } = impact
            const impactColor = impactValue > 0 ? '#4CAF50' : '#F44336';

            return (
              <View key={factor.id} style={styles.factorItem}>
                <Text style={styles.factorName}>{factor.name}</Text>
                <View style={styles.moodContainer}>
                  <Text style={styles.moodText}>
                    With: {withValue.toFixed(1)}
                  </Text>
                  <Text style={styles.moodText}>
                    Without: {withoutValue.toFixed(1)}
                  </Text>
                </View>
                <Text style={[styles.impactText, { color: impactColor }]}>
                  {impactValue > 0 ? '+' : ''}{impactValue.toFixed(1)}%
                </Text>
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
  listContainer: {
    flex: 1,
  },
  factorItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  factorName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
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