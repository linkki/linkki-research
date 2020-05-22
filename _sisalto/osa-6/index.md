---
layout: default
title: Osa 6
nav-title: Osa 6
---
<div class="content">
<h1>Osa 6 – Listat</h1>

<p>
Tässä osassa tutustumme <b>listoihin</b>.
Lista on olio, joka sisältää muita olioita sisällään.

<p>
Edellisessä luvussa loimme hahmoille olioita, joilla on jokaisella oma muuttuja.
Tämä toimii, jos pelissä on aina sama määrä olioita.
Mutta entä, jos olioiden määrä muuttuu?
Esimerkiksi <a href="../projektit/väistelypeli.html">väistelypelissä</a> vihollisia tulee koko ajan lisää
ja <a href="../projektit/matopeli.html">matopelissä</a> madon häntä kasvaa.

<p>
Jotta voimme tehdä tämän, emme voi luoda omaa muuttujaa jokaiselle hahmo-oliolle.
Sen sijaan voimme luoda listan, joka sisältää oliot.

<h2>Lukulista</h2>

<p>
Aloitetaan yksinkertaisella listalla, joka sisältää lukuja.
Sellainen luodaan käyttämällä hakasulkuja:

<script>codeExample(
`var luvut = [1, 2, 3]
`,"javascript");</script>

<p>

<div style="display: flex; justify-content: center;">
<img src="https://www.mv.helsinki.fi/home/lawkaita/more/linkki/img/train5.webp">
</div>

Listan sisällä oleviin asioihin eli <b>alkioihin</b> voi viitata kirjoittamalla listan nimen ja hakasuluissa luvun.
<code>luvut[0]</code> on ensimmäinen luku, <code>luvut[1]</code> toinen luku ja niin edelleen.
(JavaScript käyttää niin kutsuttua <i>nollaindeksointia</i>, jossa listan ensimmäisen alkion järjestysluku eli <b>indeksi</b> on nolla.)

<script>addEditor(
`<script>
	var luvut = [1, 2, 3]

	alert(luvut)
	alert(luvut[0])
${closeScript}
`);</script>

<p>
Kun olemme luoneet listan, voimme käyttää <code>for of</code> -silmukkaa käydäksemme sen läpi:

<script>addEditor(
`<script>
	var luvut = [1, 2, 3]

	for (var luku of luvut) {
		alert(luku + 1)
	}
${closeScript}
`);</script>

<p>
Silmukan sisällä oleva koodi suoritetaan kolme kertaa eli kerran jokaiselle listan alkiolle.
Jokaisella suorituskerralla muuttuja <code>luku</code> asetetaan ensin viittamaan yhteen listan alkioista.
Ensin <code>luku</code> on <code>1</code>, toisella suorituskerralla se on <code>2</code> ja viimeisellä kerralla <code>3</code>.
Koska tulostamme arvon <code>luku + 1</code>, näytölle pitäisi tulostua luvut 1+1, 2+1 ja 3+1 eli 2, 3 ja 4.

<p>
TODO: Tehtäviä, joissa luodaan listoja.

<h2>Lisääminen ja poistaminen</h2>

<p>
Listan tärkein hyöty on, että siihen voi lisätä asioita ja siitä voi poistaa asioita.
Tutustumme nyt neljään tärkeimpään lisäämis- ja poistamiskomentoon.

<h3><code>push</code></h3>

<p>
<code>.push()</code> lisää alkion listan loppuun.

<script>addEditor(
`<script>
	var luvut = [1, 2, 3]

	luvut.push(1)

	alert(luvut)
${closeScript}
`);</script>

<div style="display: flex; justify-content: center;">
<img src="https://www.mv.helsinki.fi/home/lawkaita/more/linkki/img/push-van.webp" style="">
</div>

<h3><code>pop</code></h3>

<p>
<code>.pop()</code> poistaa alkion listan lopusta.
Poistetun arvon voi tallettaa tarvittaessa muuttujaan.

<script>addEditor(
`<script>
	var luvut = [1, 2, 3]

	var viimeinen = luvut.pop()

	alert(luvut)
	alert(viimeinen)
${closeScript}
`);</script>

<div style="display: flex; justify-content: center;">
<img src="https://www.mv.helsinki.fi/home/lawkaita/more/linkki/img/pop-van.webp" style="">
</div>


<h3><code>shift</code></h3>

<p>
<code>.shift()</code> poistaa alkion listan alusta.
Komennon nimi tulee siitä, että jokaista listan alkiota ikään kuin siirretään yksi taaksepäin (ja ensimmäinen alkio katoaa).
Se alkio, joka oli aiemmin <code>luvut[1]</code> on nyt <code>luvut[0]</code>.

<p>
Kuten <code>.pop()</code>-komennon kanssa, poistetun arvon voi tallettaa muuttujaan.

<script>addEditor(
`<script>
	var luvut = [1, 2, 3]

	var ensimmäinen = luvut.shift()

	alert(luvut)
	alert(luvut[0])
	alert(ensimmäinen)
${closeScript}
`);</script>

<h3><code>unshift</code></h3>

<p>
<code>.unshift()</code> lisää alkion listan alkuun.
Kuten <code>shift</code>in kanssa, alkiot siirtyvät listassa – tällä kertaa eteenpäin.

<script>addEditor(
`<script>
	var luvut = [1, 2, 3]

	luvut.unshift(1)

	alert(luvut)
${closeScript}
`);</script>

<h3><code>splice</code></h3>

<p>
JavaScriptissä on omat komennot listan alkuun ja loppuun lisäämiselle ja poistamiselle.
Listan keskelle lisäämiseen ja poistamiseen on kuitenkin vain yksi komento, <code>.splice()</code>.

<h3>Tehtäviä</h3>

<p>
TODO: Tehtävä, jossa listaan lisätään ja siitä poistetaan arvoja

<p>
TODO: Tehtävä, jossa luodaan lista, lisätään siihen arvoja, ja iteroidaan sitä

<p>
TODO: Kysymys/monivalinta, jossa kysytään miltä lista näyttää operaatioiden jälkeen

<h2>Oliolista</h2>

<p>
Tähän mennessä listat ovat sisältäneet lukuja.
Peleissä listoihin kuitenkin halutaan usein tallettaa hahmoja tai muita olioita.

<p>
Olion voi lisätä listaan samalla tavalla kuin luvunkin käyttämällä sopivaa komentoa, esimerkiksi <code>.push()</code>-komentoa:

<script>codeExample(
`var hahmot = []
hahmot.push({
	X: 0,
	Y: 0,
})
`,"javascript");</script>

<p>
Kun oliolistaan on lisätty haluttu määrä olioita, se voidaan käydä läpi <code>for of</code> -silmukalla:

<script>codeExample(
`for (var hahmo of hahmot) {
	piirtädä.drawRect(hahmo.X, hahmo.Y, 100, 100)
}
`,"javascript");</script>

<p>
Silmukassa muuttuja <code>hahmo</code> on väliaikainen nimi nyt käsittelyssä olevalle oliolle.
Aina kun silmukka ottaa seuraavan olion käsittelyyn, muuttujakin muutetaan viittaamaan siihen.