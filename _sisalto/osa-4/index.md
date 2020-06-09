---
layout: default
title: Osa 4 – Maalia kankaalle
nav-title: Osa 4
---

Tässä osassa tutustumme **kankaisiin** ja niille piirtämiseen. Kankaat ovat erikoisia alueita sivulla, joihin voimme piirtää JavaScript-komennoilla kuvioita.

{% include example.html 
esimerkki-selitys='Kangas, jolle on piirretty musta neliö.'
esimerkki-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}'
%}

Yllä olevassa esimerkissä määrittelemme, että sivulla on kangas <code>&lt;canvas&gt;</code>-tägillä. Kankaalla on id "<code>kangas</code>", jotta voimme viitata siihen JavaScript-koodissa. Kankaalla on myös taustaväri beige (eräs vaaleanruskean sävy), jotta se erottuu sivun valkoisesta taustasta. Älä välitä, jos et ymmärrä miten taustavärikoodi toimii.

Canvas-tägin alla on JavaScript-koodia, jossa tapahtuu seuraavaa:

1. Luomme <code>piirtäjä</code>-muuttujan, joka on nimi kankaan "kontekstille". Konteksti on tarkoittaa tässä tapauksessa sitä JavaScriptin osaa, jota käytetään kuvioiden piirtämiseen näytölle.
<script>codeExample(
`const piirtäjä = kangas.getContext("2d") `
, "javascript");</script>

2. Piirrämme kankaalle suorakulmion piirtäjän avulla <code>fillRect</code>-komennon avulla. <code>fillRect</code> on lyhenne englannin sanoista "fill rectangle" eli "täytä suorakulmio". Komennon nimen jälkeen tulee sulkeissa neljä parametria, jotka kertovat missä kohtaa suorakulmio on ja minkä kokoinen se on.
<script>codeExample(
`piirtäjä.fillRect(10, 10, 50, 50) `
, "javascript");</script>

{% include task.html
tehtava-ohje='Lisää ohjelmaan koodi, jossa piirretään kankaalle neliö, jonka parametrit ovat (0,0,30,30).'
tehtava-koodi='<!doctype HTML>
<canvas id=kangas>
	</canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
${closeScript}'
%}

## 4.1 Koordinaatisto

Jotta osaisimme käyttää `fillRect`-komentoa, meidän on opeteltava ensin, miten tietokone ymmärtää sijainteja ja kokoja lukuina.

Tietokoneen näyttö koostuu koneesta riippuen sadoista tuhansista tai jopa miljoonista **pikseleistä**. Yksi pikseli on hyvin pieni piste, jolla on jokin väri.Näytöllä pikselit on järjestetty riveihin, joita on satoja päällekkäin.

Jotta voimme vaihtaa jonkun tietyn pikselin väriä, meidän on kerrottava tietokoneelle, mitä pikseliä haluamme muuttaa. Tämä tehdään antamalla tietokoneelle tieto siitä, kuinka mones pikselirivin pikseli pikseli on ja kuinka mones pikselirivi on kyseessä. Tätä tietoa sanotaan pikselin **koordinaateiksi**. Tarkemmin pikselin **X-koordinaatti** kertoo, kuinka mones pikseli pikseli on omalla rivillään. **Y-koordinaatti** taas kertoo, kuinka mones pikselirivi on kyseessä.

TODO: Havainne kuva.

Ohjelmoinnissa asioiden laskeminen aloitetaan usein nollasta eikä yhdestä. Myös pikselirivin ensimmäistä pikseliä sanotaan "pikseliksi 0" ja ensimmäistä pikseliriviä "riviksi 0". Aivan ensimmäisen pikselin (joka on näytön vasemmassa ylänurkassa) X-koordinaatti on siis 0 ja Y-koordinaatti 0. Tätä pikseliä sanotaan näytön **origoksi**.

{% include note.html 
otsikko='Huom!'
teksti='Koulussa matematiikassa koordinaatiston Y-koordinaatit kasvavat <em>ylöspäin</em>, eli suurempi Y tarkoittaa korkeammalla olevaa pistettä.
	Ohjelmoinnissa Y kuitenkin kasvaa <em>alaspäin</em>, eli suurempi Y tarkoittaa, että piste on alempana. Tämä johtuu historiallisista syistä.'
%}
 
<div style="display: flex; justify-content: center;">
<img src="https://www.mv.helsinki.fi/home/lawkaita/more/linkki/img/directions.webp" style="">
</div>

