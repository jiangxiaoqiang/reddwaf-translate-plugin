import type { MessageBase } from "@/model/message/MessageBase";
import { MessageType } from "@/model/message/MessageType";
import TranslatorPop from "@/public/widget/translator/TranslatorPop.vue";
import { createApp } from "vue";
import store from "@/store";
import LocalStorage from "js-wheel/dist/src/utils/data/LocalStorage";

export function doTranslate(transWord: string, messageType: MessageType) {
  let transMe = MessageType[messageType];
  if (transWord && transWord.length > 0) {
    let message: MessageBase = {
      type: transMe,
      data: {
        word: transWord,
        from: "en",
        to: "zh",
      },
    };
    chrome.runtime.sendMessage(message, function (response) { });
  }
}

export function doAddGlossary(transWord: string, messageType: MessageType) {
  let addGlossary = MessageType[messageType];
  if (transWord && transWord.length > 0) {
    let message: MessageBase = {
      type: addGlossary,
      data: {
        word: transWord,
        from: "en",
        to: "zh",
      },
    };
    chrome.runtime.sendMessage(message, function (response) { });
  }
}

export function setTranslateResultPosition(e: MouseEvent) {
  let translateBtn = document.getElementById("popper-container1");
  if (translateBtn) {
    translateBtn.style.visibility = "hidden";
    translateBtn.style.width = "140px";
    translateBtn.style.zIndex = "999999999";
    translateBtn.style.backgroundColor = "transparent";
    translateBtn.style.height = "150px";
    translateBtn.style.transform = "translate(" + e.pageX + "px," + e.pageY + "px)";
  }
}

export async function showTranslateResultPanel(translation: string) {
  let translateBtn = document.getElementById("popper-container1");
  if (translateBtn) {
    translateBtn.style.visibility = "visible";
    translateBtn.style.zIndex = "999999999";
    translateBtn.style.position = "absolute";
    let xAxios = await LocalStorage.readLocalStorage("pop-window-x-axios");
    let yAxios = await LocalStorage.readLocalStorage("pop-window-y-axios");
    translateBtn.style.transform = "translate(" + (xAxios) + "px," + (yAxios) + "px)";
    setTransResult(translation);
  }
}

export function doChangeCollectorStatus() {
  let translateBtn = document.getElementById("collector-star");
  if (translateBtn) {
    translateBtn.style.backgroundColor = "red";
  }
}

export async function showSelectionTrans(translation: string) {
  if (translation && translation.toString().trim().length > 0) {
    showTranslateResultPanel(translation);
  }
}

export async function changeCollectorStatus() {
  doChangeCollectorStatus();
}

export function setTransResult(translateResult: string) {
  let transResultDiv = document.getElementById("reddwarf-translate-result");
  if (transResultDiv) {
    transResultDiv.innerHTML = translateResult;
  }
}

export async function addTransShowElement(translation: string) {
  let anchorElementId = "uniq-anchor-point";
  let anchorElement = document.getElementById(anchorElementId);
  if (anchorElement) {
    document.getElementById("uniq-anchor-point")?.remove();
    anchorElement = null;
  }
  if (anchorElement == null || anchorElement === undefined) {
    let reddwarfTranslateDiv = document.createElement("div");
    reddwarfTranslateDiv.id = anchorElementId;
    document.body.appendChild(reddwarfTranslateDiv);
  }
  let appElement = document.getElementById("reddwarf-translate-app");
  if (appElement) {
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
    let translateBtn = document.getElementById("popper-container1");
    if(translateBtn){
      translateBtn.style.visibility = "hidden";
    }
  }
}

export function hideTransButton() {
  let translateBtn = document.getElementById("translate-btn");
  if (translateBtn) {
    if (translateBtn.style.visibility == "visible") {
      translateBtn.style.visibility = "hidden";
    }
  }
}

export async function showTranslateButton(e: MouseEvent) {
  let translateBtn = document.getElementById("translate-btn");
  if (translateBtn) {
    if (translateBtn.style.visibility == "visible") {
      return;
    }
    translateBtn.style.visibility = "visible";
    translateBtn.style.width = "40px";
    translateBtn.style.backgroundColor = "transparent";
    translateBtn.style.height = "50px";
    /**
     * 注意显示翻译按钮时，要将图标与选中单词隔开一定距离
     * 避免二次触发点击事件
     */
    translateBtn.style.transform = "translate(" + (e.pageX+15) + "px," + (e.pageY+15) + "px)";
    await LocalStorage.setLocalStorage("pop-window-x-axios",(e.pageX+15).toString());
    await LocalStorage.setLocalStorage("pop-window-y-axios",(e.pageY+15).toString());
  }
}

export function closePopupWindow() {
  let translateBtn = document.getElementById("reddwarf-translate-app");
  if (translateBtn) {
    translateBtn.remove();
  }
}

