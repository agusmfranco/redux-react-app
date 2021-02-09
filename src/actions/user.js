import { user as UserTypes } from '../constants/actionTypes';
import {login as doLogin} from '../mockRequests/usuarios';

export const setLoading = (loading) => async(dispatch) => {
    dispatch({
        type: UserTypes.LOADING,
        payload: loading
    });
};

export const login = (username, password) => async(dispatch) => {
    await dispatch(setLoading(true));
    const user = await doLogin(username, password);
    if (user.error){
        dispatch({
            type: UserTypes.ERROR,
            payload: user.error
        });
    } else{
        dispatch({
            type: UserTypes.SET_USER,
            payload: loading
        });
    }
    
    await dispatch(setLoading(false));
};

export default {
    setLoading,
    login,
}