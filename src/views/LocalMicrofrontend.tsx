const LocalMicrofrontend = () => {
  return (
    <div>
      <h1>User data</h1>
      <div>{localStorage.getItem('Luigi#localhost:3000#userData')}</div>
    </div>
  )
}

export default LocalMicrofrontend
