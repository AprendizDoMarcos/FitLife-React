function CampoTexto(props){
    return(
        <div className="flex flex-col text-white mb-3">
            <label htmlFor={props.label}>{props.label}</label>
            <input className="bg-gray-900 text-white p-2 rounded-md" type={props.tipo} id={props.label} placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto