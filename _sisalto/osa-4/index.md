---
layout: default
title: Osa 4 – Maalia kankaalle
nav-title: Osa 4
---

Tässä osassa tutustutaan **kankaisiin** ja niille piirtämiseen. Kankaat ovat HTML-elementtejä, joihin voi piirtää JavaScript-komennoilla kuvioita.

{% include example.html 
esimerkki-selitys='Kangas, jolle on piirretty neliö.'
esimerkki-koodi='<canvas
	id = kangas>
</canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}'
%}

Kangas määritellään canvas-elementtinä ja sille tulee asettaa _id-tunniste_, jotta siihen voidaan viitata javascript koodissa. Kankaan taustaväri on automaattisesti asetettu valkoiseksi. Valkoinen kangas ei kuitenkaan erotu sivun pohjasta, joka on valkoinen. Jos kangas halutaan saada näkyviin sivulla, annetaan sille taustaväri. Taustaväri voi olla mikä tahansa väri. Esimerkiksi beigen taustavärin saa määrittämällä id-tunnisteen lisäksi `style`-arvon.

{% include example.html 
esimerkki-selitys='Beige kangas, jolle on piirretty neliö.'
esimerkki-koodi='<canvas
	id = kangas
	style = background:beige;>
</canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}'
%}

Kangasta muokataan javascript koodilla. Kangas on ikään kuin paperi, jolle voidaan piirtää ohjelmalla. Luodaan muuttuja `var piirtäjä`, jonka arvoksi asetetaan kankaan sisältö `var piirtäjä = kangas.getContext("2d") `. Tätä muuttujaa käytettään kankaalle piirtämiseen, siksi se nimi on `piirtäjä`. 

Kankaalle piirretään suorakulmion käyttämällä komentoa `piirtäjä.fillRect`, jolle annetaan neljä **parametria**. Ensimmäiset kaksi ovat suorakulmion sijainti kankaalla eli koordinaatit. Viimeiset kaksi ovat suorakulmion korkeus ja leveys.  

<!-- TODO 
Kuva parametreista.
-->
<div class="duckimg-center-container">
<img
  src="{{ site.img-url }}/kaavakuva-fill.webp"
  class="duckimg-center"
/>
</div>


{% include task.html
tehtava-ohje='Lisää ohjelmaan koodi, jossa piirretään kankaalle neliö, jonka parametrit ovat (0,0,30,30).'
tehtava-koodi='<canvas id=kangas>
	</canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
${closeScript}'
%}

## 4.1 Koordinaatisto

Kun kankaalle piirretään, käytetään siihen kankaan _koordinaatteja_. Tutustutaan, miten kankaan koordinaatit toimivat.

Tietokoneen näyttö koostuu koneesta riippuen sadoista tuhansista tai jopa miljoonista **pikseleistä**. Yksi pikseli on hyvin pieni piste, jolla on jokin väri. Näytöllä pikselit on järjestetty riveihin, joita on satoja päällekkäin. Laittamalla tietyn värisiä pikseleitä sopivasti vierekkäin tietokoneen näytölle, voidaan muodostaa kuvia ja tekstiä, jota ihminen pystyy ymmärtämään. Pikselin sijainnin perusteella sen väriä voidaan muuttaa tietokone ohjelmalla. Pikselin sijaintia tietokoneen näytöllä kutsutaan pikselin **koordinaateiksi**. Tarkemmin pikselin **X-koordinaatti** kertoo, kuinka mones pikseli pikseli on omalla rivillään. **Y-koordinaatti** taas kertoo, kuinka mones pikselirivi on kyseessä.

TODO: Havainne kuva.

Ohjelmoinnissa asioiden laskeminen aloitetaan nollasta eikä yhdestä. Myös pikselirivin ensimmäistä pikseliä sanotaan "pikseliksi 0" ja ensimmäistä pikseliriviä "riviksi 0". Aivan ensimmäisen pikselin (joka on näytön vasemmassa ylänurkassa) X-koordinaatti on siis 0 ja Y-koordinaatti 0. Tätä pikseliä sanotaan näytön **origoksi**.


{% include note.html 
otsikko='Huom!'
teksti='Koulussa matematiikassa koordinaatiston Y-koordinaatit kasvavat <em>ylöspäin</em>, eli suurempi Y tarkoittaa korkeammalla olevaa pistettä.
	Ohjelmoinnissa Y kuitenkin kasvaa <em>alaspäin</em>, eli suurempi Y tarkoittaa, että piste on alempana. Tämä johtuu historiallisista syistä.'
%}
 
<div class="duckimg-center-container">
<img 
  src="{{ site.img-url }}/directions.webp"
  class="duckimg-center"
/>
</div>


{% include koordinaattityokalu.html %}

## 4.2 `fillStyle`-komento

{% include example.html
esimerkki-teksti='Kangas, jolle on piirretty punainen neliö.'
esimerkki-koodi='<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.fillStyle = "red"
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}'
%}

