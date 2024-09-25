export type cartItem = {
    id: number,
    count: number
}

type cartItems = cartItem[]

const initialState: cartItems = []

export const cartReducer = (state: cartItems = initialState, action: ActionsType): cartItems => {
    switch (action.type) {
        case 'ADD-ITEM-TO-CART': {
            if (state.find(el=>el.id===action.id)) return state.map(el=>el.id===action.id ? {...el, count: el.count+1} : el)
            return [...state, {id: action.id, count: 1}]
        }
        case 'REMOVE-ITEM-FROM-CART':
            return state.filter(el=>el.id!==action.id)
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