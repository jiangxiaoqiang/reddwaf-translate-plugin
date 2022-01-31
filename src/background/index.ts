import { MessageType } from '@/model/message/MessageType';
import type { MessageBase } from '@/model/message/MessageBase';
import { handleTransImpl } from '@/background/biz/handler/TransHandler';

chrome.runtime.onMessage.addListener(function (request: MessageBase,sender,sendResponse){
    handleMessage(request);  
    sendResponse({success:"success"});
});

function handleMessage(message: MessageBase){
    if(message.type === MessageType.TRANSLATE){
        handleTransImpl(message);
    }
}




