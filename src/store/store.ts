import {combineReducers, configureStore} from "@reduxjs/toolkit";



const rootReducer = combineReducers({

})

export const setupStore = () =>{
    return configureStore({
        reducer:rootReducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(/*markerAPI.middleware,
            eventAPI.middleware,userAPI.middleware*/)

    })
}

export type RootState = ReturnType <typeof rootReducer>
export type AppStore = ReturnType <typeof setupStore>
export type AppDispatch = AppStore['dispatch']

