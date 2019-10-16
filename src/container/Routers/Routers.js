/*
 * @Author: tanjun
 * @Date: 2019-07-30 17:55:51
 * @LastEditors: tanjun
 * @LastEditTime: 2019-10-14 10:56:35
 * @Description: description
 */

import { HashRouter, Switch, Route } from 'react-router-dom'
import { Test, SurroundStar } from 'com/index'

export default class Routers extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path={ '/test' } component={ Test }></Route>
                    {/* <Route path={ '/' } component={ SurroundStar }></Route> */}
                </Switch>
            </HashRouter>
        )
    }
}
