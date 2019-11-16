import React from 'react';
import { Provider } from 'react-redux';
import {ScrollView} from 'react-native';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./store/store";
import CarList from "./screens/car-list/CarList";
import TranslateOpacityAnimation from "./components/animation/TranslateOpacityAnimation";
import {HeaderText, Padding, StyledActivityIndicator, StyledSafeAreaView} from "./App.css";

const App  = () => {
    return (
          <Provider store={store}>
              <PersistGate loading={<StyledActivityIndicator />} persistor={persistor}>
                  <StyledSafeAreaView>
                      <ScrollView>
                          <Padding>
                              <TranslateOpacityAnimation>
                                  <HeaderText>Garage</HeaderText>
                              </TranslateOpacityAnimation>
                              <CarList />
                          </Padding>
                      </ScrollView>
                  </StyledSafeAreaView>
              </PersistGate>
          </Provider>
    );
};

export default App;
