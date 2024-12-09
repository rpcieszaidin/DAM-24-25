import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../services/features/users/usersSlice'
import { recipeSlice } from '../services/features/recipes/recipesSlice'
// ...

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [recipeSlice.reducerPath]: recipeSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(recipeSlice.middleware)
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

