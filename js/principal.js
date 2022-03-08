
var titulo = document.querySelector(".titulo");
var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length; i++){
  var paciente = pacientes[i];
  var tdpeso = paciente.querySelector(".info-peso");
  var tdaltura = paciente.querySelector(".info-altura");
  var tdimc = paciente.querySelector(".info-imc");
  var pesovalido = true;
  var altvalido = true;

  peso = tdpeso.textContent;
  altura = tdaltura.textContent;

  //peso = 1000;
  //altura = 1.73;

  if(peso <= 0 || peso >= 300){
    console.log("peso inválido");
    tdpeso.textContent = "Peso inválido"
    pesovalido = false;
    paciente.classList.add("paciente-invalido");
  }

  if(altura <= 0 || altura >= 4){
    console.log("altura inválida");
    tdaltura.textContent = "Altura inválida"
    altvalido = false;
    paciente.classList.add("paciente-invalido");
  }

  if(pesovalido && altvalido){
    var imc = calculaImc(peso,altura);
    tdimc.textContent = imc;
  }
}

function calculaImc(peso,altura){
  var imc = 0;
  var pesovalido = true;
  var altvalido = true;
  //if(peso <= 0 || peso >= 300){}
  //if(altura <= 0 || altura >= 4){}
  imc = peso / (altura*altura);
  return imc.toFixed(2);
}
