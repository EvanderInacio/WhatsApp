import Api from '../../Api'
import { LoginComponent } from './styles'

export function Login({ onReceive }) {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup()
    if (result) {
      onReceive(result.user)
    } else {
      alert('Erro!')
    }
  }

  const handleGoogleLogin = async () => {
    let result = await Api.googlePopup()
    if (result) {
      onReceive(result.user)
    } else {
      alert('Erro!')
    }
  }

  const handleGithubLogin = async () => {
    let result = await Api.githubPopup()
    if (result) {
      onReceive(result.user)
    } else {
      alert('Erro!')
    }
  }

  return (
    <LoginComponent>
      <button onClick={handleFacebookLogin}>Logar com facebook</button>
      <button onClick={handleGoogleLogin}>Logar com Google</button>
      <button onClick={handleGithubLogin}>Logar com Github</button>
    </LoginComponent>
  )
}
