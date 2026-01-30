import { useEffect } from "react"
import Card from "../Components/Card/Card"
import Flipper from "../Components/Flippers/Flippers"
import Titulo from "../Components/Titulo/Titulo"

function Sono(){
    useEffect(()=>{
        document.title = "FitLife - Sono"
        const icon = document.querySelector(".icon")
        if(icon){
            icon.href = "/icons/sleeping.png"
        }
    },[])

    return(
         <main className="flex flex-col p-5 bg-blue-950 grow gap-5">
            <Titulo texto="Resumo de Sono" />
            <section className="flex flex-col sm:flex-row justify-center gap-5">
                <Card img="/icons/relogio.png" texto="8 Horas" titulo="Horas de Sono"/>
                <Card img="/icons/sonosuficiente.png" texto="Boa" titulo="Qualidade de Sono"/>
                <Card img="/icons/relogiosono.png" texto="07:00" titulo="Despertar"/>
            </section>
            <section className="shadow shadow-cyan-400 flex justify-center items-center gap-5 p-5 h-80">
                <Flipper img="/icons/sleeping.png" pf="Total de Sono da Última Semana" pc="Média Diária de Sono" hf="50 Horas" hc="7 Horas" />
            </section>
        </main>
    )
}

export default Sono