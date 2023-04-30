export default async function getTags (tag){
  const pegarDOMApp =  document.querySelector("#app").outerHTML
  const DOMV =  pegarDOMApp.match(/<(comp-[a-z]+)/g)



  DOMV.forEach(async (elem, i) => {
    const filtroTag = elem.match(/(comp-[a-z]+)/g)[0];
    const elementDom = document.querySelector(`${filtroTag}-${i}`);
    elementDom.setAttribute("id", i)

    console.log(document.querySelector(`${filtroTag}-${i}`))


  

  


  })
}