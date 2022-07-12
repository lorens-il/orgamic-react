import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IInitialState } from "../../interfaces/interfaces";


const initialState: IInitialState = {
    activeBtn: "All",
    searchValue: ''
};

const featuredProductsSlice = createSlice({
    name: "filters",// составная часть типа в экшене
    initialState,
    reducers: {
        changingActiveBtn(state, action: PayloadAction<string>) {
            state.activeBtn = action.payload;
        },
        changingSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        }
    }
});

const {actions, reducer} = featuredProductsSlice;

export default reducer;

export const {changingActiveBtn, changingSearchValue} = actions;



