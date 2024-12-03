import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../services/features/users/usersSlice'
// ...

export const store = configureStore({
  reducer: {
    users: userSlice
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

