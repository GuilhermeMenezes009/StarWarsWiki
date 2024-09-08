import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ShipsScreen({ route }) {
  const { ships } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={ships}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Name: {item.name}</Text>
            <Text>Model: {item.model}</Text>
            <Text>Passengers: {item.passengers}</Text>
          </View>
        )}
      />
      {ships.length === 0 && <Text>No ships available</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 10,
  },
});
