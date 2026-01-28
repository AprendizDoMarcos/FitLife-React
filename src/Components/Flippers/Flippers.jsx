function Flipper(props){
    return (
        <div className="Flipper bg-blue-500 text-white rounded-2xl flex items-center justify-center perspective-midrange" style={{height: 95 + "%",width:25 + "%"}}>
            <div className="Flip relative w-4/5 flex items-center justify-center transform-3d hover:rotate-y-180 transition-all" style={{height: 90 + "%",width:90 + "%"}}>
                <div className="frente absolute backface-hidden bg-cyan-400 w-full h-full flex items-center justify-center flex-col ">
                    <img className="w-16" src={props.img} alt="icone" />
                    <p>{props.pf}</p>
                    <h3 className="text-3xl font-bold">{props.hf}</h3>
                </div>
                <div className="costas absolute backface-hidden bg-blue-950 w-full h-full flex items-center justify-center flex-col rotate-y-180">
                    <p>{props.pc}</p>
                    <h3 className="text-3xl font-bold">{props.hc}</h3>
                </div>
            </div>
        </div>
    )
}

export default Flipper