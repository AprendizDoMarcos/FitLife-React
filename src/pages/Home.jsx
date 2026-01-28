import Titulo from '../Components/Titulo/Titulo'
import SVG from '../Components/Svg/Svg'
import Flipper from '../Components/Flippers/Flippers'
import { useEffect } from 'react'

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
            <section className="flex justify-around">
                <SVG texto="Calorias" url="/icons/calories.png" por={0.75} />
                <SVG texto="Passos" url="/icons/walking.png" por={0.6} />
                <SVG texto="Água" url="/icons/bottle.png" por={0.8} />
            </section>
            <section className="shadow shadow-cyan-400 flex justify-center items-center gap-5 p-5 h-80">
                <Flipper img="/icons/km.png" pf="Total de Km Corridos" pc="Objetivo Diário" hf="150 Km" hc="Atingido 80%" />
                <Flipper img="/icons/calorias.png" pf="Calorias Queimadas" pc="Meta de Calorias" hf="12.000" hc="Faltam 500 Calorias" />
                <Flipper img="/icons/media.png" pf="Média de Horas de Sono" pc="Meta de Sono" hf="7h/dia" hc="8h/dia" />
            </section>
        </main>
    )
}

export default Home