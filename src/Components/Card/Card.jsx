function Card(props){

    const largura = props.largura
    return(
        <div className={`text-white shadow  rounded-2xl shadow-black p-5 ${largura ? 'w-full max-w-56' : 'w-full max-w-80'} ${largura ? 'h-4/5' : ''} hover:scale-105 transition-all hover:bg-cyan-500 hover:text-blue-950`}>
            <img className="w-10" src={props.img} alt="icone" />
            <h2 className={`${largura ? '' : 'text-2xl'} font-bold border-b border-dashed border-cyan-500 pb-1 mb-1`}>{props.titulo}</h2>
            <p>{props.texto}</p>
        </div>
    )
}

export default Card