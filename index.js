function searchCEP() 
{       
    var cep = document.getElementById('cep').value;
    requestCEP(cep);
}


function requestCEP(cep){
     fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(response =>  response.json() )
        .then(data => {  writeData(data);  } )
    .catch(error =>  {  alert(error); } );
}

function writeData(jsonReturn) {
    document.getElementById("logradouro").value = jsonReturn.logradouro;
    document.getElementById("bairro").value = jsonReturn.bairro;
    document.getElementById("cidade").value = jsonReturn.localidade;
    document.getElementById("uf").value = jsonReturn.uf;
}

function alert(jsonReturn) {
    document.getElementById("logradouro").innerHTML = "CEP Inválido.";
    document.getElementById("bairro").innerHTML =  "CEP Inválido.";
    document.getElementById("cidade").innerHTML =  "CEP Inválido.";
    document.getElementById("uf").innerHTML = "CEP Inválido.";
}
