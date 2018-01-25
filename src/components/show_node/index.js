import React from 'react'
import propTypes from 'prop-types'

import ShowNode from './ShowNode_c'

const ShowNodeIndex = props => {
   const showList = [
      {
         name: '新建事项',
         value: 'ADD_TODO',
         path: 'add',
         id: 1
      }, {
         name: '正在进行',
         value: 'RUN_TODO',
         path: 'run',
         id: 2
      }, {
         name: '已完成',
         value: 'OK_TODO',
         path: 'ok',
         id: 3
      }
   ]

   if (props.match.path === '/') {
      return showList.map(member => 
         <ShowNode 
            {...member} 
            todoNumber={props.todoNumber[member.value]} 
            key={`showNodeList${member.value}`}
         />)
   } else {
      let filterNode = showList.filter(member => member.path === props.match.path.substr(1))[0]

      return <ShowNode {...filterNode} todoNumber={props.todoNumber[filterNode.value]}/>
   }
}

ShowNodeIndex.propTypes = {
   todoNumber: propTypes.shape({
      ALL_TODO: propTypes.array.isRequired,
      ADD_TODO: propTypes.array.isRequired,
      RUN_TODO: propTypes.array.isRequired,
      OK_TODO:  propTypes.array.isRequired
   }).isRequired
}

export default ShowNodeIndex