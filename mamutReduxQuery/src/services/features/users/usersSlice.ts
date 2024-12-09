import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../app/store'

interface UserState {
    user: String,
    isAuth: boolean,
    email: String,
    phone: String
}

// Define the initial state using that type
const initialState: UserState = {
    user: "Nologin",
    isAuth: false,
    email: "nomail@nomail.com",
    phone: ""
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: state => {
            console.log("Se ha pulsado");
        },
        setEmail: (state,action : PayloadAction<String>) => {
            state.email = action.payload;
        }
    }
})

export const { setUser, setEmail } = userSlice.actions
export default userSlice

export const selectCount = (state: RootState) => state.user

