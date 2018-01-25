import React from 'react'
import {connect} from 'react-redux'
import css from './Header.less'

import { addTodo, searchTodo } from '../store/actions'

const Header = ({dispatch}) => {
   let inputNode

   function onAddTodo() {
      if (!inputNode.value) 
         return false
      dispatch(addTodo(inputNode.value))
      inputNode.value = ''
   }

   function onSearchTodo() {
      dispatch(searchTodo(inputNode.value))
   }

   return (
      <div className={css.Header}>
         <div className={css.left}>备忘录</div>
         <div className={css.center}>
            <input type="text" ref={node => inputNode = node}/>
         </div>
         <div className={css.right}>
            <button onClick={onAddTodo}>添加</button>
            <button onClick={onSearchTodo}>搜索</button>
         </div>
      </div>
   )
}

export default connect()(Header)