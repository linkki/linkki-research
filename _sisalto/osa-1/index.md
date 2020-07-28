---
layout: default
title: Osa 1 – JavaScriptin alkeet
nav-title: Osa 1
---
## 1.1 HTML ja tägit

Sinunhan piti ohjelmoida Javascriptiä, joten miksi tämän osan otsikko on _HTML ja tägit_? HTML on kieli, jolla erilaiset elementit näytetään ohjelmassa. Elementtejä ovat esimerkiksi teksti, kuva tai painike, jotka näkyvät ohjelmassa. HTML-elementit koodataan käyttämällä tägejä.

Tutkitaan seuraavaksi, miten tekstielementti koodataan ohjelmaan. Tekstielementtiä käytetään, kun sivulla näytetään tekstiä. Tekstinä voidaan pitää mitä vain lauseen ja yhden kirjaimen välillä. Teksi elementti alkaa tägillä `<p>` ja loppuu tägiin `</p>`. Esimerkiksi lause "Mikä sinun nimesi on?" näyttää koodissa tekstielementtinä `<p>Mikä sinun nimesi on?</p>`.

Erilaisten elementtien muoto on aina sama. Ne alkavat jollakin tägillä ja loppuvat tägiin, jossa on mukana kauttamerkki - `/`. Tämä tarkoitta sitä, että kun ohjelmaan tehdään painike se kirjoitetaan `<button>` tägien sisälle ja painike-elementti koodissa on `<button>Painike</button>`. Huomaatko miten koodissa on taas aloitus- ja lopetustägit, vain tägien teksti vaihtuu?

{%
 include example.html

 esimerkki-selitys='Esimerkki erilaisista HTML-elementeistä.'

 esimerkki-koodi='<!doctype HTML>
<p> Tervetuloa! </p>
<button> Click me! </button>
<p> Tekstiä voi kirjoittaa myös ilman <i>tekstielementtiä.</i></p>
Tällöin tekstiin ei voi viitata <b>JavaScript-koodista.</b>'
%}

<div class="duckimg-center-container">
<img 
  src="{{ site.img-url }}/bold-2.webp" 
  class="duckimg-center"
/>
<!--
  height="600" width="500" 
-->
</div>

{% include task.html

tehtava-ohje='Täydennä tägien sisälle sopivat arvot.'

tehtava-koodi='<!doctype HTML>
Nimi: <b></b>
Ikä: <b></b>
Kotikaupunki <b></b>
Harrastan <i></i>.
<u>Ensimmäinen tehtävä on tehty.</u>'
%}

## 1.2 Mikä ihmeen JavaScript?

HTML-koodilla erilaiset HTML-elementit tulivat näkyviin ohjelmassa. JavaScript koodi kirjoitetaan myös HTML-elementin sisälle. JavaScript-elementti käyttää `<script>`-tägiä eli JavaScript-koodi kirjoitetaan ympäristöön, joka alkaa tägillä `<script>` ja loppuu tägiin `</script>`. JavaScriptiä siis kirjoitetaan skriptielementin sisälle, joka on `script`-tyyppinen HTML-elementti.

```html
<script>
    //JavaScript koodi kirjoitetaa tänne
</script>
```

Koska skriptielementti on vain yhden tyyppinen HTML-elementti, myös muunlaisia HTML-elementtejä voidaan kirjoittaa ohjelmaan.

{%
 include example.html

 esimerkki-selitys='HTML-elementtejä'

 esimerkki-koodi='<!doctype HTML>
<p> Tervetuloa! </p>
<button> Click me! </button>
<script>
${closeScript}'
%}

Alussa mainittiin, että HTML-elementit saavat sisällön näkymään ohjelmassaa. Skriptielementti on erityinen siinä mielessä, että se ei varsinaisesti tuo mitään näkyviin ohjelmaan. Skriptielementtiin kirjoitetaan toiminnallisuutta, jota käytetään ohjelmassa.

{% include tip.html
vinkki='Ole tarkkana oletko kirjoittamassa JavaScript vai HTML-koodia.'
%}

<div class="duckimg-center-container">
<img 
  src="{{ site.img-url }}/kaaroja.webp"
  class="duckimg-center"
/>
</div>

### Ensimmäinen komento `alert()`

JavaScript komennolla `alert()` _tulostetaan_ tekstiä näytölle. Tulostettava teksti kirjoitetaan sulkujen sisään ja ympäröidään vielä lainausmerkeillä - `""`. Tulostuskomento kokonaisuudessaan on siis muotoa `alert("Heissulivei Maailma!")`. Laitetaan koodi vielä `<script>`-tägien sisälle ja saamme valmiiksi ensimmäisen JavaScript-ohjelman.