`piirtäjä`n väriä vaihdetaan käyttämällä `piirtäjä.fillStyle` komentoa ennen kuin kuvio piirretään kankaalle. Haluttu väri annetaan komennolle parametrina. Alla olevasta listasta näet joitakin värejä ja niiden nimiä JavaScriptissä.
<table>
  <tr>
    <th>Väri</th>
    <th>Englanniksi</th>
	<th>Suomksi</th>
  </tr>
  <tr>
    <td style="background: white; width: 3em"></td>
    <td>white</td>
    <td>valkoinen</td>
  </tr>
  <tr>
    <td style="background-color: beige;"></td>
	<td>beige</td>
	<td>beige</td>
  </tr>
  <tr>
    <td style="background-color: gray;"></td>
	<td>gray</td>
	<td>harmaa</td>
  </tr>
  <tr>
		<td style="background-color: black;"></td>
		<td>black</td>
		<td>musta</td>
	</tr>
	<tr>
		<td style="background-color: cyan;"></td>
		<td>cyan</td>
		<td>syaani</td>
	</tr>
	<tr>
		<td style="background-color: blue;"></td>
		<td>blue</td>
		<td>sininen</td>
		</tr>
	<tr>
		<td style="background-color: violet;"></td>
		<td>violet</td>
		<td>violetti</td>
		</tr>
	<tr>
		<td style="background-color: red;"></td>
		<td>red</td>
		<td>punainen</td>
		</tr>
	<tr>
		<td style="background-color: brown;"></td>
		<td>brown</td>
		<td>ruskea</td>
		</tr>
	<tr>
		<td style="background-color: orange;"></td>
		<td>orange</td>
		<td>oranssi</td>
		</tr>
	<tr>
		<td style="background-color: yellow;"></td>
		<td>yellow</td>
		<td>keltainen</td>
	</tr>
	<tr>
		<td style="background-color: green;"></td>
		<td>green</td>
		<td>vihreä</td>
	</tr>
</table>

Useimpien värien eteen voi lisätä sanan "dark" tarkoittamaan tummaa ja "light" tarkoittamaan vaaleaa. Esimerkiksi "lightgreen" on vaaleanvihreä ja "darkblue" tummansininen.

{% include task.html
tehtava-ohje='Muuta <code>fillRect</code>-komennon koordinaatteja siten, että neliö on kankaan oikean reunan keskellä. Voit käyttää yllä olevaa <i>Koordinaatit kankaalla</i> -työkalua sopivien koordinaattien löytämiseksi.'
tehtava-koodi='<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}'
%}

{% include task.html
tehtava-ohje='Piirrä kankaan alareunaan sininen neliö.'
tehtava-koodi='<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
${closeScript}'
%}

<!-- TODO: tehtävä, jossa on neliöitä, joiden värejä pitä vaihtaa-->

### Useita neliöitä

Kankaalle piirretään useita neliöitä kirjoittamalla monta `fillRect`-komentoa.

{% include example.html
esimerkki-selitys='Kangas, jolle on piirretty kaksi punaista ja kaksi sinistä neliötä.'
esimerkki-koodi='<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.fillStyle = "red"
	piirtäjä.fillRect(10, 10, 50, 50)
	piirtäjä.fillRect(80, 10, 50, 50)
	piirtäjä.fillStyle = "blue"
	piirtäjä.fillRect(10, 80, 50, 50)
	piirtäjä.fillRect(80, 80, 50, 50)
${closeScript}'
%}

<!-- TODO: tehtävä, jossa piirretään useita neliöitä vierekkäin-->
<!-- TODO: tehtävä, jossa piirretään neliöitä lomikkai päällekkäin-->
<!--- TODO: tehtävä, jossa neliöitä piirtämällä tulee joku kuva esim hymiö sydän, labyrintti.-->

## 4.3 Polut

<div class="duckimg-center-container">
<img 
  src="{{ site.img-url }}/piirtaja.webp" 
  class="duckimg-center"
/>
</div>

Kankaalle monimutkaisemmat kuviot piirretään **polkujen** avulla. Polun piirtäminen muistuttaa kynällä piirtämistä. Komennoilla kerrotaan piirtäjälle, miten kynää liikutetaan kankaalla. Tärkeimmät komennot on alla olevassa taulukossa.

| Komento | Esimerkki | Selitys |
| :----- |:----------| :----- |
|`.strokeStyle` | `piirtäjä.strokeStyle = "red" `|Kertoo minkä värisellä kynällä polku piirretään|
|`.beginPath()` | `piirtäjä.beginPath()`|Kertoo piirtäjälle, että aloitamme polun piirtämisen |
|`.moveTo(x, y)`|`piirtäjä.moveTo(10, 10)`|Käskee piirtäjää siirtämään kynän annettuihin koordinaatteihin _koskettamatta paperia_|
|`.lineTo(x, y)`|`piirtäjä.lineTo(50, 50)`|Käskee piirtäjää vetämään kynän annettuihin koordinaatteihin niin, että _kynä koskettaa paperia_|
|`.stroke()`|`piirtäjä.stroke()` |Kertoo piirtäjälle, että lopetamme polun piirtämisen|

