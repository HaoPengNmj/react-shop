let shopTools = {}
//let shop = JSON.parse(window.localStorage.getItem('shopInfo') || '{}')

//同步商品
shopTools.update = function (cartshps) {
    window.localStorage.setItem('shopInfo', JSON.stringify(cartshps));
}

// 默认要获取商品
shopTools.getShop = function () {
    return JSON.parse(window.localStorage.getItem('shopInfo') || '{}')
}

// // 更新商品
// shopTools.addUpdate = function (goods) {
//     // 判断是否已在存在商品id 存在就累加 
//     if (shop[goods.id]) {
//         shop[goods.id] += goods.num
//     } else {
//         shop[goods.id] = goods.num
//     }
//     this.saveShops()
// }

// // 删除
// shopTools.delete = function (id) {
//     delete shop[id]
//     this.saveShops()
// }

// // 默认要获取商品
// shopTools.getShop = function () {
//     return JSON.parse(window.localStorage.getItem('shopInfo') || '{}')
// }


// // 不管啥操作 都要存储
// shopTools.saveShops = function () {
//     window.localStorage.setItem('shopInfo', JSON.stringify(shop))
// }

export default shopTools