import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>Developers:</Text>
      <Text>RA: [Seu RA]</Text>
      <Text>Name: [Seu Nome]</Text>
      <Text>Email: [Seu Email]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});
