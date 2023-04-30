export default async function TagsComp(componentDOM, component) {   
  const ROOT = document.querySelector("#app")

    try {
      const tagNames  =  componentDOM.match(/<(comp-[a-z]+)/g)
      const div = document.createElement("div")
      div.innerHTML = componentDOM      
      if (!tagNames ) {
        console.log("Nenhuma tag comp- foi encontrada na página");
        return;
      }   

      tagNames.forEach(async (elem, i) => {  
        const compAlgo = elem.match(/(comp-[a-z]+)/g)[0]; 
        const elementDom = div.querySelector(compAlgo);

        if (!elementDom) {
          console.log(`Não foi possível encontrar a tag ${compAlgo}`);
          return;
        }
       
        const attributes = Object.entries(elementDom.dataset).reduce(
          (acc, [key, value]) => {
            acc[key] = value;
            return acc;
          },
          {}
        );    

       const newTag = document.createElement(`${compAlgo}-${i}`);          
       elementDom.parentNode.replaceChild(newTag, elementDom);     
       const nameTag = div.querySelector(`${compAlgo}-${i}`).tagName.toLowerCase()  
       const dataApp = {
          i,
          nameTag,
          attributes,
          
       }     
        newTag.innerHTML = await component[compAlgo](dataApp);   

        
        const tagNova = div.querySelector(`${compAlgo}-${i}`);
        Object.entries(attributes).forEach(([key, value]) => {
          tagNova.setAttribute(key, value);
        });    
         
      });

      ROOT.innerHTML = "";
      ROOT.appendChild(div)
    } catch (error) {
      console.error(error);
    }
  
  
  
  
}
  