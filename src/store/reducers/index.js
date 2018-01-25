import { combineReducers } from 'redux'
import todos from './todos'
import navLink from './nav_link'
import todoInfoSelect from './todo_info_select'

export default combineReducers({
   todos,
   navLink,
   todoInfoSelect,
})