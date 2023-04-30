export default async function buttons() {
  const app = document.querySelector('#app');

  // Create the LGPD card element
  const lgpdCard = document.createElement('div');
  lgpdCard.id = 'lgpd-card';
  lgpdCard.innerHTML = `
    <h2>Política de Privacidade</h2>
    <p>Por favor, leia a nossa política de privacidade e marque a caixa abaixo para aceitar:</p>
    <label>
      <input type="checkbox" id="lgpd-checkbox">
      Eu aceito a política de privacidade.
    </label>
    <button id="lgpd-btn">Aceitar</button>
  `;

  // Append the LGPD card element to the app element
  app.appendChild(lgpdCard);

  // Add an event listener to the LGPD button
  const lgpdBtn = document.querySelector('#lgpd-btn');
  const lgpdCheckbox = document.querySelector('#lgpd-checkbox');
  lgpdBtn.addEventListener('click', () => {
    if (lgpdCheckbox.checked) {
      localStorage.setItem('aceiteLGPD', 'true');
      lgpdCard.style.display = 'none';
    } else {
      alert('Por favor, marque a caixa para aceitar a política de privacidade.');
    }
  });

  // Hide the LGPD card if the user has already accepted
  if (localStorage.getItem('aceiteLGPD')) {
    lgpdCard.style.display = 'none';
  }
}
