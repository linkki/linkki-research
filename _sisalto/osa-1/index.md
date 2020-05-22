---
layout: default
title: Osa 1
nav-title: Osa 1
---
# Osa 1 – JavaScriptin alkeet
## 2.1 HTML ja tägit
		
HTML näyttää selaimessa sisällön. Esimerkiksi kuvat, teksti ja pelit näytetään verkkoselaimessa HTML:n avulla. HTML:ssä käytetään tägejä, joilla ilmaistaan, miltä haluamme sisällön näyttävän selaimessa. 

Jos haluamme näyttää tekstiä laitamme sen <code>&lgt;</code> tägien sisään. Kun haluamme, että teksti on lihavoitua laitamme sen ympärille vielä <code>&lt;b&gt;</code> tägit. Tägeille pitää myös kertoa, milloin lopettaa. Emmehän halua, että koko teksti on lihavoitua. Siksi laitamme tägin <code>&lt;/b&gt;</code> kertomaan, että lihavointi loppuu. Samoin lopetamme teksti osion käyttämällä <code>&ltgt;</code>-tägiä. Tämän jälkeen voimme esimerkiksi <code>&lt;button&gt;</code> tägillä luoda painikkeen. 
		
{% include example.html esimerkki-selitys='Esimerkissä käytetään juuri oppimiamme tägejä kertomaan selaimelle, miltä verkkosivun pitää näyttää.' esimerkki-koodi='
<!doctype HTML>
Tässä on <b>lihavoitu</b> sana.
<button>Painike</button>
'%}
Kun verkkoselain tulkitse HTML-koodin, se poistaa tägit ja näyttää sisällön tägien perusteella muotoiltuna.

<img src="https://www.mv.helsinki.fi/home/lawkaita/more/linkki/img/bold-2.webp" height="500" width="500"/>

<div class="codebox task">
            <h3>Tehtävä</h3>
            
				Täydennä tägien sisälle sopivat arvot. 
				Ole tarkkana, joukossa on myös uusia tägejä!
            

            <script>
                addEditor(
`<!doctype HTML>
 Nimi: <b></b>
 Ikä: <b></b>
 Kotikaupunki <b></b>
 Harrastan <i></i>.
 <u>Ensimmäinen tehtävä on tehty.</u> `
                );</script>
</div>

## 2.2 Mikä ihmeen JavaScript?
		
Nyt aloitamme tutustumisen JavaScriptiin. JavaScriptiä käytetään yhdessä HTML-kielen kanssa. JavaScriptillä kirjoitetaan erityisiä komentosarjoja (skriptejä), joilla saadaan tapahtumia aikaan sivulla.

Aloitetaan JavaScriptin harjoittelu tutustumalla peruskomentoihin. Komennot kertovat JavaScriptin kääntäjälle, mitä haluamme tehdä. Komennot voivat tuntua aluksi oudoilta, mutta niiden merkitys selvenee, kun niitä käyttää. 

<img src="https://www.mv.helsinki.fi/home/lawkaita/more/linkki/img/kaaroja.webp">

<div class="codebox task">
	<h3>Tehtävä 2.1</h3>
Kirjoita <code>alert()</code>-komennon sisälle lainausmerkkien (<code>""</code>) väliin nimesi ja paina lippu-kuvaketta.>.
		<script>
			addEditor(
`<!doctype HTML>
<script>
	alert("");
${closeScript}`
			);</script>
		</div>
Ensimmäisessä tehtävässä käytettiin <code>alert()</code>-komentoa. Kaikki komennot, joita haluamme JavaScriptin tunnistavan laitetaan <code>&lt;script&gt;</code>-tagien sisälle, kuten myös edellisessä tehtävässä tehtiin.
		
Olemme siis nyt oppineet, minne HTML-tiedostossa kirjoitetaan JavaScript-komennot.
		
<div class="codebox task">
	<h3>Tehtävä 2.2</h3>
Kirjoita <code>alert("Heipä hei!")</code>-komento oikeaan kohtaan koodissa.
<script>
addEditor(
`<!doctype HTML>
<script>
${closeScript}`
		);</script>

</div>

<div class="codebox task">
	<h3>Tehtävä 2.3</h3>
		Kirjoita ohjelma, joka tulostaa "JavaScript on kivaa".
<script>
				addEditor(
`<!doctype HTML>
<script>
${closeScript}`
			);</script>
</div>
		
Ensimmäinen komento, jonka opettelimme on <code>alert()</code>-komento. Tällä komennolla voimme tulostaa tekstiä ikkunoissa ruudulle. Komento <code>alert()</code> saa <b>parametrina</b> merkkijonon eli sanan tai lauseen. Tämä on ohjelmoijan käyttämää kieltä.

<!-- Tee tästä ekstra -->
### Parametri
Puhumme parametreista, kun haluamme antaa jonkinlaista tietoa komennolle. Toisinaan haluamme antaa komennoille tietoa, sillä haluamme antaa komennoille lisää työkaluja. Näiden työkalujen avulla komento voi tehdä tehtävänsä tehokkaammin.

<!--Otin tästä pois selityksen parametrin tyypistä.
Tiedon tyyppi sopii varmaan paremmin käsiteltäväksi muuttujien yhteyteen.-->

## 2.3 Uusi komento <code>prompt()</code>
		
Nyt osaamme tulostaa tietoa. Opetellaan seuraavaksi, miten voimme myös kysyä käyttäjältä <i>syöteen</i>. Syöte on tietoa, jota tietokone osaa käsitellä. Esimerkiksi, kun kirjoitat JavaScript-ohjelmia näppäimistöllä annat koko ajan syötteenä tietokoneelle tietoa kirjoittamistasi merkeistä näppäimistön avulla.
		
Syötteen kysymyinen tapahtuu <code>prompt()</code>-komennolla.
		
<div class="codebox example">
<h3>Esimerkki 2.a</h3>
Tähän ohjelmaan on kirjoitettu <code>prompt()</code>-komento. 
Kokeile, mitä tapahtuu, kun klikkaat lippukuvaketta.
			
			<script>
				addEditor(
`<!doctype HTML>
<script>
	prompt()
${closeScript}`
			);</script>
</div>
		
<code>prompt()</code>-komento avaa ikkunan, jossa on tekstikenttä, johon voi kirjoittaa tekstiä. Kun klikkaa "Hyväksy"-painiketta, JavaScript <b>lukee</b> syötteen. Pelkästään lukemalla emme kuitenkaan saa vielä tietoa käyttöön. Meidän tulee tallettaa se muuttujaan. Tutkitaan vielä vähän prompt()-komentoa ja tutustutaan sen jälkeen muuttujiin. 
		
<div class="codebox task">
<h3>Tehtävä 2.4</h3>
Kirjoita <code>prompt()</code>-komento oikeaan kohtaan koodissa.
<script>
				addEditor(
`<!doctype HTML>
<script>
${closeScript}`
			);</script>
</div>

<code>prompt()</code>-komennolle voidaan antaa parametri samalla tavalla kuin <code>alert()</code>-komennolle. Tällöin komentoon lisätään sulkeiden sisään lainausmerkit, joiden sisään kirjoitetaan haluttu teksti.
		
<!--Pitäisikö esimerkkien olla enemmän tehtävien kaltaisia, vai onkohan nämä tälläiset esimerkit ihan kelvollisia.-->
<div class="codebox example">
<h3>Esimerkki 2.b</h3>
Ohjelmassa olevalle <code>prompt()</code>-komennolle on annettu parametrina "Mikä sinun nimesi on?".
<script>
				addEditor(
`<!doctype HTML>
<script>
	prompt("Mikä sinun nimesi on?")
${closeScript}`
			);</script>
</div>

<div class="codebox task">
<!--Pitäskö tehtävistä tehdä enemmän saman tyyppisiä, kuin lopussa on? -->
<h3>Tehtävä 2.5</h3> 
Kirjoita ohjelmaan komento, joka saa parametriksi merkkijonon "Mikä sinun ikäsi on?". Käyttäjä voi antaa syötteenä ikänsä. Käytätkö <code>prompt()</code>- vai <code>alert()</code>-komentoa?
<script>
				addEditor(
`<!doctype HTML>
<script>
${closeScript}`
			);</script>
</div>

## Muuttujat
			
		
Jotta voimme tehdä käyttäjän antamalla syötteellä jotain, täytyy se tallentaa ohjelman käyttöön. Ohjelmoidessa tieto tallennetaan <b>muuttujiin</b>. Ne ovat ohjelmoinnin peruspalikoita ja niitä tulet käyttämään paljon.
		
<!--Tee tästä ekstra -->
<!--No tälle pitäs tehdä jotain.-->
### Muuttuja
Muuttujiin tallennetaan tietoa. Muttujille voidaan antaa nimi. Muuttujia voidaan käyttää uudelleen.
		
Muuttuja tapa antaa tiedolle nimi. Myöhemmin meidän ei tarvitse laskea tai kysyä tietoa uudestaan, vaan voimme käyttää muuttujaa. Luomme muuttujan <code>const</code>-komennolla. Alla on esimerkki muuttujien käytöstä <code>alert()</code>-komennon kanssa ja muistutus siitä, miltä komento näyttää ilman muuttujia.
		
<script>codeExample(
`// Tässä on alert()-komento, 
// jolle annetaan parametrina "Kissat ovat kivoja!".
alert("Kissat ovat kivoja!")

// Tässä talletetaan ensin "Kissat ovat kivoja!" muuttujaan.
const viesti = "Kissat ovat kivoja!"
// Annamme nyt edellisellä rivillä 
// olevan muuttujan parametrina alert()-komennolle.
alert(viesti) `,
"javascript");</script>
		
Voimme antaa <code>alert()</code>-komennolle parametrina muuttujan. Komento ei siis näytä käyttäjälle sanaa "viesti", vaan tekstin "Kissat ovat kivoja!". Tämä johtuu siitä, että emme laittaneet lainausmerkkejä <code>viesti</code>-sanan ympärille. JavaScriptissä vain lainausmerkeissä olevat sanat ovat merkkijonoja. Ilman lainausmerkkejä sanat ovat muuttujia tai komentoja. <code>viesti</code> on siis nimi merkkijonolle "Kissat ovat kivoja!".
		
<img src="https://www.mv.helsinki.fi/home/lawkaita/more/linkki/img/muuttuja.webp" width="901" height="507"/>

<div class="codebox example">
<h3>Esimerkki 2.b</h3>
Tässä on ohjelma, joka kysyy käyttäjältä nimen ja tulostaa sen jälkeen tervehdyksen.
<script>
				addEditor(
`<!doctype HTML>
<script>
	const syöte = prompt("Nimesi on?")
	alert("Hei, " + syöte)
${closeScript}`
		);</script>
</div>
		
Yllä olevassa esimerkissä kysymme käyttäjältä hänen nimensä. Sen jälkeen asetamme vastauksen muuttujaan <code>syöte</code>. Tämän jälkeen <code>syöte</code> viittaa siis käyttäjän antamaan nimeen.
		
Esimerkissä käytetään myös <code>+</code>-operaattoria. Tämä operaattori liittää kaksi merkkijonoa yhteen yhdeksi pitkäksi merkkijonoksi. Operaattori toimii näin:

<ol>
	<li>Kuvitellaan, että käyttäjä antoi nimekseen "Ankka".
	<li>Tällöin <code>syöte</code> viittaa merkkijonoon <code>"Ankka"</code>.
    <li>Siispä <code>"Hei, " + syöte</code> on sama asia kuin <code>"Hei, " + "Ankka"</code>.
	<li><code>+</code>-operaattori yhdistää kaksi merkkijonoa ja lopputulos on <code>"Hei, Ankka"</code>.
	<li>Lopulta <code>alert()</code> komento näyttää käyttäjälle merkkijonon "Hei, Ankka".
</ol>

<div class="codebox task">
<h3>Tehtävä 2.9</h3> 
			
Pyydä käyttäjältä syötteenä hedelmä. Tulosta vastaus <code>hedelmä + "ovat ankkojen suosikki ruoka."</code>.
			
<script>
addEditor(
`<!doctype HTML>
<script>
${closeScript}`
				);</script>
</div>

<div class="codebox task">
<h3>Tehtävä 2.9</h3> 
			
Pyydä käyttäjältä ensin syötteenä eläin. Kun käyttäjältä on pyydetty syötteenä eläin, niin pyydä tämän jälkeen häneltä syötteenä väri. Muista tallettaa vastaukset omiin muuttujiinsa. Tulosta lopuksi vastaus <code>väri + " " + eläin </code>.
			
<script>
				addEditor(
`<!doctype HTML>
<script>
${closeScript}`
);</script>
</div>

## 2.4 Yhteenveto komennoista
		
<table>
    <caption>Opitut komennot</caption>
    	<tr>
			<th>Komento
			<th style="width: 300px;">Esimerkki
			<th>Selitys
		<tr>
			<td><code>alert()</code>
			<td><script>codeExample(`alert("Kissat ovat kivoja") `, "javascript", true);</script>
			<td>Näyttää käyttäjälle merkkijonon
		<tr>
			<td><code>prompt()</code>
			<td><script>codeExample(`prompt("Mikä sinun nimesi on?") `, "javascript", true);</script>
			<td>Kysyy käyttäjältä merkkijonon
		<tr>
			<td><code>const</code>
			<td><script>codeExample(`const viesti = "Hauska tavata"` + "\n" + `const syöte = prompt("Nimesi?") `, "javascript", true);</script>
			<td>Luo uuden muuttujan
</table>
	