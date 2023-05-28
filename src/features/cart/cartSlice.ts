import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemObj } from "../../models/CartItemObj";

export interface CartState {
    cartList: CartItemObj[]
}

const initialState: CartState = {
    cartList: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartItemObj>) => {
            state.cartList.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.cartList = state.cartList.filter(item => item.id !== action.payload);
        },
        increaseQunatity: (state, action: PayloadAction<number>) => {
            state.cartList.forEach(item => {
                item.id === action.payload && item.quantity++;
            })
        },
        decreaseQunatity: (state, action: PayloadAction<number>) => {
            state.cartList.forEach(item => {
                item.id === action.payload && item.quantity--;
            })
        }
    }
})

export const {addProduct, removeProduct, increaseQunatity, decreaseQunatity} = cartSlice.actions;

export default cartSlice.reducer;