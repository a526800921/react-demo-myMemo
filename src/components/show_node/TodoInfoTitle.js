import React from 'react'
import propTypes from 'prop-types'
import css from './index.less'

const TodoInfoTitle = ({name, value, todoNumber, isOpen, onTodoInfoChange}) => {

   return (
      <div className={ [css.todo_title, isOpen && css.title_acitve].join(' ') } onClick={ onTodoInfoChange }>
         <div className={ css.title_left }>
            <i className={ [css.left_icon, isOpen && css.icon_active].join(' ') }>></i>
            &emsp;{ name }
         </div>
         <div className={ css.title_right }>
            { todoNumber }
         </div>
      </div>
   )
}

TodoInfoTitle.propTypes = {
   name: propTypes.string.isRequired,
   value: propTypes.string.isRequired,
   todoNumber: propTypes.number.isRequired,
   isOpen: propTypes.bool.isRequired,
   onTodoInfoChange: propTypes.func.isRequired
}

export default TodoInfoTitle