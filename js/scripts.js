// Atividade 1
function validarDados(){
    var data = frmRegistro.inData.value;
    var nome = frmRegistro.inCli.value;
    var tel = frmRegistro.inFone.value;
    var email = frmRegistro.inMail.value;
    var prod = frmRegistro.inProd.value;
    var quantidade = frmRegistro.inQtd.value;
    var valor = frmRegistro.inVal.value;
    let divMensagem = document.getElementById('mensagem-erro');
    let mensagem = '';

    divMensagem.innerHTML='';

    // OBRIGATÓRIOS
    if (data.trim() == '') {
        mensagem="O campo Data não pode estar vazio!!";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmExemplo.inData.focus();
        return false;
    }

    if (nome.trim() == '') {
        mensagem="O campo Nome do Cliente não pode estar vazio!!";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmExemplo.inCli.focus();
        return false;
    }

    if (tel.trim() == '') {
        mensagem="O campo Telefone não pode estar vazio!!";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmExemplo.inFone.focus();
        return false;
    }

    if (email.trim() == '') {
        mensagem="O campo Email não pode estar vazio!!";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmExemplo.inMail.focus();
        return false;
    }

    if (prod.trim() == '') {
        mensagem="O campo Produto não pode estar vazio!!";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmExemplo.inProd.focus();
        return false;
    }

    if (quantidade.trim() == '') {
        mensagem="O campo Quantidade não pode estar vazio!!";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmExemplo.inQtd.focus();
        return false;
    }
    

    if (valor.trim() == '') {
        mensagem="O campo Valor não pode estar vazio!!";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmExemplo.inVal.focus();
        return false;
    }
    
    
    // NEGATIVOS
    if (quantidade < 0) {
        mensagem="A Quantidade não pode ser negativa!";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmExemplo.inQtd.focus();
        return false;
    }
    
    if (valor < 0) {
        mensagem="O Valor não pode ser negativo!";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmExemplo.inVal.focus();
        return false;
    }
    
    // 5 CARACTERES
    if (nome.length < 5) {
        mensagem="Nome completo, por favor.";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }
    
    if (tel.length < 5) {
        mensagem="Telefone completo, por favor.";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }
    
    if (email.length < 5) {
        mensagem="Email completo, por favor.";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }
    
    if (prod.length < 5) {
        mensagem="Digite o nome do produto completo, por favor.";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }
}

// Atividade 2 
function gerarImg() {
    let img = document.getElementById('canvas');
    img.innerHTML = '';

    let qtd = document.getElementById('inQtdImg').value;

    for (let i=0; i<qtd; i++) {
        console.log(i);
        img.innerHTML += '<img src="img/borb1.jpg" class="imagens"/>'
    }
}

// Atividade 3

function alterarBotao(){
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1);

    if (arquivo=='acesa.jpg' || arquivo=='')
        imagem.src = 'img/apagada.jpg';
    else
    imagem.src = 'img/acesa.jpg';
}

// Atividade 4
document.getElementById("btnEnviar").addEventListener("click", function () {

    var valorPedido = parseFloat(document.getElementById("inValorPedido").value);

    var desconto1 = 0.005;
    var desconto2 = 0.008;
    var desconto3 = 0.010;
    var desconto4 = 0.015;

    var percentualDesconto, valorDesconto;
    if (valorPedido >=2000) {
        percentualDesconto = desconto4;
    } else if (valorPedido >=1500) {
        percentualDesconto = desconto3;
    } else if (valorPedido >=1000) {
        percentualDesconto = desconto2;
    } else if (valorPedido >= 500) {
        percentualDesconto = desconto1;
    } else {
        percentualDesconto = 0;
    }
    valorDesconto = valorPedido * percentualDesconto;

    var valorFinal = valorPedido - valorDesconto;

    document.getElementById("inPercDesc").value = percentualDesconto *100;
    document.getElementById("inValDesc").value = valorDesconto.toFixed(2);
    document.getElementById("inValFinal").value = valorFinal.toFixed(2);

} )