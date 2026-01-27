import '../../shared/tailwind.css'
import Titulo from '../Titulo/Titulo'
import SVG from '../Svg/Svg'
function Main(){
    return(
        <main className="flex flex-col p-5 bg-blue-950 grow gap-5">
            <Titulo texto="Bem-Vindo, [Nome de Úsuario]!"/>
            <section className="flex justify-around">
                <SVG texto="Calorias" url="../../../../public/icons/calories.png" por={0.75}/>
                <SVG texto="Passos" url="../../../../public/icons/walking.png" por={0.6}/>
                <SVG texto="Água" url="../../../../public/icons/bottle.png" por={0.8}/>
            </section>
        </main>

    )
}
export default Main