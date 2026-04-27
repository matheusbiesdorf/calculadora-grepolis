import { useState } from 'react';
import tropas from './data/tropas.json';
import { calcularTotais } from './utils/calcularTotais';
import './App.css';

function App() {
  const [quantidades, setQuantidades] = useState({});
  const [resultado, setResultado] = useState(null);

  function alterarQuantidade(id, valor) {
    setQuantidades((quantidadesAtuais) => ({
      ...quantidadesAtuais,
      [id]: valor,
    }));
  }

  function calcularResultado() {
    const totais = calcularTotais(tropas, quantidades);
    setResultado(totais);
  }

  function limparTudo() {
    setQuantidades({});
    setResultado(null);
  }

  return (
    <main>
      <h1>Calculadora de Tropas</h1>

      <section className="lista-tropas">
        {tropas.map((tropa) => (
          <div key={tropa.id} className="card-tropa">
            <img src={tropa.imagem} alt={tropa.nome} className="imagem-tropa" />

            <div className="info-tropa">
              <label htmlFor={tropa.id}>{tropa.nome}</label>

              <input
                id={tropa.id}
                type="number"
                min="0"
                placeholder="0"
                value={quantidades[tropa.id] || ''}
                onChange={(event) => alterarQuantidade(tropa.id, event.target.value)}
              />
            </div>
          </div>
        ))}
      </section>

      <button type="button" onClick={calcularResultado}>
        Calcular
      </button>

      <button type="button" onClick={limparTudo}>
        Limpar
      </button>

      {resultado && (
        <section className="resultado">
          <h2>Resultado</h2>

          <h3>Ataque</h3>
          <p>Impacto: {resultado.ataque.impacto}</p>
          <p>Corte: {resultado.ataque.corte}</p>
          <p>Arremesso: {resultado.ataque.arremesso}</p>

          <h3>Defesa</h3>
          <p>Impacto: {resultado.defesa.impacto}</p>
          <p>Corte: {resultado.defesa.corte}</p>
          <p>Arremesso: {resultado.defesa.arremesso}</p>

          <h3>Custo</h3>
          <p>Madeira: {resultado.custo.madeira}</p>
          <p>Pedra: {resultado.custo.pedra}</p>
          <p>Prata: {resultado.custo.prata}</p>
          <p>Favor: {resultado.custo.favor}</p>
          <p>População: {resultado.custo.populacao}</p>
        </section>
      )}
    </main>
  );
}

export default App;
