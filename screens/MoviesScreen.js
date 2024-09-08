import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function MoviesScreen({ route }) {
  const { movies } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Title: {item.title}</Text>
            <Text>Director: {item.director}</Text>
            <Text>Release Date: {item.release_date}</Text>
          </View>
        )}
      />
      {movies.length === 0 && <Text>No movies available</Text>}
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
