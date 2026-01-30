import Titulo from '../Components/Titulo/Titulo'
import SVG from '../Components/Svg/Svg'
import Flipper from '../Components/Flippers/Flippers'
import { useEffect } from 'react'
import GraficoBarra from '../Components/GraficoBarra/GraficoBarra'
import Card from '../Components/Card/Card'

function Home() {
    useEffect(()=>{
        document.title = "FitLife - Home"
        const icon = document.querySelector('.icon')
        if(icon){
            icon.href = '/icons/trophy-star.png'
        }
    },[])
    return (
        <main className='flex flex-col p-5 bg-blue-950 grow gap-5'>
            <Titulo texto="Bem-Vindo, [Nome de Úsuario]!" />
            <section className="flex flex-col sm:flex-row sm:justify-around items-center gap-5 sm:gap-0">
                <SVG texto="Calorias" url="/icons/calories.png" por={0.75} />
                <SVG texto="Passos" url="/icons/walking.png" por={0.6} />
                <SVG texto="Água" url="/icons/bottle.png" por={0.8} />
            </section>
            <section className='flex flex-col sm:flex-row gap-5 sm:gap-0'>
                <section className='flex flex-col gap-10'>
                    <h2 className='text-white text-2xl'>Progresso Semanal</h2>
                    <div className='flex gap-1 sm:gap-2 items-end justify-center sm:border-r border-cyan-500 border-dashed w-full sm:w-max sm:pr-8'>
                        <GraficoBarra numero="120" dia="Seg" tamanho="h-24"/>
                        <GraficoBarra numero="150" dia="Ter" tamanho="h-29"/>
                        <GraficoBarra numero="180" dia="Qua" tamanho="h-35"/>
                        <GraficoBarra numero="200" dia="Qui" tamanho="h-40"/>
                        <GraficoBarra numero="170" dia="Sex" tamanho="h-32"/>
                        <GraficoBarra numero="220" dia="Sab" tamanho="h-44"/>
                        <GraficoBarra numero="190" dia="Dom" tamanho="h-38"/>
                    </div>
                </section>
                <section className='flex flex-col sm:flex-row justify-center items-center flex-1 gap-3'>
                    <Card largura={true} titulo="Dicas de Alimentação" texto="Inclua mais proteinas em suas refeições para ajudar na recuperação muscular após os treinos." img="/icons/dicas.png"/>
                    <Card largura={true} titulo="Meta Semanal" texto="Caminhe 10.000 passos por dia para manter uma rotina ativa e saudável." img="/icons/metas.png"/>
                    <Card largura={true} titulo="Sugestão de Treino" texto="Experimente 30 minutos de HIIT para maximizar a queima de calorias." img="/icons/susgestao.png"/>
                </section>
            </section>
            <section className="shadow shadow-cyan-400 flex flex-col sm:flex-row justify-center items-center gap-5 p-5 h-auto sm:h-80">
                <Flipper img="/icons/km.png" pf="Total de Km Corridos" pc="Objetivo Diário" hf="150 Km" hc="Atingido 80%" />
                <Flipper img="/icons/calorias.png" pf="Calorias Queimadas" pc="Meta de Calorias" hf="12.000" hc="Faltam 500 Calorias" />
                <Flipper img="/icons/media.png" pf="Média de Horas de Sono" pc="Meta de Sono" hf="7h/dia" hc="8h/dia" />
            </section>
        </main>
    )
}

export default Home