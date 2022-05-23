import { SafeAreaView } from "react-native";
import React from "react";
import Routes from "./src/Navigation/Routes";
import { Provider } from "react-redux";
import store from "./src/redux/store";
console.log(store, "STORE");
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
