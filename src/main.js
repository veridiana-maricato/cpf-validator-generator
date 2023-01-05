import CpfGenerator from './modules/CpfGenerator'
import ValidateCpf from './modules/ValidateCpf';

import './assets/css/style.css';

const checkBtn = document.querySelector('#check-btn')
const generateBtn = document.querySelector('#generate-btn')
const cpfInput = document.querySelector('.cpf-input')

cpfInput.addEventListener('keypress', () => {
  let inputLength = cpfInput.value.length
  if (inputLength === 3 || inputLength === 7){
    cpfInput.value += `.`
  }else if(inputLength === 11){
    cpfInput.value += `-`
  }
})

const validates = (e) => {
    e.preventDefault();
    const result = document.querySelector(".result");

    const val = new ValidateCpf(cpfInput.value);
  
    if (val.validate()) {
        result.innerText = "CPF válido.";
        result.classList.remove('invalid')
        result.classList.add('valid')
      } else {
        result.innerText = "CPF inválido.";
        result.classList.remove('valid')
        result.classList.add('invalid')
      }
}

const generates = () => {
    const generate = new CpfGenerator()
    const newCpf = document.querySelector('.new-cpf')
    newCpf.innerHTML = generate.generateNewCpf()
}

checkBtn.addEventListener('click', validates)
generateBtn.addEventListener('click', generates)