<div class="codebox">
	<h3>Koordinaatit kankaalla</h3>
	<p>
		Vie hiiri kankaan päälle nähdäksesi hiiren sijainnin esitettynä koordinaatteina.
		Tämän kankaan leveys on 300 pikseliä ja korkeus 150 pikseliä.
	</p>
	<canvas
		id = koordinaattityökalu
		width = 300
		height = 150
	></canvas>
	<script>{
		function viiva(x1, y1, x2, y2) {
			piirtäjä.beginPath();
			piirtäjä.moveTo(x1, y1);
			piirtäjä.lineTo(x2, y2);
			piirtäjä.stroke();
		}
		const piirtäjä = koordinaattityökalu.getContext("2d");
		koordinaattityökalu.onmousemove = tapahtuma => {
			const x = tapahtuma.offsetX;
			const y = tapahtuma.offsetY;
			piirtäjä.clearRect(0, 0, 300, 150);
			piirtäjä.strokeStyle = "darkred"
			viiva(0, y, 300, y);
			viiva(x, 0, x, 150);
			piirtäjä.fillText(y, 1, y+10);
			piirtäjä.fillText(x, x+1, 150);
			piirtäjä.fillText("X: " + x + ", Y: " + y, 15, 20);
		};
	}</script>
</div>

## 4.2 <code>fillRect</code>-komento

Voimme käyttää `fillRect`-komentoa piirtääksemme suorakulmioita näytölle. Komennolla on neljä parametria. Ne ovat järjestyksessä: X, Y, leveys pikseleinä, korkeus pikseleinä.

<script>codeExample(`piirtäjä.fillRect(x, y, leveys, korkeus) `, "javascript");</script>

Neliöstä voi myös tehdä eri värisen. Tähän käytämme `fillStyle`-komentoa.

{% include example.html
esimerkki-teksti='Kangas, jolle on piirretty punainen neliö.'
esimerkki-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.fillStyle = "red"
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}'
%}

`fillStyle` käskee piirtäjää piirtämään tietyllä värillä. Väri kirjoitetaan englanniksi lainausmerkkien sisään.

<script>codeExample(`piirtäjä.fillStyle = "green" `, "javascript");</script>

<!-- Tässä joitakin englanninkielisiä värien nimiä:
Jostain syystä markdown vihaa style parametrejä joten tämä ei toimi-->
<!--<table>
	<caption>Värejä englanniksi</caption>
	<thead>
	<tr>
		<th>Väri</th>
		<th>Englanniksi</th>
		<th>Suomksi</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td style="background-color: white;"></td>
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
		<td style="background-color: black;">
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
</tbody>
</table>-->

Useimpien värien eteen voi lisätä sanan "dark" tarkoittamaan tummaa ja "light" tarkoittamaan vaaleaa. Esimerkiksi "lightgreen" on vaaleanvihreä ja "darkblue" tummansininen.

{% include task.html
tehtava-ohje='Muuta <code>fillRect</code>-komennon koordinaatteja siten, että neliö on kankaan oikean reunan keskellä. Voit käyttää yllä olevaa <i>Koordinaatit kankaalla</i> -työkalua sopivien koordinaattien löytämiseksi.'
tehtava-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}'
%}

{% include task.html
tehtava-ohje='Piirrä kankaan alareunaan sininen neliö.'
tehtava-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
${closeScript}'
%}

### Useita neliöitä

Kankaalle voi piirtää useita neliöitä kirjoittamalla monta `fillRect`-komentoa. `fillStyle`-komentoa käytetään vasta, kun piirtäjän väri muuttuu.

{% include example.html
esimerkki-selitys='Kangas, jolle on piirretty kaksi punaista ja kaksi sinistä neliötä.'
esimerkki-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.fillStyle = "red"
	piirtäjä.fillRect(10, 10, 50, 50)
	piirtäjä.fillRect(80, 10, 50, 50)
	piirtäjä.fillStyle = "blue"
	piirtäjä.fillRect(10, 80, 50, 50)
	piirtäjä.fillRect(80, 80, 50, 50)
${closeScript}'
%}

## 4.3 Polut

JavaScriptin avulla voi piirtää monia muitakin asioita kuin suorakulmioita. Monimutkaisemmat asiat tehdään yleensä **polkujen** avulla. Polun piirtäminen muistuttaa kynällä piirtämistä. Kerromme eri komentojen avulla piirtäjälle, miten kynää liikutetaan paperilla. Tärkeimmät komennot on alla olevassa taulukossa.

