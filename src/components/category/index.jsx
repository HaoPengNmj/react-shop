import React from 'react';
import {Link} from "react-router-dom";
import "./css/index.scss";

function Index(props){
    const data = props.data
    return (
        <div className={'category'}>
            {
                data.length>0 && (
                    data.map((item,index)=>{
                        return (
                            <Link key={item.id} to={`/shopbuy/${item.shopid}`}>
                                <img src={item.picurl} alt={item.alt}/>
                            </Link>
                        )
                    })
                )
            }
        </div>
    );
}
export default Index;

// class Index extends Component {
//     state = {
//         data: []
//     }
//     componentDidMount() {
//         fetch('http://47.100.98.54:9020/api/category')
//             .then(res=>res.json())
//             .then((data)=>{
//                 if( data.status === 200 ){
//                     this.setState({
//                         data:data.data
//                     })
//                 }
//                 //console.log(data)
//             })
//     }

//     render() {
//         const data = this.state.data
//         return (
//             <div className={'category'}>
//                 {
//                     data.length>0 && (
//                         data.map((item,index)=>{
//                             return (
//                                 <Link key={item.id} to={`/shopbuy/${item.shopid}`}>
//                                     <img src={item.picurl} alt={item.alt}/>
//                                 </Link>
//                             )
//                         })
//                     )
//                 }
//             </div>
//         );
//     }
// }

