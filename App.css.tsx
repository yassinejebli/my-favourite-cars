import {SafeAreaView} from "react-native";
import styled from 'styled-components/native';

export const StyledSafeAreaView = styled(SafeAreaView)`
    background-color: #efedee;
    flex: 1;
`;

export const HeaderText = styled.Text`
    color: #000000;
    font-size: 38px;
    font-weight: 500;
    margin: 40px 0;
`;

export const Padding = styled.View`
    padding: 0 16px;
`;

export const StyledActivityIndicator = styled.ActivityIndicator.attrs({
    size: 'large',
    color: '#0000ff'
})`
    display: flex;
    flex: 1;
    justify-content: center;
`;