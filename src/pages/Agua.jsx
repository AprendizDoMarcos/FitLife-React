import { useEffect } from "react"
import Titulo from "../Components/Titulo/Titulo"
import Card from "../Components/Card/Card"
import Flipper from "../Components/Flippers/Flippers"

function Agua(){

    useEffect(()=>{
        document.title = "FitLife - Água"

        const icon = document.querySelector(".icon")
        if(icon){
            icon.href = '/icons/copoagua.png'
        }
    },[])

    return (
         <main className="flex flex-col p-5 bg-blue-950 grow gap-5">
            <Titulo texto="Resumo de Hidratação" />
            <section className="flex flex-col sm:flex-row justify-center gap-5">
                <Card img="/icons/garrafaagua.png" texto="2L" titulo="Água Consumida"/>
                <Card img="/icons/copoagua.png" texto="8 Copos" titulo="Copos Consumidos"/>
                <Card img="/icons/metaagua.png" texto="3L" titulo="Meta de Hidratação"/>
            </section>
            <section className="shadow shadow-cyan-400 flex justify-center items-center gap-5 p-5 h-80">
                <Flipper img="/icons/hidratacao.png" pf="Total de Hidratação" pc="Média de Hidratação" hf="14L na última semana" hc="2L" />
            </section>
        </main>
    )
}

export default Agua