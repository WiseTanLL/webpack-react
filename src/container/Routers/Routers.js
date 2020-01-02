/*
 * @Author: tanjun
 * @Date: 2019-07-30 17:55:51
 * @LastEditors  : tanjun
 * @LastEditTime : 2019-12-30 16:15:02
 * @Description: description
 */

import { HashRouter, Switch, Route } from 'react-router-dom'
import { Test } from 'com/index'

export default class Routers extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path={ '/test' } component={ Test }></Route>
                    <Route path={ '/' } component={ Test }></Route>
                </Switch>
            </HashRouter>
        )
    }
}
