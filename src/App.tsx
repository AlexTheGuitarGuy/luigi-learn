import { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { addInitListener } from '@luigi-project/client'

import './App.css'
import Home from './views/home'
import Sample1 from './views/sample1'
import Sample2 from './views/sample2'

function App() {
  useEffect(() => {
    const initListener = () => {
      console.log('Luigi Client initialized.')
    }

    addInitListener(initListener)
  }, [])

  return (
    <BrowserRouter basename={`sampleapp.html#`}>
      <Route path='/home' component={Home} />
      <Route path='/sample1' component={Sample1} />
      <Route path='/sample2' component={Sample2} />
    </BrowserRouter>
  )
}

export default App
