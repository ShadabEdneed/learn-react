import {ADD_TO_CART_TYPES} from "./constant"
import {REMOVE_TO_CART_TYPES} from "./constant"


export const addToCart=(data)=>{
    return{
        type:ADD_TO_CART_TYPES.ADD_TO_CART,
        payload:data
    }
}

export const removeToCart=(data)=>{
    return{
        type:REMOVE_TO_CART_TYPES.REMOVE_TO_CART,
        payload:data
    }
}