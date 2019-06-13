import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const Home = (props) => {

  const onToggleTheme = () => {
    props.toggleTheme();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Use Dark Mode?</Text>
      <Button style={styles.button} title='Yeah 🌚' onPress={onToggleTheme}/>
      <Button style={styles.button} title='Nope 🌞' onPress={onToggleTheme}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#000000',
  },
  button: {
    color: '#000000',
  },
});
