import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../redux/store";
import {adidasArr} from "./Adidas";
import {removeItemFromCartAC} from "../../redux/cart-reducer";

export const Cart = () => {
    const dispatch = useDispatch()
    const items = useSelector<AppRootState, number[]>(state => state.cart.cartItems)
    const currentModel = adidasArr.find(el => el.id === items[0])
    const removeItem = (id: number) => {
        dispatch(removeItemFromCartAC(id))
    }
    return (
        <div>
            <img src={currentModel?.picture}
                 alt={currentModel?.model}
                 style={{width: '600px', height: 'auto', marginRight: '10px'}}/>
            <button onClick={()=>removeItem(currentModel?.id ? currentModel.id : 0)}>Remove</button>
        </div>
    )
}
