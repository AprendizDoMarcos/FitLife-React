function SVG(props){
    return(
        <div className="flex flex-col items-center border-b border-cyan-400 border-dashed border-r w-80">
            <img src={props.url} alt="icone" className="w-10"/>
            <p className="text-violet-500">{props.texto}</p>
            <svg className="w-44 aspect-square rotate-90">
                <circle r="70" cy="90" cx="90" className="fill-none stroke-blue-500" style={{strokeWidth: 0.7 + 'em'}}></circle>
                <circle r="70" cy="90" cx="90" className="fill-none stroke-white" style={{strokeWidth: 0.4 + "em",strokeDasharray: 440, strokeDashoffset: 440*props.por-440,strokeLinecap: 'round'}}></circle>
            </svg>
            <p className="text-violet-500">{props.por*100}%</p>
        </div>

    )
}

export default SVG