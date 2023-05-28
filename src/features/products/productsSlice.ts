import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductsItem } from "../../models/ProductsList";
import { RootState } from "../../app/store";

export interface ProductState {
    productsList: ProductsItem[]
}

const initialState: ProductState = {
    productsList: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateProducts: (state, action: PayloadAction<ProductsItem[]>) => {
            state.productsList.splice(0, state.productsList.length);
            action.payload.forEach(item => state.productsList.push(item));
        }
    }
})

export const {updateProducts} = productsSlice.actions;
export default productsSlice.reducer;