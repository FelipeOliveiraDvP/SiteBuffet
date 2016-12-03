//Script que valida o cadastro do usuario
function cadastro() {
	var user = cad.user.value,senha = cad.senha.value,nome = cad.nome.value,cpf = cad.cpf.value,tel=cad.tel.value;
	if (user == ""||senha==""||nome==""||cpf==""||tel=="") {
		alert('Preencha todos os campos Obrigatorios');
		document.getElementById('user').style.color='red';
		document.getElementById('senha').style.color='red';
		document.getElementById('nome').style.color='red';
		document.getElementById('cpf').style.color='red';
		document.getElementById('tel').style.color='red';
		return false;
	}else if (user != ""&&senha!=""&&nome!=""&&cpf!=""&&tel!="") {
		alert('Cadastro realizado com Sucesso!');
		window.location.href = 'cadastro.html';
		return false;
	}
}


//usuario: cliente@cliente senha: cliente = mostra o formulario para escolha dos itens do evento
//usuario: admin@admin senha: admin = abre a guia do administrador
function logar(){
	var usuario=acesso.user.value,pwsenha=acesso.senha.value;
	if (usuario=="cliente@cliente"&&pwsenha=="cliente") {
		document.getElementById('evento').style.display ='block';
		return false;
	}else if (usuario=="admin@admin"&&pwsenha=="admin") {
		window.open('admin.html');
		return false;
	}else{
		alert('Usuario e senha invalidos!');
		return false;
	}
}
//Confirmação de pedido
function confirma(){
	var nome=festa.nome_aniv.value,end=festa.end_festa.value,data=festa.data_festa.value,hora_in=festa.hr_inicio.value,hora_ter=festa.hr_termino.value;	
	if (nome == ""||end==""||data==""||hora_in==""||hora_ter=="") {
		alert('Preencha todos os campos Obrigatorios');
		document.getElementById('nome').style.color='red';
		document.getElementById('end').style.color='red';
		document.getElementById('data').style.color='red';
		document.getElementById('hora_in').style.color='red';
		document.getElementById('hora_ter').style.color='red';
		return false;
	}else if (nome != ""&&end!=""&&data!=""&&hora_in!=""&&hora_ter!="") {
		alert('Pedido realizado com Sucesso!');
		window.open('orcamento.html');
		return false;
	}
}
