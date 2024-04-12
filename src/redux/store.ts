import {combineReducers, legacy_createStore} from "redux";
import {cartReducer} from "./cart-reducer";

const rootReducer = combineReducers({
    cart: cartReducer
})


export const store = legacy_createStore(rootReducer)

export type AppRootState = ReturnType<typeof rootReducer>