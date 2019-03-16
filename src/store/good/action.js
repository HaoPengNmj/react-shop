import * as goodtype from './action-type';
import api from '../../api/request';



export const getgoods = () => {
    return (dispatch) => {
        let dataAry = [
            api('api/banner'),
            api('api/category'),
            api('api/recommend'),
            api('api/conference')
        ];
        Promise.all(dataAry)
            .then((alldata) => {
                //console.log(alldata);
                let mpadata = alldata.map(item => {
                    return item.status === 200 ? item.data : [];
                });
                return dispatch({
                    type: goodtype.GETGOODS,
                    data: {
                        havedata: true,
                        banner: mpadata[0],
                        category: mpadata[1],
                        recommend: mpadata[2],
                        conference: mpadata[3]
                    }
                });
            })
            .catch((err) => {
                console.log(err);
                return dispatch({
                    type: goodtype.GETGOODS,
                    data: {
                        banner: [],
                        category: [],
                        recommend: [],
                        conference: []
                    }
                });
            })
    }
}