import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activeBtn: "All",
    searchValue: ''
}

const featuredProductsSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changingActiveBtn(state, action) {
            state.activeBtn = action.payload
        },
        changingSearchValue(state, action) {
            state.searchValue = action.payload
        }
    }
})

const {actions, reducer} = featuredProductsSlice;

export default reducer;

export const {changingActiveBtn, changingSearchValue} = actions;



