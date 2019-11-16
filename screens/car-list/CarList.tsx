import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
                carList.map(({year, model, heroImage, isFav}, index)=>(
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