import { createReducer,on } from "@ngrx/store";
import{
    loadUsers,
    loadUsersSuccess,
    loadUsersFailure,
    addUser,
    addUserSuccess,
    addUserFailure,
    updateUser,
    updateUserSuccess,
    updateUserFailure,
    deleteUser,
    deleteUserSuccess,
    deleteUserFailure
} from './users.actions';
import {User} from '../../users/user.model';

export interface UserState{
    users : User[],
    loading : boolean,
    error : string | null
}

export const intialState : UserState = {
    users : [],
    loading : false,
    error : null
}

export const usersReducer = createReducer(
    intialState,

    on(loadUsers, (state) => ({
        ...state,
        loading : true,
        error : null
    })),
    on(loadUsersSuccess, (state,{users}) => ({
        ...state,
        users,
        loading: false,
    })),
    on(loadUsersFailure, (state,{error}) => ({
        ...state,
        loading : false,
        error
    })),
    on(addUser, (state) => ({
        ...state,
        loading : true
    })),
    on(addUserSuccess, (state, {user}) => ({
        ...state,
        users : [...state.users,user],
        loading : false
    })),
    on(addUserFailure, (state,{error}) => ({
        ...state,
        error,
        loading : false
    })),
    on(updateUser, (state,{user}) => ({
        ...state,
        loading : true
    })),
    on(updateUserSuccess, (state, {user}) => ({
        ...state,
        users : state.users.map((item) => item.id === user.id ? user : item),
        loading : false
    })),
    on(updateUserFailure,(state,{error}) => ({
        ...state,
        loading : false,
        error
    })),
    on(deleteUser, (state) => ({
        ...state,
        loading: true
    })),
    on(deleteUserSuccess, (state,{id}) => ({
        ...state,
        users : state.users.filter((item) => item.id !== id),
        loading : false
    })),
    on(deleteUserFailure, (state,{error}) => ({
        ...state,
        loading:false,
        error
    }))
)
