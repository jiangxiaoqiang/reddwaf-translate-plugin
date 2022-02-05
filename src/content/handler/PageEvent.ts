import TranslatorPop from "@/public/widget/translator/TranslatorPop.vue";
import { createApp } from "vue";
import store from "@/store";

const MOUSE_UP = 'mouseup'
const selection = getSelection();

export async function firstMouseUp(e: MouseEvent) {
  if (selection && selection.toString().trim().length > 0) {
    removeFirstMouseUp();
    let transWord:string = selection.toString().trim();
    addTransShowElement(transWord.toLowerCase());
    showTranslateButton(e);
    delay(2000,null).then(() =>{
      hideTransButton();
    }).then(()=>{
      addFirstMouseUp();
    })
  }
}

function delay(time:number, value:any) {
  return new Promise(function(resolve) { 
      setTimeout(resolve.bind(null, value), time)
  });
}

export function noop() {}

export function removeFirstMouseUp() {
  document.removeEventListener( MOUSE_UP , firstMouseUp );
  return noop;
}

export function addFirstMouseUp() {
  document.addEventListener( MOUSE_UP , firstMouseUp );
}

export function hideTransButton(){
  let translateBtn = document.getElementById("translate-btn");
  if(translateBtn){
    if(translateBtn.style.visibility == "visible"){
      translateBtn.style.visibility = "hidden";
    }
  }
}

export function showTranslateButton(e: MouseEvent){
  let translateBtn = document.getElementById("translate-btn");
  if(translateBtn){
    if(translateBtn.style.visibility == "visible"){
      return;
    }
    translateBtn.style.visibility="visible";
    translateBtn.style.width ="40px";  
    translateBtn.style.backgroundColor="transparent";
    translateBtn.style.height="50px";
    translateBtn.style.transform="translate("+e.pageX+ "px,"+ e.pageY+"px)";
  }
}

export async function addTransShowElement(translation:string){
  let anchorElementId = "uniq-anchor-point";
  let anchorElement = document.getElementById(anchorElementId);
  if(anchorElement){
    document.getElementById("uniq-anchor-point")?.remove();
    anchorElement = null;
  }
  if (anchorElement == null || anchorElement === undefined) {
    let reddwarfTranslateDiv = document.createElement("div");
    reddwarfTranslateDiv.id = anchorElementId;
    document.body.appendChild(reddwarfTranslateDiv);
  }
  let appElement = document.getElementById("reddwarf-translate-app");
  if(appElement){
    document.getElementById("reddwarf-translate-app")?.remove();
    appElement = null;
  }
  if (appElement == null || appElement === undefined) {
    let props = {
      word: translation.toString().trim(),
    };
    const app = createApp(TranslatorPop, props);
    app.use(store);
    let vm = app.mount("#uniq-anchor-point");
    document.body.appendChild(vm.$el);
  }
}

export async function showSelectionTrans(translation: string) {
  if (translation && translation.toString().trim().length > 0) {
    addTransShowElement(translation.toString().trim());
    showTranslateResultPanel(translation);
  }
}


export function showTranslateResultPanel(translation: string) {
  let translateBtn = document.getElementById("translate-panel");
  if(translateBtn){
    translateBtn.style.visibility="visible";
    translateBtn.style.zIndex="99999";
    translateBtn.style.backgroundColor="white";
    setTransResult(translation);
  }
}

export function setTransResult(translateResult: string) {
  let transResultDiv = document.getElementById("reddwarf-translate-result");
  if(transResultDiv){
    transResultDiv.innerHTML=translateResult;
  }
}


