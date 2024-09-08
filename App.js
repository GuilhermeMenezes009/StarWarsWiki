import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RootStack from './navigation/RootStack';

export default function App() {
  return (
    <View style={styles.container}>
      <RootStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
