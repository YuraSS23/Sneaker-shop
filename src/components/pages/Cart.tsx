import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../redux/store";
import {adidasArr} from "./Adidas";
import {addItemToCartAC, cartItem, removeItemFromCartAC} from "../../redux/cart-reducer";

export const Cart = () => {
    const dispatch = useDispatch()
    const items = useSelector<AppRootState, cartItem[]>(state => state.cart)
    const removeItem = (id: number) => {
        dispatch(removeItemFromCartAC(id))
    }
    return <div>
        {items.map(el => {return <div>
            <img src={adidasArr.find(b=>b.id===el.id)?.picture}
                 alt={adidasArr.find(b=>b.id===el.id)?.model}
                 style={{width: '50px', height: 'auto', marginRight: '10px'}}/>
            <div>
                <button>-</button>
                {el.count}
                <button onClick={()=>dispatch(addItemToCartAC(el.id))}>+</button>
            </div>
            <button onClick={() => removeItem(el.id)}>Remove</button>
        </div>})}
    </div>
}
