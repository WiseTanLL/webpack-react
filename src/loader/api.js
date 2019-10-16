/*
 * @Author: tanjun
 * @Date: 2019-07-31 14:19:35
 * @LastEditors: tanjun
 * @LastEditTime: 2019-08-02 14:08:22
 * @Description: 处理接口访问
 */
import baseConfig from './base.config'
import path from 'path'
import * as Mock from 'mockjs'
import MockList from '../mock/index'

// Axios接口拦截器
Axios.interceptors.request.use(config => {
    config.url = initUrl(config) // 处理路径
    return config;
},error => {
    return Promise.reject(error);
});

// 设置返回接口地址前缀
function initUrl(res) {
    let ret = res.url
    // 获取当前连接对应的接口
    let template = Object.values(MockList).find(d => d.url === res.url)
    if (baseConfig.mock){
        // 独立判断接口是否需要mock
        if (typeof template.mock === 'undefined'){
            template.mock = true
        }
    }
    if (template.mock){
        Mock.mock(template.url, template.type, template.template)
    }else if(!/^(\.)*\/$/g.test(baseConfig.baseURL)){
        if (!/^http(s*):\/\//g.test(res.url)){
            if (/^http(s*):\/\//g.test(baseConfig.baseURL)){
                ret = baseConfig.baseURL + ret
            }else{
                ret = path.join(baseConfig.baseURL, ret)
            }
        }
    }
    return ret
}