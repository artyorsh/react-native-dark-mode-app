import React, { useState } from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { mapping, light, dark } from '@eva-design/eva';
import { Home } from './containers/home';

const lightTheme = {
  theme: light,
  name: 'light',
};

const darkTheme = {
  theme: dark,
  name: 'dark',
};

export default App = () => {

  const [currentTheme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    const theme = currentTheme.name === 'light' ? darkTheme : lightTheme;

    setTheme(theme);
  };

  return (
    <ApplicationProvider mapping={mapping} theme={currentTheme.theme}>
      <Home toggleTheme={toggleTheme}/>
    </ApplicationProvider>
  );
};
