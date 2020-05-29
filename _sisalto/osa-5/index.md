---
layout: default
title: Osa 5 - Funktiot
nav-title: Osa 5
---
<b>Funktio</b> eli aliohjelma ohjelmoijien käyttämä sana kasalle koodia, joka voidaan suorittaa tarvittaessa. Funktion koodia ei siis suoriteta heti, vaan vasta joskus myöhemmin. Olemme jo nähneet funktioita osassa 3, jossa loimme tapahtumakäsittelijöitä. Ne ovat eräs esimerkki funktiosta.

Funktioita käytetään JavaScriptissä monilla eri tavoilla ja ne voivat näyttää erilaisilta. Yleisesti ottaen funktiot voi jakaa kahteen luokkaan: <b>nuolifunktoihin</b>, jotka tunnistaa nuolesta <code>=&gt;</code>, ja <b>avainsanafunktioihin</b>, jotka tunnistaa avainsanasta <code>function</code>.

Alla on esimerkkejä erilaisista funktiosta, joihin tutustumme tässä luvussa.

<script>codeExample(
`// Tapahtumakäsittelijä:

teksti.onclick = () => {
    alert("Hei siellä!")
}

// Ajastin:

setTimeout(() => {
    alert("Yllätys!")
}, 5000)

// Toistettu funktio:

setInterval(() => {
    alert("Hei taas!")
}, 5000)

// Nimetty funktio:

function liikutaYlös() {
    hahmo.y -= 1
}

// Piirtofunktio:

function piirrä() {
    piirtäjä.clearRect(0, 0, 300, 150)    
    piirtäjä.fillRect(hahmo.x, hahmo.y, 10, 10)

    requestAnimationFrame(piirrä)
}
requestAnimationFrame(piirrä)
`,"javascript");</script>

<div class="codebox question">
	<h3>Kysymys 5.1</h3>
	<p>
		Mitkä yllä olevista funktioista ovat nuolifunktiota ja mitkä avainsanafunktioita?
	</p>
</div>

## Tapahtumäkäsittelijät – kertaus

Tutustuimme tapahtumakäsittelijöihin jo luvussa 3. Ne ovat funktioita, jotka suoritetaan kun jotain tiettyä tapahtuu. Esimerkiksi napin painaminen ja hiiren liikuttaminen ovat tapahtumia.

<div class="codebox example">
	<h3>Esimerkki 5.2</h3>
	<p>
	Tapahtumakäsittelijä näyttää ilmoituksen, kun tekstiä klikataan.
	</p>
	<script>
		addEditor(
`<!doctype HTML>
<p id = teksti>Klikkaa tästä!</p>
<script>
	teksti.onclick = e => {
		alert("Hei siellä!")
	}
${closeScript}`
		);
	</script>
</div>

TODO: listaa tässä eri tapahtumakäsittelijöitä

TODO: Tehtävä, jossa napin painaminen aiheuttaa jotain

<div class="codebox task">
	<h3>Tehtävä</h3>
	<p>Lisää painikkeelle kuuntelija. 
		Kun painiketta klikataan, niin tulosta <code>alert()</code>> komennolla "Klikkasit painiketta."</p>
	<script>
	addEditor(
`<!doctype HTML>
<button id = painike>
Missä ankat uivat?
</button>

<script>
${closeScript}`
	);</script>
</div>

<div class="codebox task">
	<h3>Tehtävä</h3>
	<p>Täydennä ohjelmaa niin, että kun käyttäjä painaa näppäintä "a", 
		niin tulostuu <code>alert()</code> komennolla "Ankka aivasti avaruudessa.".
	</p>
	<script>
	addEditor(
`<!doctype HTML>
<script>
	document.onkeydown = event => {
		if(event.key == "a"){

		}
}
${closeScript}`
	);</script>
</div>

<div class="codebox task">
	<h3>Tehtävä</h3>
	<p>
		Täydennä ohjelmaa niin, että kun käyttäjä klikkaa painiketta, niin neliön väri vaihtuu punaiseksi. 
		Neliön väri vaihtuu, kun piirrät sen päälle uuden neliön, joka on erivärinen.
	</p>
	<script>
	addEditor(
`<!doctype HTML>
<canvas id=kangas></canvas>
<br>
<button>
	Vaihda väriä.	
</button>

<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
	
${closeScript}`
	);</script>
