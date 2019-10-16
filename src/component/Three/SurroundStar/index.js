/*
 * @Description: 环绕星星动效
 * @Author: tanjun
 * @Data: Do not edit
 * @LastEditors: tanjun
 * @LastEditTime: 2019-08-23 15:42:42
 */
import './index.scss'
import * as Three from 'three'

export default class SurroundStar extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.initContainer()
    }
    // 声明盒子
    initContainer() {
        this.dom = document.getElementById('surround_chart')
        this.scene = new Three.Scene() // 场景
        this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)  // 照相机
        this.renderer = new Three.WebGLRenderer({ // 渲染器
            alpha: true
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.dom.appendChild(this.renderer.domElement)
    }
    // 声明轨道
    initTrack() {

    }
    addMesh() {
        let cube = new Three.Mesh()
    }
    render() {
        return (
            <div id={ 'surround_chart' }></div>
        )
    }
}