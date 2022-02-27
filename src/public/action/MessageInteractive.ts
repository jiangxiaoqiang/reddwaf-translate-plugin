import type { MessageBase } from "@/model/message/MessageBase";


/*********** Script to background ***************/
export function sendMessageToBackground(message: MessageBase){

}



/*********** Background to content script ***************/

/**
 * 获取tab是undefined原因
 * https://stackoverflow.com/questions/70967250/why-the-active-tabs-was-undefined-when-send-message-from-backend-to-content-scri
 */
export function sendMessageToContent(message: MessageBase) {
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        var activeTab = tabs[0];
        if(activeTab && activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {message});
        }
    });
}




