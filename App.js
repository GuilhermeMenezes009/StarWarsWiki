import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, getStyle, createStyle, updateStyle } from './globalStyles';

const App = () => {
  const headerStyle = getStyle('header');
  const paragraphStyle = getStyle('paragraph');

  return (
    <View>
      <Text style={headerStyle}>Título</Text>
      <Text style={paragraphStyle}>Parágrafo</Text>
    </View>
  );
};

createStyle('customStyle', {
  fontSize: 24,
  color: '#00ff00',
});

updateStyle('header', {
  fontSize: 30,
});
