import { Intro } from "./styles";
import ChatIcon from '@mui/icons-material/Chat';

export function ChatIntro() {
  return (
    <Intro>
      <i><ChatIcon style={{color: "#4ADF83", fontSize: "250px"}}/></i>
      <h1>Navegue no dashboard ao lado</h1>
      <h2>Mande uma mensagem alegre para seus familiares, mostre que são importantes para você, ou, talvez... marque uma reunião.</h2>
    </Intro>
  )
}