/*
 * @Author: tanjun
 * @Date: 2019-07-29 16:14:00
 * @LastEditors: tanjun
 * @LastEditTime: 2019-08-02 15:09:16
 * @Description: 入口文件
 */
import './loader/api'
import * as d3 from 'd3'
import 'd3-selection-multi'
import 'style/index.scss'
import { Routers } from 'con/index'

ReactDOM.render(
  <Routers/>, 
  document.getElementById('react-app')
)

if (module.hot){
    module.hot.accept() // 模块热更新
}