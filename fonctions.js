
/*
	Cette fonction affiche une popup qui permet de configurer 
	une partie.
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

function ajouter_carte( obj )
{
	var x = (obj.valeur-1) * 98;
	var y = obj.couleur*1 * 143 + 143;

	$('<div class="carte cachee ' + (obj.valeur-1) +'-'+ obj.couleur + '"></div>')
		.css('background-position', 'bottom '+y+'px right '+x+'px')
		.appendTo('#game');
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