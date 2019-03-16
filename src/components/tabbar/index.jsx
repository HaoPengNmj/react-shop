import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";
import Badge from '../badge';
import "./css/index.scss";


class Tabbar extends Component {


    render() {
        return (
            <div className={'tabbar'}>
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <i className={'iconfont icon-icon_home'}></i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/map" >
                            <i className={'iconfont icon-ditu1'}></i>
                            <span>分类</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopcart">
                            <i className={'iconfont icon-gouwuche1'}>
                                <Badge />
                            </i>
                            <span>购物车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">
                            <i className={'iconfont icon-tubiaolunkuo-'}></i>
                            <span>我的</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Tabbar;