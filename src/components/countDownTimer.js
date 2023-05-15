export default function countDown(props) {
  const dataAtual = new Date();
  // Obtém a data do final do ano
  const anoAtual = dataAtual.getFullYear();
  const dataFinal = new Date(`${anoAtual}-07-30`);
  // Calcula a diferença em dias
  const umDia = 24 * 60 * 60 * 1000; // número de milissegundos em um dia
  const diferencaEmDias = Math.round((dataFinal - dataAtual) / umDia);



  const state = () => {
    const comp = document.querySelector(props.nameTag)
    comp.addEventListener('click', e => {
      console.log(e.target)
    })
 
  };

  const html = (prop) => {
        return `<div class="relogio"> 
        <h2>Faltam <span style="color: #FB6747">${diferencaEmDias}</span> dias.</h2>
        <p>Para o evento que irá mudar</p>
        <p>sua forma de viver...</p>
      </div>
    `;
  };
  return {
    html,
    state,
  };
}
