import React from 'react';
import {adidasArr} from './Adidas';
import {NavLink, useParams} from 'react-router-dom';
import {PATH} from '../../App';

export const Model = () => {
    const params = useParams()
    const currentModel = adidasArr.find(el => el.id === Number(params.id))
    return (
        <div style={{textAlign: 'center'}}>
            {
                currentModel ?
                    <><h2>{currentModel.model}</h2>
                        <h4>{currentModel.collection}</h4>
                        <h3>{currentModel.price}</h3>
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