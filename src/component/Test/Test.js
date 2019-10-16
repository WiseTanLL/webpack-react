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

function Foo() {
    getName = function() {
        console.log(1)
    }
    return this
}
Foo.getName = function() {
    console.log(2)
}
Foo.prototype.getName = function() {
    console.log(3)
}
var getName = function() {
    console.log(4)
}
function getName() {
    console.log(5)
}
Foo.getName()
getName()
Foo().getName()
getName()
new Foo.getName()
new Foo().getName()
new new Foo().getName()