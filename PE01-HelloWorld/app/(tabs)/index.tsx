import { StyleSheet, Text, View } from 'react-native';
// Write a “HelloWorld” mobile app that will display your name, degree program, and school with the following constraints:
// User Requirements
// Text messages in a yellow background color. The text messages show
// System Requirements
// You can use a total of five React Native components (1 View, 3 Text, and StyleSheet). 

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>David Hiltzman</Text>
      <Text style={styles.text}>CS624 Full-Stack Development - Mobile App</Text>
      <Text style={styles.text}>Master's of Computer Science</Text>
      <Text style={styles.text}>City University of Seattle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});
