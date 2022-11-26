import Api from '../../Api'
import { Button, LoginComponent, LoginContent } from './styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import polygon from '../../assets/polygon.svg'
import footer from '../../assets/footer.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

export function Login({ onReceive }) {
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
      <img className='polygon' src={polygon} alt="" />
      <LoginContent>
        <div className='logo'>
        <i>
          <WhatsAppIcon style={{ color: '#4ADF83', fontSize: '80px' }} />
        </i>
        <h1>WhatsApp</h1>
        </div>

        <p>Faça login para continuar</p>
        <Button
          background="#db4a39"
          hover="#f84e3b"
          onClick={handleGoogleLogin}
        >
         <GoogleIcon style={{ color: '#fff' }} />
         <span>Entrar com Google</span>
        </Button>
        <Button 
          background="#333"
          hover="#1b1b1b"
          onClick={handleGithubLogin}
        >
          <GitHubIcon style={{ color: '#fff' }}/>
          <span>Entrar com Github</span>
        </Button>
      </LoginContent>

      <img className='footer' src={footer} alt="" />
    </LoginComponent>
  )
}
