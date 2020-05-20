---
layout: default
title: Osa 4 – Maalia kankaalle
nav-title: Osa 4
---

Tässä osassa tutustumme <b>kankaisiin</b> ja niille piirtämiseen. Kankaat ovat erikoisia alueita sivulla, joihin voimme piirtää JavaScript-komennoilla kuvioita.


<div class="codebox example">
	<h3>Esimerkki</h3>
	<p>Kangas, jolle on piirretty musta neliö.</p>
	<script>
		addEditor(
`<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}`, true
		);
	</script>
</div>

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

<div class="codebox task">
	<h3>Tehtävä</h3>
	<p>Lisää ohjelmaan koodi, jossa piirretään kankaalle neliö, 
		jonka parametrit ovat (0,0,30,30).
	</p>
	<script>
	addEditor(
`<!doctype HTML>
<canvas id=kangas>
	</canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
${closeScript}`
	);</script>
</div>

## 4.1 Koordinaatisto

Jotta osaisimme käyttää <code>fillRect</code>-komentoa, meidän on opeteltava ensin, miten tietokone ymmärtää sijainteja ja kokoja lukuina.

Tietokoneen näyttö koostuu koneesta riippuen sadoista tuhansista tai jopa miljoonista <b>pikseleistä</b>. Yksi pikseli on hyvin pieni piste, jolla on jokin väri.Näytöllä pikselit on järjestetty riveihin, joita on satoja päällekkäin.

Jotta voimme vaihtaa jonkun tietyn pikselin väriä, meidän on kerrottava tietokoneelle, mitä pikseliä haluamme muuttaa. Tämä tehdään antamalla tietokoneelle tieto siitä, kuinka mones pikselirivin pikseli pikseli on ja kuinka mones pikselirivi on kyseessä. Tätä tietoa sanotaan pikselin <b>koordinaateiksi</b>. Tarkemmin pikselin <b>X-koordinaatti</b> kertoo, kuinka mones pikseli pikseli on omalla rivillään. <b>Y-koordinaatti</b> taas kertoo, kuinka mones pikselirivi on kyseessä.

TODO: Havainne kuva.

Ohjelmoinnissa asioiden laskeminen aloitetaan usein nollasta eikä yhdestä. Myös pikselirivin ensimmäistä pikseliä sanotaan "pikseliksi 0" ja ensimmäistä pikseliriviä "riviksi 0". Aivan ensimmäisen pikselin (joka on näytön vasemmassa ylänurkassa) X-koordinaatti on siis 0 ja Y-koordinaatti 0. Tätä pikseliä sanotaan näytön <b>origoksi</b>.

<blockquote>
	<b>❗ Huom!</b> Koulussa matematiikassa koordinaatiston Y-koordinaatit kasvavat <em>ylöspäin</em>, eli suurempi Y tarkoittaa korkeammalla olevaa pistettä.
	Ohjelmoinnissa Y kuitenkin kasvaa <em>alaspäin</em>, eli suurempi Y tarkoittaa, että piste on alempana. Tämä johtuu historiallisista syistä.
</blockquote>

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

Voimme käyttää <code>fillRect</code>-komentoa piirtääksemme suorakulmioita näytölle. Komennolla on neljä parametria. Ne ovat järjestyksessä: X, Y, leveys pikseleinä, korkeus pikseleinä.

<script>codeExample(`piirtäjä.fillRect(x, y, leveys, korkeus) `, "javascript");</script>

Neliöstä voi myös tehdä eri värisen. Tähän käytämme <code>fillStyle</code>-komentoa.


<div class="codebox example">
	<h3>Esimerkki</h3>
	<p>Kangas, jolle on piirretty punainen neliö.</p>
	<script>
		addEditor(
`<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.fillStyle = "red"
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}`, true
		);
	</script>
</div>

<code>fillStyle</code> käskee piirtäjää piirtämään tietyllä värillä. Väri kirjoitetaan englanniksi lainausmerkkien sisään.

<script>codeExample(`piirtäjä.fillStyle = "green" `, "javascript");</script>

Tässä joitakin englanninkielisiä värien nimiä:
<!-- Jostain syystä markdown vihaa style parametrejä joten tämä ei toimi-->
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

<div class="codebox task">
	<h3>Tehtävä 4.2a</h3>
	<p>
		Muuta <code>fillRect</code>-komennon koordinaatteja siten, että neliö on kankaan oikean reunan keskellä.
		Voit käyttää yllä olevaa <i>Koordinaatit kankaalla</i> -työkalua sopivien koordinaattien löytämiseksi.
	</p>
	<script>
		addEditor(
`<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.fillRect(10, 10, 50, 50)
${closeScript}`
		);
	</script>
</div>

<div class="codebox task">
	<h3>Tehtävä 4.2b</h3>
	<p>
		Piirrä kankaan alareunaan sininen neliö.
	</p>
	<script>
		addEditor(
`<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
${closeScript}`
		);
	</script>
</div>

### Useita neliöitä

Kankaalle voi piirtää useita neliöitä kirjoittamalla monta <code>fillRect</code>-komentoa. <code>fillStyle</code>-komentoa käytetään vasta, kun piirtäjän väri muuttuu.