</div>

## Ajastimet

Seuraava funktiotyyppi johon tutustumme on <b>ajastetut funktiot</b>. Ajastettu funktio suoritetaan, kun tietty määrä aikaa on kulunut. JavaScriptissä ajastetun funktion luomiseen käytetään <code>setTimeout</code>-komentoa.

<code>setTimeout</code>-komento näyttää seuraavanlaiselta:

<script>codeExample(
`setTimeout(() => {
    
}, 5000)
`,"javascript");</script>

Aika, jonka kuluttua funktio suoritetaan, on aivan komennon lopussa. Aika ilmoitetaan <b>millisekunteina</b> eli sekunnin tuhannesosina. 1 000 millisekuntia on yksi sekunti, 5 000 on viisi sekuntia ja niin edelleen. Yksi minuutti on 60 000 millisekuntia.

<div class="codebox example">
	<h3>Esimerkki 5.3</h3>
	<p>
	Ajastettu funktio, joka suoritetaan 5 sekunnin kuluttua.
	</p>
<script>
		addEditor(
`<!doctype HTML>
<script>
	setTimeout(() => {
		alert("Yllätys!")
	}, 5000)
${closeScript}`);
</script>
</div>

<div class="codebox task">
	<h3>Tehtävä</h3>
	<p>Tee ohjelma, joka vaihtaa neliön väriä kahden sekunnin kuluttua keltaiseksi. 
		Muista, että neliön väri vaihtuu, kun sen päälle piirretään uusi eri värinen neliö.
	</p>
	<script>
	addEditor(
`<!doctype HTML>
<canvas id=kangas>
<canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}`
	);</script>
</div>

Ajastetun funktion voi laittaa tapahtumakäsittelijän sisälle, jolloin se suoritetaan tietyn ajan kuluttua tapahtumasta:

<div class="codebox example">
	<h3>Esimerkki 5.4</h3>
	<p>
	Ajastettu funktio tapahtumakäsittelijän sisällä. Mitä tapahtuu, jos klikkaat tekstiä uudestaan ennen viestin ilmestymistä?
	</p>
	<script>
		addEditor(
`<!doctype HTML>
<p id = teksti>Klikkaa tästä!</p>
<script>
	teksti.onclick = e => {
		setTimeout(() => {
			alert("Hei taas!")
		}, 5000)
	}
${closeScript}`
		);
	</script>
</div>

TODO: Tehtävä, jossa tekstiä voi klikata vasta tietyn ajan jälkeen

TODO: Tehtävä, jossa on kaksi sisäkkäistä setTimeoutia

## Toistetut funktiot

<b>Toistettu funktio</b> muistuttaa muuten ajastettua funktiota, mutta suoritetaan yhden kerran sijasta loputtomasti tietyllä tahdilla.
Esimerkiksi 1 000 ms:n välein toistettava funktio suoritetaan aina sekunnin välein:

<script>codeExample(
`setInterval(() => {
	
}, 1000)
`,"javascript");</script>

<div class="codebox example">
	<h3>Esimerkki 5.5</h3>
	<p>
	Toistettu funktio, joka lisää rivejä tekstiin. Käytämme komentoa <code>.textContent +=</code>, joka lisää loppuun uutta tekstiä.
	</p>
	<script>
		addEditor(
`<!doctype HTML>
<p id = teksti>Ensimmäinen lause on tässä.</p>
<script>
	setInterval(() => {
		teksti.textContent += " Tässä on uusi lause!"
	}, 2000)
${closeScript}`
		);
	</script>
</div>

Toistetut funktiot ovat hyvin tärkeitä peleissä, joissa usein halutaan, että asioita tapahtuu uudestaan ja uudestaan tietyin väliajoin.
Tämän luvun lopussa käsittelemme <i>päivityssilmukoita</i>, jotka ovat tällaisia pelissä käytettäviä toistettuja funktioita.