```html
<script>
    alert("Heissulivei Maailma!")
</script>
```
{% include example.html
esimerkki-selitys='alert()-komento'

esimerkki-koodi='<!doctype HTML>
<script>
	alert("Heissulivei Maailma!")
${closeScript}'
%}

{% include extra.html
otsikko='&lt;p&gt; vs. alert()'
vinkki='Aluksi näytimme ohjelmassa tekstiä käyttämällä HTML-koodin tekstielementtiä ja nyt teemme lähes saman asian JavaScrip-koodilla. Seuraavassa osassa selviää, onko tässä mitään järkeä.'
%}

{% include task.html

tehtava-ohje='Täydennä <code>alert()</code>-komentoa niin, että se tulostaa nimesi näytölle.'

tehtava-koodi='<!doctype HTML>
<script>
	alert("");
${closeScript}'
%}

{% include task.html

tehtava-ohje='Kirjoita <code>alert("Heipä hei!")</code>-komento oikeaan kohtaan koodissa.'

tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}

{%
include task.html

tehtava-ohje='Kirjoita ohjelma, joka tulostaa "JavaScript on kivaa".'

tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}
{%
include task.html

tehtava-ohje='Kirjoita ohjelma, jossa on kaksi alert()-komentoa. Ensimmäinen alert()-komento tulostaa "Tervehdys ensimmäisestä komennosta!" ja toinen komento tulostaa "Tervehdys toisest komennosta!".'

tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}

{% include extra.html
otsikko="Parametri"
vinkki="Parametri on komennolle annettava arvo. Esimerkiksi <code>alert()</code>-komennolle annetaan parametrina sulkujen sisälle tuleva sisältö. Parametrien avulla annamme komennoille tietoa, jota ne voivat käyttää toiminnassaan."
%}

## 1.3 Uusi komento `prompt()`

{% include example.html
esimerkki-selitys='Tähän ohjelmaan on kirjoitettu <code>prompt()</code>-komento. 
Kokeile, mitä tapahtuu, kun klikkaat lippukuvaketta.'

esimerkki-koodi='<!doctype HTML>
<script>
	prompt()
${closeScript}'
%}

JavaScript-komento `prompt()` näyttää ohjelmassa samanlaisen ikkunan, kuin `alert()` komentokin, mutta tällä kertaa ikkunassa on myös kenttä, johon ohjelman käyttäjä voi kirjoittaa ja klikkaamalla "OK" _syöttää_ tiedon ohjelmalle. Kirjoittamalla yksinkertaisen ohjelman

```html
<script>
    prompt()
</script>
```

ikkuna aukeaa. 

{% include task.html 
tehtava-ohje='Kirjoita <code>prompt()</code>-komento oikeaan kohtaan koodissa.'
tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}

{% include example.html
esimerkki-selitys='<code>prompt()</code> komennolle annetaan <i>parametrina</i> merkkijono "Hei! Mikä sinun nimesi on?"'

esimerkki-koodi='<!doctype HTML>
<script>
	prompt("Hei! Mikä sinun nimesi on?")
${closeScript}'
%}

Kun `prompt()`-komennon sisälle kirjoitetaan lainausmerkkien sisälle merkkijono, niin teksti _tulostuu_ näytölle _syötekentän_ yläpuolelle

```html
<script>
    prompt("Hei! Mikä sinun nimesi on?")
</script>
```

{% include task.html
tehtava-ohje='Tee ohjelma, joka kysyy "Kuinka vanha sinä olet?". Käytätkö <code>prompt()</code>- vai <code>alert()</code>-komentoa?'
tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}

{% include example.html
esimerkki-selitys='<code>prompt()</code> komennon syöte talletetaan <b>muuttujaan</b> "nimi" ja se tulostetaan <code>alert()</code>-komennolla.'

esimerkki-koodi='<!doctype HTML>
<script>
	var nimi = prompt("Hei! Mikä sinun nimesi on?")
    alert("Hei "+ nimi + "!")
${closeScript}'
%}

Jotta _syötteellä_ voidaan tehdä jotain hyödyllistä, täytyy se tallettaa **muuttujaan**. Lisätään komennon `prompt("Hei! Mikä sinun nimesi on?")` vielä muuttujan määrittely

```html
<script>
    var nimi = prompt("Hei! Mikä sinun nimesi on?")
</script>
```

