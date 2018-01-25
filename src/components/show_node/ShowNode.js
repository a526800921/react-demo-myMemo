import React from 'react'
import propTypes from 'prop-types'
import css from './index.less'

import TodoInfoTitle from './TodoInfoTitle'
import TodoInfoList from './TodoInfoList'

const ShowNode = props => {

   return (
      <div className={ css.todo_box }>
         <TodoInfoTitle { ...props } todoNumber={ props.todoNumber.length }/>
         <div className={ css.todo_list } style={{height: `${ props.isOpen ? props.todoNumber.length * 50 + 5 : 0 }px`}}>
            { props.todoNumber.map(member => <TodoInfoList { ...member } key={ `ShowNode_${member.id}` } />) }
         </div>
      </div>
   )
}

ShowNode.propTypes = {
   name: propTypes.string.isRequired,
   value: propTypes.string.isRequired,
   path: propTypes.string.isRequired,
   id: propTypes.number.isRequired,
   todoNumber: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number.isRequired,
      status: propTypes.number.isRequired,
      todoName: propTypes.string.isRequired
   })).isRequired,
   isOpen: propTypes.bool.isRequired,
   onTodoInfoChange: propTypes.func.isRequired,
}

export default ShowNode