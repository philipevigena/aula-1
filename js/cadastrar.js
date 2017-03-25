

//nessa linha eu mapiei o evento click do botão mapear
$("#btn-testar").click(testar);
$("#btn-incluir").click(incluir);
$("#btn-botaobox").click(botaobox);

$("#phone").mask("(00) 0000-0000");
$('#cep').mask('00000-000');
$("#cpf").mask("000.000.000-00");
$("#nascimento").mask("00/00/0000");

$( "#nascimento" ).datepicker({
 dateFormat: "dd/mm/yy"
});


function testar()
{ $( "#dialog" ).dialog();
    //criei a variavel nome e atribui o valor do elemento nome
// var nome=$("#nome").val();
//alert (nome);
}

function incluir()
{
    $("#nome").val("");
}

function botaobox()
{
 bootbox.alert("Eu sou o dougras");
}