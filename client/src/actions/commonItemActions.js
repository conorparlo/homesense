import axios from 'axios';
import { GET_COMMONITEMS, ADD_COMMONITEM, COMMONITEMS_LOADING } from './types';

export const getCommonItems = () => dispatch => {
    dispatch(setCommonItemsLoading());
    
    let commonItems;
    let listItems;

    //get common items
    axios
        .get('/api/commonitems')
        .then(res => {
            commonItems = res.data;
            getCurrentItems(commonItems);
        })

    //get items on list, compare & filter out dupes
    const getCurrentItems = (commonItems) => {
        axios
            .get('/api/items')
            .then(res => {
                listItems = res.data;

                var result = commonItems.filter(function(o1){
                    return !listItems.some(function(o2){
                        return o1.name === o2.name;
                    });
                })
                
                dispatch({
                    type: GET_COMMONITEMS,
                    payload: result
                })
            })
    }
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