Huomaatko eron edelliseen koodiin? `prompt()`-komennon eteen on lisätty `var nimi =`, joka määrittelee `nimi`-nimisen muuttujanja yhtäsuuruus-merkki asettaa tälle `nimi`-muuttujalle arvon.

Kun yhdistetään `prompt()`-komento ja `alert()`-komento ohjelma pystyy käyttämään käyttäjän syötteitä toiminnassaan. Muuttujaa `nimi` voi käyttää `alert()`-komennossa.

```html
<script>
    var nimi = prompt("Hei! Mikä sinun nimesi on?")
    alert("Hei "+ nimi + "!")
</script>
```

{% include task.html
tehtava-ohje='Tee ohjelma, joka kysyy "Kuinka vanha sinä olet?". Tallenna vastaus muuttujaan, jonka nimi on "ikä". Tulosta tämän jälkeen <code>alert()</code>-komennolla "ikä"-muuttujan arvo.'
tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}

{% include task.html
tehtava-ohje='Tee ohjelma, joka kysyy ensin käyttäjältä "Mikä sinun nimesi on? ja talleta vastaus muuttujaan "nimi". Nimen kysymisen jälkeen ohjelman tulee kysyä "Kuinka vanha olet?" ja tallettaa vastaus muuttujaan "ikä". Tämän jälkeen ohjelma tulostaa "Hei " + nimi + "! Sinä olet " + ikä + " vuotta vanha.".'
tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}

{% include extra.html
otsikko='<code>alert()</code> on monipuolisempi. '
vinkki='Käyttäjälle tulostaminen JavaScrip-komennoilla on monipuolisempaa, kuin HTML-koodissa tekstin näyttäminen. Javascriptissä voidaan hyödyntää muuttujia tulostuksessa.'
%}

## 1.4 Rakennuspalikka: Muuttujat

`prompt()`-komennon yhteydessä esiteltiin muuttuja, jolle annettiin nimeksi `nimi`. Muuttujat ovat ohjelman eräänlaisia rakennuspalikoita. Muuttujat antavat tiedolle nimen, jonka jälkeen _muuttujan arvoa_ voidaan käyttää annetun _muuttujan nimen_ perusteella.

Muuttujan nimen päättää ohjelmoija – eli sinä. On kuitenkin hyvä, jos muuttujan nimi on sen käyttötarkoitusta kuvaava. Esimerkiksi ikä ja nimi kannattaa tallettaa muuttujiin, joiden nimet ovat `ikä` ja `nimi`.

Tiedät jo ainakin yhden tavan asettaa muuttujan arvon. `prompt()`-komennon yhteydessä muuttujan arvoksi asetettiin _käyttäjän syötte_. Tämä onnistui käyttämällä yhtäsuuruusmerkkiä muuttujan nimen jälkeen. Muuttujalle voidaan antaa arvo myös asettamalla haluttu arvo yhtäsuuruusmerkin oikeallepuolelle. Esimerkiksi muuttuja nimeltä `ikä`, jonka arvo on `12` määritetään kirjoittamalla koodiin `var ikä = 12` ja muuttuja, jonka nimi on `nimi` ja arvo `Milla` määritetään `var nimi = "Milla"`. `var`-sanaa käytetään, kun muuttuja määritellään ensimmäisen kerran.

{% include example.html
esimerkki-selitys='Muuttujan <code>eläin</code> arvoksi on annettu "koira" ja muuttujan <code>nimi</code> arvon määrittää käyttäjän <i>syöte</i>. Lopuksi muuttujia hyödynnetään tulostuksessa.'
esimerkki-koodi='<!doctype HTML>
<script>
	var eläin = "koira"
	var nimi = prompt("Olen " + eläin +". Mikä minun nimeni on?")
	alert("Minun nimeni on " + nimi + " ja olen " + eläin + ".")
${closeScript}'
%}

{% include extra.html 
otsikko='Samaa tarkoittavia ilmaisuja'
vinkki='Muuttujien luomista voidaan kutsua myös muuttujan määrittämiseksi tai muuttujan arvon asettamiseksi.'
%}

<div class="duckimg-center-container">
<img 
  src="{{ site.img-url }}/muuttuja.webp" 
  class="duckimg-center"
/>
<!--
width="901" height="507"
-->
</div>

