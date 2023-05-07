import{ cardDateColaboradores } from "../dados/data.js"

export default function cardColaboradores() { 

   return `
    <div class="home-cards-container">
      <div class="home-img-colaboradores">
        ${cardDateColaboradores.map(element =>`
      
          <img data-href="#/ajudar" id="${element.id}" class="home-img-colaboradores-redondo" src="${element.img}">
      
        `).join('')}
      </div>
    </div>
  `;
  

}