---
layout: default
title: Osa 7
nav-title: Osa 7
---

## Oliot, piirtosilmukka ja päivityssilmukka

Nyt tutustumme funktioiden käyttämiseen pelien teossa.
Useimmissa peleissä on kaksi tärkeää funktiota: <b>piirtosilmukka</b> ja <b>päivityssilmukka</b>.
Nämä molemmat ovat ikuisia silmukoita:
piirtosilmukka piirtää ikuisesti uudestaan näytöllä näkyvät asiat ja
päivityssilmukka päivittää tietokoneen muistia.
Ne ovat hieman erilaisia, koska ne suoritetaan vähän eri aikoihin.

### Oliot

Ennen kuin voimme tutustua silmukoihin, tutustutaan siihen miten tietokoneen muisti toimii
(muuten emme osaisi päivittää muistia päivityssilmukassa).
JavaScriptissä muisti koostuu <b>olioista</b>.
Kaikki arvot ovat olioita: luvut, merkkijonot, jopa funktiot.
Yleensä sanalla olio kuitenkin viitataan <b>avain-arvopareja</b> sisältäviin olioihin.
Näitä käytetään esimerkiksi pelihahmojen kuvaamiseen.
Alla on esimerkki.

<script>codeExample(
`const hahmo = {
	X: 200,
	Y: 100,
	väri: "green",
} `,"javascript");</script>

Yllä luomme muuttujan <code>hahmo</code>, joka on nimi oliolle, jonka luomme. Itse oliota merkitään aaltosuluilla (<code>{</code> ja <code>}</code>). Sulkujen välissä on avain-arvopareja, joista jokaisessa on aluksi <b>avain</b> (X, Y, väri) ja sitten arvo (200, 100, "green"). On tärkeää muistaa kaksoispisteet ja pilkut oikeissa kohdissa.

Olio on siis tietopaketti, johon on tallennettu useita eri tietoja.
Voimme käyttää näitä tietoja <b>pisteoperaattorilla</b>, joka vastaa suomen kielen genetiiviä.
Esimerkiksi jos haluamme puhua hahmon väristä, sanomme <code>hahmo.väri</code>.

<div class="duckimg-center-container">
<img 
  src="{{ site.img-url }}/olio-koipi.webp" 
  class="duckimg-center"
/>
<!--
width="901" height="507"
-->
</div>

<div style="text-align: center"> 
<em>
<code>Ankka.koipi</code>, tuumasi ankka.
</em>
</div>


<div class="codebox example">
	<h3>Esimerkki 5.8</h3>
	<p>
	Hahmon värin näyttäminen käyttäjälle.
	</p>
	<script>
		addEditor(
`<script>
	const hahmo = {
		X: 20,
		Y: 10,
		väri: "green",
	}

	alert("Hahmon väri on: " + hahmo.väri)
${closeScript}`
		);
	</script>
</div>

Oliota voi muokata. Tällöin käytämme sekä pisteoperaattoria että yhtäsuuruusoperaattoria.
Alla on esimerkki, jossa asetamme hahmon väriksi punaisen.

<script>codeExample(
`hahmo.väri = "red"`,"javascript");</script>

<div class="duckimg-center-container">
<img 
  src="{{ site.img-url }}/olio-vari.webp" 
  class="duckimg-center"
/>
<!--
width="901" height="507"
-->
</div>


Huomaa, että oliota luotaessa avaimen ja arvon välissä on kaksoispiste.
Olemassa olevaa oliota muokatessa avaimen ja arvon välissä on yhtäsuuruusmerkki.

TODO: Tehtävä, jossa luodaan hahmo-olio ja piirretään se kankaalle. Toinen, jossa muokataan hahmo-oliota ja piirretään se kankaalle

### Piirtosilmukka

Piirtosilmukka on funktio, joka suoritetaan aina, kun selain haluaa piirtää näytöllä näkyvät asiat uudestaan.
Sitä käytetään pelissä hahmojen piirtämiseen näytölle.
Yleensä funktion sisällä tehdään ainakin kaksi asiaa:
tyhjennetään ruutu vanhoista asioista ja piirretään uudet asiat.

Alla on esimerkki silmukasta, jolla voimme piirtää hahmon näytölle neliönä.

<script>codeExample(
`function piirrä() {
	// Tyhjennetään ruutu
	piirtäjä.clearRect(0, 0, kangas.width, kangas.height)
	
	// Piirretään hahmo
	piirtäjä.fillStyle = hahmo.väri
	piirtäjä.fillRect(hahmo.X, hahmo.Y, 10, 10)
	
	// Pyydetään selainta piirtämään samat asiat kohta uudestaan
	requestAnimationFrame(piirrä)
}

// Pyydetään selainta piirtämään asiat ensimmäisen kerran
requestAnimationFrame(piirrä) `,"javascript");</script>