| Komento | Esimerkki | Selitys |
| :----- |:----------| :----- |
|`.strokeStyle` | `piirtäjä.strokeStyle = "red" `|Kertoo minkä värisellä kynällä polku piirretään|
|`.beginPath()` | `piirtäjä.beginPath()`|Kertoo piirtäjälle, että aloitamme polun piirtämisen ("ota kynä esiin")|
|`.moveTo(x, y)`|`piirtäjä.moveTo(10, 10)`|Käskee piirtäjää siirtämään kynän annettuihin koordinaatteihin _koskettamatta paperia_|
|`.lineTo(x, y)`|`piirtäjä.lineTo(50, 50)`|Käskee piirtäjää vetämään kynän annettuihin koordinaatteihin niin, että _kynä koskettaa paperia_|
|`.stroke()`|`piirtäjä.stroke()` |Kertoo piirtäjälle, että lopetamme polun piirtämisen|

{% include example.html
esimerkki-selitys='Kangas, jolle on piirretty raksi.'
esimerkki-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	piirtäjä.moveTo(10, 10)
	piirtäjä.lineTo(50, 50)
	
	piirtäjä.moveTo(10, 50)
	piirtäjä.lineTo(50, 10)
	
	piirtäjä.stroke()
${closeScript}'
%}
Esimerkki toimii siis näin:

1. Ensin kerromme, että haluamme aloittaa polun piirtämisen:
<script>codeExample(`piirtäjä.beginPath() `, "javascript");</script>

2. Seuraavaksi käskemme siirtämään kynän koordinaatteihin (10, 10), eli vasempaan ylänurkkaan.
<script>codeExample(`piirtäjä.moveTo(10, 10) `, "javascript");</script>

3. Siirrämme kynän paperia pitkin piirtämällä koordinaatteihin (50, 50), eli oikeaan alanurkkaan.
<script>codeExample(`piirtäjä.lineTo(10, 10) `, "javascript");</script>

4. Sitten teemme saman eri nurkkien kanssa:
 siirrämme kynän koskematta paperiin kohtaan (10, 50) ja piirrämme viivan kohtaan (50, 10).
<script>codeExample(`piirtäjä.moveTo(10, 50)` + "\n" + `piirtäjä.lineTo(50, 10) `, "javascript");</script>

5. Lopuksi lopetamme polun piirtämisen <code>stroke()</code>-komennolla.
<script>codeExample(`piirtäjä.stroke() `, "javascript");</script>

{% include note.html
otsikko='Huom!'
teksti='<code>fillRect()</code>-komennon väri määritetään <code>fillStyle</code>-komennolla.
	<code>stroke()</code>-komennon väri määritetään <code>strokeStyle</code>:llä.'
%}

{% include task.html
tehtava-ohje='Muuta koordinaatteja siten, että raksi on koko kankaan kokoinen. Etsi sopivat koordinaatit <i>koordinaatit kankaalla</i>-työkalulla.'
tehtava-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
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
tehtava-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	
	
	piirtäjä.stroke()
${closeScript}'
%}

{% include task.html
tehtava-ohje='Lisää <code>moveTo()</code>- ja <code>lineTo</code>-komentoja piirtäksesi kolmion.'
tehtava-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	
	
	piirtäjä.stroke()
${closeScript}'
%}

{% include task.html
tehtava-ohje='Lisää <code>moveTo()</code>- ja <code>lineTo</code>-komentoja piirtäksesi talon (neliöstä ja kolmiosta).'
tehtava-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	
	
	piirtäjä.stroke()
${closeScript}'
%}

## 4.4 `setInterval` ja animaatiot

Jos haluamme tehdä pelejä tai animaatioita, meidän on saatava neliöt liikkumaan. Miten tämä tapahtuu? Vastaus on JavaScriptin `setInterval`-komento. `setInterval` toistaa sille annettuja komentoja ikuisesti annetulla nopeudella.

{% include example.html
esimerkki-selitys='Neliö liikkuu kankaalla.'
esimerkki-koodi='<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.fillStyle = "red"

	let aika = 0

	setInterval(() => {
		aika += 0.01
		piirtäjä.clearRect(0, 0, 300, 150)
		piirtäjä.fillRect(Math.cos(aika)*20+125, Math.sin(aika)*20+50, 50, 50)
	}, 10)
${closeScript}'
%}
