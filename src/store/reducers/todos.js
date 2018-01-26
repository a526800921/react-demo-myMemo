import { ADD_TODO, ADD_RUN_OK_UPDATE, REMOVE_TODO, SEARCH_TODO } from '../actionTypes'
import fuzzyMatch from '../../plugin/fuzzyMatch'

let storeStr = localStorage.getItem('memo_todos'),
   store = storeStr ? JSON.parse(storeStr) : {
      oldState: [],
      memberId: 0
   },
   memberId = store.memberId,
   lastIsSearch = false // 上一次是否是搜索

const todos = (state = store.oldState, action) => {
   let newState
   if (action.typeClass === 'todos.js' && lastIsSearch) {
      state = JSON.parse(localStorage.getItem('memo_todos')).oldState // 如果上一次是搜索，则从本地记录获取
      lastIsSearch = false // 重置
   }

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
         if (action.searchValue) {
            // 获取模糊匹配数组
            lastIsSearch = true

            let search = action.searchValue.toLocaleLowerCase().replace(/[^\w\d\u4e00-\u9fa5]/g, ',').split(',').filter(member => member)
            // 返回一个等待排序的数组，{todos: member, successCount: number} successCount: 匹配成功次数
            let awaitSort = state.map(member => {
               let newMember = {
                  todos: member,
                  successCount: 0
               }
               for (let i = 0; i < search.length; i++) {
                  fuzzyMatch(search[i], member.todoName, { openSearchFilter: false }) && ++newMember.successCount
               }

               return newMember.successCount > 0 ? newMember : undefined
            })
            // 将数组按匹配成功次数进行降序排序并删除无成员的项
            awaitSort.sort((a, b) => b.successCount - a.successCount)
            let removeIndex = awaitSort.findIndex(member => !member)
            removeIndex >= 0 && awaitSort.splice(removeIndex)
            // 返回降序数组
            newState = awaitSort.map(member => member.todos)
         } else {
            newState = state
         }
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