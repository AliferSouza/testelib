export default function buttons(props) {
  const dataAtual = new Date();

// Obtém a data do final do ano
const anoAtual = dataAtual.getFullYear();
const dataFinal = new Date(`${anoAtual}-07-30`);

// Calcula a diferença em dias
const umDia = 24 * 60 * 60 * 1000; // número de milissegundos em um dia
const diferencaEmDias = Math.round((dataFinal - dataAtual) / umDia);



  return `
    <div class="relogio">
    Faltam <span style="color: #FB6747">${diferencaEmDias}</span> dias.  
    <p>Para o evento que irá mudar os seus hábitos...</p>
    </div>
    
  `;
}
