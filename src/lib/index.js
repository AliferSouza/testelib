import Router from "./src/use/Router.js"
import RouterTemplate from "./src/router/router-tam/RouterTemplate.js"

import addComponet from "./src/DOM/addComponet.js"
import updateComponent from "./src/DOM/updateComponent.js"
import updateSele from "./src/DOM/updateSele.js"
import render from "./src/DOM/render.js"


import save from "./src/tools/save.js"
import Emitter from "./src/tools/Emitter.js"
import generateId from "./src/use/useId.js"

import addBanco from "./src/dbLocal/addBanco.js"
import dbGetItem from "./src/dbLocal/dbGetItem.js"
import dbsetItem from "./src/dbLocal/dbSetItem.js"


import JsonToQueryString from "./src/URL/JsonToQueryString.js"

import useApi from "./src/use/useApi.js"
import useApp from "./src/use/useApp.js"
import usePages from "./src/use/usePages.js"
import useTags from "./src/use/useTags.js"
import useSearch from "./src/use/useSearch.js"
import useExeFuc from "./src/use/useExeFuc.js"
import useId from "./src/use/useId.js"



export {
  Router,
  RouterTemplate,
  addComponet,
  updateComponent,
  render,
  addBanco,
  generateId,
  save,
  dbGetItem,
  dbsetItem,
  JsonToQueryString,  
  useApi,
  useApp,
  usePages,
  useTags,
  useSearch,
  Emitter,
  useExeFuc,
  useId

};
