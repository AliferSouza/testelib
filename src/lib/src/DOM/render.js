export default async function render(comp) {

    const pegarDOMApp =  document.querySelector("#app").outerHTML
    const DOMV =  pegarDOMApp.match(/<(comp-[a-z]+)/g)
    
    DOMV.forEach(async (elem, i) => {
      const filtroTag = elem.match(/(comp-[a-z]+)/g)[0];
      const elementDom = document.querySelector(`${filtroTag}-${i}`);
      elementDom.setAttribute("id", i)  
      const render = elementDom.querySelector("[data-count]")
      render.setAttribute("id", "data-count-"+i)
      return elementDom.querySelector("#data-count-"+i).id
  
    })
   
    
}