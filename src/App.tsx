import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import LocalMicrofrontend from './views/LocalMicrofrontend'
import { useEffect } from 'react'
import { addInitListener } from '@luigi-project/client'

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
      <Route path='/local-microfrontend' component={LocalMicrofrontend} />
    </BrowserRouter>
  )
}

export default App
