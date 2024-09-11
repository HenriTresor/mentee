import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    user: {
        email: '',
        fullName: ''
    },
    authenticated: false
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        authenticate: function (state, action) {
            state.authenticated = true
            state.token = action.payload.token
            state.user = action.payload.user
            localStorage.setItem('token', action.payload.token)
        }
    }
})

export const { authenticate } = userSlice.actions

export default userSlice.reducer