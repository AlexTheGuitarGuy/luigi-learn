import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import LocalMicrofrontend from './views/LocalMicrofrontend'

function App() {
  return (
    <BrowserRouter basename='sampleapp.html#'>
      <Route path='/home' component={Home} />
      <Route path='/local-microfrontend' component={LocalMicrofrontend} />
    </BrowserRouter>
  )
}

export default App
