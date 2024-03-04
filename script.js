// ELEMENTOS HTML 'CAPTURADOS' VIA DOM
const inputTxt = document.getElementById('input-txt');
const noTxt = document.querySelector('.no-txt');
const texted = document.querySelector('.texted');
const outputTxt = document.getElementById('output-txt');
const btnCopy = document.querySelector('.btn-texted-2copy');
const imgGirlSearch = document.querySelector('#img-girl-search');
const h2NoTxt = document.querySelector('.h2-no-txt');
const pNoTxt = document.querySelector('.p-no-txt');
const btnEncrypt = document.getElementById('btn-encrypt');
const btnDescrypt = document.getElementById('btn-descrypt');

// MAPAS DE ENCRIPTAÇÃO DE DESCRIPTAÇÃO
const encryptMap = {
  "enter": "e",
  "imes": "i",
  "ai": "a",
  "ober": "o",
  "ufat": "u"
};
const descryptMap = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
};

// EVENTOS
inputTxt.addEventListener('input', function() {
  if(isNotNull(inputTxt)) {
    setElementsTexted();
    inputTxt.value = filterTxtRules(inputTxt.value);
    copyInput2Output(inputTxt, outputTxt);
  } else{
    setElementsNonTxt();
  }
});

btnEncrypt.addEventListener('click', function() {
  const encryptedText = encrypt(outputTxt.value);
  outputTxt.value = encryptedText;
});

btnDescrypt.addEventListener('click', function() {
  const decryptedText = descrypt(outputTxt.value);
  outputTxt.value = decryptedText;
});

btnCopy.addEventListener('click', function() {
  const copyText = outputTxt.value;
  navigator.clipboard.writeText(copyText);
  alert(`Mensagem copiada no clipboard: ${copyText}`);
});

// FUNÇÕES
function isNotNull(field){
  let myBool = field.value.length > 0 ? true : false;
  return myBool;
}

function setElementsTexted(){
  texted.style.display = 'block';
  noTxt.style.display = 'none';
  btnCopy.style.display = 'block';
  imgGirlSearch.style.display = 'none';
  h2NoTxt.style.display = 'none';
  pNoTxt.style.display = 'none';
  outputTxt.style.display = 'block';
}

function setElementsNonTxt(){
  texted.style.display = 'none';
  noTxt.style.display = 'block';
  btnCopy.style.display = 'none';
  imgGirlSearch.style.display = 'block';
  h2NoTxt.style.display = 'block';
  pNoTxt.style.display = 'block';
  outputTxt.style.display = 'none';
}

function copyInput2Output(inputEl, outputEl){
  outputEl.value = inputEl.value;  
}

function filterTxtRules(txt){
  return txt.toLowerCase().replace(/[áàâãêéíóôõúüç012345678'"!@#$%¨&*)(-_=+|`~)]/g, "");
}

function encrypt(txt){
  for(const key in encryptMap) {
    txt = txt.replace(encryptMap[key], key);
  }
 return txt;
}

function descrypt(txt){
  for(const key in descryptMap){
    txt = txt.replace(descryptMap[key], key);
  }
  return txt;
}
