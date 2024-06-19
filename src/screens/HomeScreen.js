import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [flexibleDates, setFlexibleDates] = useState(false);
  const [flexibleSeating, setFlexibleSeating] = useState(false);

  const handleSearch = () => {
    navigation.navigate('Search', {
      departure,
      destination,
      flexibleDates,
      flexibleSeating
    });
  };

  return (
    <View>
      <Text>Departure Airport</Text>
      <TextInput
        value={departure}
        onChangeText={setDeparture}
      />
      <Text>Destination Region</Text>
      <TextInput
        value={destination}
        onChangeText={setDestination}
      />
      <Button title="Flexible Dates" onPress={() => setFlexibleDates(!flexibleDates)} />
      <Button title="Flexible Seating" onPress={() => setFlexibleSeating(!flexibleSeating)} />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default HomeScreen;