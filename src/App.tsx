import { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { addInitListener } from '@luigi-project/client'

import './App.css'
import Home from './views/home'

function App() {
  useEffect(() => {
    const initListener = () => {
      console.log('Luigi Client initialized.')
    }

    addInitListener(initListener)
  }, [])

  return (
    <BrowserRouter basename='sampleapp.html#'>
      <Route path='/home' component={Home} />
    </BrowserRouter>
  )
}

export default App
