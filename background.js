function speakText(info, tab) {
  browser.tabs.sendMessage(tab.id, { text: info.selectionText });
}

browser.contextMenus.create({
  id: "speak",
  title: "Read aloud",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(speakText);
