import React from 'react';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./store/store";
import CarList from "./screens/car-list/CarList";
import {HeaderText, Padding, StyledActivityIndicator, StyledSafeAreaView} from "./App.css";

const App  = () => {
  return (
      <Provider store={store}>
          <PersistGate loading={<StyledActivityIndicator />} persistor={persistor}>
              <StyledSafeAreaView>
                  <ScrollView>
                      <Padding>
                          <HeaderText>Garage</HeaderText>
                          <CarList />
                      </Padding>
                  </ScrollView>
              </StyledSafeAreaView>
          </PersistGate>
      </Provider>
  );
};

export default App;
