import {api} from './net/RestClient';

chrome.runtime.onMessage.addListener(function (request,sender,sendResponse){
    
        debugger
        api("https://dict.poemhub.top");  
    
    sendResponse({success:"success"});
});



