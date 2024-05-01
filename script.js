document.querySelector('#btSim').addEventListener('click', () =>{
    document.querySelector('#audio').setAttribute('autoplay', true);
    // Irá ocultar a div após clicar em "Sim"
    document.querySelector('#controleDiv').classList.add('oculto');
    document.querySelector('#resposta').classList.remove('oculto');
});

document.querySelector('#btNao').addEventListener('click', () =>{
    window.alert('Resposta errada meu bem, tente novamente ⛔🙄⛔')
})