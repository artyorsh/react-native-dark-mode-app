import * as React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import {
  dark,
  light,
  mapping,
} from '@eva-design/eva';
import { Home } from './containers/home';

const themes = {
  light,
  dark,
};

export default App = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ApplicationProvider
      mapping={mapping}
      theme={themes[theme]}>
      <Home toggleTheme={toggleTheme}/>
    </ApplicationProvider>
  );
};
