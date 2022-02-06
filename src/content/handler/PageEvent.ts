import { addTransShowElement, hideTransButton, showTranslateButton } from "@/public/action/TransAction";

const MOUSE_UP = 'mouseup'
const selection = getSelection();

export async function firstMouseUp(e: MouseEvent) {
  if (selection && selection.toString().trim().length > 0) {
    removeFirstMouseUp();
    saveTransWord(selection.toString().trim(), e);
  }
}

function saveTransWord(transWord: string, e: MouseEvent) {
  chrome.storage.local.set({
    reddwarfTranslateWord: "reddwarf-translate-word"
  }, function () {
    addTransShowElement(transWord.toLowerCase());
    showTranslateButton(e);
    delay(2000, null).then(() => {
      hideTransButton();
    }).then(() => {
      addFirstMouseUp();
    })
  });
}

function delay(time: number, value: any) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, value), time)
  });
}

export function noop() { }

export function removeFirstMouseUp() {
  document.removeEventListener(MOUSE_UP, firstMouseUp);
  return noop;
}

export function addFirstMouseUp() {
  document.addEventListener(MOUSE_UP, firstMouseUp);
}
