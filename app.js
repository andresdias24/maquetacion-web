const listaLi = document.querySelectorAll('#numeros li');
const mensaje = `hay ${listaLi.length} elementos en la lista UL "NUMEROS"`;
console.log(mensaje);
document.getElementById('output').innerHTML = mensaje;