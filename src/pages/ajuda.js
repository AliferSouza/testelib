import { useExeFuc } from "../lib/index.js"


export default async function Ajuda() {
  const manipularElemento = () => {
  const a = document.querySelector('.container_home')
  a.addEventListener("click", e=>{

  abc(e.target)
  })
  const abc = (e) => {
    console.log(e)
  }
  

  }
  useExeFuc(manipularElemento)
  

  
  
 


  return ` 
  <div class="container_home">  
   
   <button></button>
       

         </div>
        
   
            
        
          `
}