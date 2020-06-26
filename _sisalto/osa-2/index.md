---
layout: default
title: Osa 2 – Nyt alkaa tapahtumaan
nav-title: Osa 2
---
## 2.1 Tapahtumat

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

Kun klikkaat hiirellä tietokoneen näyttöä tai painat tietokoneen näppäimiä, saat aikaan **tapahtuman**. Javascript koodilla määritellään, mitä klikkauksesta tai näppäimen painamisesta tapahtuu.

## 2.2 Tapahtuma: Klikkaus

Jotta tiedetään, missä klikkaus tapahtuu on HTML-elementit merkittävä _id-tunnistella_. Luodaan tekstielementti ja annetaan sille _id-tunnisteeksi_ `teksti` `<p id=teksti>Klikkaa. minua</p>`. Id-tunniste määritetään **tägien** sisällä käyttämällä määrettä `id=` ja yhtäsuuruusmerkin oikealla puolella on **id**, joka elementille asetetaan. 

Käyttämällä id-tunnistetta Javascript-koodissa luodaan **kuuntelija**, joka odottaa, milloin elementtiä klikataan eli milloin _tapahtuma_ tapahtuu. Kuuntelija luodaan määrittämällä skriptielementin sisällä **tapahtumankäsittelijä**

```html
<p id=teksti>
    Klikkaa minua.
</p>
<script>
    teksti.onclick = () => {
    }
</script>
```

**Tapahtumankäsittelijä** määritetään **id-tunnistetulle** elementille kirjoittamalla piste elementin id-tunnisteen jälkeen ja pisteen jälkeen kirjoitetaan avainsana `onclick`. Tällä avainsanalla saamme tietää, milloin id-tunnistettua elementtiä klikataan. Avainsanan jälkeen määritetään hieman kummallisen näköinen funktiokutsun `= () => { }`. Funktioihin tutustutaan lisään osassa 6, mutta ohitetaan ne nyt ja käytetään rakennetta osana **tapahtumankäsittelijää**. Tärkein osa tästä osasta on viimeiset aaltosulkeet `{ }`. Niiden sisälle kirjoitetaan se koodi, joka suoritetaan, kun id-tunnistettua elementtiä klikataan. Esimkerkiksi, jos tekstin klikkaamisen jälkeen halutaan tulostaa käyttäjälle lause `Onnittelut, klikkasit oikeaa paikkaa.`. Kirjoitetaan se _aaltosulkeiden sisälle_  

```html
<p id=teksti>
    Klikkaa minua.
</p>
<script>
    teksti.onclick = () => {
        alert("Onnittelut, klikkasit oikeaa paikkaa.")
    }
</script>
```

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

{% include extra.html
otsikko='Id-tunniste'
vinkki='Id-tunniste annetaan HTML-elementille. Id-tunnistetta käytetään HTML-koodin ja Javascript-koodin väliseen komminukaatioon. Kun HTML-elementti tunnistetaan id-tunnisteella, niin siihen voidaan viitata Javascript koodissa.' 
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
tehtava-ohje='Kirjoita ohjelmaan tekstielementti, jossa lukee "Koodiankat auttavat ihmisiä ohjelmoinnissa.". Anna tekstielementille tunnisteeksi "teksti". Lisää <code>onclick</code>-komento ja kirjoita sen sisälle <code>alert()</code>-komento, joka tulostaa tekstin "Koodiankat ovat söpöjä.".'
tehtava-koodi='<!doctype HTML>
<script>
${closeScript}'
%}

### HTML-elementin tekstin vaihtaminen

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

### Painike

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

<button>Painike</button> on HTML-elementti, jota usein on tarkoitus klikata. Painikkeen määrittelävä tägi on `<button>`. Ilman Javascript-koodia painikkeen klikkaamisesta ei tapahdu mitään. Painikkeen klikkausta _kuunnellaan_ samalla tavalla, kuin muidenkin HTML-elementtien klikkausta. Tämä tarkoittaa sitä, että painikkeelle annetaan **id-tunniste** ja tämän jälkeen tunnistetulle painikkeelle tehdään **tapahtumankäsittelijä** skripitielementtiin.

```html
<button id=painike>
    Painike
</button>
<script>
    painike.onclick = () => {
        alert("Klikkasit painiketta.")
    }
</script>
```

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

## 2.3 Tapahtuma: Näppäin



Näppäimen painallusta kuunnellan eri tavalla, kuin klikkaamista. Tämä johtuu siitä, että klikkaaminen kohdistuu tavallisesti johonkin **elementtiin**, mutta näppäimen painaminen ei yleensä liity mihinkään yksittäiseen elementtiin.

Luodaan ensin tekstielementti ja asetetaan sille **id-tunniste**, jolla tekstiä voidaan muutta, kun näppäintä painetaan. 
```html
<p id=teksti>
</p>
```
Lisätään skriptielementti ja kirjoitetaan sinne koko sivua kuunteleva tapahtumankäsittelijä

```html
<p id=teksti>
</p>
<script>
    document.onkeydown = event => {
    }
</script>
```

Tämä tapahtumankäsittelijä odottaa koko sivulla näppäimen painallusta, joten pisteen jälkeen tulee avainsana `onkeydown`. Tämän jälkeen teemme samantapaisen funktiokutsun, kuin klikkauksenkin tapauksessa, mutta lisäämme koodiin avainsanan `event`. Lopuksi aaltosulkeiden sisälle määritetään, mitä näppäimen painalluksessa tapahtuu. Määritetään, että näppäimen painalluksesta tekstielementin sisältöä muutetaan käyttämällä komentoa `textContent`.
```html
<p id=teksti>
</p>
<script>
    document.onkeydown = event => {
        teksi.textContent = "Näppäintä painettiin."
    }
</script>
```

Tällä hetkellä mikä tahansa painike saa aikaan tapahtuman. Seuraavassa osassa opimme, miten voimme selvittää ehtojen avulla, mitä painiketta käyttäjä painoi.


## Opitut komennot


| Komento       | Esimerkki           | Selitys  |
| :-------------: |:-------------| :-----: |
| `id = teksti` | `<p id = teksti> Tekstillä on tunnisteena "teksti"` | Lisää tunnisteen HTML-elementille. |
| `.onclick = () = {}` | `teksti.onclick = () => {` | Odottaa käyttäjältä klikkausta asetettuun muuttujaan. |
| | `//...` | |
| | `}` | |
| `textContent` | `teksti.textContent = "Moikka moi!` | Vaihtaa id-tunnistetun muuttujan arvon. |








### Opitut komennot

Opimme tässä osassa muuttamaan tapahtumien avulla HTML-sivulla olevien objektien sisältöä. Kerrataan vielä, mitä komentoja opimme.

| Komento       | Esimerkki           | Selitys  |
| :-------------: |:-------------| :-----: |
| `<button id=nappi>` | `<button id=nappi>Tämä on painike.</button>` | Luo painikkeen HTML-koodissa. |
