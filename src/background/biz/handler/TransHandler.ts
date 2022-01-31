import { api_post } from "@/background/net/RestClient";
import type { DictResponse } from "@/model/http/common/DictResponse";
import type { MessageBase } from "@/model/message/MessageBase";
import { dictBaseUrl } from "@/resource/config/app.config";

export function handleTransImpl(message: MessageBase) {
  let url = dictBaseUrl + "/word/translate/v1/trans";
  api_post<DictResponse>(url, message.data).then((result)=>{
    debugger;
    console.log(result);
    chrome.runtime.sendMessage({
        msg: "something_completed", 
        data: {
            subject: "Loading",
            content: result.result.translation
        }
    });
  });
  
}
