var user;

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse){

    console.log("Hello Error");
    if(request.messageFromWeb){

        console.log(request.messageFromWeb);
        user = request.messageFromWeb;
    }

});