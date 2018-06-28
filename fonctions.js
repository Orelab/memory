
/*
	Cette fonction affiche une popup qui permet de configurer 
	une partie.
	 - return vrai ou false, selon que la config s'est bien déroulée
	 	(cela peut mal se passer si aucun nom de joueur n'est entré)
*/
function configurer()
{
	joueur = $('input[name="nom"]').val();
	ncartes = $('#ncartes').val();

	if( ! joueur )
	{
		alert("Dis-moi comment tu t'appelles ?");
		return false;
	}

	return true;
}



/*
	Cette fonction retourne le bon nombre de cartes en prenant
	soin que chaque carte soit présente en deux exemplaires.
	 - param jeu : une liste de cartes (voir variable cartes)
	 - return : une liste de cartes dont chaque carte est en double
	 		et dont le nombre de cartes correspond à ce qu'a demandé
	 		le joueur (4, 8, 32 ou 54)
*/
function melanger_cartes( jeu )
{
	jeu = shuffle(jeu).slice(0, ncartes/2);
	jeu = shuffle( jeu.concat(jeu) );

	return jeu;
}



/*
	Cette fonction va générer le code HTML correspondant au jeu 
	de cartes généré/mélangé.
*/
function afficher_jeu()
{
	var carte;

	for( var i=0 ; i<cartes.length ; i++ )
	{
		carte = cartes[i];

		ajouter_carte(carte);
	}
}



/*
	Cette fonction ajoute une carte, elle est appelée par afficher_jeu()
	 - param obj : un objet représentant une carte, tel que présenté 
			dans la variable 'cartes'.
*/
function ajouter_carte( obj )
{
	var x = (obj.valeur-1) * 98;
	var y = obj.couleur*1 * 143 + 143;

	$('<div class="carte cachee" data-id="' + (obj.valeur-1) +'-'+ obj.couleur + '"></div>')
		.css('background-position', 'bottom '+y+'px right '+x+'px')
		.appendTo('#game');
}



/*
	Cette fonction teste si toutes les cartes sont retournées.
	Si c'est le cas, on donne le nombre de coups, puis on réinitialise
	le jeu !
*/
function tester_gagnant()
{
	if( $('.carte:not(.figee)').length == 0 ){
		alert( joueur + ', tu as gagné en ' + (pending.length/2) + ' coups !' );

		setTimeout(function(){
			$('#game').empty();
			$('#configuration').show();
		}, 1000);
	}
}



/*
	Mélanger un tableau
	https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffle(array)
{
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}