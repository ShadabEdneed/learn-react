import { ADD_TO_CART_TYPES } from "../Action/constant";
// import {REMOVE_TO_CART_TYPE} from "../Action/constant"
const initialState ={
    cardData:0
}


export default function cardItems(state=initialState, {type,payload}){
   switch(type){
       case ADD_TO_CART_TYPES.ADD_TO_CART:
           return{
               ...state,
               cardData: payload?state.cardData+1:state.cardData
           };
           case ADD_TO_CART_TYPES.REMOVE_TO_CART: 
           return{
            ...state,
            cardData: payload?state.cardData-1:state.cardData
            };
           default:return state
        //    default:
        //     return {count:0};

         
   }
}