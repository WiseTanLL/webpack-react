/*
 * @Description: 
 * @Author: tanjun
 * @Data: Do not edit
 * @LastEditors: tanjun
 * @LastEditTime: 2019-10-14 11:09:48
 */
export default class Test extends Component {
    constructor(props) {
        super(props)
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