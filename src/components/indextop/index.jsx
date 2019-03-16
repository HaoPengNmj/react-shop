import React, { Component } from 'react';
import './index.scss'
class Index extends Component {
    state = {
        data: 'react项目'
    }
    componentDidMount() {
        //this.getData();       
    }

    // async getData() {
    //     let data = await api("api/name");
    //     if (data.status === 200) {
    //         this.setState({
    //             data:data.name
    //         });
    //     }    
    // }

    render() {
        return (
            <header className={'index_top'}>
                <div className={'logo'}>
                    <img src={require('./img/logo.png')} alt="" />
                </div>
                <div className={'search '}>
                    <i className={'iconfont icon-search1'}></i>
                    <span>{this.state.data}</span>
                </div>
                <div className={'login iconfont icon-wode'}></div>
            </header>
        );
    }
}

export default Index;