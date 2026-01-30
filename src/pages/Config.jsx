import { useEffect } from "react"
import Formulario from "../Components/Formulario/Formulario"
import Titulo from "../Components/Titulo/Titulo"
import CampoFoto from "../Components/CampoFoto/CampoFoto"
import Relogio from "../Components/Relogio/Relogio"

function Config(){
    useEffect(()=>{
        document.title = "FitLife - Config"
        const icon = document.querySelector(".icon")
        if(icon){
            icon.href = '/icons/config.png'
        }
    })
    return (
        <main className="flex flex-col p-5 bg-blue-950 grow gap-5">
            <div className="flex flex-col">
                <Titulo texto="Bem-vindo, [Nome de Úsuario]!"/>
                <p className="bg-cyan-400 text-blue-950 text-center p-0.5">Data de Hoje: 23/10/2024</p>
            </div>
            <section>
                <h3 className="text-2xl text-blue-600 font-bold mb-2">Configurações da Conta</h3>
                <Formulario />
            </section>
            <section className="flex flex-col justify-center items-center gap-2">
                <CampoFoto />
                <p className="text-white">Clique para mudar a foto</p>
            </section>
            <section className="flex flex-col gap-5">
                <h3 className="font-bold text-2xl text-blue-600">Sincronização de Dispositivos</h3>
                <div className="flex flex-col sm:flex-row items-center justify-around">
                    <Relogio nome="Apple Watch" img="/icons/applewatch.png"/>
                    <Relogio nome="Zeep Xiaomi" img="/icons/xiaomiwatch.png"/>
                    <Relogio nome="Galaxy Watch" img="/icons/sansungwatch.png"/>
                </div>
            </section>
        </main>
    )
}

export default Config