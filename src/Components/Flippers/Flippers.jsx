import { useState } from "react"

function Flipper(props) {

    const [Virado,Virar] = useState(false)
    function VirarFlip(){
        Virar(!Virado)
    }

    return (
        <div className="Flipper h-200px w-80p sm:h-95p sm:w-25p bg-blue-500 text-white rounded-lg flex items-center justify-center perspective-midrange">
            <div onClick={VirarFlip} className={`Flip relative flex ${Virado ? 'rotate-y-180' : ''} items-center justify-center transform-3d  transition-all duration-500 hover:rotate-y-180`} style={{ height: 90 + "%", width: 90 + "%" }}>
                <div className="frente absolute backface-hidden bg-cyan-400 w-full h-full flex items-center justify-center flex-col ">
                    <img className="w-10 sm:w-16" src={props.img} alt="icone" />
                    <p>{props.pf}</p>
                    <h3 className=" text-2xl sm:text-3xl font-bold">{props.hf}</h3>
                </div>
                <div className="costas absolute backface-hidden bg-blue-950 w-full h-full flex items-center justify-center flex-col rotate-y-180">
                    <p>{props.pc}</p>
                    <h3 className="text-2xl sm:text-3xl font-bold">{props.hc}</h3>
                </div>
            </div>
        </div>
    )
}

export default Flipper