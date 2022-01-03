let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-12-31", requestOptions)
    .then(response => response.text())
    .then(result => mostrarImagen(result))
    .catch(error => console.log('error', error));

    const mostrarImagen =  (data) => {
        let myobj = JSON.parse(data);
        console.log(myobj.hdurl)

        let body = `<img src="${myobj.hdurl}">`
        document.getElementById('products').innerHTML = body;

    }
