import axios from 'axios';
import { GET_COMMONITEMS, ADD_COMMONITEM, COMMONITEMS_LOADING } from './types';

export const getCommonItems = () => dispatch => {
    dispatch(setCommonItemsLoading());
    axios
        .get('/api/commonitems')
        .then(res => 
            dispatch({
                type: GET_COMMONITEMS,
                payload: res.data
            })
        )
};

export const addCommonItem = (commonitem) => dispatch => {
    axios
        .post('/api/commonitems', commonitem)
        .then(res => 
            dispatch({
                type: ADD_COMMONITEM,
                payload: res.data
            })
        )
};

export const setCommonItemsLoading = () => {
    return {
        type: COMMONITEMS_LOADING
    };
};