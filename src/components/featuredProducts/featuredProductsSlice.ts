import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activeBtn: "All"
}

const featuredProductsSlice = createSlice({
    name: "activeBtn",
    initialState,
    reducers: {
        changingActiveBtn(state, action) {
            state.activeBtn = action.payload
        }
    }
})

const {actions, reducer} = featuredProductsSlice;

export default reducer;

export const {changingActiveBtn} = actions;



