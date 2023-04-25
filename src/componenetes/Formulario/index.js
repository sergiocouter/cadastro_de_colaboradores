import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import Lista from '../Lista';
import './Formulario.css'

const Formulario = (props) => {

    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const enviar = (evento) => {
        evento.preventDefault()
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return(
        <section className='formulario'>
            <form onSubmit={enviar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} alterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} alterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} alterado={valor => setImagem(valor)}/>
                <Lista obrigatorio={true} label="Time" itens={props.times} valor={time} alterado={valor => setTime(valor)}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario;