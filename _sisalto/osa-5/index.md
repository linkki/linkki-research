---
layout: default
title: Osa 5 - Funktiot
nav-title: Osa 5
---

<div class="duckimg-center-container">
<img 
  src="{{ site.img-url }}/kakku.webp" 
  class="duckimg-center"
/>
</div>
<div class="duckimg-caption">
Ankka halusi leipoa kakun. Ankan pieni pää ei kuitenkaan muistanut miten se tehdään. Onneksi joku oli kirjoittanut siitä ohjeet ylös! Ankka haki tuon ohjeen joka kerta, kun se halusi tehdä kakun.
</div>


**Funktio** eli aliohjelma on koodin osa, joka voidaan suorittaa tarvittaessa. Funktion koodia ei siis suoriteta heti. Olemme jo nähneet funktioita osassa 3, jossa tutustuttiin tapahtumakäsittelijöihin. Ne nimittäin ovat funktioita.

Funktioita käytetään javascriptissä monilla eri tavoilla ja ne voivat näyttää erilaisilta. Yleisesti ottaen funktiot voidaan jakaa kahteen luokkaan: **nuolifunktoihin**, jotka tunnistaa nuolesta `=>`, ja **avainsanafunktioihin**, jotka tunnistaa avainsanasta `function`.

Alla on esimerkkejä funktiosta, joihin tutustutaan tässä luvussa.

```javascript
// Tapahtumakäsittelijä:

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
```

<div id="funktiokysymykset-alku"></div>

<script>createQuestionnaire({
	id: "funktiokysymykset-alku",
	questions: [
		{
			text: "Onko tapahtumakäsittelijä teksti.onclick nuolifunktio vai avainsanafunktio?",
			alternatives: [
				{ text: "nuolifunktio", correct: true },
				{ text: "avainsanafunktio" },
			]
		},
		{
			text: "Onko ajastin nuolifunktio vai avainsanafunktio?",
			alternatives: [
				{ text: "nuolifunktio", correct: true },
				{ text: "avainsanafunktio" },
			]
		},
		{
			text: "Onko toistettu funktio nuolifunktio vai avainsanafunktio?",
			alternatives: [
				{ text: "nuolifunktio", correct: true },
				{ text: "avainsanafunktio" },
			]
		},
		{
			text: "Onko nimetty funktio liikutaYlös nuolifunktio vai avainsanafunktio?",
			alternatives: [
				{ text: "nuolifunktio" },
				{ text: "avainsanafunktio", correct: true },
			]
		},
		{
			text: "Onko piirtofunktio piirrä nuolifunktio vai avainsanafunktio?",
			alternatives: [
				{ text: "nuolifunktio" },
				{ text: "avainsanafunktio", correct: true },
			]
		}
	]
})</script>

## Tapahtumäkäsittelijät – kertaus

Tapahtumankäsittelijöihin tutustuttiin jo kolmannessa luvussa. Ne ovat funktioita, jotka suoritetaan kun ennalta määritetty tapahtuma tapahtuu. Esimerkiksi napin painaminen ja hiiren liikuttaminen ovat tapahtumia.

{% include example.html
esimerkki-selitys='Tapahtumakäsittelijä näyttää ilmoituksen, kun tekstiä klikataan.'
esimerkki-koodi='<p id = teksti>Klikkaa tästä!</p>
<script>
	teksti.onclick = e => {
		alert("Hei siellä!")
	}
${closeScript}'
%}

<!--TODO: listaa tässä eri tapahtumakäsittelijöitä-->

<!--TODO: Tehtävä, jossa napin painaminen aiheuttaa jotain-->

{% include task.html
tehtava-ohje='Lisää painikkeelle kuuntelija. Kun painiketta klikataan, niin tulosta <code>alert()</code>> komennolla "Klikkasit painiketta."'
tehtava-koodi='<button id = painike>
Missä ankat uivat?
</button>

<script>
${closeScript}'
%}

