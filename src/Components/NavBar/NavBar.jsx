import '../../shared/tailwind.css'
import Itens from "../../assets/data/ItensMenu.json"
import { useState } from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
    const [Aberto,Abrir] = useState(false)
    function MudarMenu(){
        Abrir(!Aberto)
    }
    const Click = (e)=>{
        if(!Aberto){
            e.preventDefault()
            Abrir(true)
        }
    }
    return (
        <nav className={`relative z-10 ${Aberto ? 'w-52' : 'w-20'} bg-blue-950 text-white p-2 min-h-dvh h-auto shadow-2xl shadow-cyan-400 transition-all`}>
            <div className='flex items-center justify-between mb-5'>
                <h2 className='sm:text-2xl font-bold'>{Aberto ? 'Fitness :Dashboard' : 'FD'}</h2>
                <img className='w-7 sm:w-10 cursor-pointer invert' src="/icons/menu.png" alt="icone" onClick={MudarMenu} />
            </div>
            <ul className='flex flex-col items-center gap-3'>
                {Itens.map(item =>
                    <li key={item.texto} className={`border-dashed border-b border-cyan-400 w-4/5 ${Aberto ? 'hover:scale-125' : ''} transition-all`}>
                        <Link onClick={Click} to={item.url} target={item.target} className={`w-full h-full flex items-center gap-2 ${Aberto ?'hover:bg-cyan-400 hover:text-blue-950' : ''} p-2 transition-all`}>
                            <img className='grayscale w-5 sm:w-10' src={item.img} alt={item.alt} />
                            {Aberto ? <span>{item.texto}</span> : ''} 
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar