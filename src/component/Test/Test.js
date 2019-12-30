/*
 * @Description: 
 * @Author: tanjun
 * @Data: Do not edit
 * @LastEditors  : tanjun
 * @LastEditTime : 2019-12-30 16:16:07
 */
import './Test.scss';
export default class Test extends Component {
    constructor(props) {
        super(props)
        console.log(1)
    }
    componentDidMount() {
        // Axios.get('/aa/bb').then((res) => {
        //     console.log('结果：', res)
        // }, (err) => {
        //     console.log(err)
        // })
        // let svg = d3.select('#svg-d3')
        // svg.attrs({
        //     name: 1
        // })
        // console.log(svg.node())
    }
    render() {
        return (<div id="svg-d3"></div>)
    }
}