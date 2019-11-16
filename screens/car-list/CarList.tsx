import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getCarListAction} from "../../actions/carActions";
import {ErrorText, FlexCenterWrapper, StyledCarCard, Wrapper} from "./CarList.css";
import {ActivityIndicator} from "react-native";
import {ICarCardProps} from "../../components/car-card/CarCard";


const CarList  = ({}) => {
    const dispatch = useDispatch();
    const {isLoading, error, carList} = useSelector(state=>state);

    useEffect(()=>{
        dispatch(getCarListAction());
    },[]);

    if(error)
        return (
            <FlexCenterWrapper>
                <ErrorText>
                    Oops! Fetching data failed
                </ErrorText>
            </FlexCenterWrapper>
        );

    if(isLoading)
        return (
            <FlexCenterWrapper>
                <ActivityIndicator size="large" color="#0000ff" />
            </FlexCenterWrapper>
        );

    return (
        <Wrapper>
            {
                carList.sort((x: ICarCardProps,y: ICarCardProps) => (x.isFav === y.isFav)? 0 : x.isFav ? -1 : 1)
                    .map(({year, model, heroImage, isFav}, index)=>(
                    <StyledCarCard
                        year={year}
                        model={model}
                        maker={'MG'}
                        isFav={isFav}
                        imageURL={heroImage&&heroImage.url}
                        isFirst={index===0}
                    />
                ))
            }
        </Wrapper>
    );
};

export default CarList;