const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// ejecuta la accion desde el objeto Boton
btn.addEventListener('click', btnOnClick);

// ejecuta la accion desde el submit
//form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
  console.log({event});
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = `El Resultado es : ${sumaInputs}`;
}

