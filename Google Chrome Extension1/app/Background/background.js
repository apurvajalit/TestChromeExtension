function hello() {
    chrome.tabs.insertCSS(null, {file: "styles/popupStyle.css"})
    chrome.tabs.executeScript(null, { file: "injectedScripts/jquery-2.1.3.min.js" }, function () {
        chrome.tabs.executeScript(null, { file: "injectedScripts/a.js" });
    });
}

// Supposed to Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(hello);