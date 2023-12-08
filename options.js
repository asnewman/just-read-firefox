function saveOptions() {
  var utteranceSpeed = document.getElementById("utterance-speed").value;

  browser.storage.local.set({
    "utterance-speed": utteranceSpeed,
  });
}

function restoreOptions() {
  browser.storage.local.get("utterance-speed").then((result) => {
    document.getElementById("utterance-speed").value =
      result["utterance-speed"];
  });
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
