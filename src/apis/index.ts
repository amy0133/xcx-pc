/*
 * @Description: 接口集合
 * @Author: amy
 * @Date: 2019-04-24 17:26:13
 * @LastEditTime: 2019-04-25 16:10:02
 */
const axios = require('axios');
const qs = require('qs');

// 配置异步请求默认值
(() => {
    axios.defaults.baseURL = '/api';
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.timeout = 60000;
})();

// 拦截器
// axios.interceptors


// response回调
const ajaxAfter = (result: any) => {
    return new Promise((resolve, reject) => {
        if(result.status === 200){
            if(result.data.code === 0){
                resolve(result.data);
            }else{
                reject(result.data);
            }
        }else{
            console.error('Oops，网络开小差了，请稍后再试！');
            reject(result.data);
        }
    });
}

/**
 * @description: 封装POST请求
 */
export const ajaxPost = (url: string, data: object) => {
    return axios.request({
        url,
        method: 'POST',
        data: qs.stringify(data)
    }).then((result: object) => ajaxAfter(result));
}

/**
 * @description: 封装GET请求
 */
export const ajaxGet = (url: string, data: object) => {
    return axios.get(url, {
        params: data
    }).then((result: object) => ajaxAfter(result));
}


/**
 * 接口列表
 */
// 产品
export const apiProductList = (data: object) => ajaxGet('/product/findAll', data);
export const apiProductAdd = (data: object) => ajaxPost('/product/create', data);

