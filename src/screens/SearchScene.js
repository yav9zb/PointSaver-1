import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import SeatsAeroAPI from '../services/SeatsAeroAPI';

const SearchScreen = ({ route }) => {
  const { departure, destination, flexibleDates, flexibleSeating } = route.params;
  const [loading, setLoading] = useState(true);
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const results = await SeatsAeroAPI.getTravelDeals(departure, destination, flexibleDates, flexibleSeating);
        setDeals(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching travel deals:', error);
        setLoading(false);
      }
    };

    fetchDeals();
  }, [departure, destination, flexibleDates, flexibleSeating]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Text>Travel Deals</Text>
      <FlatList
        data={deals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.flight}</Text>
            <Text>{item.points} points</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
