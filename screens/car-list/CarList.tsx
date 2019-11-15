import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import CarCard, {ICarCardProps} from "../../components/car-card/CarCard";
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
            {
                carList.map(({year, model, heroImage}: ICarCardProps&any)=>(
                    <CarCard
                        year={year}
                        model={model}
                        maker={'MG'}
                        imageURL={heroImage&&heroImage.url}
                    />
                ))
            }

        </Wrapper>
    );

};

export const Wrapper = styled.View`
    
`;

export default CarList;


/*
{"fileName": "2019-11-06.jpg", "id": "155fa5ae-00a0-11ea-84e3-4371baa68b28", "thumbnailUrl": "https://uploads-dev.api.gapless-app.com/vehicle_image/vehicle_image-155fa5ae-00a0-11ea-84e3-4371baa68b28.jpg?w=320", "uploadStatus": "success", "uploadType": "vehicle_image", "url": "https://uploads-dev.api.gapless-app.com/vehicle_image/vehicle_image-155fa5ae-00a0-11ea-84e3-4371baa68b28.jpg"},
"model": "RS7 4.0", "year": 2015}
 */