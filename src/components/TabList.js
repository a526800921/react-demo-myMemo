import React from 'react'
import {NavLink} from 'react-router-dom'
import propTypes from 'prop-types'
import css from './TabList.less'

const TabList = ({todoNumber, onNavLink}) => {
   const list = [
      {
         name: '全部',
         path: '',
         value: 'ALL_TODO',
         select: 0
      }, {
         name: '新建事项',
         path: 'add',
         value: 'ADD_TODO',
         select: 1
      }, {
         name: '正在进行',
         path: 'run',
         value: 'RUN_TODO',
         select: 2
      }, {
         name: '已完成',
         path: 'ok',
         value: 'OK_TODO',
         select: 3
      }
   ]

   return (
      <div className={css.TabList}>
         {list.map(member => (
            <NavLink
               to={'/' + member.path}
               exact
               activeClassName={css.acitve_tab}
               onClick={onNavLink.bind(this, member.value)}
               className={css.tab}
               key={member.value}>
               {member.name}
               {todoNumber[member.value]}
            </NavLink>
         ))}
      </div>
   )
}

TabList.propTypes = {
   todoNumber: propTypes.shape({
      ALL_TODO: propTypes.number.isRequired, 
      ADD_TODO: propTypes.number.isRequired, 
      RUN_TODO: propTypes.number.isRequired, 
      OK_TODO: propTypes.number.isRequired
   }).isRequired,
   onNavLink: propTypes.func.isRequired
}

export default TabList