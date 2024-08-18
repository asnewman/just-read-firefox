browser.runtime.onMessage.addListener((message) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(message.text);

  synth.speak(utterance);
});
