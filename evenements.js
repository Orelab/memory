
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
	Quand on clique sur une carte...
	Un coup sur deux, on vérifie si les deux dernières cartes cliquées
	sont identiques. Si c'est le cas, on les fige en leur attribuant la 
	classe .figee. En cas contraire, on retourne les deux dernières cartes
	jouées. Pour réaliser tout ça, on tiens un registre de tous les coups 
	joués dans la variable 'cartes_jouees'.
*/
$('#game').delegate('.carte:not(.figee)', 'click', function(){

	$(this).toggleClass('cachee');

	cartes_jouees.push(this);

	if( cartes_jouees.length%2 != 0 ){
		return;
	}

	var last = cartes_jouees[cartes_jouees.length - 1];
	var prev = cartes_jouees[cartes_jouees.length - 2];

	if( $(last).data('id') == $(prev).data('id') )
	{
		// Si cartes identiques

		$(last).addClass('figee');
		$(prev).addClass('figee');

		tester_gagnant();
	}
	else
	{
		// Si cartes différentes

		setTimeout(function(){
			$(last).toggleClass('cachee');
			$(prev).toggleClass('cachee');
		}, 1000);
	}

});