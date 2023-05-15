export default function Ajuda(props) {



  const state = () => {

    const a = document.querySelectorall(".container_home")
    console.log(a)
  }


    const html = () =>{
      return `
      <div class="container_home">    
        <button></button> 
        <div style="display: flex;"> 
        <comp-countdown>     </comp-countdown>
        <comp-countdown>     </comp-countdown>    
      </div>
      <div>
    `}
  
return{ html, state}


}



