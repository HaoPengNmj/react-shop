import React, {Component} from "react";
import "./index.scss"
import Go from "./arrow/go";
class Orders extends Component {
    render() {
        return (
            <div className={"orders"}>
                <p className={"title"}>
                    我的订单
                </p>
                <p className={"all_orders"}>
                    <a href="/">
                        全部订单
                        <Go/>
                    </a>

                </p>
            </div>
        );
    }
}

export default Orders;