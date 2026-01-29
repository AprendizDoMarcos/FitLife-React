function Relogio(props){
    return (
        <div className="text-white flex flex-col gap-2 items-center justify-center">
            <h3 className="text-2xl font-bold">{props.nome}</h3>
            <img className="w-40" src={props.img} alt="Foto-Relogio" />
            <button className="p-3 rounded-md bg-violet-500 cursor-pointer w-max ">Sicronizar</button>
        </div>
    )
}
export default Relogio