Pohjimmiltaan piirtosilmukka on nimetty funktio.
Käytämme <code>requestAnimationFrame</code>-komentoa kertoaksemme selaimelle,
että haluamme käyttää <code>piirrä</code>-funktiota piirtääksemme asioita näytölle.
Selain suorittaa funktion silloin, kun on sen mielestä sopiva hetki.
Komento on koodissa kahdesti.
Se suoritetaan ensimmäisen kerran viimeisellä rivillä heti funktion luomisen jälkeen.
(Itse funktion koodia ei suoriteta ennen kuin selain niin päättää.)
Lisäksi se suoritetaan aina funktion suorittamisen jälkeen.
Näin funktiota suoritetaan ikuisesti: aina suorittamisen jälkeen pyydämme selainta suorittamaan sen uudestaan.

### Päivityssilmukka

Päivityssilmukka on funktio, jossa päivitämme ohjelman muistissa olevia asioita, kuten hahmojen sijainteja ja pistemäärää.

Piirtosilmukka suoritetaan siis silloin, kun selain itse haluaa.
Selain päättää niin sanotun FPS:n (kuinka monta kertaa näyttö päivitetään sekunnissa) itse.
Päivityssilmukka taas suoritetaan yleensä tietyin väliajoin, jotta asiat tapahtuvat pelissä jatkuvasti yhtä nopeasti.
Käytämme tähän jo aiemmin mainittua <code>setInterval</code>-komentoa.

Alla on esimerkki päivityssilmukasta, joka siirtää hahmoa eteenpäin kasvattamalla X-koordinaattia.
Silmukka suoritetaan 0,1 sekunnin välein.

<script>codeExample(
`setInterval(() => {
	hahmo.X += 1
}, 100) `,"javascript");</script>

<p>
Esimerkit yhdistettynä:

<div class="codebox example">
	<h3>Esimerkki 5.9</h3>
	<p>
	Liikkuva hahmo.
	</p>
	<script>
		addEditor(
`<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const hahmo = {
		X: 20,
		Y: 10,
		väri: "green",
	}

	var piirtäjä = kangas.getContext("2d")

	function piirrä() {
		// Tyhjennetään ruutu
		piirtäjä.clearRect(0, 0, kangas.width, kangas.height)
		
		// Piirretään hahmo
		piirtäjä.fillStyle = hahmo.väri
		piirtäjä.fillRect(hahmo.X, hahmo.Y, 10, 10)
		
		// Pyydetään selainta piirtämään samat asiat kohta uudestaan
		requestAnimationFrame(piirrä)
	}

	// Pyydetään selainta piirtämään asiat ensimmäisen kerran
	requestAnimationFrame(piirrä)

	setInterval(() => {
		hahmo.X += 1
	}, 100)
${closeScript}`
		);
	</script>
</div>

TODO: Tehtävä: Laatikon liikuttaminen nuolinäppäimillä

TODO: Tehtävä/projekti: Kilpa-ajo, jossa yksi laatikko liikkuu kun nappia painetaan ja toinen liikkuu hitaasti itsestään. Kumpi pääsee toiseen reunaan ensin?

## Kysymyksiä

<div id="lisäfunktiokysymykset"></div>

<script>createQuestionnaire({
	id: "lisäfunktiokysymykset",
	questions: [
		{
			text: "Mitä päivityssilmukka tekee?",
			alternatives: [
				{ text: "Piirtää hahmot ruudulle (\"päivittää\" näytön)" },
				{ text: "Sitä kutsutaan aina, kun käyttäjä painaa nappia tai klikkaa hiirellä" },
				{ text: "Se päivittää tasaisin väliajoin olioiden tietoja muistissa", correct: true },
			]
		},
		{
			text: "Kuinka usein piirtosilmukka suoritetaan?",
			alternatives: [
				{ text: "Ohjelmoija päättää sen itse" },
				{ text: "Selain päättää sen", correct: true },
				{ text: "24 kertaa sekunnissa" },
			]
		},
		{
			text: "Miksi piirtosilmukassa on kaksi kertaa requestAnimationFrame?",
			alternatives: [
				{ text: "Jotta asiat piirrettäisiin kaksi kertaa nopeammin" },
				{ text: "Funktion ulkopuolella oleva suorittaa funktion ensimmäisen kerran, sisällä oleva sen jälkeen", correct: true },
				{ text: "Kaikki selaimet eivät tue vain yhtä, joten yhteensopivuuden vuoksi niitä on oltava kaksi" },
			]
		}
	]
})</script>
