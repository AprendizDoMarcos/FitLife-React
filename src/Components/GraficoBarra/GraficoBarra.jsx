function GraficoBarra(props){
    return <div className={`w-8 sm:w-12 ${props.tamanho}  bg-violet-500 flex flex-col text-white relative items-center justify-end`}>
        <span className="absolute -top-7">{props.numero}</span>
        <span>{props.dia}</span>
    </div>
}
export default GraficoBarra