import TranslatorPop from "@/public/widget/translator/TranslatorPop.vue";
import { createApp } from "vue";
import store from "@/store";
import { doTranslate } from "@/public/action/TransAction";
import { MessageType } from "@/model/message/MessageType";

const selection = getSelection();

export async function firstMouseUp(e: MouseEvent) {
  if (selection && selection.toString().trim().length > 0) {
    let transWord:string = selection.toString().trim();
    addTransShowElement(transWord);
    doTranslate(transWord, MessageType.SELECTION_TRANSLATE);
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
  let appElement = document.getElementById("uniq-anchor-point");
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
