---
layout: default
title: Osa 2 – Nyt alkaa tapahtumaan
nav-title: Osa 2
---
## 2.1 Tapahtumat

Kun klikkaat hiirellä tietokoneen näyttöä, saat aikaan tapahtuman. Me ohjelmoijina voimme päättää, mitä tälläisessä tapahtumassa tapahtuu. Aloitamme omien tapahtumien ohjelmoinnin luomalla tekstikappaleen ohjelmaamme, jota klikkaamalla suoritamme `alert()`-komennon.

{%
 include example.html

 esimerkki-selitys='Tekstiä klikkaamalla suoritetaan <b>tapahtuma</b>. '

 esimerkki-koodi='<!doctype HTML>
<p id = teksti>
    Klikkaa minua.
</p>
<script>
    teksti.onclick = () => {
	alert("Onnittelut, klikkasit oikeaa paikkaa.")
    }
${closeScript}'
%}

Käydään seuraavaksi läpi pala palalta, mitä koodissa oikein tapahtuu.

1. Ensin laitamme ohjelman alkuosaan HTML-koodia.

	<script>codeExample(
	`
	<p id = teksti >
	    Klikkaa minua.
	</p>
	`
	);</script>
	Koodissa on käytetty teksti-tägiä `<p>`, jonka sisälle on kirjoitettu merkkijono "Klikkaa minua." Käytämme tälläistä `<p>`-tägiä, sillä haluamme antaa **id-tunnisteen** merkkijonolle "Klikkaa minua". Tunniste asetetaan tägin sisälle kirjoittamalla `id = teksti`. Kun olemme antaneet sivulla näkyvälle merkkijonolle id-tunnisteen, pääsemme siihen käsiksi myös JavaScriptillä.

2. Seuraavaksi tulee tuttuakin tutumpi `<script>`-tägi.

	<script>codeExample(
	`
	<script>
	    //...	    
	${closeScript}
	`
	);</script>
	`<script>`-tägejen rajaamaa aluetta kannattaa ajatella kokonaisuutena. Tutkitaan seuraavassa kohdassa, mitä tägien sisällä oleva koodi tekee.

3. Tarkastellaan seuraavaksi koodilohkoa:

	<script>codeExample(
	`
	teksti.onclick = () => {
	    //...
	}
	`
	,"javascript");</script>
	
	Annoimme edellisessä kohdassa id-tunnisteen `<p>`-lohkolle. Käytämme nyt annettua tunnistetta ja kutsumme tunnistetulle muuttujalle komentoa `.onclick.` Tämä kertoo meille, että odotamme klikkausta tunnistetulle "teksti"-osalle. Huomasithan lohkorakenteen? Kirjoitamme lohkon sisälle sen, mitä haluamme tapahtuvan, kun tunnistettua kohtaa klikataan.  

4. Lohkon sisältä löydämme edellisestä osasta tutun komennon.

	<script>codeExample(
	`
	alert("Hello")
	`
	,"javascript");</script>
	
	Tämä komento toimii, kuten tavallinenkin `alert()`-komento. Olemme vain sijoittanut sen tapahtuman sisään.

{% include extra.html
otsikko='Id-tunniste'
vinkki='Id-tunniste annetaan HTML-koodille. Käytämme id-tunnistetta HTML-koodin ja JavaScript-koodin väliseen komminukaatioon. Kun käytämme id-tunnistetta HTML-koodissa voimme <b>viitata</b> siihen JavaScript-koodissa.'
%}

{% include task.html 
tehtava-ohje='Kirjoita ohjelmaan koodi, jolla <code>alert()</code> komennolla tulostetaan "Ankat uivat lammessa." kun tekstiä "Missä ankat uivat" klikataan.'
tehtava-koodi='<!doctype HTML>
<p id = teksti>
    Missä ankat uivat?
</p>
<script>
teksti.onclick = () => {
}
${closeScript}'
%}

{% include task.html
tehtava-ohje='Kirjoita ohjelmaan koodi, jolla <code>alert()</code>-komennolla tulostetaan "Höyhenpeite on myös vettähylkivä.", kun tekstiä "Ankkojen höyhenpeite on pehmeä" klikataan.'
tehtava-koodi='<!doctype HTML>
<p id = teksti>
    Ankkojen höyhenpeite on pehmeä.
</p>
<script>
${closeScript}'
%}

{% include task.html
tehtava-ohje='Kirjoita ohjelmaan &lt;p&gt;-tägien sisälle teksti "Koodiankat ovat keltaisia.". Anna tägeille tunnisteeksi "teksti". Lisää tunnisteeseen viittaus `<code>`onclick</code>-komentoon oikeaan kohtaan.'
tehtava-koodi='<!doctype HTML>
<p>
    Saammeko tekstin toimimaan tapahtumana?
</p>
<script>
    .onclick = () => {
	alert("Onnittelut, osasit luoda oikean id-tunnuksen.")
    }
${closeScript}'
%}

{% include task.html
tehtava-ohje='Kirjoita ohjelmaan &lt;p&gt;-tägien sisälle teksti "Koodiankat auttavat ihmisiä ohjelmoinnissa.". Anna tägeille tunnisteeksi "teksti". Lisää <code>onclick</code>-komento ja kirjoita sen sisälle <code>alert()</code>-komento, joka tulostaa tekstin "Koodiankat ovat söpöjä.".'
tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}

