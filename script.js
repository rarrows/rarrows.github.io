const pwEl = document.getElementById('pw')
const lenEl = document.getElementById('len')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')
const copyTextEl = document.getElementById('copyText')

const upperLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const lowerletters = 'qwertyuiopasdfghjklzxcvbnm';
const symbols = '!@#$%^&*()/<>?:|_[]+=-,.;';
const numbers = '0123456789';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


generatePassword()

function getLowercase() {
  return lowerletters[Math.floor(Math.random() * lowerletters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(){

  const len = lenEl.value;

  let password = ""

  for (let i=0; i<len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
}

function generateX(){

  const xs = [];
  
  if (upperEl.checked) {
    xs.push(getUppercase())
  }

  if (lowerEl.checked) {
    xs.push(getLowercase())
  }

  if (numberEl.checked) {
    xs.push(getNumber())
  }

  if (symbolEl.checked) {
    xs.push(getSymbol())
  }

  if (xs.length === 0) return "";

  const copiedLabel = document.querySelector('.copied');
  copiedLabel.style.display = 'block';
  copiedLabel.style.opacity = '0';

  return xs[Math.floor(Math.random() * xs.length)];


}

generateEl.addEventListener('click', generatePassword);
const textarea = document.createElement('textarea');

function copyTextToClipboard(textToCopy) {
  textarea.value = textToCopy;

  document.body.appendChild(textarea);

  textarea.select();
  
  try {
      document.execCommand('copy');
      const copiedLabel = document.querySelector('.copied');
      copiedLabel.style.display = 'block';
      copiedLabel.style.opacity = '1';
      return true
  } catch (err) {
      return false
  } finally {
      document.body.removeChild(textarea);
  }
}

pwEl.addEventListener('click', () => {
  const textToCopy = pwEl.innerText;
  copyTextToClipboard(textToCopy);
});

lenEl.addEventListener('click', () => {
 lenEl.select();
})

lenEl.addEventListener('change', () => {
  generatePassword();
 })

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});