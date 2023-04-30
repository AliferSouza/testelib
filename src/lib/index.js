import Router from "./src/router/router-fuc/Router.js"
import RouterTemplate from "./src/router/router-tam/RouterTemplate.js"

import addComponet from "./src/DOM/addComponet.js"
import updateComponent from "./src/DOM/updateComponent.js"
import updateSele from "./src/DOM/updateSele.js"
import render from "./src/DOM/render.js"


import save from "./src/tools/save.js"
import Emitter from "./src/tools/Emitter.js"
import click from "./src/tools/click.js"
import autoExe from "./src/tools/autoExe.js"
import generateId from "./src/tools/generateId.js"

import addBanco from "./src/dbLocal/addBanco.js"
import dbGetItem from "./src/dbLocal/dbGetItem.js"
import dbsetItem from "./src/dbLocal/dbSetItem.js"


import JsonToQueryString from "./src/URL/JsonToQueryString.js"

import useAlifer from "./src/use/useAlifer.js"
import useApi from "./src/use/useApi.js"
import useApp from "./src/use/useApp.js"
import useEffect from "./src/use/useEffect.js"
import useHeader from "./src/use/useHeader.js"
import useMemo from "./src/use/useMemo.js"
import usePages from "./src/use/usePages.js"
import useState from "./src/use/useState.js"
import useStyles from "./src/use/useStyles.js"
import useTags from "./src/use/useTags.js"
import useClick from "./src/use/useClick.js"
import useTag from "./src/use/useTag.js"
import useSearch from "./src/URL/useSearch.js"
import useFuc from "./src/use/useFuc.js"
import useExeFuc from "./src/use/useExeFuc.js"


export {
  Router,
  RouterTemplate,
  addComponet,
  updateComponent,
  updateSele,
  render,
  addBanco,
  generateId,
  save,
  click,
  autoExe,
  dbGetItem,
  dbsetItem,
  JsonToQueryString,  
  useAlifer,
  useApi,
  useApp,
  useEffect,
  useHeader,
  useMemo,
  usePages,
  useState,
  useStyles,
  useTags,
  useTag,
  useClick,
  useSearch,
  Emitter,
  useFuc,
  useExeFuc
};