<div class="codebox example">
	<h3>Esimerkki</h3>
	<p>Kangas, jolle on piirretty kaksi punaista ja kaksi sinistä neliötä.</p>
	<script>
		addEditor(
`<!doctype HTML>
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
${closeScript}`, true
		);
	</script>
</div>

## 4.3 Polut

JavaScriptin avulla voi piirtää monia muitakin asioita kuin suorakulmioita. Monimutkaisemmat asiat tehdään yleensä <b>polkujen</b> avulla. Polun piirtäminen muistuttaa kynällä piirtämistä. Kerromme eri komentojen avulla piirtäjälle, miten kynää liikutetaan paperilla. Tärkeimmät komennot on alla olevassa taulukossa.
		
<!--<table>
	<caption>Polkukomennot</caption>
	<tr>
		<td style="width: 150px;">Komento </td>
		<td style="width: 250px;">Esimerkki </td>
		<td>Selitys
	</tr>
	<tr>
		<td><code>.strokeStyle</code></td>
		<td><script>codeExample(`piirtäjä.strokeStyle = "red" `, "javascript", true);</script></td>
		<td>Kertoo minkä värisellä kynällä polku piirretään</td>
		</tr>
	<tr>
		<td><code>.beginPath()</code></td>
		<td><script>codeExample(`piirtäjä.beginPath() `, "javascript", true);</script></td>
		<td>Kertoo piirtäjälle, että aloitamme polun piirtämisen ("ota kynä esiin")</td>
		</tr>
	<tr>
		<td><code>.moveTo(x, y)</code></td>
		<td><script>codeExample(`piirtäjä.moveTo(10, 10) `, "javascript", true);</script></td>
		<td>Käskee piirtäjää siirtämään kynän annettuihin koordinaatteihin <i>koskettamatta paperia</i></td>
		</tr>
	<tr>
		<td><code>.lineTo(x, y)</code></td>
		<td><script>codeExample(`piirtäjä.lineTo(50, 50) `, "javascript", true);</script></td>
		<td>Käskee piirtäjää vetämään kynän annettuihin koordinaatteihin niin, että <i>kynä koskettaa paperia</i></td>
		</tr>
	<tr>
		<td><code>.stroke()</code></td>
		<td><script>codeExample(`piirtäjä.stroke() `, "javascript", true);</script></td>
		<td>Kertoo piirtäjälle, että lopetamme polun piirtämisen</td>
		</tr>
</table>-->

<div class="codebox example">
	<h3>Esimerkki</h3>
	<p>Kangas, jolle on piirretty raksi.</p>
	<script>
		addEditor(
`<!doctype HTML>
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
${closeScript}`, true
		);
	</script>
</div>

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


<blockquote>
	<b>❗ Huom!</b> <code>fillRect()</code>-komennon väri määritetään <code>fillStyle</code>-komennolla.
	<code>stroke()</code>-komennon väri määritetään <code>strokeStyle</code>:llä.
</blockquote>

<div class="codebox task">
	<h3>Tehtävä 4.3a</h3>
	<p>Muuta koordinaatteja siten, että raksi on koko kankaan kokoinen. Etsi sopivat koordinaatit <i>koordinaatit kankaalla</i>-työkalulla.</p>
	<script>
		addEditor(
`<!doctype HTML>
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
${closeScript}`
		);
	</script>
</div>

<div class="codebox task">
	<h3>Tehtävä 4.3b</h3>
	<p>Lisää <code>moveTo()</code>- ja <code>lineTo</code>-komentoja siten, että kankaalla näkyy ainakin kolme eri viivaa.</p>
	<script>
		addEditor(
`<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	
	
	piirtäjä.stroke()
${closeScript}`
		);
	</script>
</div>

<div class="codebox task">
	<h3>Tehtävä 4.3c</h3>
	<p>Lisää <code>moveTo()</code>- ja <code>lineTo</code>-komentoja piirtäksesi kolmion.</p>
	<script>
		addEditor(
`<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	
	
	piirtäjä.stroke()
${closeScript}`
		);
	</script>
</div>

<div class="codebox task">
	<h3>Tehtävä 4.3d</h3>
	<p>Lisää <code>moveTo()</code>- ja <code>lineTo</code>-komentoja piirtäksesi talon (neliöstä ja kolmiosta).</p>
	<script>
		addEditor(
`<!doctype HTML>
<canvas
	id = kangas
	style = background-color:beige;></canvas>
<script>
	const piirtäjä = kangas.getContext("2d")
	piirtäjä.strokeStyle = "red"
	
	piirtäjä.beginPath()
	
	
	
	piirtäjä.stroke()
${closeScript}`
		);
	</script>
</div>

## 4.? <code>setInterval</code> ja animaatiot

Jos haluamme tehdä pelejä tai animaatioita, meidän on saatava neliöt liikkumaan. Miten tämä tapahtuu? Vastaus on JavaScriptin <code>setInterval</code>-komento. <code>setInterval</code> toistaa sille annettuja komentoja ikuisesti annetulla nopeudella.

<div class="codebox example">
	<h3>Esimerkki</h3>
	<p>Neliö liikkuu kankaalla.</p>
<script>
		addEditor(
`<!doctype HTML>
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
${closeScript}`, true
		);
</script>
</div>
