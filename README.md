# node-macintalk

A simple Node.js wrapper for the `say` command-line utility on macOS, allowing you to list and synthesize text-to-speech using Apple system voices. Works similar to "node-balcon".

---

## 📦 Installation

```bash
npm install node-macintalk
```

> ⚠️ macOS only. This package will throw if used on non-darwin platforms.

---

## 🚀 Usage

### Basic Example

```js
const { MacinTalk } = require("node-macintalk");

const tts = new MacinTalk()
  .voice("Samantha")
  .text("Hello world");

tts.generate().then(buffer => {
  require("fs").writeFileSync("out.aiff", buffer);
});
```

### Write to a specific path

```js
tts.generate("output.aiff").then(filepath => {
  console.log("Saved to:", filepath);
});
```

---

## 🔊 Listing Available Voices

```js
const { listVoices } = require("node-macintalk");

listVoices().then(data => {
  console.log(data);
});
```

Returns a structure like:

```json
{
  "macOS": {
    "Alex": {
      "description": "Alex",
      "vendor": "Apple",
      "age": "unknown",
      "gender": "M",
      "language": "en",
      "country": "US",
      "lang": "en_US",
      "channels": 1,
      "sampleRate": 44100,
      "bitDepth": 16
    },
    ...
  }
}
```

---

## 🔧 Notes

- Siri voices are not listed by `say -v "?"` and are **not supported**.
- Gender is derived from the supplemental metadata in `data.gen.js`. (Which contains voice metadata sourced from a Web Speech API demonstration)
- The `.generate()` method returns an **AIFF** buffer in memory, or saves directly to a `.aiff` file.

---

## 🧠 License & Credits

- Author: Art Vandelay
- License: MIT

## Special Thanks

- Apple, Nuance, SoftVoice and whoever owns Eloquence now for their MacinTalk system
- Octanuary for inspiration from node-balcon
- HadrienGardeur for the metadata from his "web-speech-recommended-voices" demo site (Which helps with determining gender, since the OG devs didn't bother adding that info to the voice list!)
- ChatGPT 4o for debugging and helping me put this together (yes, everything has been tested and is confirmed working.)