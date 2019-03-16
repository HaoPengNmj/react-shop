import React, {Component} from "react";
import "./index.scss"
class Index extends Component {
    render() {
        return (
            <header className={"hd"}>
                <div className={"avatar"}>
                    <img src={require("./img/avatar.png")} alt="avatar"/>
                </div>
                <div className={"login"}>登录/注册</div>
            </header>
        );
    }
}

export default Index;