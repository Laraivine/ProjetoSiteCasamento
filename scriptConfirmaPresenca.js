// scriptConfirmaPresenca.js — versão robusta sem logs

function confirmarPresenca(event) {
    event.preventDefault();

    const form = document.getElementById('form');
    if (!form) return;

    const telefoneConfirmacao = document.getElementById('telefone');
    const nomeConfirmacao = document.getElementById('nome');
    const emailConfirmacao = document.getElementById('email');
    const observacao = document.getElementById('observacoes');
    const mensagemConfirmacao = document.getElementById('mensagem');
    const quantAdultos = document.getElementById('quantidade_adultos');
    const quantCriancas = document.getElementById('quantidade_crianca');

    // Coleta acompanhantes
    let nomesAcompanhantes = 'Nenhum';
    const acompanhantesInputs = document.querySelectorAll('.nome_acompanhante_input');
    if (acompanhantesInputs.length > 0) {
        nomesAcompanhantes = Array.from(acompanhantesInputs)
            .map(input => input.value)
            .filter(v => v && v.trim() !== '')
            .join(', ');
    }

    // Coleta crianças
    let nomesCriancas = 'Nenhum';
    const criancasInputs = document.querySelectorAll('.nome_crianca_input');
    if (criancasInputs.length > 0) {
        nomesCriancas = Array.from(criancasInputs)
            .map(input => input.value)
            .filter(v => v && v.trim() !== '')
            .join(', ');
    }

    const confirmacaoValue = (document.querySelector('input[name="confirmacao"]:checked') || {}).value || 'Não preenchido';
    const obsValue = (observacao && observacao.value && observacao.value.trim()) || 'Nenhuma';

    const message = `Olá, Martha e Odilon!\n\n${(nomeConfirmacao && nomeConfirmacao.value) || ''} acaba de ${(confirmacaoValue === 'sim') ? 'CONFIRMAR a' : 'NEGAR a'} presença no seu casamento!\n\nEsses são os dados que ${(nomeConfirmacao && nomeConfirmacao.value) || ''} preencheu:\n  Telefone: ${(telefoneConfirmacao && telefoneConfirmacao.value) || ''}\n  E-mail: ${(emailConfirmacao && emailConfirmacao.value) || ''}\n  Quantidade de adultos: ${(quantAdultos && quantAdultos.value) || ''}\n  Nomes dos acompanhantes adultos: ${nomesAcompanhantes}\n  Quantidade de crianças: ${(quantCriancas && quantCriancas.value) || ''}\n  Nomes das crianças: ${nomesCriancas}\n  Observação: ${obsValue}\n`;

    // Envio via emailjs se disponível
    if (typeof emailjs !== 'undefined' && emailjs.send) {
        emailjs.send('service_casamento', 'template_bdzwr62', {
            title: 'Confirmação de Presença',
            name: (nomeConfirmacao && nomeConfirmacao.value) || '',
            message,
            email: (emailConfirmacao && emailConfirmacao.value) || '',
            telefone: (telefoneConfirmacao && telefoneConfirmacao.value) || '',
            Quantidadedeadultos: (quantAdultos && quantAdultos.value) || '',
            Nomedosacompanhantes: nomesAcompanhantes,
            Quantidadedecriancas: (quantCriancas && quantCriancas.value) || '',
            Nomedascriancas: nomesCriancas,
            Observacao: obsValue,
        }).then(function () {
            if (mensagemConfirmacao) {
                mensagemConfirmacao.textContent = 'Sua presença foi confirmada e enviada aos noivos!';
                mensagemConfirmacao.style.display = 'block';
            }
            form.reset();
        }, function () {
            if (mensagemConfirmacao) {
                mensagemConfirmacao.textContent = 'Ocorreu um erro ao confirmar sua presença. Por favor tente novamente.';
                mensagemConfirmacao.style.display = 'block';
            }
        });
    } else {
        // Se emailjs não estiver disponível, apenas exibe mensagem local
        if (mensagemConfirmacao) {
            mensagemConfirmacao.textContent = 'Confirmação pronta, mas o serviço de envio não está disponível.';
            mensagemConfirmacao.style.display = 'block';
        }
    }
}

function atualizarAcompanhantes() {
    const quantAdultos = document.getElementById('quantidade_adultos');
    const nomeAcompanhante = document.getElementById('acompanhante');
    if (!quantAdultos || !nomeAcompanhante) return;

    const totalAdultos = parseInt(quantAdultos.value) || 1;
    const numeroAcompanhantes = Math.max(0, totalAdultos - 1);
    nomeAcompanhante.innerHTML = '';

    for (let i = 1; i <= numeroAcompanhantes; i++) {
        const divAcompanhante = document.createElement('div');
        divAcompanhante.classList.add('acompanhante');
        const inputAcompanhante = document.createElement('input');
        inputAcompanhante.setAttribute('type', 'text');
        inputAcompanhante.classList.add('nome_acompanhante_input');
        inputAcompanhante.setAttribute('name', `adulto${i}`);
        inputAcompanhante.setAttribute('placeholder', 'Nome completo do acompanhante');
        divAcompanhante.appendChild(inputAcompanhante);
        nomeAcompanhante.appendChild(divAcompanhante);
    }
}

function atualizarCriancas() {
    const quantCriancas = document.getElementById('quantidade_crianca');
    const nomeCriancas = document.getElementById('crianca');
    if (!quantCriancas || !nomeCriancas) return;

    const numeroCriancas = parseInt(quantCriancas.value) || 0;
    nomeCriancas.innerHTML = '';

    for (let i = 1; i <= numeroCriancas; i++) {
        const divCriancas = document.createElement('div');
        divCriancas.classList.add('crianca');
        const inputCriancas = document.createElement('input');
        inputCriancas.setAttribute('type', 'text');
        inputCriancas.classList.add('nome_crianca_input');
        inputCriancas.setAttribute('name', `crianca${i}`);
        inputCriancas.setAttribute('placeholder', 'Nome completo da criança');
        divCriancas.appendChild(inputCriancas);
        nomeCriancas.appendChild(divCriancas);
    }
}

// Inicialização quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    const quantAdultos = document.getElementById('quantidade_adultos');
    if (quantAdultos) {
        quantAdultos.addEventListener('change', atualizarAcompanhantes);
        atualizarAcompanhantes();
    }

    const quantCriancas = document.getElementById('quantidade_crianca');
    if (quantCriancas) {
        quantCriancas.addEventListener('change', atualizarCriancas);
        atualizarCriancas();
    }

    const form = document.getElementById('form');
    if (form) form.addEventListener('submit', confirmarPresenca);

    // Menu hamburger
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainMenu = document.getElementById('main-menu');
    const header = document.querySelector('.header');
    if (hamburgerButton && mainMenu) {
        hamburgerButton.addEventListener('click', function () {
            mainMenu.classList.toggle('active');
            if (header) header.classList.toggle('menu-open');
        });
    }
});