import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import {Model} from './components/pages/Model';
import {Cart} from "./components/pages/Cart";
import {useSelector} from "react-redux";
import {AppRootState} from "./redux/store";


export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
} as const;

function App() {
    const items = useSelector<AppRootState, number[]>(state => state.cart.cartItems)
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <NavLink to={"/Cart"}>Cart {items.length? items.length: ''}</NavLink>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/adidas'}/>}/>

                        <Route path={'/Cart'} element={<Cart/>}/>
                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>
                        <Route path={'/adidas/:id'} element={<Model/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2024</div>
        </div>
    );
}

export default App;

