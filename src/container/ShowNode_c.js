import { connect } from 'react-redux'
import ShowNode from '../components/show_node'

import getTodoNumber from '../store/getter/getTodoNumber'

const mapStateToProps = state => ({
   todoNumber: getTodoNumber(state.todos), // 获取事件数量
})

export default connect(mapStateToProps)(ShowNode)