{% include task.html
tehtava-ohje='Tee ohjelma, jossa ensin kysytään käyttäjältä jokin syöte, joka tallennetaan muuttujaan. Määrittele tämän jälkeen muuttuja, jolle annat itse arvon. Tulosta tämän jälkeen muuttujat näytölle käyttäen <code>alert()</code>-komentoa.'
tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}

Muuttujien arvoa voidaan **vaihtaa** määrittämällä uudelleen saman niminen muuttuja, mutta tällä kertaa uudella arvolla ilman `var`-sanaa. Esimerkiksi, jos olemme koodissa määritelleet muuttujan `var nimi = "Milla"`, niin kirjoittamalla koodiin `nimi = "Pekka"` vaihtaa muuttujan `nimi` arvoksi `"Pekka"`.

{% include example.html
esimerkki-selitys='<code>Lempiväri</code>-muuttujan arvo on ensin "vihreä", mutta se vaihdetaan arvoksi "keltainen".'
esimerkki-koodi='<!doctype HTML>
<script>
	var lempiväri = "vihreä"
	alert("Lempivärini oli ensin " + lempiväri)
	lempiväri = "keltainen"
	alert("Nykyään lempivärini on " + lempiväri)
${closeScript}'
%}

{% include task.html
tehtava-ohje='Ohjelmassa on valmiiksi muuttuja <code>suunta</code>, jonka arvo on "oikea". Kirjoita ohjelmaan koodi, joka vaihtaa <code>suunta</code> muuttujan arvoksi "vasen" ennen seuraavaa tulostusta.'
tehtava-koodi='<!doctype HTML>
<script>
var suunta = "oikea"
alert("Aluksi suunta oli " + suunta)

alert("Koska huomasimme joutuvamme umpikujaan uudeksi suunnaksi valittiin " + suunta)
${closeScript}'
%}

### Lukumuuttujat

Muuttujilla, joiden arvoksi on asetettu luku, voidaan käyttää matemaattisissa lausekkeissa, kuten tavallisia lukuja. Esimerkiksi kahdelle lukumuuttujalle voidaan suorittaa tavalliseen tapaan yhteen-, vähennys-, kerto- tai jakolasku

```javascript
var a = 12
var b = 6
var yhteensa = a+b
var erotus = a-b
var tulo = a*b
var osamäärä = a/b
```
{% include example.html
esimerkki-selitys='Lukumuuttujan a arvo on 12 ja lukumuuttujan b arvo on 6. Laskutoimitusten tulokset tallennetaan muuttujiin ja muuttujat tulostetaan.'
esimerkki-koodi='<!doctype HTML>
<script>
var a = 12
var b = 6
alert("Muuttujan a arvo on " + a +" ja muuttujan b arvo on " + b)
var yhteensa = a+b
alert("Yhteenlaskun tulos on "+ yhteensa)
var erotus = a-b
alert("Vähennyslaskun tulos on "+ erotus)
var tulo = a*b
alert("Kertolaskun tulos on  "+ tulo)
var osamäärä = a/b
alert("Jakolaskun tulos on " + osamäärä)
${closeScript}'
%}

Tällöin muuttujien arvoksi asetetaan yhtäsuuruusmerkin oikealla puolella olevan lausekkeen tulos. Tietokone siis näkee edellisen esimerkin koodin niin, että muuttujan nimen tilalle on sijoitettu sitä vastaava numeroarvo

```javascript
var a = 12
var b = 6
var yhteensa = 12+6
var erotus = 12-6
var tulo = 12*6
var osamäärä = 12/6
```

### Tekstimuuttujat

Kun muuttujan arvoksi asetetaan tekstiä, teksti tulee laittaa lainausmerkkien - `""` – sisälle. Tekstimuuttujia voidaan yhdistää käyttämällä plus-merkkiä - `+`. 

```javascript
var nimi = "Milla"
var lempiruoka = "makaronilaatikko"
var koira = "Papu"
var uusiNimi = nimi + koira
```

{% include example.html
esimerkki-selitys='Tekstimuuttujia yhdistetään muuhun tekstiin käyttämällä "+"-merkkiä. Myös tekstimuuttujien yhdistämienn toisiinsa tapahtuu "+"-merkillä.'
esimerkki-koodi='<!doctype HTML>
<script>
var nimi = "Milla"
var lempiruoka = "makaronilaatikko"
var koira = "Papu"
alert("Hei! Nimeni on " + nimi + " ja lempiruokani on " 
+ lempiruoka + ". Minulla on lemmikki, jonka nimi on " 
  + koira)
var uusiNimi = nimi + koira
alert("Kun nimeni yhdistää lemmikkini nimeen saadaan " + uusiNimi)
${closeScript}'
%}

