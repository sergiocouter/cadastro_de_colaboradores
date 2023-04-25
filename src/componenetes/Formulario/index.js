import Botao from '../Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import Lista from '../Lista';
import './Formulario.css'

const Formulario = () => {

    const times = ['Admissão', 'Vendas', 'Programação', 'Treinamento', 'Ouvidoria'];
    const enviar = (evento) => {
        evento.preventDefault()
        console.log('Formulário enviado')
    }

    return(
        <section className='formulario'>
            <form onSubmit={enviar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Lista obrigatorio={true} label="Time" itens={times}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario;