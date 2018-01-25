import { connect } from 'react-redux'
import { todoInfoChange } from '../../store/actions'

import ShowNode from './ShowNode'

const getActive = (todoInfoSelect, value) => todoInfoSelect.filter(member => member.name === `${value}_INFO`)[0].isOpen

const mapStateToProps = (state, ownProps) => ({
   isOpen: getActive(state.todoInfoSelect, ownProps.value)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
   onTodoInfoChange: () => {
      dispatch(todoInfoChange(`${ownProps.value}_INFO`))
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowNode)