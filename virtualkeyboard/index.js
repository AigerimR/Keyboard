// import { Key } from "./keyboard.js";
// export
class Key {
  constructor(keyValue, keyboard) {
    this.tag = keyValue[1];
    this.id = keyValue[0];
    this.container = keyboard;
    this.keyboardKey;
  }

  generateKey() {
    let keyboardKey = document.createElement("div");
    this.keyboardKey = keyboardKey;
    keyboardKey.className = "keyboard-key";
    keyboardKey.innerHTML = `${this.tag}`;
    keyboardKey.id = `${this.id}`;
    this.container.appendChild(keyboardKey);
    // this.addBreak();
    this.addStyleToSpecificKeys();
    return keyboardKey;
  }

  // addBreak() {
  //   const keyboardBreak = document.createElement("div");
  //   keyboardBreak.classList.add("break");

  //   switch (this.tag) {
  //     case "delete":
  //       keyboard.appendChild(keyboardBreak);
  //       break;
  //     case "\\":
  //       keyboard.appendChild(keyboardBreak);
  //       break;
  //     case "enter":
  //       keyboard.appendChild(keyboardBreak);
  //       break;
  //     case "fn":
  //       keyboard.insertBefore(keyboardBreak, this.keyboardKey);
  //       break;
  //   }
  // }

  addStyleToSpecificKeys() {
    const specialKeys = [
      "delete",
      "tab",
      "caps lock",
      "enter",
      "shift",
      "fn",
      "control",
      "alt",
      "command",
      "&#9650",
      "",
      "&#9668",
      "&#9660",
      "&#9654",
    ];
    if (specialKeys.includes(this.tag)) {
      this.keyboardKey.classList.add("secondary-key");
    }
    switch (this.id) {
      case "Backspace":
      case "Tab":
        this.keyboardKey.classList.add("half-width-key");
        break;

      case "Enter":
      case "CapsLock":
        this.keyboardKey.classList.add("double-width-key");
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.keyboardKey.classList.add("tripple-width-key");
        break;
      case "Space":
        this.keyboardKey.classList.add("max-width-key");
        break;
    }
  }
}

