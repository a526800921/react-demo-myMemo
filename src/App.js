import React, { Component } from 'react'
import css from './App.css'

import Header from './components/Header'
import TabList from './container/TabList_c' 
import ShowList from './routers/ShowList_r'

class App extends Component {
  
  render() {
    return (
      <div className={ css.App }>
        <Header></Header>
        <TabList></TabList>
        <ShowList></ShowList>
      </div>
    )
  }
}

export default App
