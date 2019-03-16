import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Swiper from "swiper/dist/js/swiper.min";
import "swiper/dist/css/swiper.min.css";
import "./css/index.scss";

class Banner extends Component {

    constructor() {
        super();
        this.state = {
            initSwiper: false
        }
    }
    shouldComponentUpdate(nextprops, nextstate) {
        if (!nextstate.initSwiper) {
            this.setState({
                initSwiper: true
            });
            return true;
        }
        // console.log(nextprops);
        // console.log('banner update');        
        return false;
    }
    componentDidUpdate() {
        this.initSwiper();
        //console.log('banner diddate');
    }
    componentDidMount() {
        if(this.props.data.length>0){
            this.initSwiper();
        }
    }
    initSwiper(){
        new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true
        });
    }
    render() {
        // 数据驱动视图
        return (
            <div className={'banner swiper-container'}>
                <ul className={'swiper-wrapper'}>
                    {
                        this.props.data.length > 0 && (
                            this.props.data.map((item, index) => {
                                return (
                                    <li className={'swiper-slide'} key={item.id}>
                                        <Link to={`/shopbuy/${item.shopid}`}>
                                            <img src={item.picurl} alt={item.alt} />
                                        </Link>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
                <div className="swiper-pagination"></div>
            </div>
        );
    }
}

export default Banner;

 // async play (){
    //     let data = await api('api/banner');
    //     if(data.status !== 200)return;
    //     console.log("banner",data.data);        
    //     this.setState({
    //         data: data.data
    //     });  
    // }