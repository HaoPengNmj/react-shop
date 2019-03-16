import * as goodtype from './action-type';

//首页商品s
let defaultState = {
    havedata: false,
    banner: [],
    category: [],
    recommend: {},
    conference: {}
}

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case goodtype.GETGOODS:
            return { ...defaultState, ...action.data }
        default:
            return state;
    }
}