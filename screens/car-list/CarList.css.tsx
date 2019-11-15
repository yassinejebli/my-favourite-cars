import styled from 'styled-components/native';
import CarCard from "../../components/car-card/CarCard";


export const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
`;

export const StyledCarCard = styled(CarCard)`
    margin-top: ${props=>!props.isFirst?'24px':'0'};
`;