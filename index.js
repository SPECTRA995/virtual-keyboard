const keyName = {
    firstKey: {
        Backquote: '`',
        Num1: '1',
        Num2: '2',
        Num3: '3',
        Num4: '4',
        Num5: '5',
        Num6: '6',
        Num7: '7',
        Num8: '8',
        Num9: '9',
        Num0: '0',
        Minus: '-',
        Equal: '=',
        Backspace: 'Backspace',
        Tab: 'Tab',
        KeyQ: 'q',
        KeyW: 'w',
        KeyE: 'e',
        KeyR: 'r',
        KeyT: 't',
        KeyY: 'y',
        KeyU: 'u',
        KeyI: 'i',
        KeyO: 'o',
        KeyP: 'p',
        BracketLeft: '[',
        BracketRight: ']',
        BackSlash: '\\',
        Delete: 'del',
        CapsLock: 'capslock',
        KeyA: 'a',
        KeyS: 's',
        KeyD: 'd',
        KeyF: 'f',
        KeyG: 'g',
        KeyH: 'h',
        KeyJ: 'j',
        KeyK: 'k',
        KeyL: 'l',
        Semicolon: ';',
        Quote: "'",
        Enter: 'enter',
        ShiftLeft: 'shift',
        KeyZ: 'z',
        KeyX: 'x',
        KeyC: 'c',
        KeyV: 'v',
        KeyB: 'b',
        KeyN: 'n',
        KeyM: 'm',
        Comma: ',',
        Period: '.',
        Slash: '/',
        ArrowUp: '↑',
        ShiftRight: 'shift ',
        ControlLeft: 'ctrl',
        WinLeft: 'win',
        AltLeft: 'alt',
        Space: 'space',
        AltRight: 'alt',
        ControlRight: 'ctrl',
        ArrowLeft: '←',
        ArrowDown: '↓',
        ArrowRight: '→',
    }
};

class Keyboard {
  constructor(color='yellow') {
    this.color = color;
    this.wrapper;
    this.content;
    this.textarea;
    this.keyboard;
    this.allKeys;
    this.key;
    this.span;
    this.enter;
}

creatWrapper() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    document.body.append(this.wrapper);
    this.content = document.createElement('div');
    this.content.classList.add('content');
    this.wrapper.append(this.content);
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('text-area');
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard', 'keyboard-content');
    this.content.append(this.textarea, this.keyboard);
    this.allKeys = document.createElement('div');
    this.allKeys.classList.add('keyboard-keys');
    this.keyboard.append(this.creatKey(keyName.firstKey));
}

creatKey(obj) {
    for (let [key, value] of Object.entries(obj)) {
        this.key = document.createElement('button');
        this.key.classList.add('keyboard-key');
        this.key.setAttribute('data-key', `${key}`);
        this.key.setAttribute('data-value', `${value}`);
        this.span = document.createElement('span');
        this.span.setAttribute('data-value', `${value}`);
        this.span.classList.add('keyboard-span');
        this.key.append(this.span);
        this.allKeys.append(this.key);
       
        if (value === 'del' || value === 'enter') {
            this.span.textContent = value.toUpperCase();
        } else if (value === 'shift' || value === 'alt' || value === 'ctrl' || value === 'win' || value === 'enter' || key === 'ShiftRight' || value === 'Backspace' || value === 'tab' || value === 'capslock') {
            this.span.textContent = value.slice(0, 1).toUpperCase() + value.slice(1);
          } else {
            this.span.textContent = value.toLowerCase();
          }

    }
    return this.allKeys;
}

};

let test = new Keyboard('rgb(126, 81, 232)');
test.creatWrapper();


const span = document.querySelectorAll(".keyboard-span");
const button = document.querySelectorAll('.keyboard-key');
const buttonValue = document.getElementsByClassName('keyboard-key');
const textarea = document.querySelector('.text-area');


function showValue(event) {
    textarea.value += event.currentTarget.dataset.value;
};

button.forEach((el) => el.addEventListener('click', showValue));

function tabBtn() {
    if (this.dataset.value != "tab") {
        return this.dataset.value;
    } else {
          return this.dataset.value = "  ";
      }
};

button.forEach((el) => el.addEventListener('mouseover', tabBtn));

function backspaceBtn() {
    if (this.dataset.value != "Backspace") {
        return this.dataset.value;
    } else {
         this.dataset.value = "";
      }
};

