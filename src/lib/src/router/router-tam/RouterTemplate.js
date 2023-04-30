import tagsTamplates from "./tagTamplates.js";

export default function RouterTemplate(componentsPages, component) {
    const ROOT = document.querySelector("#app")
    const titleEl = document.querySelector("title");
  
    const componentCache = {};
    const maxCacheSize = 50; // Limita o tamanho do cache para 50 componentes
  
    async function fetchComponent(valor) {
      if (componentCache[valor]) {
        return componentCache[valor];
      }
      try {
        const module = await fetch(valor);
        const component = await module.text();
        componentCache[valor] = component;
        // Remove o componente mais antigo do cache se o tamanho máximo for excedido
        if (Object.keys(componentCache).length > maxCacheSize) {
          delete componentCache[Object.keys(componentCache)[0]];
        }
        return component;
      } catch (error) {
        console.error(error);
        return '<h1>Error fetching component</h1>';
      }
    }
  
    async function route() {
      const hash = location.hash.replace("#", "");
      const pathname = location.pathname.split("/")[1];
      const URL = hash || pathname;
  
      let currentPage;
      let currentName;
  
      if (URL === "/" || URL === "") {
        currentName = Object.keys(componentsPages)[0];
      } else if (componentsPages[URL]) {
        currentName = URL;
      } else {
        console.log(currentPage)
        currentName = "erro";
      }
  
      currentPage = await fetchComponent(componentsPages[currentName]);
  
  
  
      ROOT.innerHTML = currentPage
      titleEl.textContent = currentName;
  
  
    
     
      tagsTamplates(currentPage, component);
    }
  
    function handleClick(e) {
      const target = e.target;
      if (target.matches("[data-href]")) {
        e.preventDefault();
        const href = target.dataset.href;
        history.pushState(null, null, href);
        route();
      }
    }
  
    document.body.addEventListener("click", debounce(handleClick, 200));
    window.addEventListener("popstate", route);
    route();
}