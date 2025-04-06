const { MacinTalk, listVoices } = require("./index.js");

listVoices().then((voices) => {
	console.log(voices);
	/*
	{
	  macOS: {
    	Agnes: {
    	  description: 'Agnes',
    	  vendor: 'Apple',
    	  age: 'unknown',
    	  gender: 'M',
    	  language: 'en',
    	  country: 'US',
    	  lang: 'en_US',
    	  channels: 1,
    	  sampleRate: 44100,
    	  bitDepth: 16
    	},
	*/
});

const tts = new MacinTalk()
	.voice("Alex")
	.text("They did whatever it took to get the JoJ!");

tts.generate("./test.aiff").then(() => console.log("done generating"));

tts.generate().then(buffer => {
	const hexPreview = buffer.toString("hex", 0, 16).toUpperCase();
	console.log("Here's the buffer version: " + hexPreview + "...");
});