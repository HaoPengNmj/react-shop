import React, {Component} from "react";
import "./index.scss"
import Head from "./head"
import Orders from "./order";
import OrderNav from "./ordernav";
import Spacing from "./spacing";
import Go from "./arrow/go";
// import {Route, Switch} from "react-router-dom";
// import Tabbar from "../tabbar";
class User extends Component {
    render() {
        return (
            <div className="my">
                <Head />
                <Orders/>
                <OrderNav/>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_member"}>
                        <a href="/">
                            会员中心
                            <Go/>
                        </a>
                    </li>
                    <li className={"i_wallet"}>
                        <a href="/">
                            我的优惠
                            <Go/>
                        </a>
                    </li>
                </ul>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_service"}>
                        <a href="/">
                            服务中心
                            <Go/>
                        </a>
                    </li>
                    <li className={"i_mihome"}>
                        <a href="/">
                            小米之家
                            <Go/>
                        </a>
                    </li>
                </ul>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_fcode"}>
                        <a href="/">
                            F 码通道
                            <Go/>
                        </a>
                    </li>
                </ul>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_settings"}>
                        <a href="/">
                            <div className="title">
                                设置
                                <Go/>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className={"s_bottom"}></div>

            </div>
        );
    }
}

export default User;