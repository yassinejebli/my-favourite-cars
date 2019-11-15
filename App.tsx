import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native';
import Card from "./components/Card";
import styled from 'styled-components/native';

const App  = () => {


  return (
      <StyledSafeAreaView>
          <ScrollView>
             <Card
                 year={1998}
                 model={'MG B Roadster'}
                 maker={'MG'}
                 imageURL={'https://uploads-dev.api.gapless-app.com/vehicle_image/vehicle_image-155fa5ae-00a0-11ea-84e3-4371baa68b28.jpg'}
             />

          </ScrollView>
      </StyledSafeAreaView>
  );
};


const StyledSafeAreaView = styled(SafeAreaView)`
  background-color: #efedee;
  flex: 1;
`;

export default App;
