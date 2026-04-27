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

      <div className="botoes">
        <button type="button" className="botao-calcular" onClick={calcularResultado}>
          Calcular
        </button>

        <button type="button" className="botao-limpar" onClick={limparTudo}>
          Limpar
        </button>
      </div>

      {resultado && (
        <section className="resultado">
          <h2>Resultado</h2>

          <h3>Ataque</h3>

          <div className="resultado-item">
            <div className="resultado-info">
              <img src="/imagens/icones/ataque_impacto.png" alt="Impacto" className="icone-resultado" />
              <span>Impacto</span>
            </div>
            <strong>{resultado.ataque.impacto}</strong>
          </div>

          <div className="resultado-item">
            <div className="resultado-info">
              <img src="/imagens/icones/ataque_corte.png" alt="Corte" className="icone-resultado" />
              <span>Corte</span>
            </div>
            <strong>{resultado.ataque.corte}</strong>
          </div>

          <div className="resultado-item">
            <div className="resultado-info">
              <img
                src="/imagens/icones/ataque_arremesso.png"
                alt="Arremesso"
                className="icone-resultado"
              />
              <span>Arremesso</span>
            </div>
            <strong>{resultado.ataque.arremesso}</strong>
          </div>

          <h3>Defesa</h3>

          <div className="resultado-item">
            <div className="resultado-info">
              <img src="/imagens/icones/defesa_impacto.png" alt="Impacto" className="icone-resultado" />
              <span>Impacto</span>
            </div>
            <strong>{resultado.defesa.impacto}</strong>
          </div>

          <div className="resultado-item">
            <div className="resultado-info">
              <img src="/imagens/icones/defesa_corte.png" alt="Corte" className="icone-resultado" />
              <span>Corte</span>
            </div>
            <strong>{resultado.defesa.corte}</strong>
          </div>

          <div className="resultado-item">
            <div className="resultado-info">
              <img
                src="/imagens/icones/defesa_arremesso.png"
                alt="Arremesso"
                className="icone-resultado"
              />
              <span>Arremesso</span>
            </div>
            <strong>{resultado.defesa.arremesso}</strong>
          </div>

          <h3>Custo</h3>

          <div className="resultado-item">
            <div className="resultado-info">
              <img src="/imagens/icones/madeira.png" alt="Madeira" className="icone-resultado" />
              <span>Madeira</span>
            </div>
            <strong>{resultado.custo.madeira}</strong>
          </div>

          <div className="resultado-item">
            <div className="resultado-info">
              <img src="/imagens/icones/pedra.png" alt="Pedra" className="icone-resultado" />
              <span>Pedra</span>
            </div>
            <strong>{resultado.custo.pedra}</strong>
          </div>

          <div className="resultado-item">
            <div className="resultado-info">
              <img src="/imagens/icones/prata.png" alt="Prata" className="icone-resultado" />
              <span>Prata</span>
            </div>
            <strong>{resultado.custo.prata}</strong>
          </div>

          <div className="resultado-item">
            <div className="resultado-info">
              <img src="/imagens/icones/favor.png" alt="Favor" className="icone-resultado" />
              <span>Favor</span>
            </div>
            <strong>{resultado.custo.favor}</strong>
          </div>

          <div className="resultado-item">
            <div className="resultado-info">
              <img
                src="/imagens/icones/populacao.png"
                alt="População"
                className="icone-resultado"
              />
              <span>População</span>
            </div>
            <strong>{resultado.custo.populacao}</strong>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
