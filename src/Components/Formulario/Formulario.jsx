import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto/CampoTexto"

function Formulario(){
    return(
        <form>
            <CampoTexto tipo="text" label="Nome:" placeholder="Digite seu nome"/>
            <CampoTexto tipo="email" label="Email:" placeholder="SeuEmail@exemplo.com"/>
            <CampoTexto tipo="tel" label="Telefone:" placeholder="(XX) XXXXX-XXXX"/>
            <CampoTexto tipo="password" label="Senha:" placeholder="••••••"/>
            <Botao texto="Atualizar Dados"/>
        </form>
    )
}
export default Formulario