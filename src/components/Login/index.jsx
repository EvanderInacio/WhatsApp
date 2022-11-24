import Api from "../../Api";
import { LoginComponent } from "./styles";

export function Login({onReceive}) {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup()
    if (result) {
      onReceive(result.user)
    } else {
      alert("Erro!")
    }
  }
  return (
    <LoginComponent>
      <button onClick={handleFacebookLogin}>Logar com facebook</button>
    </LoginComponent>
  )
}