{% include task.html
tehtava-ohje='Täydennä ohjelmaa niin, että kun käyttäjä painaa näppäintä "a", niin tulostuu <code>alert()</code> komennolla "Ankka aivasti avaruudessa."'

tehtava-koodi='<script>
	document.onkeydown = event => {
		if(event.key == "a"){

		}
	}
${closeScript}'
%}

{% include task.html
tehtava-ohje='Täydennä ohjelmaa niin, että kun käyttäjä klikkaa painiketta, niin neliön väri vaihtuu punaiseksi. Neliön väri vaihtuu, kun piirrät sen päälle uuden neliön, joka on erivärinen.'
tehtava-koodi='<canvas id=kangas></canvas>
<br>
<button>
	Vaihda väriä.	
</button>

<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
	
${closeScript}'
%}

## Ajastimet

<div class="duckimg-center-container">
<img 
  src="{{ site.img-url }}/ajastin.webp" 
  class="duckimg-center"
/>
</div>

{% include example.html
esimerkki-selitys='Ajastettu funktio, joka suoritetaan 3 sekunnin kuluttua.'
esimerkki-koodi='<script>
	setTimeout(() => {
		alert("Yllätys!")
	}, 3000)
${closeScript}'
%}

Ajastettu funktio suoritetaan, kun ohjelman käynnistämisestä on kulunut määritellyn verran aikaa. Esimerkiksi jos ohjelman halutaan tulostavan viiden sekunnin kuluttua suorituksen aloittamisesta `alert("Yllätys!")`, niin ajastettu funktio eli `setTimeout` funktio näyttää seuraavalta

```javascript
setTimeout(() => {
    alert("Yllätys!")
}, 5000)
```

Ajastettu funktio saattaa näyttää hieman hämmentävältä. Siinä on kuitenkin havaittavissa nuoli `=>`, kuten tapahtumankäsittelijässä. Tutkitaan miten funktio kirjoitetaan. Aluksi aloitetaan funktion nimellä, joka on `setTimeout`. Lisätään nimen perään sulut, jolloin saamme funktion näyttämään seuraavalta

```javascript
setTimeout()
```

Tämä näyttää tavalliselta komennolta. Kirjoitetaan **sulkujen sisälle** nuolifunkito `() => { }`. 

```javascript
setTimeout(() => { })
```

Kirjoitusasu on hieman epäselvä, joten lisätään _aaltosulkeiden `{ }`_ sisälle tyhjärivi. Tyhjän rivin saa painamalla kaksi kertaa `Enter`-näppäintä aaltosulkeiden sisällä.

<!-- Todo: Kuva Enter näppäimestä? -->

```javascript
setTimeout(() => { 

})
```

_Aaltosulkeiden_ sisälle kirjoitetaan myös komento tai komennot, jotka halutaan suorittaa, kun ajastimen aika on kulunut. Kirjoitetaan aaltosulkeiden sisään komento `alert("Yllätys!")`, jolloin ohjelma tulostaa "Yllätys!".

```javascript
setTimeout(() => { 
  alert("Yllätys!")
})
```

`setTimeout`-funktiolle ei ole vielä määritelty aikaa, jonka jälkeen `alert()`-komento tapahtuu. Lisätään **viimeisen** aaltosulkeen jälkeen pilkku _ja_ aika. Aika määritetään millisekuntteina. Tämä tarkoittaa, että esimerkin `5000` tarkoittaa viittä tuhatta millisekunttia, joka on yhtäsuurta kuin viisi sekunttia. 

```javascript
setTimeout(() => { 
  alert("Yllätys!")
}, 5000)
```

Tämä funktio siis tulostaa viiden sekunin kuluttua ohjelman käynnistymisestä näytölle tekstin `Yllätys!`.

