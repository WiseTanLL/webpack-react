/*
 * @Author: tanjun
 * @Date: 2019-07-29 16:14:00
 * @LastEditors  : tanjun
 * @LastEditTime : 2019-12-30 16:57:45
 * @Description: 入口文件
 */
import './loader/api';
import * as d3 from 'd3';
import 'd3-selection-multi';
import 'style/index.scss';
import { Routers } from 'con/index';
import * as baseConfig from '@/loader/base.config.js';

if (!baseConfig.isPc){ // 匹配为移动端
  require('amfe-flexible/index'); // 加载flexible
}

ReactDOM.render(
  <Routers/>, 
  document.getElementById('react-app')
)

if (module.hot){
    module.hot.accept() // 模块热更新
}