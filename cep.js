async function getAddressByCep(){
   const cep = document.getElementById('cep').value;
   try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
   } catch (error) {
    alert(error.message);
   }
    
}

async function getprevisao(){
    const lat = document.getElementById('latitude').value;
    const long = document.getElementById('longitude').value;
    try {
     const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`);
     const data = await response.json();
     console.log(data);
     for (
      let index = 0;
      index < data.hourly.temperature_2m. length;
      index++
     ){
      document.getElementById('resutempo').innerHTML += `<div> ${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]}</div>`;
      
     }
     } catch (error) {
     alert(error.message);
    }
    
}