import {CARS_FETCH_BEGIN, CARS_FETCH_ERROR, CARS_FETCH_SUCCESS, TOGGLE_CAR_FAV} from "../constants/constants";
import {getCars} from "../api/Api";


////////////////////////// Internal actions
const carsFetchBegin = () => {
    return {
        type: CARS_FETCH_BEGIN
    };
};

const carsFetchSuccess = (carList) => {
    return {
        type: CARS_FETCH_SUCCESS,
        carList
    };
};

const carsFetchError = () => {
    return {
        type: CARS_FETCH_ERROR
    };
};

export const toggleCarFavAction = (selectedCarModel) => {
    return {
        type: TOGGLE_CAR_FAV, selectedCarModel
    };
};
//////////////////////// End internal actions


export const getCarListAction = () => {
    return (dispatch) => {
        dispatch(carsFetchBegin());
        getCars().then(response=>{
            dispatch(carsFetchSuccess(response.items));
        }).catch(error => {
            dispatch(carsFetchError());
            // console.error('car fetching - error', error);
        });
    };
};