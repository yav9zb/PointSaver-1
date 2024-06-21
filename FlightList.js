import React, { useEffect, useState } from 'react';
import { fetchFlights } from './SeatsApi';

const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const loadFlights = async () => {
      const data = await fetchFlights();
      if (data) {
        setFlights(data);
      }
    };
    loadFlights();
  }, []);

  return (
    <FlatList
      data={flights}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text>{item.flightNumber}: {item.origin} - {item.destination}</Text>
      )}
    />
  );
};

export default FlightList;
