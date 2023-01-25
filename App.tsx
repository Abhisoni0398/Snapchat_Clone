import React, {FC} from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
