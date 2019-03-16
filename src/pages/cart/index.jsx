import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addcart, removecart } from '../../store/cart/action';

import "./css/index.scss";

@connect(
  (state) => ({
    cartshops: state.cartdata.cartshops,
    sumnum:state.cartdata.num,
    sumprice:state.cartdata.price
  }), {
    addcart,
    removecart
  }
)
class Cart extends Component {
  // 删除商品
  delGoods = (id) => {
    let { removecart} = this.props    
    removecart(id);   
  }

  // 减少
  reduceGoods = (id) => {
    let { addcart ,cartshops} = this.props;
    if (cartshops[id].selectnum) {     
      addcart({
        ...cartshops[id],
        selectnum: -1
      })
    }
  }
  // 增加
  addGoods = (id) => {
    let { addcart ,cartshops} = this.props; 
    console.log("addGoods",id,cartshops);
       
    addcart({
      ...cartshops[id],
      selectnum: 1
    })
  }

  render() {
    let { cartshops, sumnum ,sumprice} = this.props;
    let goods = Object.values(cartshops);
     console.log(goods);
    return (
      <div className={'shopcart'}>

        <div className="shopArea mb">
          <p className="location clearFix">
            <span className="fl">送到地点:</span>
            <span className="fr">编辑地址</span>
          </p>
          {
            goods.length > 0 && (
              goods.map((item, index) => {
                return (
                  <div key={index} className="shop ">
                    <div className="shopShow">
                      <div className="pic ">
                        <img src={item.picurl} alt={item.title} />
                      </div>
                    </div>
                    <div className="title ">{item.title}</div>
                    <div className="des ">{item.des}</div>
                    <div className="buyNum ">
                      <p className=" buyfont">{item.symbol} {item.price}</p>
                      <p className="addNum ">
                        <a
                          href="javascript:;"
                          className="reduce"
                          onClick={this.reduceGoods.bind(this, item.shopid)}
                        >-</a>
                        <a href="javascript:;" className="num">{item.selectnum}</a>
                        <a
                          href="javascript:;"
                          className="add"
                          onClick={this.addGoods.bind(this, item.shopid)}
                        >+</a>
                      </p>
                      <a
                        href="javascript:;"
                        className="del"
                        onClick={this.delGoods.bind(this, item.shopid)}
                      >删除</a>
                    </div>
                  </div>
                )
              })
            )
          }
          <div className="totalPrice">

            <div className="total">
              <p className="totalMoney">
                <span className="font">总计:</span> <span>￥ {sumprice}</span>
              </p>
              <p className="preferential">
                总金额￥{sumprice} 优惠￥0.00
                            </p>
            </div>
            <div className="goPayment">
              <span className="font">去结算</span><span className="num">({sumnum}件)</span>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Cart;
