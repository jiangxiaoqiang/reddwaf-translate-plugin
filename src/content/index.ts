import { firstMouseUp, showSelectionTrans } from "@/content/handler/PageEvent";
import { MessageType } from '@/model/message/MessageType';

const MOUSE_UP = "mouseup";

document.addEventListener(MOUSE_UP, firstMouseUp);

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.message.type === MessageType.SELECTION_TRANSLATE_RESULT) {
    showSelectionTrans(request.message.data);
  }
});