button.forEach((el) => el.addEventListener('mouseover', backspaceBtn));

function noCapsBtn() {
    if (this.dataset.value != "capslock") {
        return this.dataset.value;
    } else {
        this.dataset.value = "";
      }
};

button.forEach((el) => el.addEventListener('mouseover', noCapsBtn));

function backspaceDelBtn() {
    if (this.dataset.key != "Backspace") {
        return this.dataset.value;
    } else {
        let perem = textarea.value.toString();
        return textarea.value = perem.slice(0, -1);

    }
};

button.forEach((el) => el.addEventListener('click', backspaceDelBtn)); 

function spaceBtn() {
    if (this.dataset.value != "space") {
        return this.dataset.value;
    } else {
        return this.dataset.value = " ";
      }
};

button.forEach((el) => el.addEventListener('mouseover', spaceBtn));

function altBtn() {
    if (this.dataset.value != "alt") {
        return this.dataset.value;
    } else {
        this.dataset.value = "";
      }
};

button.forEach((el) => el.addEventListener('mouseover', altBtn));

function ctrlBtn() {
    if (this.dataset.value != "ctrl") {
        return this.dataset.value;
    } else {
        this.dataset.value = "";
      }
};

button.forEach((el) => el.addEventListener('mouseover', ctrlBtn));

function leftShiftBtn() {
    if (this.dataset.key != "ShiftLeft") {
        return this.dataset.value;
    } else {
        this.dataset.value = "";
      }
};

button.forEach((el) => el.addEventListener('mouseover', leftShiftBtn));

function rightShiftBtn() {
    if (this.dataset.key != "ShiftRight") {
        return this.dataset.value;
    } else {
        this.dataset.value = "";
      }
};

button.forEach((el) => el.addEventListener('mouseover', rightShiftBtn));

function winBtn() {
    if (this.dataset.value != "win") {
        return this.dataset.value;
    } else {
        this.dataset.value = "";
      }
};

button.forEach((el) => el.addEventListener('mouseover', winBtn));

function enterBtn() {
    if (this.dataset.key != "Enter") {
        return this.dataset.value;
    } else { 
          textarea.value += '\r\n';
      }
};

button.forEach((el) => el.addEventListener('click', enterBtn));

function noEnterBtn() {
    if (this.dataset.value != "enter") {
        return this.dataset.value; 
    } else { 
        this.dataset.value = "";
      }
};

button.forEach((el) => el.addEventListener('mouseover', noEnterBtn));

function delButton() {
  if (this.dataset.value != "del") {
      return this.dataset.value; 
  } else { 
      this.dataset.value = "";
    }
};

button.forEach((el) => el.addEventListener('mouseover', delButton));



function moveDown() {
  if (this.dataset.key != "Enter" && this.dataset.key != "Backspace" && this.dataset.key != "Delete" && this.dataset.key != "ShiftRight" && this.dataset.key != "Tab" && this.dataset.key != "CapsLock" && this.dataset.key != "ShiftLeft" && this.dataset.key != "ControlLeft" && this.dataset.key != "WinLeft" && this.dataset.key != "AltLeft" && this.dataset.key != "Space" && this.dataset.key != "AltRight" && this.dataset.key != "ControlRight") {
  this.style.transform = 'scale(1.1)';
  this.style.backgroundColor = 'rgb(201, 214, 21)';
  } else {
    this.style.borderRadius = 'scale(1.1)';
    this.style.backgroundColor = 'rgb(231, 67, 240)';
  }
};

button.forEach((el) => el.addEventListener('mousedown', moveDown));

function moveUp() {
  if (this.dataset.key != "Enter" && this.dataset.key != "Backspace" && this.dataset.key != "Delete" && this.dataset.key != "ShiftRight" && this.dataset.key != "Tab" && this.dataset.key != "CapsLock" && this.dataset.key != "ShiftLeft" && this.dataset.key != "ControlLeft" && this.dataset.key != "WinLeft" && this.dataset.key != "AltLeft" && this.dataset.key != "Space" && this.dataset.key != "AltRight" && this.dataset.key != "ControlRight") {
    this.style.transform = 'none';
    this.style.backgroundColor = 'rgb(231, 67, 240)';
  } else {
      this.style.transform = 'none';
      this.style.backgroundColor = 'rgb(201, 214, 21)';
    }
};

button.forEach((el) => el.addEventListener('mouseup', moveUp));