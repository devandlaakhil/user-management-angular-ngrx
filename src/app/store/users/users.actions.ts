import {createAction,props} from "@ngrx/store";
import { User } from "../../users/user.model";

export const loadUsers = createAction(
    '[Users] Load Users'
);

export const loadUsersSuccess = createAction(
    '[Users] Load Users Success',
    props<{users : User[]}>()
);

export const loadUsersFailure = createAction(
    '[Users] Load Users Failure',
    props<{error : string}>()
)

export const addUser = createAction(
    '[Users] add User',
    props<{user : User}>()
)

export const addUserSuccess = createAction(
    '[Users] add User Success',
    props<{user : User}>()
)

export const addUserFailure = createAction(
    '[Users] add User Failure',
    props<{error : string}>()
)

export const updateUser = createAction(
    '[Users] update User',
    props<{user : User}>()
)

export const updateUserSuccess = createAction(
    '[Users] update User Success',
    props<{user : User}>()
)

export const updateUserFailure = createAction(
    '[Users] user Update Failure',
    props<{error : string}>()
)

export const deleteUser = createAction(
    '[Users] delete User',
    props<{id:string}>()
)

export const deleteUserSuccess = createAction(
    '[Users] delete User Success',
    props<{id:string}>()
)

export const deleteUserFailure = createAction(
    '[Users] delete User Failure',
    props<{error:string}>()
)