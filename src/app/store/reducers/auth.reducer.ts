import { User } from '@app/models/user';
import { MyAction, AuthActionTypes } from '../actions/auth.action';


export interface AuthState {
    user: User | null;
    loading: boolean;
    loaded: boolean;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    loaded: false
};

export const authReducer: (state: AuthState, action: MyAction)
    => AuthState = (
        state = initialState,
        action: MyAction,
    ) => {
        switch (action.type) {
            case AuthActionTypes.LOGIN_USER:
                return { ...state, loading: true, loaded: false };
            case AuthActionTypes.REGISTER_USER:
                return { ...state, loading: true, loaded: false };
            case AuthActionTypes.SET_INITIAL_USER:
                return { ...state, loading: true, loaded: false };
            case AuthActionTypes.SET_CURRENT_USER:
                return { ...state, user: action.payload, loading: false, loaded: true };
            default:
                return state;
        }
    };
