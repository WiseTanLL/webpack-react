/*
 * @Description: 
 * @Author: tanjun
 * @Data: Do not edit
 * @LastEditors  : tanjun
 * @LastEditTime : 2019-12-30 16:16:07
 */
import './Test.scss';
import { connect } from 'react-redux';
import { 
    REDUX_DATA_SAGA,
    REDUX_DATA_SYNCH,
 } from '@/redux/actions/index';
class Test extends Component {
    constructor(props) {
        super(props)
    }
    onclick() {
        // 利用saga异步发送state
        // this.props.dispatch({
        //     type: REDUX_DATA_SAGA
        // });
        
        // 同步发送state
        this.props.dispatch({
            type: REDUX_DATA_SYNCH
        });
    }
    componentDidMount() {
        // Axios.get('/aa/bb').then((res) => {
        //     console.log('结果：', res)
        // }, (err) => {
        //     console.log(err)
        // })
    }
    render() {
        return (
            <div id="svg-d3" onClick={this.onclick.bind(this)}>{this.props.number}</div>
        )
    }
}
export default connect(
    state => ({
        number: state.number
    })
)(Test);