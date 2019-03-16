import * as carttype from './action-type';
import shoptool from '../../util/shoptools';

let defaultState = {
    price: 0,
    num: 0,
    cartshops: {

    }
}

// function sumShopNum(carts) {
//     let keys = Object.keys(carts);
//     return keys.reduce((pre, cur) => pre + carts[cur].selectnum, 0)
// }

function sumShopNumAndPrice(carts) {
    let keys = Object.keys(carts);
    return keys.reduce(
        (pre, cur) => {
            pre.num += carts[cur].selectnum;
            pre.price += carts[cur].selectnum * carts[cur].price
            return pre;
        }, {
            price: 0,
            num: 0
        })
}

export default function reducer(state = defaultState, action) {
    let cartshops = { ...state.cartshops };
    let shopid;
    let numAndPrice;
    let finState;
    switch (action.type) {
        case carttype.ADDCART:
            shopid = action.shop.shopid;
            if (cartshops[shopid]) {
                let oldselectnum = cartshops[shopid].selectnum;
                cartshops[shopid] = { ...cartshops[shopid], ...action.shop };
                cartshops[shopid].selectnum += oldselectnum;
            } else {
                cartshops[shopid] = { ...action.shop };
            }
            numAndPrice = sumShopNumAndPrice(cartshops);
            finState = { ...numAndPrice, cartshops };
            shoptool.update(finState);
            return finState;

        // case carttype.EDITCART:
        //     let cartitem = { ...cartlist[action.index], ...{ selectnum: action.selectnum } };
        //     cartlist[action.index] = cartitem;
        //     num = sumShopNum(cartshops);
        //     return { ...state, num, cartshops };

        case carttype.REMOVECART:
            //console.log(action);        
            shopid = action.index
            delete cartshops[shopid];
            numAndPrice = sumShopNumAndPrice(cartshops);
            finState = { ...numAndPrice, cartshops };
            shoptool.update(finState);
            return finState;

        default:
            let localState = shoptool.getShop();
            return {...state, ...localState };
    }
}

// des
// :
// "潮流镜面渐变色，自拍旗舰"
// font
// :
// " 起"
// id
// :
// "09478556815951"
// picurl
// :
// "http://47.100.98.54:9020/goods/1.jpg"
// price
// :
// "1399"
// shopid
// :
// 11
// symbol
// :
// "¥"
// title
// :
// "小米8 青春版"

// {
//     shopid:0,
//     shopname:'',
//     price:'',
//     picurl:'',
//     selectnum:0
// }
//return {...state};