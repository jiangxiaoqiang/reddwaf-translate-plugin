import { MessageType } from '@/model/message/MessageType';
import type { MessageBase } from '@/model/message/MessageBase';
import { 
    addGlossary, 
    handleSelectionTransImpl, 
    handleTransImpl 
} from '@/background/biz/handler/TransHandler';


chrome.runtime.onMessage.addListener(function (request: MessageBase,sender,sendResponse){
    handleMessage(request);  
    sendResponse({success:"success"});
});

function handleMessage(message: MessageBase){
    if(message.type === MessageType.TRANSLATE){
        handleTransImpl(message);
    }
    if(message.type === MessageType.SELECTION_TRANSLATE){
        handleSelectionTransImpl(message);
    }
    if(message.type === MessageType.ADD_GLOSSARY){
        addGlossary(message);
    }
}

chrome.tabs.onUpdated.addListener(function(tabId, info, tab){
    console.log("update.....");
    //chrome.runtime.reload();
});


