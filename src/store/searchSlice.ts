import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IState {
    region:string,
    category:string,
    search:string,
}

const initialState:IState = {
    region: "",
    category: "",
    search: "",

};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addRegion:(state, action: PayloadAction<string>) => {
            state.region = action.payload;
        },
        addCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        addSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export const {addRegion,addCategory,addSearch} = searchSlice.actions;

export default searchSlice.reducer;
