import { SET_TODO_INFO_SELECT } from '../actionTypes'

const defaultList = [{
   name: 'ADD_TODO_INFO',
   isOpen: false
}, {
   name: 'RUN_TODO_INFO',
   isOpen: false
}, {
   name: 'OK_TODO_INFO',
   isOpen: false
}]

const todoInfoSelect = (state = defaultList, action) => {
   // 切换详情列表展开状态
   switch (action.type) {
      case SET_TODO_INFO_SELECT:
         return state.map(info => info.name === action.setName ? {
            ...info,
            isOpen: !info.isOpen
         } : info)

      default:
         return state
   }
}

export default todoInfoSelect