{% include task.html
tehtava-ohje='Tee ajastettu funktio, joka tulostaa 2 sekunnin kuluttua näytölle <code>prompt()</code> kysymyksen "Yllätyitkö?" Talleta vastaus muuttujaan, jonka nimi on "vastaus". Tulosta <code>prompt()</code> komennon jälkeen <code>alert()</code> komennolla käyttäjän vastaus.'
tehtava-koodi='<script>

${closeScript}'
%}

{% include task.html 
tehtava-ohje='Tee ohjelma, joka vaihtaa neliön väriä kahden sekunnin kuluttua keltaiseksi. Muista, että neliön väri vaihtuu, kun sen päälle piirretään uusi eri värinen neliö.'
tehtava-koodi='<canvas id=kangas>
</canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}'
%}

Ajastetun funktion voi laittaa tapahtumakäsittelijän sisälle, jolloin se suoritetaan tietyn ajan kuluttua tapahtumasta:

{% include example.html
esimerkki-selitys='Ajastettu funktio tapahtumakäsittelijän sisällä. Mitä tapahtuu, jos klikkaat tekstiä uudestaan ennen viestin ilmestymistä?'
esimerkki-koodi='<p id = teksti>Klikkaa tästä!</p>
<script>
	teksti.onclick = e => {
		setTimeout(() => {
			alert("Hei taas!")
		}, 2500)
	}
${closeScript}'
%}
<!--TODO: Tehtävä, jossa tekstiä voi klikata vasta tietyn ajan jälkeen-->

<!--TODO: Tehtävä, jossa on kaksi sisäkkäistä setTimeoutia-->

## 5.3 Toistetut funktiot

{% include example.html
esimerkki-selitys='Toistettu funktio, joka lisää rivejä tekstiin. Komento <code>.textContent +=</code> lisää loppuun uutta tekstiä.'
esimerkki-koodi='<p id = teksti>Ensimmäinen lause on tässä.</p>
<script>
	setInterval(() => {
		teksti.textContent += " Tässä on uusi lause!"
	}, 2000)
${closeScript}'
%}

**Toistettu funktio** suoritetaan loputtomasti tietyllä tahdilla. Toistetun funktion kutsuminen näyttää aivan ajastetun funktion kutsulta, mutta siinä käytetään `setInterval`-komentoa.

```javascript
setInterval(() => {
	
}, 1000)
```

Toistetussa funktiossa suoritettva koodi menee tuttuun tapaan _aaltosulkeiden_ sisälle ja viimeisen aaltosulkeen jälkeen on pilkku, jonka jälkeen määritetään, kuinka usein funktio toistetaan. Esimerkiksi `1000 ms = 1 s`, joten esimerkissä olevaa funktiota toistetaan yhden sekunnin välein.

{% include task.html
tehtava-ohje='Tee ohjelma, joka lisää sivulle 3,5 sekunnin välein tekstin "Pöö!". Käytä <code>setInterval</code> funktiota.'
tehtava-koodi='<p id = teksti>Loppumaton yllätys!</p>
<script>

${closeScript}'
%}

{%include extra.html
otsikko='Miten toistetun funktion saa loppumaan?'
vinkki='Toistetun funktion saa loppumaan käyttämällä komentoa <code>clearInterval</code>. Komennolle pitää antaa <b>parametrina</b> toistettu funktio. Tämä tarkoittaa sitä, että toistettu funktio pitää nimetä jotenkin. Talletetaan siis toistettu funktio muuttujaan.

<div class="codebox example">
	<script>
		addEditor(
`<p id = teksti>Ensimmäinen lause on tässä.</p>
<script>
	toisto = setInterval(() => {
		teksti.textContent += " Tässä on uusi lause!"
	}, 2000)
${closeScript}`
		);
	</script>
</div>

Lisätään <code>clearInterval</code> komento siten, että painiketta klikatessa tekstin lisääminen loppuu.
<div class="codebox example">
	<script>
		addEditor(
`<button id=painike>Pysäytä</button>
<p id = teksti>Ensimmäinen lause on tässä.</p>
<script>
	toisto = setInterval(() => {
		teksti.textContent += " Tässä on uusi lause!"
	}, 2000)

	painike.onclick = () => {
		clearInterval(toisto)
	}
${closeScript}`
		);
	</script>
</div>

'
%}

