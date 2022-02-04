import TranslatorPop from "@/public/widget/translator/TranslatorPop.vue";
import { createApp } from "vue";
import store from "@/store";
//import { doTranslate } from "@/public/action/TransAction";
//import { MessageType } from "@/model/message/MessageType";

const MOUSE_UP = 'mouseup'
const selection = getSelection();

export async function firstMouseUp(e: MouseEvent) {
  if (selection && selection.toString().trim().length > 0) {
    // removeFirstMouseUp();
    let transWord:string = selection.toString().trim();
    addTransShowElement(transWord.toLowerCase());
    showTranslateButton(e);
  }
}

export function noop() {}

export function removeFirstMouseUp() {
  document.removeEventListener( MOUSE_UP , firstMouseUp );
  return noop;
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
  if (anchorElement == null || anchorElement === undefined) {
    let reddwarfTranslateDiv = document.createElement("div");
    reddwarfTranslateDiv.id = anchorElementId;
    document.body.appendChild(reddwarfTranslateDiv);
  }
  let appElement = document.getElementById("reddwarf-translate-app");
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
    alert(translation);
  }
}
