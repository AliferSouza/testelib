import debounce from "../debounce.js";
import userTags from "./tagsComp.js"
import erroPage from "../erroPage.js";

export default function Router(componentsPages, component) {

  async function route() {

    const URL = location.pathname.split("/")[1] || location.hash.replace("#", "")
    let currentPage = URL === "/" || URL === ""
      ? Object.keys(componentsPages)[0]
      : componentsPages[URL]
      ? URL
      : componentsPages["erro"]
      ? componentsPages["erro"]()
      : erroPage(componentsPages);

    

     if(component === undefined){    
       const ROOT = document.querySelector("#app").innerHTML = await componentsPages[currentPage]() 
     } else {
      userTags(await componentsPages[currentPage], component);
     }    
  }

  window.addEventListener("popstate", route);
  function handleClick(e) {
    if (e.target.matches("[data-href]")) {
      e.preventDefault();
      const href = e.target.dataset.href;
      history.pushState(null, null, href);
      route();
    }
  }
  document.body.addEventListener("click", debounce(handleClick, 200));
  route();
}