import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import CarCard from "../../components/car-card/CarCard";
import { useSelector, useDispatch } from 'react-redux'
import {getCarListAction} from "../../actions/carActions";
import {StyledCarCard, Wrapper} from "./CarList.css";


const CarList  = ({}) => {
    const dispatch = useDispatch();
    const {isLoading, error, carList} = useSelector(state=>state);

    useEffect(()=>{
        dispatch(getCarListAction());
    },[]);

    return (
        <Wrapper>
            {
                carList.map(({year, model, heroImage}, index)=>(
                    <StyledCarCard
                        year={year}
                        model={model}
                        maker={'MG'}
                        imageURL={heroImage&&heroImage.url}
                        isFirst={index===0}
                    />
                ))
            }
        </Wrapper>
    );
};

export default CarList;