import './Lista.css'

const Lista = (props) => {
    return(
        <div className='Lista'>
            <label>{props.label}</label>
            <select onChange={evento => props.alterado(evento.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
        
    )
}

export default Lista;