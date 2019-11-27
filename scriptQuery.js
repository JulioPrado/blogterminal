
$(document).ready(function(){
	//mostra a div de conteudo e o botão fechar artigo
		$('.artigo').click(function(e){
			e.preventDefault()

			$('a.fechar-artigo')
				.fadeIn()
				.css("display","block") //para ficar centralizado com o margin
			$('#conteudo')
				.load($(this).attr("href"))
				.fadeIn()
				 //carrega o html externo dentro da div

		});

	//esconde o container de conteudo, o botao de fechar artigo.
		$('.fechar-artigo').click(function(){
			$('a.fechar-artigo')
				.fadeOut('fast') 
			$('#conteudo')
				.fadeOut('fast')
		});	
});
