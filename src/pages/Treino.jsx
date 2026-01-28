import { useEffect } from "react"
import Titulo from '../Components/Titulo/Titulo'
import Card from '../Components/Card/Card'
import Flipper from '../Components/Flippers/Flippers'

function Treino(){
    useEffect(()=>{
        document.title = 'FitLife - Treino'
        const icon = document.querySelector('.icon')
        if(icon){
            icon.href = "/icons/weightlifter.png"
        }
    },[])
    return(
         <main className="flex flex-col p-5 bg-blue-950 grow gap-5">
            <Titulo texto="Resumo de Treinos" />
            <section className="flex justify-center gap-5">
                <Card img="/icons/tempotreino.png" texto="1h 30min" titulo="Tempo de Treino"/>
                <Card img="/icons/treino.png" texto="5 Exercicios" titulo="Exercicios Realizados"/>
                <Card img="/icons/calorias.png" texto="500 kcal" titulo="Calorias Queimadas"/>
            </section>
            <section className="shadow shadow-cyan-400 flex justify-center items-center gap-5 p-5 h-80">
                <Flipper img="/icons/weightlifter.png" pf="Total de Treinos Realizados" pc="Média de Treinos por Semana" hf="15 Treinos" hc="3 Treinos" />
            </section>
        </main>
    )
}

export default Treino