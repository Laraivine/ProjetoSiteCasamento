const selectAdultos = document.getElementById('quantidade_adultos'); 
const containerAcompanhantes = document.getElementById('acompanhante'); 
const selectCriancas = document.getElementById('quantidade_crianca');
const containerCriancas = document.getElementById('crianca'); 


function atualizarAcompanhantes(){ 
    const totalAdultos = parseInt(selectAdultos.value); 
    const numeroAcompanhantes = totalAdultos - 1; 
    containerAcompanhantes.innerHTML = ''; 
    
    for(let i = 1; i <= numeroAcompanhantes; i++){
        const divAcompanhante = document.createElement('div');
        divAcompanhante.classList.add('acompanhante');
        const inputAcompanhante = document.createElement('input');
        inputAcompanhante.setAttribute('type', 'text');
        inputAcompanhante.setAttribute('name', `adulto${i}`); 
        inputAcompanhante.setAttribute('placeholder', 'Nome completo do acompanhante'); 
        divAcompanhante.appendChild(inputAcompanhante);
        containerAcompanhantes.appendChild(divAcompanhante);
    }
}
function atualizarCriancas(){ 
    const numeroCriancas = parseInt(selectCriancas.value); 
    containerCriancas.innerHTML = ''; 

    for(let i = 1; i <= numeroCriancas; i++){
        const divCriancas = document.createElement('div');
        divCriancas.classList.add('crianca');
        const inputCriancas = document.createElement('input');
        inputCriancas.setAttribute('type', 'text');
        inputCriancas.setAttribute('name', `crianca${i}`); 
        inputCriancas.setAttribute('placeholder', 'Nome completo da criança'); 
        divCriancas.appendChild(inputCriancas);
        containerCriancas.appendChild(divCriancas);
    }
}

selectAdultos.addEventListener('change', atualizarAcompanhantes);
atualizarAcompanhantes();
selectCriancas.addEventListener('change', atualizarCriancas);
atualizarCriancas();

/*SCRIPT DO DIA/HORA/MINUTOS/SEGUNDOS */
const dataFinal = new Date("2026-01-10T00:00:00");

function atualizarContagem() {
  const agora = new Date();
  const diferenca = dataFinal - agora;

  if (diferenca <= 0) {
    document.querySelector(".contador").innerHTML = "<h3>Tempo Esgotado!</h3>";
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
  document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
}

const intervalo = setInterval(atualizarContagem, 1000);
atualizarContagem();



