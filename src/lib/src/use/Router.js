const ROOT = document.querySelector("#app")

function customTags(sortedOut, components) {   
    const ROOT = document.querySelector("#app") 
 
      try {
        const tagNames  =  sortedOut.match(/<(comp-[a-z]+)/g)
        const div = document.createElement("div")
        div.innerHTML = sortedOut    
  
        if (!tagNames ) {
          ROOT.innerHTML = sortedOut     
          return 
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
            "referencia":i,
            nameTag,
            attributes,
            
         }           
  
         newTag.innerHTML = await components[compAlgo](dataApp);  
  
          
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

function stateURL(Pages) {
  let URL
  const dataUrl = location.hash.replace("#", "") || location.pathname
  if (dataUrl === "/#" || dataUrl === "/#/" || dataUrl === "/") {
    URL = "/"
  } else {
    const match = dataUrl.match(/^\/(\w+)(\/)?/)
    if (match && match[1]) {
      URL = match[1]
    }
  }
  

 

  let currentPage =
    URL === "/" || URL === ""
      ? Object.keys(Pages)[0]
      : Pages[URL]
      ? URL
      : Pages["erro"]
      ? Pages["erro"]()
      : erroPage(Pages);
    return currentPage
}

async function render(Pages, selectedPage, components){
    const sortedOut = await  Pages[selectedPage]();

    if(components === undefined){
       ROOT.innerHTML =  sortedOut
    }else { 
        customTags(sortedOut, components);
    }  
    

}

function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
}

function erroPage(Pages) {
  ROOT.innerHTML  = `
    <div class="erroPages">
      ${Object.keys(Pages).map((page, index) => `
        <a id="${index}" style="color: #fff" data-href="/#/${page}">${page.toUpperCase()}</a>
      `).join('')}
    </div>
  `;
  
 
}


export default function Router(Pages, components) {
  function routerState() {
   const  selectedPage = stateURL(Pages)
  if(selectedPage === undefined ){
    
  }else{
    render(Pages, selectedPage, components)
  }
  
  }
  
  function handleClick(e) {
    if (e.target.matches("[data-href]")) {
      e.preventDefault();
      const href = e.target.dataset.href;
      history.pushState(null, null, href);
      routerState();
    }
  }
  window.addEventListener("popstate", routerState);
  document.body.addEventListener("click", debounce(handleClick, 200));
  routerState()
}
