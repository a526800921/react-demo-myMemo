import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import css from './index.less'

import { todoInfoStatusChange, removeTodo } from '../../store/actions'

const TodoInfoList = props => {

   function onStatusChange(target) {
      // 改变成员状态
      console.log(target)
      let toStatus = null
      if (target === 'checkbox') {
         if (props.status === 0) {
            toStatus = 1
         } else if (props.status === 1) {
            toStatus = 0
         }
      } else if (target === 'todoName') {
         if (props.status === 1) {
            toStatus = 2
         } else if (props.status === 2) {
            toStatus = 1
         }
      }

      toStatus !== null && props.dispatch(todoInfoStatusChange(props.id, toStatus))
   }

   function onRemoveTodo() {
      // 删除成员
      props.dispatch(removeTodo(props.id))
   }

   return (
      <div className={ css.list_detail }>
         <input 
            type='checkbox' 
            checked={ props.status !== 0 } 
            disabled={ props.status === 2 }
            onChange={ onStatusChange.bind(this, 'checkbox') } 
            className={ css.detail_checkbox } />

         <p 
            className={ css.detail_value } 
            style={ props.status === 2 ? {
               textDecoration: 'line-through'
            }: null }
            onClick={ onStatusChange.bind(this, 'todoName') }>
            { props.todoName }
         </p>

         <i className={ css.detail_remove } onClick={ onRemoveTodo }>x</i>
      </div>
   )
}

TodoInfoList.propTypes = {
   dispatch: propTypes.func.isRequired,
   id: propTypes.number.isRequired,
   status: propTypes.number.isRequired,
   todoName: propTypes.string.isRequired
}

export default connect()(TodoInfoList)