import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getgoods } from '../../store/good/action';
import TopNav from './../../components/indextop';
import Banner from '../../components/banner';
import Category from "../../components/category";
import Recommend from "../../components/recommend";
import Conference from "../../components/conference";

@connect((state) => ({
  gooddata: state.gooddata
}), {
    getgoods
  })
class Home extends Component {

  componentDidMount() {
    if (!this.props.gooddata.havedata) {
      this.props.getgoods();
    }
  }
  render() {
    //console.log(this.props);
    let { banner, category, recommend, conference } = this.props.gooddata;
    return (
      <div className="home" style={{ marginBottom: '1rem' }}>
        <TopNav />
        <Banner data={banner} />
        <Category data={category} />
        <Recommend data={recommend}/>
        <Conference data={conference} />
        home
      </div>
    )
  }
}

export default Home;
