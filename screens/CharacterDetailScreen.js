import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function CharacterDetailScreen({ route, navigation }) {
  const { character } = route.params;
  const [ships, setShips] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchShipsAndMovies = async () => {
      const shipPromises = character.starships.map(url => axios.get(url));
      const moviePromises = character.films.map(url => axios.get(url));

      try {
        const [shipsResponse, moviesResponse] = await Promise.all([
          Promise.all(shipPromises),
          Promise.all(moviePromises),
        ]);

        setShips(shipsResponse.map(response => response.data));
        setMovies(moviesResponse.map(response => response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchShipsAndMovies();
  }, [character]);

  return (
    <View style={styles.container}>
      <Text>Name: {character.name}</Text>
      <Text>Height: {character.height}</Text>
      <Text>Weight: {character.mass}</Text>
      <Text>Hair Color: {character.hair_color}</Text>
      <Text>Skin Color: {character.skin_color}</Text>
      <Text>Eye Color: {character.eye_color}</Text>
      <Text>Gender: {character.gender}</Text>

      <Button
        title="Naves"
        onPress={() => navigation.navigate('Ships', { ships })}
      />
      <Button
        title="Filmes"
        onPress={() => navigation.navigate('Movies', { movies })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
