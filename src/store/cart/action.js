import * as carttype from './action-type';

export const addcart = (shop)=>{
    return {
        type:carttype.ADDCART,
        shop
    }
}

export const editcart = (index)=>{
    return {
        type:carttype.EDITCART,
        index
    }
}

export const removecart = (index)=>{
    return {
        type:carttype.REMOVECART,
        index
    }
}