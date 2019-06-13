import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Layout } from 'react-native-ui-kitten';

export const Home = (props) => {

  const onToggleTheme = () => {
    props.toggleTheme();
  };

  return (
    <Layout style={styles.container}>
      <Text>Use Dark Mode?</Text>
      <Button onPress={onToggleTheme}>Yeah 🌚</Button>
      <Button onPress={onToggleTheme}>Nope 🌞</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
