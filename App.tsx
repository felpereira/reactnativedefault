import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle="light-content"
        showHideTransition="fade"
      />
      <Routes />;
    </>
  );
}

export default App;
