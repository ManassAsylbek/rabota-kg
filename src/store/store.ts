import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {vacancyAPI} from "../sevices/vacanciesServices";
import {topVacancyAPI} from "../sevices/topVacancyServices";
import {vacancyCategoryAPI} from "../sevices/vacancyCategoryServices";


const rootReducer = combineReducers({
    [vacancyAPI.reducerPath]: vacancyAPI.reducer,
    [topVacancyAPI.reducerPath]: topVacancyAPI.reducer,
    [vacancyCategoryAPI.reducerPath]: vacancyCategoryAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
            vacancyAPI.middleware,
            topVacancyAPI.middleware,
            vacancyCategoryAPI.middleware,
            )

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

