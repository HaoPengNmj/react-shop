import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addcart } from "../../store/cart/action";

import api from '../../api/request';
//import LazyLoad,{ lazyload } from 'react-lazyload';
import "./css/index.scss";
// import Shopcart from "../shopcart";

@connect(
    state => ({}),
    { addcart }
)
// @lazyload({
//     height: 200,
//     once: true,
//     offset: 100
// })
class Good extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            num: 0
        }
    }
    async getdata(id) {
        let result = await api('api/buygoods/' + id);
        console.log(result);
        this.setState({
            data: result,
        });
    }
    componentDidMount() {
        let id = this.props.match.params.id
        //console.log(id)
        this.getdata(id);
    }
    submitRedux = () => {
        let { num, data } = this.state
        let { addcart } = this.props
        num && (
            addcart({
                ...data,
                selectnum: num
            })
        )
    }
    // 减少
    reduceGoods = () => {
        let num = this.state.num
        num = num ? num - 1 : num
        this.setState({
            num
        })
    }
    // 增加
    addGoods = () => {
        let num = this.state.num
        num++
        this.setState({ num })
    }

    render() {
        let { num, data } = this.state
        console.log(this.props)
        return (
            <div>
                <div className="shopdedatils">
                    {/* <LazyLoad height={200}>
                        <img src={data.picurl} width="80%" alt={data.title} />
                    </LazyLoad> */}
                    <img src={data.picurl} width="80%" alt={data.title} />
                    <h3 className={'title'}>{data.title}</h3>
                    <h3 className={'des'}>{data.des}</h3>
                    <p className="money">
                        <span className="symbol">{data.symbol}</span>
                        <span className="price">{data.price}</span>
                    </p>
                    <p className="courier">快递：包邮 <span className="fr" ></span></p>
                    <div className="buyNum clearFix">
                        <p className="fl buyfont">购买数量</p>
                        <p className="addNum fr">
                            <a
                                href="javascript:;"
                                className="reduce"
                                onClick={this.reduceGoods}
                            >-</a>
                            <a href="javascript:;" className="num">{num}</a>
                            <a
                                href="javascript:;"
                                className="add"
                                onClick={this.addGoods}
                            >+</a>
                        </p>
                    </div>
                    <div className="buy">
                        <a
                            href="javascript:;"
                            className="addCart"
                            onClick={this.submitRedux}
                        >加入购物车</a>
                        <Link to="/shopcart" className="nowBuy">立即购买</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Good;