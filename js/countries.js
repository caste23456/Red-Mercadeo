document.addEventListener('DOMContentLoaded', () => {

    const selectDrop = document.querySelector('#countries');
  
  //Consumimos la restApi de los paises y la retornamos en un Json.
    let response = fetch('https://restcountries.com/v3.1/all').then(res => {
      return res.json();
    }).then(data => {
      let output = "";
      data.forEach(country => {
        output += `<option value="${country.name.common}">${country.name.common}</option>`;
      })
  
      selectDrop.innerHTML = output;
      populate();
    }).catch(err => {
      console.log(err);
    })
    


  
  });
  //Esto por el momento no esta haciendo nada solo es una prueba para los departamentos
  // Se tiene que consumir del miamo api los departamentos
  function populate(s1,s2){
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if(selectDrop.innerHTML.output == 'Honduras'){
      output += `<option value="${city.name.common}">${country.name.common}</option>`;

    }

  }