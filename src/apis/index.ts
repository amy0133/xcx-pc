/*
 * @Description: 接口集合
 * @Author: amy
 * @Date: 2019-04-24 17:26:13
 * @LastEditTime: 2019-04-24 17:46:00
 */
const axios = require('axios');

// 配置异步请求默认值
(() => {
    axios.defaults.baseURL = '/api';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.timeout = 60000;
})();
