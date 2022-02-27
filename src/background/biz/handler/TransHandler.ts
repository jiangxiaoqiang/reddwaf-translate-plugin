import { api_post } from "@/background/net/RestClient";
import type { DictResponse } from "@/model/http/common/DictResponse";
import type { MessageBase } from "@/model/message/MessageBase";
import { appId, dictBaseUrl } from "@/resource/config/app.config";
import { MessageType } from "@/model/message/MessageType";
import { sendMessageToContent } from "@/public/action/MessageInteractive";
// https://stackoverflow.com/questions/71046998/what-is-the-difference-about-import-import-import-as-in-typescript
import { RequestHandler } from "js-wheel/dist/src/net/rest/RequestHandler";
import { ResponseHandler } from "js-wheel/dist/index";

export function handleTransImpl(message: MessageBase) {
  let url:string = dictBaseUrl + "/word/translate/v1/trans";
  api_post<DictResponse>(url, message.data).then((result)=>{
    chrome.runtime.sendMessage({
        msg: "something_completed", 
        data: {
            subject: "Loading",
            content: result.result.translation
        }
    });
  });
}

export function handleSelectionTransImpl(message: MessageBase) {
  let url:string = dictBaseUrl + "/word/translate/v1/trans";
  RequestHandler.post<DictResponse>(url, message.data,appId)?.then((result:any)=>{
      if(ResponseHandler.responseSuccess(result)){
        let sectionTransMesg: MessageBase = {
          type: MessageType.SELECTION_TRANSLATE_RESULT,
          data: result.result.translation
        };
        sendMessageToContent(sectionTransMesg);
      }
  });
}

export function addGlossary(message: MessageBase) {
  let url:string = dictBaseUrl + "/word/learn/v1/add";
  RequestHandler.post<DictResponse>(url, message.data,appId)?.then((result:any)=>{
    if(ResponseHandler.responseSuccess(result)){
      let sectionTransMesg: MessageBase = {
        type: MessageType.SELECTION_TRANSLATE_RESULT,
        data: result.result.translation
      };
      sendMessageToContent(sectionTransMesg);
    }
  });
}

var isRefreshingDefault = false;

export const B = {
    test: () => {
      if(isRefreshingDefault === true) {
        alert("true");
      }
    }
}