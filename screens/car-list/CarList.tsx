import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import CarCard from "../../components/car-card/CarCard";
import { useSelector, useDispatch } from 'react-redux'
import {getCarListAction} from "../../actions/carActions";


const CarList  = ({}) => {
    const dispatch = useDispatch();
    const {isLoading, error, carList} = useSelector(state=>state);

    useEffect(()=>{
        dispatch(getCarListAction());
        console.log('test', carList[0]);
    },[]);


    return (
        <Wrapper>
            <CarCard
                year={1998}
                model={'MG B Roadster'}
                maker={'MG'}
                imageURL={'https://uploads-dev.api.gapless-app.com/vehicle_image/vehicle_image-155fa5ae-00a0-11ea-84e3-4371baa68b28.jpg'}
            />
        </Wrapper>
    );

};

export const Wrapper = styled.View`
    
`;

export default CarList;
