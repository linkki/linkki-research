---
layout: default
title: Osa 2 – Nyt alkaa tapahtumaan
nav-title: Osa 2
---
## 2.1 Tapahtumat

{%
 include example.html

 esimerkki-selitys='Tekstiä klikkaamalla suoritetaan <b>tapahtuma</b>. '

 esimerkki-koodi='<p id = teksti>
    Klikkaa minua.
</p>
<script>
    teksti.onclick = () => {
	alert("Onnittelut, klikkasit oikeaa paikkaa.")
    }
${closeScript}'
%}

Kun klikkaat hiirellä tietokoneen näyttöä tai painat tietokoneen näppäimiä, saat aikaan **tapahtuman**. Javascript-koodilla määritellään, mitä klikkauksesta tai näppäimen painamisesta tapahtuu.

## 2.2 Tapahtuma: Klikkaus

<div class="duckimg-center-container">
<img 
  src="{{ site.img-url }}/hiirikuuntelu.webp" 
  class="duckimg-center"
/>
</div>

<div class="duckimg-caption">
Ankka kuuntelei, tapahtuuko hiiressä mitään.
</div>

Jotta tiedetään, missä klikkaus tapahtuu on HTML-elementit merkittävä _id-tunnistella_. Luodaan tekstielementti ja annetaan sille id-tunnisteeksi `teksti`: `<p id=teksti>Klikkaa. minua</p>`. Id-tunniste määritetään **tagien** sisällä käyttämällä määrettä `id=` ja yhtäsuuruusmerkin oikealla puolella on **tunniste**, joka elementille asetetaan. 

Javascript-koodissa luodaan **kuuntelija**, joka odottaa, milloin id-tunnistettua elementtiä klikataan eli milloin _tapahtuma_ tapahtuu. Kuuntelija luodaan määrittämällä skriptielementin sisällä **tapahtumakäsittelijä**:

```html
<p id=teksti>
    Klikkaa minua.
</p>
<script>
    teksti.onclick = () => {
    }
</script>
```

**Tapahtumakäsittelijä** määritetään **id-tunnistetulle** elementille kirjoittamalla piste elementin id-tunnisteen jälkeen ja pisteen jälkeen kirjoitetaan avainsana `onclick`. Tällä avainsanalla saamme tietää, milloin id-tunnistettua elementtiä klikataan. Avainsanan jälkeen määritetään hieman kummallisen näköinen funktiokutsun `= () => { }`. Funktioihin tutustutaan lisään osassa 6, mutta ohitetaan ne nyt ja käytetään rakennetta osana **tapahtumakäsittelijää**. Tärkein osa tästä osasta on viimeiset aaltosulkeet `{ }`. Niiden sisälle kirjoitetaan se koodi, joka suoritetaan, kun id-tunnistettua elementtiä klikataan. Esimerkiksi jos tekstin klikkaamisen jälkeen halutaan tulostaa käyttäjälle lause `"Onnittelut, klikkasit oikeaa paikkaa."`, kirjoitetaan se _aaltosulkeiden sisälle_:

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
tehtava-ohje='Kirjoita ohjelmaan koodi, jossa komennolla <code>alert()</code> tulostetaan "Ankat uivat lammessa.", kun tekstiä "Missä ankat uivat?" klikataan.'
tehtava-koodi='<p id = teksti>
    Missä ankat uivat?
</p>
<script>
teksti.onclick = () => {
}
${closeScript}'
%}

{% include task.html
tehtava-ohje='Kirjoita ohjelmaan koodi, jossa <code>alert()</code>-komennolla tulostetaan "Höyhenpeite on myös vettähylkivä.", kun tekstiä "Ankkojen höyhenpeite on pehmeä" klikataan.'
tehtava-koodi='<p id = teksti>
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
tehtava-ohje='Ohjelmoija on unohtanut tästä koodista id-tunnisteen. Korjaa koodiin id-tunniste siten, että kun tekstielementtiä klikataan, niin tulostetaan Javascript koodin <code>alert()</code>-komento.'
tehtava-koodi='<p>
    Saammeko tekstin toimimaan tapahtumana?
</p>
<script>
    .onclick = () => {
	alert("Onnittelut, osasit luoda oikean id-tunnuksen.")
    }
${closeScript}'
%}

{% include task.html
tehtava-ohje='Kirjoita ohjelmaan tekstielementti, jossa lukee "Koodiankat auttavat ihmisiä ohjelmoinnissa.". Anna tekstielementille tunnisteeksi "teksti". Lisää <code>onclick</code>-komento ja kirjoita sen sisälle <code>alert()</code>-komento, joka tulostaa tekstin "Lisäksi koodiankat ovat söpöjä.".'
tehtava-koodi='<script>
${closeScript}'
%}

### HTML-elementin tekstin vaihtaminen

<div class="duckimg-center-container">
<img
  src="{{ site.img-url }}/html-vaihto.webp"
  class="duckimg-center"
/>
</div>

{% include example.html
esimerkki-selitys='Tekstiä klikkaamalla teksti vaihtuu.'
esimerkki-koodi='<p id = teksti>Klikkaa minua.</p>
<script>
    teksti.onclick = () => {
		teksti.textContent = "Moikka moi!"    
    }
${closeScript}'
%}

Id-tunnistetun tekstielementin sisältö eli sitä, mitä tekstielementissä lukee vaihdetaan käyttämällä id-tunnistetun tekstielementin komentoa `textContent`.

### Painike

{% include example.html
esimerkki-selitys='Painikkeesta tapahtuu alert().'
esimerkki-koodi='<button id=nappi>Klikkaa tästä.</button>
<script>
	nappi.onclick = () =>  {
		alert("Nappia painettiin.")
	}
${closeScript}'
%}


