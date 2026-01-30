import { useEffect } from "react"
import Titulo from "../Components/Titulo/Titulo"
import Card from "../Components/Card/Card"
import Flipper from "../Components/Flippers/Flippers"

function Calorias(){

    useEffect(()=>{
        document.title = "FitLife - Calorias"

        const icon = document.querySelector(".icon")
        if(icon){
            icon.href = '/icons/calories.png'
        }
    },[])
    return (
        <main className="flex flex-col p-5 bg-blue-950 grow gap-5">
            <Titulo texto="Resumo de Calorias" /> 
            <section className="flex flex-col sm:flex-row justify-center gap-5">
                <Card img="/icons/calories.png" texto="2000 kcal" titulo="Calorias Consumidas"/>
                <Card img="/icons/metas.png" texto="2500 kcal" titulo="Meta de Calorias"/>
                <Card img="/icons/susgestao.png" texto="Reduza 500kcal para atingir sua meta de perder peso." titulo="Sugestão"/>
            </section>
            <section className="shadow shadow-cyan-400 flex justify-center items-center gap-5 p-5 h-80">
                <Flipper img="/icons/calorias.png" pf="Total de Calorias Queimadas" pc="Meta Queima de calorias" hf="12000 kcal" hc="Faltam 500kcal" />
            </section>
        </main>
        
    )
}

export default Calorias 