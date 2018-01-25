import { ADD_TODO, ADD_RUN_OK_UPDATE, REMOVE_TODO, SEARCH_TODO } from '../actionTypes'

let storeStr = localStorage.getItem('memo_todos'),
   store = storeStr ? JSON.parse(storeStr) : {
      oldState: [],
      memberId: 0
   },
   memberId = store.memberId

const todos = (state = store.oldState, action) => {
   let newState

   switch (action.type) {
      case ADD_TODO:
         // 添加成员
         newState = [
            ...state, {
               todoName: action.todoName,
               id: memberId++,
               status: 0, // 0: 新建， 1：进行中， 2：已完成
            }
         ]
         break

      case ADD_RUN_OK_UPDATE:
         // 更新成员
         newState = state.map(member => member.id === action.id ? {
            todoName: member.todoName,
            id: member.id,
            status: action.toStatus, // toStatus：期望达到的状态
         } : member)
         break

      case REMOVE_TODO:
         // 删除成员
         state.splice(state.findIndex(member => member.id === action.id), 1)
         newState = [...state]
         break

      case SEARCH_TODO:
         // 搜索成员
         newState = action.searchValue ? state.filter(member => member.todoName === action.searchValue) : JSON.parse(localStorage.getItem('memo_todos')).oldState
         break

      default:
         newState = state
         break
   }

   action.typeClass === 'todos.js' && action.type !== SEARCH_TODO && localStorage.setItem('memo_todos', JSON.stringify({
      oldState: newState,
      memberId
   }))
   return newState
}

export default todos