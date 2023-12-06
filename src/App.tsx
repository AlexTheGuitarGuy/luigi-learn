import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'

function App() {
  return (
    <BrowserRouter basename='sampleapp.html#'>
      <Route path='/home' component={Home} />
    </BrowserRouter>
  )
}

export default App
