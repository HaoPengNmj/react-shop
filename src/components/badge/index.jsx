import React, { Component } from 'react'
import { connect } from "react-redux";

@connect((state) => ({ num: state.cartdata.num }))
class Badge extends Component {
    render() {
        return (
            <em>
                {this.props.num}
            </em>
        )
    }
}
export default Badge;