## 5.4 Nimetyt funktiot

{% include example.html 
esimerkki-selitys='Nimetty funktio, joka suoritetaan heti, 5 s kuluttua ja kun tekstiä painetaan.'
esimerkki-koodi='<p id = teksti>Klikkaa tästä!</p>
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
${closeScript}'
%}

Ajastimet, toistetut funktiot ja tapahtumankäsittelijät suoritetaan automaattisesti silloin, kun jotain tapahtuu, tai tietyn ajan päästä. _Nimetty funktio_ eroaa näistä funktioista siten, että koodissa pitää **kutsua** funktiota, jotta se suoritetaan. Jotta voisimme **kutsua** funktiota, täytyy sille antaa nimi, jolla funktiota kutsutaan. Siksi kutsumme tämän tyyppisiä funktioita _nimetyiksi_ funkitoiksi. Nimetyn funktion rakenne on seuraava

```javascript
function funktionNimi() {
    
}
```

Ensin kirjoitetaan avainsana `function`, josta tunnistetaan, että kysessä on funktio. Tämän jälkeen kirjoitetaan funktion nimi. Esimerkissä funktion nimi on `funktionNimi`, mutta se voi olla mitä ohjelmoija päättää keksiä. Funktion nimen jälkeen kijroitetaan sulut, jonka jälkeen kirjoitetaan aaltosulut. Aaltosulkeiden sisään tulee koodi, joka suoritetaan funktiota kutsuttaessa. Nimetyt funktiot ovat kuten muuttujia, mutta niillä voidaan tehdä paljon enemmän asioita

{% include tip.html
vinkki='Funktioita käytetään, jotta koodia ei tarvitsisi kirjoittaa joka kerta uudeestaa. Niiden avulla voimme uusio käyttää tiettyä toiminnallisuutta useita kertoja.'
%}


{% include example.html
esimerkki-selitys='Jokaisen painikkeen painaminen kutsuu samaa funktiota, jonka nimi on "<code>tervehdi()</code>.'
esimerkki-koodi='<button id=painike1>Eka</button>
<button id=painike2>Toka</button>
<button id=painike3>Kolmas</button>
<button id=painike4>Neljäs</button>
<button id=painike5>Viides</button>
<script>
	function tervehdi(){
		alert("Moi! Klikkasit painiketta.")
		vastaus = prompt("Mitä painiketta klikkasit?")
		alert("Klikkasit painiketta "+ vastaus+". Se on suosikkini!")
	}
	painike1.onclick = () => {
		tervehdi()
	}
	painike2.onclick = () => {
		tervehdi()
	}
	painike3.onclick = () => {
		tervehdi()
	}
	painike4.onclick = () => {
		tervehdi()
	}
	painike5.onclick = () => {
		tervehdi()
	}
${closeScript}'
%}

<!-- TODO: tehtävä-->

<!--- Vois siirtää 7. osioon, koska sieltä voi saada paremmin konkreettisia esimerkkejä tähän. Parametreistä on myös vähän jo kappaleessa 1-->
<!--
### Parametrit

Nimetylle funktiolle voi antaa <b>parametreja</b>. Parametrit ovat muuttujia, joiden avulla funktiolle voi kertoa asioita. Alla on esimerkki, jossa parametrin avulla voimme näyttää ylimääräisen viestin käyttäjälle.

<div class="codebox example">
	<h3>Esimerkki 5.7</h3>
	<p>
	Nimetty funktio, joka suoritetaan heti, 5 s kuluttua ja kun tekstiä painetaan.
	</p>
	<script>
		addEditor(
`<p id = teksti>Klikkaa tästä!</p>
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
-->
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

