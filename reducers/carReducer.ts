import {
    CARS_FETCH_BEGIN, CARS_FETCH_ERROR, CARS_FETCH_SUCCESS, TOGGLE_CAR_FAV

} from '../constants/constants';

const initialState = {
    carList: [],
    selectedCarModel: null, //for toggle param
    isLoading: false,
    error: false
};

const carReducer = (state = initialState, {type, carList, selectedCarModel}) => {
    switch(type) {
        case CARS_FETCH_BEGIN:
            return {...state, error: false, isLoading: true };
        case CARS_FETCH_SUCCESS:
            return {...state, isLoading: false, error: false, carList: carList};
        case CARS_FETCH_ERROR:
            return {...state, error: true, isLoading: false };
        case TOGGLE_CAR_FAV:
            return {...state, isLoading: false, error: false, carList: state.carList.map((carItem)=>
                    selectedCarModel === carItem.model ? ({...carItem, isFav: !carItem.isFav}) : carItem)};
        default:
            return state;
    }
};

export default carReducer;