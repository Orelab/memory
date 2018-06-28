
/*
	Au chargement de la page => afficher la popup de configuration
*/
$('#configuration').show();



/*
	Bouton "Jouer" => fermer la popup
*/
$('#jouer').on('click', function(){

	if( configurer() )
	{
		cartes = melanger_cartes( cartes );

		afficher_jeu();

		$('#configuration').hide();
	}
});



/*
	Quand on clique sur une carte
*/
$('#game').delegate('.carte', 'click', function(){

	if( $(this).hasClass('cachee') )
	{
		$(this).removeClass('cachee');
	}
	else
	{
		$(this).addClass('cachee');
	}
});