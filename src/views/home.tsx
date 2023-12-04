import { useState, useEffect } from 'react'
import {
  addInitListener,
  addContextUpdateListener,
  removeContextUpdateListener,
  removeInitListener,
} from '@luigi-project/client'

const Home = () => {
  const [message, setMessage] = useState('')
  const [initListener, setInitListener] = useState<number | null>(null)
  const [contextUpdateListener, setContextUpdateListener] = useState<string | null>(null)

  useEffect(() => {
    setInitListener(
      addInitListener(() => {
        setMessage('Luigi Client initialized.')
      }),
    )

    setContextUpdateListener(
      addContextUpdateListener(() => {
        setMessage('Luigi Client updated.')
      }),
    )

    return function cleanup() {
      removeContextUpdateListener(contextUpdateListener || '')
      removeInitListener(initListener || 0)
    }
  }, [contextUpdateListener, initListener])

  return (
    <div>
      <h1>Home</h1>
      <div>{message}</div>
    </div>
  )
}

export default Home