{% include example.html
esimerkki-selitys='Tekstiä klikkaamalla teksti vaihtuu.'
esimerkki-koodi='<!doctype HTML>
<p id = teksti>Klikkaa minua.</p>
<script>
    teksti.onclick = () => {
		teksti.textContent = "Moikka moi!"    
    }
${closeScript}'
%}

Jotta voimme muokata tekstiä, joka on jo asetettu sivulle kerran tarvitaan komentoa `textContent`. Edellisessä esimerkissä koodi `teksti.textContent = "Moikka moi!"` kutsuu tätä komentoa "teksti"-tunnisteille Yhtäsuuruusmerkeillä (=) asetamme tämän "teksti"-tunnistetun kohdan arvoksi merkkijonon "Moikka moi!".

### Opitut komennot

Opimme tässä osassa muuttamaan tapahtumien avulla HTML-sivulla olevien objektien sisältöä. Kerrataan vielä, mitä komentoja opimme.

| Komento       | Esimerkki           | Selitys  |
| :-------------: |:-------------| :-----: |
| `id = teksti` | `<p id = teksti> Tekstillä on tunnisteena "teksti"` | Lisää tunnisteen HTML-elementille. |
| `.onclick = () = {}` | `teksti.onclick = () => {` | Odottaa käyttäjältä klikkausta asetettuun muuttujaan. |
| | `//...` | |
| | `}` | |
| `textContent` | `teksti.textContent = "Moikka moi!` | Vaihtaa id-tunnistetun muuttujan arvon. |

## 2.2 Painikkeet

Tekstin lisäksi voimme tehdä painikkeita. Kuten <button>tämä.</button> Tästä painikkeesta ei vielä kuitenkaan tapahdu mitään. JavaScriptillä saamme painikkeesta tapahtumia aikaiseksi.

Ensin painike täytyy luoda. Tämä onnistuu kirjoittamalla `<button>`tämä.`</button>`.

Tämän jälkeen luomme toiminnalisuuden painikkeelle `<script></script>` lohkon sisälle.

{% include example.html
esimerkki-selitys='Painikkeesta tapahtuu alert().'
esimerkki-koodi='<!doctype HTML>
<button id=nappi>Klikkaa tästä.</button>
<script>
	nappi.onclick = () =>  {
		alert("Nappia painettiin.")
	}
${closeScript}'
%}

Kutsumme siis tällä kertaa `.onclick` komentoa `<button>`-objektille, jolle olemme antaneet id-tunnisteeksi "nappi". Toiminnallisuus näyttää hyvin samalta, kuin edellisessä osiossa teimme tekstin muuuttamisen kanssa.

Tehdään seuraavaksi ohjelma, joka käyttää kahta erilaista id-tunnistettua HTML-objektia.

{% include example.html
esimerkki-selitys='Painiketta <code>&lt;button&gt;</code> painettaessa suoritetaan komento <code>nappi.onclick</code>.'
esimerkki-koodi='<!doctype HTML>
<p id = teksti>hello!<p>
<button id=nappi>Vaihda tekstiä</button>
<script>
    nappi.onclick = () =>  {
	teksti.textContent = "Moikka moi!"
    }
${closeScript}'
%}

{% include task.html
tehtava-ohje='Kirjoita ohjelma, joka tulostaa näytölle "Klikkasit painiketta.'
tehtava-koodi='<!doctype HTML>
<button id=nappi>Klikkaa minua</button>
<script>
nappi.onclick = () => {
}
${closeScript}'
%}

{% include task.html
tehtava-ohje='Lisää ohjelmaan id-tunniste painikkeelle. Huomaa, että id-tunniste tulee antaa myös <code>.onclick</code>-metodille.'
tehtava-koodi='<!doctype HTML>
<button>Klikkaa minua</button>
<script>
	.onclick = () => {
    alert("Hyvää työtä!")
}
${closeScript}'
%}

{% include task.html
tehtava-ohje='Tässä tehtävässä vaihdetaan <code>&lt;p id=teksti&gt;</code>-objektin tekstiä. Lisää komento, joka vaihtaa <code>&lt;p id=teksti&gt;</code>-objektin tekstin tekstiksi "Onnistuin!".'
tehtava-koodi='<!doctype HTML>
<p id=teksti>
    Onnistutko vaihtamaan tämän tekstin?
<p>
<button id=nappi>Vaihda tekstiä</button>
<script>
    nappi.onclick = () => {
    }
${closeScript}'
%}

Osaamme luoda objekteja, tapahtumia ja kuuntelijoita. Osaamme siis tehdä jo aika paljon kaikenlaista. Kerrataan vielä, mitä olemme oppineet.

### Opitut komennot

Opimme tässä osassa muuttamaan tapahtumien avulla HTML-sivulla olevien objektien sisältöä. Kerrataan vielä, mitä komentoja opimme.

| Komento       | Esimerkki           | Selitys  |
| :-------------: |:-------------| :-----: |
| `<button id=nappi>` | `<button id=nappi>Tämä on painike.</button>` | Luo painikkeen HTML-koodissa. |
