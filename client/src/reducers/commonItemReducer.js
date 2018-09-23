import { GET_COMMONITEMS, ADD_COMMONITEM, COMMONITEMS_LOADING } from '../actions/types';

const initialState = {
    commonItems: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_COMMONITEMS:
            return {
                ...state,
                commonItems: action.payload,
                loading: false
            };
        case ADD_COMMONITEM:
            return {
                ...state,
                commonItems: [action.payload, ...state.commonItems]
            };
        case COMMONITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}