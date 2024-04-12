type initialStateType = {
    cartItems: number[]
}

const initialState: initialStateType = {
    cartItems: []
}

export const cartReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'ADD-ITEM-TO-CART': {
            console.log(state)
            return {...state, cartItems: [...state.cartItems, action.id]}
        }
        case 'REMOVE-ITEM-FROM-CART':
            return {...state, cartItems: state.cartItems.filter(el=>el!==action.id)}
        default:
            return state
    }
}

type addItemToCartActionType = ReturnType<typeof addItemToCartAC>
export const addItemToCartAC = (id: number) => ({
    type: 'ADD-ITEM-TO-CART' as const,
    id
})

type removeItemFromCartActionType = ReturnType<typeof removeItemFromCartAC>
export const removeItemFromCartAC = (id: number) => ({
    type: 'REMOVE-ITEM-FROM-CART' as const,
    id
})

type ActionsType = addItemToCartActionType | removeItemFromCartActionType