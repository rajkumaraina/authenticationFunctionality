import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const loginButton = async () => {
    const url = 'https://apis.ccbp.in/login'
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = props
      history.replace('/')
    }
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="loginContainer">
      <h1 className="heading">Please Login</h1>
      <button onClick={loginButton} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
