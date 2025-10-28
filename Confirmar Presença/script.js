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