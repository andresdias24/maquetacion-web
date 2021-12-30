const listaLi =  [1,3,4,443,34] ;
const mensaje = `hay ${listaLi.length} elementos en la lista UL "NUMEROS"`;
console.log(mensaje);

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-06-19", requestOptions)
    .then(response => response.text())
    .then(result => mostrarImagen(result))
    .catch(error => console.log('error', error));

    const mostrarImagen =  (data) => {
        var myobj = JSON.parse(data);
        console.log(myobj.hdurl)

        body = `<img src="${myobj.hdurl}">`
        document.getElementById('products').innerHTML = body;

    }