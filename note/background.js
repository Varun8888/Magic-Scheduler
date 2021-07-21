
chrome.browserAction.onClicked.addListener(function (activeTab) {
    var newURL = "D:\Semester\SEM 4\SEM 4\Projects\IWP proj\note\main.html";
    chrome.tabs.create({ url: newURL });
})