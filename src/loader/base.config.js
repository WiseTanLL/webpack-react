/*
 * @Author: tanjun
 * @Date: 2019-07-31 14:13:00
 * @LastEditors  : tanjun
 * @LastEditTime : 2019-12-30 16:58:11
 * @Description: 基本配置
 */

module.exports = {
    isPc: true, // 默认是pc项目 /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
    mock: true, // 全局是否mock
    devHost: 'localhost', // 本地服务启动host
    devPort: 8081, // 本地服务启动端口号
    baseURL: '/', // 真实环境链接访问前缀，不改默认为devhost和devport
}
