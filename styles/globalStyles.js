import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000', 
  },
  text: {
    color: '#f0f0f0', 
    fontFamily: 'Starjedi', 
  },
  card: {
    backgroundColor: '#1a1a1a', 
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333333', 
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0f0f0',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    color: '#f0f0f0',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: '#f0f0f0',
    marginBottom: 10,
  },
  link: {
    color: '#00ff00', 
    textDecorationLine: 'underline',
  },
  error: {
    color: '#ff0000', 
    fontSize: 16,
  },
});

const getStyle = (styleName) => {
  return globalStyles[styleName];
};

const createStyle = (styleName, style) => {
  globalStyles[styleName] = style;
};

const updateStyle = (styleName, style) => {
  globalStyles[styleName] = { ...globalStyles[styleName], ...style };
};

export { globalStyles, getStyle, createStyle, updateStyle };
