import './Lista.css'

const Lista = (props) => {
    return(
        <div className='Lista'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
        
    )
}

export default Lista;