import { StyleSheet } from 'react-native';

// Color constants
export const Colors = {
  dark: 'black',
  light: 'white'
};

// Base style objects for theme styles
const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};

const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 150
};

// Theme-based stylesheets
const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.dark
  }
});

const darkStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.light
  }
});

// General styles
const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    backgroundColor: '#ededed',
    flexWrap: 'wrap'
  },
  countContainer: {
    marginTop: 150,
    backgroundColor: '#ff0000ff',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  countText: {
    marginTop: 150,
    color: 'white',
    textAlign: 'center',
    flexWrap: 'wrap'
  }
});

// Button styles
const buttons = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20
  }
});

// Exports
export { buttons, styles };

export default function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}