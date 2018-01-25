import { connect } from 'react-redux'

import TabList from '../components/TabList'
import { navLinkChange } from '../store/actions'

import getTodoNumber from '../store/getter/getTodoNumber'

const mapStateToProps = state => ({
   todoNumber: getTodoNumber(state.todos, 'getNumber'), // 获取事件数量
})

const mapDispatchToProps = {
   onNavLink: navLinkChange, // 切换路由dispatch
}

export default connect(mapStateToProps, mapDispatchToProps)(TabList)