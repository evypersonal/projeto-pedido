# Documentando sobre o projeto


![Tela inicial](/img/Screenshot%202024-05-01%20at%2012-15-35%20Pedido.png)

![Tela resultado](/img/Screenshot%202024-05-01%20at%2012-16-20%20Pedido.png)

### _🔗[Teste o projeto Aqui](https://evypersonal.github.io/projeto-pedido/)_
<hr>

## Adicionando pastas 

Foi criado uma pasta cujo nome `audio` na qual contém 1 música `Before I Forget - Slipknot` .

Foi criado também uma segundo pasta cujo nome `img` na qual contém 2 imagens do projeto.

<hr>
<hr>

## Adicionando o index.html

Na tag `head` foi linkado 2 arquivos, sendo:

- Para vincular a página de estilo;
~~~html
<link rel="stylesheet" href="style.css">
~~~

- Para vincular a imagem do `favicon` na aba da página;
~~~html
<link rel="shortcut icon" href="/img/icons8-gostar.gif" type="image/x-icon">
~~~

<hr>

Na tag `body` foram adicionado os seguntes trechos:
~~~html
<div class="controle" id="controleDiv">
    <h1>Aceita se casar comigo?</h1> 
    <div class="botoes">
        <button type="button" class="acao-positiva" id="btSim">Sim</button>
        <button type="button" class="acao-negativa" id="btNao">Não</button>
    </div>
</div>
~~~

- Afim de adicionar uma `div` contendo 1 questão em forma de `h1` e 2 botões utilizando `button`;

<hr>

Em seguida possui o seguinte código:
~~~html
<div class="oculto resposta" id="resposta">
    <div class="title">
        <h1>Sabia que iria fazer a escolha certa 😌 Juntas até depois do fim bebe 🤗</h1>
    </div>
    <img src="/img/fogos.png" alt="" class="img2">
    <img src="/img/gifs-de-rock-and-roll-3.gif" alt="" class="img" id="img1">
    <audio id="audio" controls>
        <source src="/audio/Slipknot_-_Before_I_Forget_OFFICIAL_VIDEO_HDMP3_160K.mp3" type="audio/mpeg" class="audio">
    </audio>
</div>
~~~
- Adicionando da `div` uma interface de resposta, contendo as imagens selecionadas e o audio.

<hr>

Após o fechamento da tag `main`, vinculei o arquivo `script.js` para propor interações à página.
~~~html
<script src="script.js"></script>
~~~

<hr>
<hr>

## Adicionando o script.js

Para o botão `Sim` inclui a seguinte funcionalidade:
~~~js
document.querySelector('#btSim').addEventListener('click', () =>{
    document.querySelector('#audio').setAttribute('autoplay', true);
    // Irá ocultar a div após clicar em "Sim"
    document.querySelector('#controleDiv').classList.add('oculto');
    document.querySelector('#resposta').classList.remove('oculto');
});
~~~
- Quando o botão executar a ação de `click` a div `controleDiv` será ocultada, e a div `resposta` será apresentada, juntamente com o audio no qual contém `autoplay` para reprodução automática após o `click`;

<hr>

Para o botão `Não` inclui a seguinte funcionalidade:

~~~js
document.querySelector('#btNao').addEventListener('click', () =>{
    window.alert('Resposta errada meu bem, tente novamente ⛔🙄⛔')
})
~~~

- Afim de aparece um `alert` caso ocorra o `click` desse botão;

<hr>
<hr>

## Adicionando o style.css

No arquivo foi efetuado estilizações da página.