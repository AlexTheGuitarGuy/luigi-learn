import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import './index.css'
import App from './App'
import { addInitListener } from '@luigi-project/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initListener = (context: any) => {
  console.log('Luigi Client initialized.', context)
}

addInitListener(initListener)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
