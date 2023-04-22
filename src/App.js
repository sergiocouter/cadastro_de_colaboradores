import CampoTexto from './componenetes/banner/CampoTexto/CampoTexto';
import Banner from './componenetes/banner/banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome"/>
      <CampoTexto label="Cargo"/>
      <CampoTexto label="Imagem"/>
      
    </div>
  );
}

export default App;
