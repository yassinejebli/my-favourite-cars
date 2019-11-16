import styled from 'styled-components/native';
import CarCard from "../../components/car-card/CarCard";


export const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
`;

export const StyledCarCard = styled(CarCard)`
    margin-top: ${props=>!props.isFirst?'24px':'0'};
`;

export const FlexCenterWrapper = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ErrorText = styled.Text`
    color: red;
    font-size: 18px;
`;
