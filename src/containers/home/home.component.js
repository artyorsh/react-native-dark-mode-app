import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Layout,
  Text,
} from 'react-native-ui-kitten';

export const Home = (props) => (
  <Layout style={styles.container}>
    <Text category='h4'>Welcome to UI Kitten</Text>
    <Button onPress={props.toggleTheme}>Toggle Dark Mode 🌚</Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
