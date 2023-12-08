browser.runtime.onMessage.addListener((message) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(message.text);

  browser.storage.local.get("utterance-speed").then((result) => {
    utterance.rate = result["utterance-speed"];
    synth.speak(utterance);
  });
});
