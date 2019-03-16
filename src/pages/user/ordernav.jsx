import React, {Component} from "react";
import "./index.scss"
class OrderNav extends Component {
    render() {
        return (
            <div className={"order_nav"}>
                <ul>
                    <li>
                        <a href="/">
                            <div className={"icon"}>
                                <img src={require("./img/nav_01.png")} alt="nav"/>
                            </div>
                            <span>代付款</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div className={"icon"}>
                                <img src={require("./img/nav_02.png")} alt="nav"/>
                            </div>
                            <span>代收货</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div className={"icon"}>
                                <img src={require("./img/nav_03.png")} alt="nav"/>
                            </div>
                            <span>退换修</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default OrderNav;