{% include example.html
esimerkki-selitys='Painiketta <code>&lt;button&gt;</code> painettaessa suoritetaan komento <code>nappi.onclick</code>.'
esimerkki-koodi='<p id = teksti>hello!<p>
<button id=nappi>Vaihda tekstiä</button>
<script>
    nappi.onclick = () =>  {
	teksti.textContent = "Moikka moi!"
    }
${closeScript}'
%}

<button>Painike</button> on HTML-elementti, jota usein on tarkoitus klikata. Painikkeen määrittelävä tagi on `<button>`. Ilman Javascript-koodia painikkeen klikkaamisesta ei tapahdu mitään. Painikkeen klikkausta _kuunnellaan_ samalla tavalla, kuin muidenkin HTML-elementtien klikkausta. Tämä tarkoittaa sitä, että painikkeelle annetaan **id-tunniste** ja tämän jälkeen tunnistetulle painikkeelle tehdään **tapahtumakäsittelijä** skripitielementtiin.

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
tehtava-koodi='<button id=nappi>Klikkaa minua</button>
<script>
nappi.onclick = () => {
}
${closeScript}'
%}

{% include task.html
tehtava-ohje='Lisää ohjelmaan id-tunniste painikkeelle. Huomaa, että id-tunniste tulee antaa myös <code>.onclick</code>-metodille.'
tehtava-koodi='<button>Klikkaa minua</button>
<script>
	.onclick = () => {
    alert("Hyvää työtä!")
}
${closeScript}'
%}

{% include task.html
tehtava-ohje='Tässä tehtävässä vaihdetaan <code>&lt;p id=teksti&gt;</code>-elementin tekstiä. Lisää komento, joka vaihtaa <code>&lt;p id=teksti&gt;</code>-elementin tekstin tekstiksi "Onnistuin!".'
tehtava-koodi='<p id=teksti>
    Onnistutko vaihtamaan tämän tekstin?
<p>
<button id=nappi>Vaihda tekstiä</button>
<script>
    nappi.onclick = () => {
    }
${closeScript}'
%}

## 2.3 Tapahtuma: Näppäin

{%
include example.html
esimerkki-selitys='Ohjelma odottaa, milloin käyttäjä painaa painiketta. Seuraavassa luvussa opimme, miten erotetaan, mitä näppäintä käyttäjä painoi. Esimerkissä tehdään aluksi tyhjä tekstielementti, joten kun painat lippukuvaketta mitään ei tule näkyviin.'
esimerkki-koodi='<p id=teksti>
</p>
<script>
    document.onkeydown = event => {
        teksti.textContent = "Näppäintä painettiin."
    }
${closeScript}'
%}

Näppäimen painallusta kuunnellan eri tavalla, kuin klikkaamista. Tämä johtuu siitä, että klikkaaminen kohdistuu tavallisesti johonkin **elementtiin**, mutta näppäimen painaminen ei yleensä liity mihinkään yksittäiseen elementtiin.

Luodaan ensin tekstielementti ja asetetaan sille **id-tunniste**, jolla tekstiä voidaan muutta, kun näppäintä painetaan. 
```html
<p id=teksti>
</p>
```
Lisätään skriptielementti ja kirjoitetaan sinne koko sivua kuunteleva tapahtumakäsittelijä:

```html
<p id=teksti>
</p>
<script>
    document.onkeydown = event => {
    }
</script>
```

Tämä tapahtumakäsittelijä odottaa koko sivulla näppäimen painallusta, joten pisteen jälkeen tulee avainsana `onkeydown`. Tämän jälkeen teemme samantapaisen funktiokutsun, kuin klikkauksenkin tapauksessa, mutta lisäämme koodiin avainsanan `event`. Lopuksi aaltosulkeiden sisälle määritetään, mitä näppäimen painalluksessa tapahtuu. Määritetään, että näppäimen painalluksesta tekstielementin sisältöä muutetaan käyttämällä komentoa `textContent`.
```html
<p id=teksti>
</p>
<script>
    document.onkeydown = event => {
        teksti.textContent = "Näppäintä painettiin."
    }
</script>
```

Tällä hetkellä mikä tahansa painike saa aikaan tapahtuman. Seuraavassa osassa opimme, miten voimme selvittää ehtojen avulla, mitä painiketta käyttäjä painoi.

{% include task.html
tehtava-ohje='Tee ohjelma, joka vaihtaa tekstielementin tekstiksi "Voitit pelin.".'
tehtava-koodi='<p id=teksti>
    Paina mitä tahansa näppäintä näppäimistöllä!
<p>
<script>

${closeScript}'
%}

{% include task.html
tehtava-ohje='Tee ohjelma, jossa näppäintä painettaessa näytölle tulostuu <code>alert()</code>-komennolla "PÖÖ!".'
tehtava-koodi='<script>

${closeScript}'
%}

## Opitut komennot




| Komento       | Esimerkki           | Selitys  |
| :-------------: |:-------------| :-----: |
| `id = teksti` | `<p id = teksti> Tekstillä on tunnisteena "teksti"` | Lisää tunnisteen HTML-elementille. |
| `.onclick = () = {}` | `teksti.onclick = () => {` | Odottaa käyttäjältä klikkausta asetettuun muuttujaan. |
| | `//...` | |
| | `}` | |
| `textContent` | `teksti.textContent = "Moikka moi!` | Vaihtaa id-tunnistetun muuttujan arvon. |
| `<button id=nappi>` | `<button id=nappi>Tämä on painike.</button>` | Luo painikkeen HTML-koodissa. |
| `document.onkeydown = event => { ... }` | `document.onkeydown = event => {` | Odottaa, milloin käyttäjä painaa näppäimistön painiketta. |
|| `alert("Painoit näppäintä")` | |
|| `}` | |
