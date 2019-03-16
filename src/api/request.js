const baseurl = "http://47.100.98.54:9020/";

export const checkstate=(data)=>{
    if( data.status === 200 ){
        return data.data;
    }
    return [];
}

function featchfun(url) {
    return fetch(baseurl + url)
        .then(res => res.json())
}

export default featchfun;
//api/name