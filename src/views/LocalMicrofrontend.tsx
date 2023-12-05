import { STORAGE_KEYS } from '../storageKeys'

const LocalMicrofrontend = () => {
  return (
    <div>
      <h1>User data</h1>
      <div>{localStorage.getItem(STORAGE_KEYS.userData)}</div>
    </div>
  )
}

export default LocalMicrofrontend