{% include example.html
esimerkki-selitys='Kangas, jolle on piirretty raksi.'
esimerkki-koodi='<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	piirtäjä.moveTo(10, 10)
	piirtäjä.lineTo(50, 50)
	
	piirtäjä.moveTo(10, 50)
	piirtäjä.lineTo(50, 10)
	
	piirtäjä.stroke()
${closeScript}'
%}

Tarkastellaan seuraavaksi, miten kankaalle piirretään raksi. Ensin pitää aloittaa polun piirtäminen käyttämällä komentoa `piirtäjä.begin.Path()` ja siirretään kynä siihen pisteeseen, josta raksi alkaa komennolla `piirtäjä.moveTo(10, 10)`. Kun kynä on kohdassa, josta kuva aloitetaan piirtäämään, niin piirretään raksin ensimmäinen viiva alaviistoon komennolla `piirtäjä.lineTo(10, 10)`. Ensimmäisen viivan jälkeen kynä siirretään raksin toisen viivan alkusijaintiin komennolla `piirtäjä.moveTo(10, 50)` ja piirretään viiva alaoikeaan komennolla `piirtäjä.lineTo(50, 10)`. Kun raksi on valmis, piirtäminen lopetetaan komennolla `piirtäjä.stroke()`.

{% include note.html
otsikko='Huom!'
teksti='<code>fillRect()</code>-komennon väri määritetään <code>fillStyle</code>-komennolla.
	<code>stroke()</code>-komennon väri määritetään <code>strokeStyle</code>:llä.'
%}

{% include task.html
tehtava-ohje='Muuta koordinaatteja siten, että raksi on koko kankaan kokoinen. Etsi sopivat koordinaatit <i>koordinaatit kankaalla</i>-työkalulla.'
tehtava-koodi='<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	piirtäjä.moveTo(10, 10)
	piirtäjä.lineTo(50, 50)
	
	piirtäjä.moveTo(10, 50)
	piirtäjä.lineTo(50, 10)
	
	piirtäjä.stroke()
${closeScript}'
%}

{% include task.html
tehtava-ohje='Lisää <code>moveTo()</code>- ja <code>lineTo</code>-komentoja siten, että kankaalla näkyy ainakin kolme eri viivaa.'
tehtava-koodi='<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	
	
	piirtäjä.stroke()
${closeScript}'
%}

{% include task.html
tehtava-ohje='Lisää <code>moveTo()</code>- ja <code>lineTo</code>-komentoja piirtäksesi kolmion.'
tehtava-koodi='<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	
	
	piirtäjä.stroke()
${closeScript}'
%}

{% include task.html
tehtava-ohje='Lisää <code>moveTo()</code>- ja <code>lineTo</code>-komentoja piirtäksesi talon (neliöstä ja kolmiosta).'
tehtava-koodi='<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	
	
	piirtäjä.stroke()
${closeScript}'
%}

## Kysymyksiä

<div id="piirtokysymykset"></div>

<script>createQuestionnaire({
	id: "piirtokysymykset",
	questions: [
		{
			text: "Mitä funktiota käytetään neliön piirtämiseen?",
			alternatives: [
				{ text: "fillSquare" },
				{ text: "fillRect", correct: true },
				{ text: "fillPolygon" },
			]
		},
		{
			text: "Miten polun piirtäminen aloitetaan?",
			alternatives: [
				{ text: "piirtäjä.startPath()" },
				{ text: "piirtäjä.penDown()" },
				{ text: "piirtäjä.beginPath()", correct: true },
			]
		},
		{
			text: "Miten polkua piirrettäessä piirretään viiva?",
			alternatives: [
				{ text: "piirtäjä.lineTo(x, y)", correct: true },
				{ text: "piirtäjä.moveTo(x, y)" },
				{ text: "piirtäjä.strokeTo(x, y)" },
			]
		},
		{
			text: "Miten polkua piirrettäessä valitaan väri?",
			alternatives: [
				{ text: "piirtäjä.lineStyle =" },
				{ text: "piirtäjä.penStyle =" },
				{ text: "piirtäjä.fillStyle =" },
				{ text: "piirtäjä.strokeStyle =", correct: true },
			]
		}
	]
})</script>

<!-- Tän osion voi siirtää siihen osaan, missä käsitellään loopit.
## 4.4 `setInterval` ja animaatiot

Pelien ja animaatioiden grafiikat liikkuvat, joten seuraavaksi täytyy selvittää, miten tämä onnistuu kankaalla. Käytetään piirrustuksien liikuttamiseen `setInterval`-komentoa. `setInterval` toistaa sille annettuja komentoja ikuisesti annetulla nopeudella.

{% include example.html
esimerkki-selitys='Neliö liikkuu kankaalla.'
esimerkki-koodi='<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	var piirtäjä = kangas.getContext("2d")
	piirtäjä.fillStyle = "red"

	let aika = 0

	setInterval(() => {
		aika += 0.01
		piirtäjä.clearRect(0, 0, 300, 150)
		piirtäjä.fillRect(Math.cos(aika)*20+125, Math.sin(aika)*20+50, 50, 50)
	}, 10)
${closeScript}'
%}-->
