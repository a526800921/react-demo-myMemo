import { 
   ADD_TODO,
   ADD_RUN_OK_UPDATE,
   REMOVE_TODO,
   SEARCH_TODO,
   SET_NAVLINK,
   SET_TODO_INFO_SELECT } from '../actionTypes'

// todo.js
// 添加成员
export const addTodo = text => ({
   typeClass: 'todos.js',
   type: ADD_TODO,
   todoName: text
})

// 事件详情中状态切换
export const todoInfoStatusChange = (id, toStatus) => ({
   typeClass: 'todos.js',
   type: ADD_RUN_OK_UPDATE,
   id,
   toStatus
})

// 删除成员
export const removeTodo = id => ({
   typeClass: 'todos.js',
   type: REMOVE_TODO,
   id
})

// 搜索成员
export const searchTodo = searchValue => ({
   typeClass: 'todos.js',
   type: SEARCH_TODO,
   searchValue
})

// nav_link.js
// 路由切换
export const navLinkChange = navLink => ({
   typeClass: 'nav_link.js',
   type: SET_NAVLINK,
   navLink
})

// todo_info_select.js
// 事件详情列表展开状态切换
export const todoInfoChange = setName => ({
   typeClass: 'todo_info_select.js',
   type: SET_TODO_INFO_SELECT,
   setName
})
