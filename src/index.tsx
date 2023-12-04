import { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './views/home'
import Sample1 from './views/sample1'
import Sample2 from './views/sample2'
import { addInitListener } from '@luigi-project/client'
import './index.css'

class App extends Component {
  constructor(props: any) {
    super(props)
    addInitListener(() => {
      console.log('Luigi Client initialized.')
    })
  }
  render() {
    return (
      <BrowserRouter basename={`sampleapp.html#`}>
        <Route path='/home' component={Home} />
        <Route path='/sample1' component={Sample1} />
        <Route path='/sample2' component={Sample2} />
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('root'))
