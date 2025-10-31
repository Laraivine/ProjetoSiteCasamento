const quantAdultos = document.getElementById('quantidade_adultos'); 
const nomeAcompanhante = document.getElementById('acompanhante'); 
const quantCriancas = document.getElementById('quantidade_crianca');
const nomeCriancas = document.getElementById('crianca'); 
const telefoneConfirmacao = document.getElementById('telefone')
const nomeConfirmacao = document.getElementById('nome')
const emailConfirmacao = document.getElementById('email')
const form = document.getElementById("form");

function confirmarPresenca(event) {

    event.preventDefault();

    let message = ` Olá, Martha e Odilon!\n${nomeConfirmacao.value} acabou de confirmar a presença no seu casamento!
    Esses são os dados que ${nome.value} preencheu: 
      Telefone: ${telefoneConfirmacao.value}
      E-mail: ${emailConfirmacao.value}
      Quantidade de adultos: ${quantAdultos.value}
      Nome dos acompanhantes: ${nomeAcompanhante.value}
      Quantidade de crianças: ${quantCriancas.value}
      Nome das crianças: ${nomeCriancas.value}
      
                     `
    emailjs.send("service_casamento","template_bdzwr62",{
        title: "Confirmação de Presença",
        name: nomeConfirmacao,
        message,
        email: emailConfirmacao,
        telefone: telefoneConfirmacao,
        Quantidadedeadultos: quantAdultos,
        Nomedosacompanhantes: nomeAcompanhante,
        Quantidadedecriancas: quantCriancas,
        Nomedascriancas: nomeCriancas,

    });     
}

form.addEventListener('submit', confirmarPresenca);
//form.addEventListener("submit", logSubmit);


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


` `