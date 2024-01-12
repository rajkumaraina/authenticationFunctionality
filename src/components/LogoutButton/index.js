import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const {history} = props
  const LogoutButtonClick = () => {
    Cookies.remove('jwt_token')

    history.replace('/login')
  }
  return (
    <button className="button" type="button" onClick={LogoutButtonClick}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
