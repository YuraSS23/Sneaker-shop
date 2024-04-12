import React from 'react';
import {adidasArr} from './Adidas';
import {NavLink, useParams} from 'react-router-dom';
import {PATH} from '../../App';
import {useDispatch} from "react-redux";
import {addItemToCartAC} from "../../redux/cart-reducer";

export const Model = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const currentModel = adidasArr.find(el => el.id === Number(params.id))
    const addToCart = (id: number) => {
        dispatch(addItemToCartAC(id))
    }
    return (
        <div style={{textAlign: 'center'}}>
            {
                currentModel ?
                    <><h2>{currentModel.model}</h2>
                        <h4>{currentModel.collection}</h4>
                        <h3>{currentModel.price}</h3>
                        <div>
                            <button onClick={()=>addToCart(currentModel?.id)}>Add to cart</button>
                        </div>
                        <img src={currentModel.picture}
                             alt={currentModel.model}
                             style={{width: '600px', height: 'auto', marginRight: '10px'}}/></>
                    : <h2>Такой модели не существует</h2>
            }
            <div>
                <NavLink to={PATH.ADIDAS} style={{color: '#03eaff'}}>Назад</NavLink>
            </div>
        </div>
    );
};