import type { MessageBase } from "@/model/message/MessageBase";


/*********** Script to background ***************/
export function sendMessageToBackground(message: MessageBase){

}



/*********** Background to script ***************/

/**
 * 
 */
 export function sendMessageToContent(message: MessageBase) {
    debugger
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        var activeTab = tabs[0];
        if(activeTab && activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {message});
        }
    });
}




