import {api} from './net/RestClient';
import { MessageType } from '@/model/message/MessageType';
import type { MessageBase } from '@/model/message/MessageBase';

chrome.runtime.onMessage.addListener(function (request,sender,sendResponse){
    handleMessage(request);
    debugger
    api("https://dict.poemhub.top");  
    sendResponse({success:"success"});
});

function handleMessage(message: MessageBase){
    if(message.type === MessageType.TRANSLATE){
        debugger;
    }
}




