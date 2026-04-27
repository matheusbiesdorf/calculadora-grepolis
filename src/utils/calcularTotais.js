export function calcularTotais(tropas, quantidades) {
  const totais = {
    ataque: {
      impacto: 0,
      corte: 0,
      arremesso: 0,
    },
    defesa: {
      impacto: 0,
      corte: 0,
      arremesso: 0,
    },
    custo: {
      madeira: 0,
      pedra: 0,
      prata: 0,
      favor: 0,
      populacao: 0,
    },
  };

  tropas.forEach((tropa) => {
    const quantidade = Number(quantidades[tropa.id]) || 0;

    totais.ataque.impacto += tropa.ataque.impacto * quantidade;
    totais.ataque.corte += tropa.ataque.corte * quantidade;
    totais.ataque.arremesso += tropa.ataque.arremesso * quantidade;

    totais.defesa.impacto += tropa.defesa.impacto * quantidade;
    totais.defesa.corte += tropa.defesa.corte * quantidade;
    totais.defesa.arremesso += tropa.defesa.arremesso * quantidade;

    totais.custo.madeira += tropa.custo.madeira * quantidade;
    totais.custo.pedra += tropa.custo.pedra * quantidade;
    totais.custo.prata += tropa.custo.prata * quantidade;
    totais.custo.favor += tropa.custo.favor * quantidade;
    totais.custo.populacao += tropa.custo.populacao * quantidade;
  });

  return totais;
}
