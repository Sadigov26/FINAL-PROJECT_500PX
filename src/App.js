import React from 'react'
import Router from './Router/Router'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <div>
      <Provider>

      <Router/>
      </Provider>
      
    </div>
  )
}

export default App