const keyboardKeyValues = {
  //2 rows
  keysKeyboardEngShift: [
    ["Backquote", "`", "~"],
    ["Digit1", "1", "!"],
    ["Digit2", "2", "@"],
    ["Digit3", "3", "#"],
    ["Digit4", "4", "$"],
    ["Digit5", "5", "%"],
    ["Digit6", "6", "^"],
    ["Digit7", "7", "&"],
    ["Digit8", "8", "*"],
    ["Digit9", "9", "("],
    ["Digit0", "0", ")"],
    ["Minus", "-", "_"],
    ["Equal", "=", "+"],
    ["Backspace", "delete", "delete"],
    ["Tab", "tab", "tab"],
    ["KeyQ", "q", "Q"],
    ["KeyW", "w", "W"],
    ["KeyE", "e", "E"],
    ["KeyR", "r", "R"],
    ["KeyT", "t", "T"],
    ["KeyY", "y", "Y"],
    ["KeyU", "u", "U"],
    ["KeyI", "i", "I"],
    ["KeyO", "o", "O"],
    ["KeyP", "p", "P"],
    ["BracketLeft", "[", "{"],
    ["BracketRight", "]", "}"],
    ["Backslash", "\\", "|"],
    ["CapsLock", "caps lock", "caps lock"],
    ["KeyA", "a", "A"],
    ["KeyS", "s", "S"],
    ["KeyD", "d", "D"],
    ["KeyF", "f", "F"],
    ["KeyG", "g", "G"],
    ["KeyH", "h", "H"],
    ["KeyJ", "j", "J"],
    ["KeyK", "k", "K"],
    ["KeyL", "l", "L"],
    ["Semicolon", ";", ":"],
    ["Quote", "'", '"'],
    ["Enter", "enter", "enter"],
    ["ShiftLeft", "shift", "shift"],
    ["KeyZ", "z", "Z"],
    ["KeyX", "x", "X"],
    ["KeyC", "c", "C"],
    ["KeyV", "v", "V"],
    ["KeyB", "b", "B"],
    ["KeyN", "n", "N"],
    ["KeyM", "m", "M"],
    ["Comma", ",", "<"],
    ["Period", ".", ">"],
    ["Slash", "/", "?"],
    ["ArrowUp", "&#9650", "&#9650"],
    ["ShiftRight", "shift", "shift"],
    ["", "fn", "fn"],
    ["ControlLeft", "control", "control"],
    ["AltLeft", "alt", "alt"],
    ["MetaLeft", "command", "command"],
    ["Space", "", ""],
    ["MetaRight", "command", "command"],
    ["AltRight", "alt", "alt"],
    ["ArrowLeft", "&#9668", "&#9668"],
    ["ArrowDown", "&#9660", "&#9660"],
    ["ArrowRight", "&#9654", "&#9654"],
  ],

  keysKeyboardRusShift: [
    ["Backquote", "]", "["],
    ["Digit1", "1", "!"],
    ["Digit2", "2", '"'],
    ["Digit3", "3", "№"],
    ["Digit4", "4", ";"],
    ["Digit5", "5", "%"],
    ["Digit6", "6", ":"],
    ["Digit7", "7", "?"],
    ["Digit8", "8", "*"],
    ["Digit9", "9", "("],
    ["Digit0", "0", ")"],
    ["Minus", "-", "_"],
    ["Equal", "=", "+"],
    ["Backspace", "delete", "delete"],
    ["Tab", "tab", "tab"],
    ["KeyQ", "й", "Й"],
    ["KeyW", "ц", "Ц"],
    ["KeyE", "у", "У"],
    ["KeyR", "к", "К"],
    ["KeyT", "е", "Е"],
    ["KeyY", "н", "Н"],
    ["KeyU", "г", "Г"],
    ["KeyI", "ш", "Ш"],
    ["KeyO", "щ", "Щ"],
    ["KeyP", "з", "З"],
    ["BracketLeft", "х", "Х"],
    ["BracketRight", "ъ", "Ъ"],
    ["Backslash", "\\", "/"],
    ["CapsLock", "caps lock", "caps lock"],
    ["KeyA", "ф", "Ф"],
    ["KeyS", "ы", "Ы"],
    ["KeyD", "в", "В"],
    ["KeyF", "а", "А"],
    ["KeyG", "п", "П"],
    ["KeyH", "р", "Р"],
    ["KeyJ", "о", "О"],
    ["KeyK", "л", "Л"],
    ["KeyL", "д", "Д"],
    ["Semicolon", "ж", "Ж"],
    ["Quote", "э", "Э"],
    ["Enter", "enter", "enter"],
    ["ShiftLeft", "shift", "shift"],
    ["KeyZ", "я", "Я"],
    ["KeyX", "ч", "Ч"],
    ["KeyC", "с", "С"],
    ["KeyV", "м", "М"],
    ["KeyB", "и", "И"],
    ["KeyN", "т", "Т"],
    ["KeyM", "ь", "Ь"],
    ["Comma", "б", "Б"],
    ["Period", "ю", "Ю"],
    ["Slash", ".", ","],
    ["ArrowUp", "&#9650", "&#9650"],
    ["ShiftRight", "shift", "shift"],
    ["", "fn", "fn"],
    ["ControlLeft", "control", "control"],
    ["AltLeft", "alt", "alt"],
    ["MetaLeft", "command", "command"],
    ["Space", "", ""],
    ["MetaRight", "command", "command"],
    ["AltRight", "alt", "alt"],
    ["ArrowLeft", "&#9668", "&#9668"],
    ["ArrowDown", "&#9660", "&#9660"],
    ["ArrowRight", "&#9654", "&#9654"],
  ],
  keysEng: [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "delete",
    "tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "caps lock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "enter",
    "shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "&#9650",
    "shift",
    "fn",
    "control",
    "alt",
    "command",
    "",
    "command",
    "alt",
    "&#9668",
    "&#9660",
    "&#9654",
  ],
  specialKeys: [
    "delete",
    "tab",
    "caps lock",
    "enter",
    "shift",
    "fn",
    "control",
    "alt",
    "command",
    "",
  ],
  keysEngShift: [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "delete",
    "tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "{",
    "}",
    "|",
    "caps lock",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ":",
    '"',
    "enter",
    "shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "<",
    ">",
    "?",
    "&#9650",
    "shift",
    "fn",
    "control",
    "alt",
    "command",
    "",
    "command",
    "alt",
    "&#9668",
    "&#9660",
    "&#9654",
  ],
  specialKeys: [
    "delete",
    "tab",
    "caps lock",
    "enter",
    "shift",
    "fn",
    "control",
    "alt",
    "command",
    "",
  ],
  keysRus: [
    "]",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "delete",
    "tab",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "\\",
    "caps lock",
    "ф",
    "ы",
    "в",
    "а",
    "п",
    "р",
    "о",
    "л",
    "д",
    "ж",
    "э",
    "enter",
    "shift",
    "я",
    "ч",
    "с",
    "м",
    "и",
    "т",
    "ь",
    "б",
    "ю",
    ".",
    "&#9650",
    "shift",
    "fn",
    "control",
    "alt",
    "command",
    "",
    "command",
    "alt",
    "&#9668",
    "&#9660",
    "&#9654",
  ],
  // specialKeysKeyboard: [
  //   "Delete",
  //   "Tab",
  //   "CapsLock",
  //   "Enter",
  //   "Shift",
  //   "fn",
  //   "Control",
  //   "Alt",
  //   "Command",
  //   "Space",
  // ],
  // keyRus: []
  keysOnKeyboard: [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backspace",
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Enter",
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ArrowUp",
    "ShiftRight",
    "",
    "ControlLeft",
    "AltLeft",
    "MetaLeft",
    "Space",
    "MetaRight",
    "AltRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
  ],
};
const textArea = document.createElement("textarea");
let keyOnScreen = [];

window.onload = function () {
  createMainContainer();
  let lang = JSON.parse(localStorage.getItem("lang"));
  if (lang === null || lang === "english") {
    generateKeyboardKeys(keyboardKeyValues.keysKeyboardEngShift);
  } else {
    generateKeyboardKeys(keyboardKeyValues.keysKeyboardRusShift);
  }
  keysClickHandler();
  keyboardKeysDownHandler();
  keyboardKeysUpHandler();
  languageToggle();
};
const createMainContainer = () => {
  const title = document.createElement("h1");
  title.innerHTML = "Virtual Keyboard";
  document.body.appendChild(title);

  textArea.id = "textarea";
  textArea.cols = "50";
  textArea.rows = "10";
  document.body.appendChild(textArea);

  const keyboard = document.createElement("div");
  keyboard.id = "keyboard";
  document.body.appendChild(keyboard);

  const extratext1 = document.createElement("p");
  extratext1.innerHTML = "Keyboard was created on MacOS";
  document.body.appendChild(extratext1);
  const extratext2 = document.createElement("p");
  extratext2.innerHTML = "To switch between languages use ctrl + alt";
  document.body.appendChild(extratext2);
};

const generateKeyboardKeys = (keysSet) => {
  keysSet.forEach((keyValue) => {
    let key = new Key(keyValue, keyboard).generateKey();
    keyOnScreen.push(key);
  });
};

const keysClickHandler = () => {
  keyboard.addEventListener("click", (e) => {
    if (
      !keyboardKeyValues.specialKeys.includes(e.target.innerHTML) &&
      e.target.classList.contains("keyboard-key")
    ) {
      textArea.value += e.target.innerHTML;
    } else {
      switch (e.target.innerHTML) {
        case "delete":
          textArea.value = textArea.value
            .split("")
            .slice(0, textArea.value.length - 1)
            .join("");
          break;
        case "enter":
          textArea.value += "\n";
          break;
        case "":
          textArea.value += " ";
          break;
        case "tab":
          textArea.value += "   ";
          break;
        case "caps lock":
          capslockToggle();
          break;
        case "shift":
          shiftToggle();
          break;
      }
    }
  });
};

const keyboardKeysDownHandler = () => {
  window.addEventListener("keydown", (e) => {
    for (let i = 0; i < keyboardKeyValues.keysOnKeyboard.length; i++) {
      if (
        e.code === keyboardKeyValues.keysOnKeyboard[i] &&
        e.code !== "CapsLock"
      ) {
        keyOnScreen[i].classList.add("hovered");
      }
    }
    switch (e.code) {
      case "Backspace":
        textArea.value = textArea.value
          .split("")
          .slice(0, textArea.value.length - 1)
          .join("");
        break;
      case "Enter":
        textArea.value += "\n";
        break;
      case "Space":
        textArea.value += " ";
        break;
      case "Tab":
        e.preventDefault();
        textArea.value += "   ";
        break;
      case "CapsLock":
        capslockToggle();
        textArea.value += "";
        break;
      case "ShiftLeft":
      case "ShiftRight":
        shiftHandleDown();
        break;
      case "ControlLeft":
      case "AltLeft":
      case "AltRight":
      case "MetaLeft":
      case "MetaRight":
        textArea.value += "";
        break;
      case "ArrowLeft":
        textArea.value += "\u25C4";
        break;
      case "ArrowRight":
        textArea.value += "\u25B6";
        break;
      case "ArrowDown":
        textArea.value += "\u25BC";
        break;
      case "ArrowUp":
        textArea.value += "\u25B2";
        break;
      default:
        renderFromKeyboard(e);
        // textArea.value += e.key;
        break;
    }
  });
};

const renderFromKeyboard = (btn) => {
  for (let i = 0; i < keyboardKeyValues.keysKeyboardEngShift.length; i++) {
    if (btn.code === keyboardKeyValues.keysKeyboardEngShift[i][0]) {
      // keyOnScreen[i].classList.add("hovered");
      textArea.value += keyboard.childNodes[i].innerHTML;
    }
  }
};
const keyboardKeysUpHandler = () => {
  window.addEventListener("keyup", (e) => {
    for (let i = 0; i < keyboardKeyValues.keysOnKeyboard.length; i++) {
      if (
        e.code === keyboardKeyValues.keysOnKeyboard[i] &&
        e.code !== "CapsLock"
      ) {
        keyOnScreen[i].classList.remove("hovered");
      }
    }
    switch (e.code) {
      case "ShiftLeft":
      case "ShiftRight":
        shiftHandleUp();
        break;
    }
  });
};

const capslockToggle = () => {
  let capsBtn = Array.from(keyboard.childNodes).find(
    (child) => child.innerHTML === "caps lock"
  );
  capsBtn.classList.toggle("hovered");
  if (capsBtn.classList.contains("hovered")) {
    keyboard.childNodes.forEach((child) => {
      if (!keyboardKeyValues.specialKeys.includes(child.innerHTML))
        child.innerHTML = child.innerHTML.toUpperCase();
    });
  } else {
    keyboard.childNodes.forEach((child) => {
      if (!keyboardKeyValues.specialKeys.includes(child.innerHTML))
        child.innerHTML = child.innerHTML.toLowerCase();
    });
  }
};

const shiftHandleDown = () => {
  textArea.value += "";
  let lang = JSON.parse(localStorage.getItem("lang"));
  if (lang === "english") {
    for (let i = 0; i < keyboardKeyValues.keysKeyboardEngShift.length; i++) {
      keyboard.childNodes[i].innerHTML =
        keyboardKeyValues.keysKeyboardEngShift[i][2];
    }
  } else {
    for (let i = 0; i < keyboardKeyValues.keysKeyboardRusShift.length; i++) {
      keyboard.childNodes[i].innerHTML =
        keyboardKeyValues.keysKeyboardRusShift[i][2];
    }
  }
};

const shiftHandleUp = () => {
  let lang = JSON.parse(localStorage.getItem("lang"));
  if (lang === "english") {
    for (let i = 0; i < keyboardKeyValues.keysKeyboardEngShift.length; i++) {
      keyboard.childNodes[i].innerHTML =
        keyboardKeyValues.keysKeyboardEngShift[i][1];
    }
  } else {
    for (let i = 0; i < keyboardKeyValues.keysKeyboardRusShift.length; i++) {
      keyboard.childNodes[i].innerHTML =
        keyboardKeyValues.keysKeyboardRusShift[i][1];
    }
  }

  let shiftBtns = [];
  Array.from(keyboard.childNodes).forEach((child) => {
    if (child.innerHTML === "shift") shiftBtns.push(child);
  });
  shiftBtns.forEach((btn) => btn.classList.remove("hovered"));
};

const shiftToggle = () => {
  let shiftBtns = [];
  Array.from(keyboard.childNodes).forEach((child) => {
    if (child.innerHTML === "shift") shiftBtns.push(child);
  });
  shiftBtns.forEach((btn) => btn.classList.toggle("hovered"));
  // shiftBtns[0].classList.toggle("hovered");
  // shiftBtns[1].classList.toggle("hovered");
  if (shiftBtns[0].classList.contains("hovered")) {
    shiftHandleDown();
  } else {
    shiftHandleUp();
  }
};
const languageToggle = () => {
  languageChange();
};
const languageChange = () => {
  let keysPressed = {};

  window.addEventListener("keydown", (e) => {
    keysPressed[e.key] = true;
    if (
      Object.keys(keysPressed).includes("Control") &&
      Object.keys(keysPressed).includes("Alt")
    ) {
      keyboard.innerHTML = "";
      let lang = JSON.parse(localStorage.getItem("lang"));
      if (lang === null || lang === "english") {
        localStorage.setItem("lang", JSON.stringify("russian"));
        generateKeyboardKeys(keyboardKeyValues.keysKeyboardRusShift);
      } else {
        localStorage.setItem("lang", JSON.stringify("english"));
        generateKeyboardKeys(keyboardKeyValues.keysKeyboardEngShift);
      }
    }
  });

  window.addEventListener("keyup", (e) => {
    delete keysPressed[e.key];
  });
};
