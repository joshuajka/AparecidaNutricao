var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemPacienteDoFormulario(form);
  var pacienteTr = montaTr(paciente);
  var erros = validaPaciente(paciente);


  if(erros.length > 0){
    exibeMensagensErro(erros);
    return;
  }


  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";

});

function obtemPacienteDoFormulario(form){
  var paciente = {
    peso: form.peso.value,
    altura: form.altura.value,
    nome: form.nome.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)
  }

  return paciente;

}

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);  
}

function montaTr(paciente){

  var pacienteTr = document.createElement("tr");
  var pacienteTdPeso = document.createElement("td");
  var pacienteTdAltura = document.createElement("td");
  var pacienteTdNome = document.createElement("td");
  var pacienteTdGordura = document.createElement("td");
  var pacienteTdImc = document.createElement("td");

  pacienteTr.classList.add("paciente");
  pacienteTdPeso.classList.add("info-peso");
  pacienteTdAltura.classList.add("info-altura");
  pacienteTdNome.classList.add("info-nome");
  pacienteTdGordura.classList.add("info-gordura");
  pacienteTdImc.classList.add("info-imc");

  pacienteTr.appendChild(pacienteTdNome);
  pacienteTr.appendChild(pacienteTdPeso);
  pacienteTr.appendChild(pacienteTdAltura);
  pacienteTr.appendChild(pacienteTdGordura);
  pacienteTr.appendChild(pacienteTdImc);

  pacienteTdPeso.textContent = paciente.peso;
  pacienteTdAltura.textContent = paciente.altura;
  pacienteTdImc.textContent = paciente.imc;
  pacienteTdNome.textContent = paciente.nome;
  pacienteTdGordura.textContent = paciente.gordura;

  return pacienteTr;
}

function validaPeso(peso){
  if(peso > 0 && peso <= 300){
    return true;
  }
  else{
    return false;
  }
}

function validaAltura(altura){
  if(altura > 0 && altura <= 4){
    return true;
  }
  else{
    return false;
  }
}

function validaPaciente(paciente){
  var erros = [];
  if(!validaPeso(paciente.peso) && paciente.peso.length != 0){
    erros.push("Peso inválido");
  }
  if(!validaAltura(paciente.altura) && paciente.altura.length != 0){
    erros.push("Altura inválida");
  }
  if(paciente.nome.length==0){
    erros.push("Campo nome vazio");
  }
  if(paciente.gordura.length==0){
    erros.push("Campo gordura vazio");
  }
  if (paciente.peso.length == 0){
      erros.push("Campo peso vazio");
  }
  if (paciente.altura.length == 0){
      erros.push("Campo altura vazio");
  }
  return erros;
}

function exibeMensagensErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  })
}
