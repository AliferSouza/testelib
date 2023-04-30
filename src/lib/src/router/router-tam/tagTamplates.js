import useTags from "../../use/useTags.js"

export default async function tagsTamplates(componentDOM, componentUrls) {


    async function fetchComponent(url) {
     try {
       const response = await fetch(url);
       const html = await response.text();
       return html;
     } catch (error) {
       throw new Error(`Não foi possível buscar o componente em ${url}. Erro: ${error.message}`);
     }
   }
   const componentTags = componentDOM.match(/<(comp-[a-z]+)/g);
   const comptagDOM = await useTags();
   
   const container = document.createElement("div");
   container.innerHTML = componentDOM;

   if(!componentTags){
    console.log("erro:")
  }
 
   const componentPromises = componentTags.map(async (tag, i) => {
     // Extrai o nome do componente da tag
     const componentName = tag.match(/(comp-[a-z]+)/g)[0];
     // Busca as informações de URL para o componente
     const componentInfo = comptagDOM[componentName];
     if (!componentInfo) throw new Error(`Component ${componentName} not found`);
     // Busca o conteúdo HTML do componente na URL
     const componentHtml = await fetchComponent(componentInfo);
     return { componentName, componentHtml, index: i };
   });
   const components = await Promise.all(componentPromises);
 
 
   for (const { componentName, componentHtml, index } of components) {
     const parentElement = container.querySelector(componentName);
     
     if (!parentElement) throw new Error(`Parent element for component ${componentName} not found`);
 
     const attributes = Object.fromEntries(Object.entries(parentElement.dataset));
     const newElement = document.createElement(`${componentName}-${index}`);
     Object.entries(attributes).forEach(([attr, value]) => {
       newElement.setAttribute(attr, value);
     });
     newElement.innerHTML = componentHtml;
     parentElement.parentNode.replaceChild(newElement, parentElement);
   }
 
   
 
   ROOT.innerHTML = ""
   ROOT.appendChild(container)
   
   const scripts = container.querySelectorAll("script:not([id])");
        
   scripts.forEach(script => {
     const newScript = document.createElement('script');
     newScript.type = "module";
     newScript.textContent = script.textContent;
     script.parentNode.replaceChild(newScript, script);
   });
 
}