## Nimetyt funktiot

Olemme nyt käsitelleet funktioita, jotka suoritetaan automaattisesti joko silloin, kun jotain tapahtuu, tai tietyn ajan päästä. Monesti on kuitenkin hyödyllistä tehdä funktio, joka pitää suorittaa manuaalisesti komennolla. Koska tällaisilla funktioilla pitää olla nimi, kutsumme näitä funktioita <b>nimetyiksi funktioiksi</b>. Alla on esimerkki nimetystä funktiosta.

<div class="codebox example">
	<h3>Esimerkki 5.6</h3>
	<p>
	Nimetty funktio, joka suoritetaan heti, 5 s kuluttua ja kun tekstiä painetaan.
	</p>
	<script>
		addEditor(
`<!doctype HTML>
<p id = teksti>Klikkaa tästä!</p>
<script>
	function yllätys() {
		alert("Yllätys!")
	}

	yllätys()

	setTimeout(() => {
		yllätys()
	}, 5000)

	teksti.onclick = () => {
		yllätys()
	}
${closeScript}`
		);
	</script>
</div>

Nimetty funktio suoritetaan kirjoittamalla funktion nimi ja sulut. Toisin kuin muuntyyppisiä funktioita, sitä ei suoritetaan missään automaattisesti.

Tärkein syy miksi nimettyjä funktioita käytetään on koodin kopioimisen välttäminen. Jos haluamme tehdä saman asian useassa eri kohdassa, on kätevää, että asian koodi on funktion sisällä, ja eri kohdissa mainitaan vain funktion nimi.

TODO: Tehtävä, mikä?

### Parametrit

Nimetylle funktiolle voi antaa <b>parametreja</b>. Parametrit ovat muuttujia, joiden avulla funktiolle voi kertoa asioita. Alla on esimerkki, jossa parametrin avulla voimme näyttää ylimääräisen viestin käyttäjälle.

<div class="codebox example">
	<h3>Esimerkki 5.7</h3>
	<p>
	Nimetty funktio, joka suoritetaan heti, 5 s kuluttua ja kun tekstiä painetaan.
	</p>
	<script>
		addEditor(
`<!doctype HTML>
<p id = teksti>Klikkaa tästä!</p>
<script>
	function yllätys(viesti) {
		alert("Yllätys " + viesti + "!")
	}

	yllätys("ekan kerran")

	setTimeout(() => {
		yllätys("taas")
	}, 5000)

	teksti.onclick = () => {
		yllätys("klikatessa")
	}
${closeScript}`
		);
	</script>
</div>

TODO: Tehtävä, mikä?

### Paluuarvo

TODO

## Kysymyksiä

<div id="funktiokysymykset"></div>

<script>createQuestionnaire({
	id: "funktiokysymykset",
	questions: [
		{
			text: "Kuinka monta kertaa setTimeout-funktio suoritetaan?",
			alternatives: [
				{ text: "0 kertaa" },
				{ text: "1 kerran", correct: true },
				{ text: "Äärettömän monta kertaa" },
			]
		},
		{
			text: "Kuinka monta kertaa setInterval-funktio suoritetaan?",
			alternatives: [
				{ text: "0 kertaa" },
				{ text: "1 kerran" },
				{ text: "Äärettömän monta kertaa", correct: true },
			]
		},
		{
			text: "Kuinka monta kertaa onclick-funktio suoritetaan?",
			alternatives: [
				{ text: "Vain kerran, kun klikataan ensimmäisen kerran" },
				{ text: "Kerran per jokainen klikkaus", correct: true },
				{ text: "Sitä suoritetaan ikuisesti, kun hiiren nappi on pohjassa" },
			]
		}
	]
})</script>

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

<div class="codebox example">
	<h3>Esimerkki 5.8</h3>
	<p>
	Hahmon värin näyttäminen käyttäjälle.
	</p>
	<script>
		addEditor(
`<!doctype HTML>
<script>
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
`<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const hahmo = {
		X: 20,
		Y: 10,
		väri: "green",
	}

	const piirtäjä = kangas.getContext("2d")

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