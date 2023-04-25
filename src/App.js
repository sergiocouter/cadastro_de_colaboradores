import { useState } from 'react';
import Banner from './componenetes/banner/banner';
import Formulario from './componenetes/Formulario';
import Time from './componenetes/Time';

function App() {

  const times = [
    {
    nome: 'Admissão',
    corPrimaria: '#57C278',
    corSecundaria:'#D9F7E9'
    },
    {
    nome: 'Vendas',
    corPrimaria: '#82CFFA',
    corSecundaria:'#E8F8FF'
    },
    {
    nome: 'Programação',
    corPrimaria: '#E06B69',
    corSecundaria:'#FDE7E8'
    },
    {
    nome: 'Treinamento',
    corPrimaria: '#DB6EBF',
    corSecundaria:'#FAE9F5'
    },
    {
    nome: 'Ouvidoria',
    corPrimaria: '#FFBA05',
    corSecundaria:'#FFF5D9'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const novoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaborador)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;
