import cardColaboradores from "../components/cardColaboradores.js"
import newsletter from "../components/newsletter.js"
import cookie from "../components/cookie.js"
import { useExeFuc, useApi, useSearch } from "../lib/index.js"

export default async function Home() {
 const url = useSearch("host")
  const protocol = useSearch("protocol")
  const data = await useApi(`${protocol}/db`)
  console.log(data)

  function manipularElemento() {
    const a = document.querySelector('.container_home')
    a.addEventListener("click", e =>{

    })
  }
  useExeFuc(manipularElemento)


  return ` 
  <div class="container_home"> 

 
    <br>      

          <img src="./src/img/vivivi.png" alt="Logo" width="200" height="50" loading="lazy"> 
  
       
          <comp-relogio data-id="1"> </comp-relogio>

          <br>  
          <br>    
          <img src="./src/img/logoo.png" alt="Logo" width="280" height="280" loading="lazy">       
          <br>   
          <br>   
          <br>        
          ${cardColaboradores()} 
                 
          <div class="container_home_texto">
            <h2>Workshop de Vivência - Espaço Jacarandá</h2>
          <p>Venha participar do nosso workshop de vivência no Espaço Jacarandá em Betim, MG. Serão 10 horas de pura atividade transformadora, com atividades que vão desde auto massagem até cuidados com a beleza. Durante o evento, você terá direito a café da manhã e chá gelado a tarde. O workshop acontecerá no dia 30/07/23, das 8 às 17h. Não perca essa oportunidade única de transformação pessoal e bem-estar.</p>
          </div>

     

          <div class="container_home_buttons"> 
            <a class="btn  btn-2" href="#">Promoção</a>         
            <a class="btn btn-1" href="#">Ingressos</a>
            <a class="btn btn-3" href="#">Telegram</a>      
          </div>

          <div class="whatsapp">
            <a href="https://wa.me/SEUNUMERODOWHATSAPP" target="_blank">
            <img src="./src/img/whatsapp.png"  width="40" height="40">
            </a>
          </div>

          <div class="cards">
              <div class="card">
            <div class="content">
              <div class="title">1° Lote</div>
              <div class="price">$39.99</div>
              <div class="description">de desconto nos 10 primeiros imgressos.</div>
            </div>
              <button>
              Comprar agora
              </button>
          </div>

            <div class="cards">
              <div class="card">
            <div class="content">
              <div class="title">2° lote</div>
              <div class="price">$19.99</div>
              <div class="description">de desconto nos 5 primeiros imgressos</div>
            </div>
              <button>
              Comprar agora
              </button>
          </div>

       

         </div>
        
   
            
          </div>
          ${newsletter()}
          ${await cookie()}
          `
}
