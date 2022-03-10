import { firstMouseUp, mouseClick } from "@/content/handler/PageEvent";
import { TransGlobal } from "@/model/immutable/TransGlobal";
import { MessageType } from '@/model/message/MessageType';
import { changeCollectorStatus, showSelectionTrans } from "@/public/action/TransAction";

// document.addEventListener(TransGlobal.MOUSE_UP, firstMouseUp);
document.addEventListener(TransGlobal.MOUSE_UP,firstMouseUp);
document.addEventListener(TransGlobal.MOUSE_CLICK, mouseClick);


chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.message.type === MessageType.SELECTION_TRANSLATE_RESULT) {
    showSelectionTrans(request.message.data);
  }
  
  if (request.message.type === MessageType.ADD_GLOSSARY_SUCCESS) {
    changeCollectorStatus();
  }
});
