import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ShowNode from '../container/ShowNode_c'

const ShowList = props => {
   const paths = ['', 'add', 'run', 'ok']

   return (
         <Switch>
            {paths.map(member => <Route path={`/${member}`} exact component={ShowNode} key={`ShowList${member}`}/>)}
         </Switch>
   )
}

export default ShowList