Esimerkin `uusiNimi`-muuttujan arvo saadaan yhdistämällä `nimi` ja `koira`-muuttujien arvo. Näin ollen `uusiNimi` arvo on `"MillaPapu"`.

### Yhdistetään muuttujat

Lukumuuttajan yhdistäminen tekstimuuttujaan tapahtuu plusmerkillä. Kun luvun laittaa keskelle tekstiä, pitää sen molemmille puolille laittaa plusmerkit.
```javascript
var yhteenlasku = 6 + 6
var teksti = "Nimeni on Milla ja olen " + yhteenlasku + " vuotta vanha."
```

{% include example.html
esimerkki-selitys='<code>alert()</code>-komennolle on annettu <i>parametrina</i> tekstimuuttuja nimeltä <code>teksti</code>. Muuttujan <code>teksti</code> arvoksi on annettu merkkijono, johon on yhdistettu lukumuuttuja nimeltään <code>yhteenlasku</code>.'
esimerkki-koodi='<!doctype HTML>
<script>
var yhteenlasku = 6 + 6
var teksti = "Nimeni on Milla ja olen " + yhteenlasku + " vuotta vanha."
alert(teksti)
${closeScript}'
%}

{% include task.html
tehtava-ohje='Tee ohjelma, joka kysyy ensin käyttäjältä "Mikä sinun nimesi on? ja talleta vastaus muuttujaan "nimi". Nimen kysymisen jälkeen ohjelman tulee kysyä "Kuinka vanha olet?" ja tallettaa vastaus muuttujaan "ikä". Tämän jälkeen ohjelma tulostaa "Hei " + nimi + "! Sinä olet " + ikä + " vuotta vanha.".'
tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}

## Kysymyksiä

<div id="osa1kysymykset"></div>

<script>createQuestionnaire({
	id: "osa1kysymykset",
	questions: [
		{
			text: "Mitä tägiä käytetään tummennetun tekstin näyttämiseen?",
			alternatives: [
				{ text: "<t>" },
				{ text: "<l>" },
				{ text: "<w>" },
				{ text: "<b>", correct: true },
				{ text: "<d>" },
			]
		},
		{
			text: "Mitä tägiä käytetään kursiivitekstin näyttämiseen?",
			alternatives: [
				{ text: "<b>" },
				{ text: "<d>" },
				{ text: "<i>", correct: true },
				{ text: "<k>" },
				{ text: "<p>" },
			]
		},
		{
			text: "Ohjelmoija haluaa näyttää tekstin \"Ankat ovat kivoja!\", mutta hänen koodinsa ei toimi. Miksi? Hän on kirjoittanut koodiin: alert(Ankat ovat kivoja!)",
			alternatives: [
				{ text: "alert-komento ei osaa näyttää huutomerkkejä" },
				{ text: "Tekstissä on liikaa välilyöntejä" },
				{ text: "Tekstin ympärillä ei ole lainausmerkkejä", correct: true },
			]
		},
		{
			text: "Ohjelmoija haluaa näyttää tekstin \"Joessa ui 4 ankkaa\". Hän on kirjoittanut koodiin: alert(\"Joessa ui \" + 2 + 2 + \" ankkaa\"). Mitä hänen koodinsa tulostaa?",
			alternatives: [
				{ text: "Joessa ui 4 ankkaa" },
				{ text: "Joessa ui 22 ankkaa", correct: true },
				{ text: "Koodi kaatuu, koska se on virheellinen" },
			]
		},
		{
			text: "Miten edellisen kysymyksen ongelman voi ratkaista?",
			alternatives: [
				{ text: "Laskemalla laskutoimituksen muuttujassa etukäteen", correct: true },
				{ text: "Käyttämällä sulkuja laskutoimituksen ympärillä", correct: true },
				{ text: "Käyttämällä +-merkin sijasta &-merkkiä" },
			]
		}
	]
})</script>

## 2.4 Yhteenveto komennoista

| Komento       | Esimerkki           | Selitys  |
| :-------------: |:-------------:| :-----: |
| `alert()` | `alert("Kissat ovat kivoja.")` | Näyttää käyttäjälle merkkijonon |
| `prompt()` | `prompt("Mikä sinun nimesi on?")` | Kysyy käyttäjältä syötteen |
| `var muuttujanNimi =` | `var viesti = "Hauska tavata"` | Luo uuden muuttujan |
|   | var syöte = prompt("Nimesi?")  |  |
