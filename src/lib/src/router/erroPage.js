export default function erroPage(componentsPages) {
    let comERRO = ""

    Object.keys(componentsPages).forEach((e, k) => {
        console.log(e)
        comERRO += `    
    <a id="${k}"style="color: #fff"  data-href="/${e}">${e.toUpperCase()}</a>
    `
    })
 document.querySelector("#app").innerHTML= `<div style="width: 100%;  height: 50px;  line-height: 50px;  text-align:center;  background-color: rgba(10,23,55,0.7); border-radius: 10px" 
   >${comERRO}
  </div>`
}