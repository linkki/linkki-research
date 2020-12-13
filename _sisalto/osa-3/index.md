---
layout: default
title: Osa 3 - Ehdot
nav-title: Osa 3
---

## 3. 1 Mitä ovat ehtolauseet?

{% include example.html
esimerkki-selitys='Ehtolauseilla voidaan määritellä ohjelmalle vaihtelevia lopputuloksia.'
esimerkki-koodi='<script>
    let almanPähkinät = prompt("Kuinka monta pähkinää Almalla on?")
    let brunonPähkinät = 0

    if (almanPähkinät > 5) {
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    }

    alert("Almalla on " + almanPähkinät + " pähkinää. Brunolla on " + brunonPähkinät + " pähkinää.")

${closeScript}'
%}

<div>
  <figure class="duckimg-float" style="width:400;">
  <img
    src="{{ site.img-url }}/alma-bruno_1.webp"
    width="400"
  />
  </figure>

  <p>
    Jos Almalla on enemmän kuin 5 pähkinää, niin hän voi jakaa ne ystävänsä Brunon kanssa. Jakaako Alma pähkinät Brunon kanssa, jos hänellä on 10 pähkinää? Entäs jos hänellä on 2 pähkinää?
  </p>
  <div class="clear"></div>
</div>

<div>
  <figure class="duckimg-float" style="width:400;">
  <img
    src="{{ site.img-url }}/alma-bruno_2.webp"
    width="400"
  />
  </figure>

  <p>
    <b>Ehdon</b> "Jos Almalla on enemmän kuin 5 pähkinää, niin hän jakaa pähkinät" perusteella ensimmäisessa tapauksessa Alma jakaa pähkinät Brunon kanssa. Kahden pähkinän tapauksessa näin kuitenkaan ei ole.
  </p>
  <div class="clear"></div>
</div>

<div>
  <figure class="duckimg-float" style="width:400;">
  <img
    src="{{ site.img-url }}/alma-bruno_3.webp"
    width="400"
  />
  </figure>
  <p>
    Almalla oli ehto, jonka perusteella hän toimi tietyllä tavalla. Seuraavaksi tutustumme, miten voimme antaa tietokoneella samanlaisia ehtoja.
  </p>
  <div class="clear"></div>
</div>

## 3.2 Jos-niin ehto

_Jos_ Almalla on ennemmän kuin 5 pähkinää _niin_ Alma jakaa pähkinät Brunon kanssa.

Ehtolause on muotoa `if (ehto)`. Kun ehto toteutuu, suoritetaan koodi `{ }` lohkon sisältä. Edellisen kohdan esimerkki voitaisiin siis kirjoittaa muodossa

```javascript
    if(almanPähkinät > 5){
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    }
```

{% include example.html
esimerkki-selitys='Tässä esimerkissä Almalla on aluksi 10 pähkinää.'
esimerkki-koodi='<script>
    let almanPähkinät = 10
    let brunonPähkinät = 0

    if (almanPähkinät > 5) {
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    }

    alert("Almalla on " + almanPähkinät + " pähkinää. Brunolla on " + brunonPähkinät + " pähkinää.")
${closeScript}'
%}

{% include task.html
tehtava-ohje='Almalle ei ole annettu lainkaan pähkinöitä! Korjaa koodia niin, että Almalla on 2 pähkinää. Saako Bruno yhtään pähkinää?'
tehtava-koodi='<script>
    let almanPähkinät = 
    let brunonPähkinät = 0
    if (almanPähkinät > 5) {
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    }
    alert("Almalla on " + almanPähkinät + " pähkinää. Brunolla on " + brunonPähkinät + " pähkinää.")
${closeScript}'
%}

Ehtolauseesta on erityisesti hyötyä silloin kun muuttujien arvo voi vaihtua.

{% include example.html
esimerkki-selitys='Miksi syötteellä 3 Bruno ei saa pähkinöitä, mutta syötteellä 7 hän saa.'
esimerkki-koodi='<script>
    let pähkinät = prompt("Kuinka monta pähkinää?")
    let brunonPähkinät = 0
    alert("Pähkinöitä on " + pähkinät + " kappaletta.")
    if (pähkinät > 5) {
        brunonPähkinät = pähkinät/2
        pähkinät = pähkinät/2
    }
    alert("Bruno saa " + brunonPähkinät + " pähkinää ja pähkinöitä jää jäljelle " + pähkinät)
${closeScript}'
%}

### Vertailu

<figure class="duckimg-float" style="width:300;">
  <img
    src="{{ site.img-url }}/2lt3.webp"
    width="300"
  />
  <figcaption class="duckimg-caption">
Kaksi pähkinää on vähemmän kuin kolme pähkinää.
  </figcaption>
</figure>

Matematiikasta tuttuja vertailuoperaattoreita ovat _pienempi kuin_ <code>&lt;</code>, _suurempi kuin_ <code>&gt;</code> ja _yhtäsuuri kuin_ <code>&equals;</code>. Ohjelmoinnissa käytettään lähes samoja operaattoreita! Vertailua käytetään erityisesti silloin, kun ehtolausetta käytetään. Vertailun tulos määrittää sen, tapahtuuko ehto.
    
Numeroiden kokoa voidaan vertailla _pienempi kuin_ ja _suurempi kuin_ -merkeillä tavallisesti.

{% include example.html
esimerkki-selitys='Numeroita vertaillaan kuten matematiikassa.'
esimerkki-koodi='<script>
        if (6 > 3) {
            alert("Kuusi on suurempaa kuin kolme.")
        }
        if (2 < 7) {
            alert("Kaksi on pienempää kuin seitsemän.")
        }
        if (5 < 3) {
            alert("Viisi on pienempää kuin kolme.")
        }
    ${closeScript}'
%}

Yhtäsuuruuden vertailu onnistuu Javascriptissä käyttämällä kolmoisyhtäsuuruutta <code>===</code>. Kolmoisyhtäsuuruus käy merkkijonojen ja numeroiden vertailuun.

{% include example.html
esimerkki-selitys='Yhtäsuuruutta vertaillaa kolmoisyhtäsuuruudella.'
esimerkki-koodi='<script>
        if ("ankka" === "ankka") {
            alert("ankka on sama asia kuin ankka.")
        }
        if ("Ankka" === "ankka") {
            alert("Ankka on sama asia kuin ankka")
        }
        if (5 === 5) {
            alert("5 = 5")
        }
        if (5 === 2) {
            alert("5 = 2")
        }
    ${closeScript}'
%}

{% include note.html 
otsikko='"ankka" === "Ankka"'
teksti='Huomasithan, että edellisessä esimerkissä isolla kirjoitettu Ankka ei ollut sama asia kuin pienellä kirjoitettu ankka. Tässä tuleekin olla erityisen tarkkana. JavaScript on <b>case sensitive</b> eli sen mielestä isolla ja pienellä kirjoitetut sanat ovat erilaisia.'
%}

{% include task.html
tehtava-ohje='Täydennä jos-ehtoja niin, että nimi tulostuu oikein.'
tehtava-koodi='<script>
        ekaNimi = "Bella"
        tokaNimi = "Anton"
        if(){
            alert("Hei Bella!")
        }
        if(){
            alert("Hei Anton!")
        }
    ${closeScript}'
%}

{% include task.html
tehtava-ohje='Täydennä jos-ehtoa niin, että jos muuttujan brunonPähkinät on pienempää kuin 2, niin Bruno saa lisää pähkinöitä.'
tehtava-koodi='<script>
        brunonPähkinät = Number(prompt("Kuinka monta pähkinää Brunolla on?"))
        if(){
            pähkinät = Number(prompt("Kuinka monta pähkinää Brunolle annetaan?"))
            brunonPähkinät += pähkinät
        }
        alert("Brunolla on " + brunonPähkinät + " pähkinää.")
    ${closeScript}'
%}

## 3.2 Jos muuten

{% include example.html
esimerkki-selitys='Bruno saa lohdutuspalkintona pähkinöitä, jos Almalla on liian vähän pähkinöitä.'
esimerkki-koodi='<script>
    let almanPähkinät = prompt("Kuinka monta pähkinää Almalla on?")
    let brunonPähkinät = 0

    if (almanPähkinät > 5) {
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    } else {
        brunonPähkinät = 2
    }

    alert("Almalla on " + almanPähkinät + " pähkinää. Brunolla on " + brunonPähkinät + " pähkinää.")

${closeScript}'
%}

_Jos_ Almalla on ennemmän kuin 5 pähkinää _niin_ Alma jakaa pähkinät Brunon kanssa. _Muuten_ Bruno saa 2 pähkinää.

Edellisessä esimerkissä jos Almalla on 5 pähkinää, niin hän jakaa pähkinät Brunon kanssa. Mitä jos Almalla on alle 5 pähkinää? Tällöin Bruno ei saa yhtään pähkinää. Tälläinen tilanne on Brunon mielestä epäreilu ja hän joutuu katselemaan vierestä, kun Alma syö pähkinöitä. Voimme kuitenkin määritellä, että Bruno saa lohdutuspalkinnoksi 3 pähkinää.

```javascript
    if(almanPähkinät > 5){
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    } else {
        brunonPähkinät = 2
    }
```

Jos _jos_-ehto ei toteudu niin suoritetaan _else_-lohko.

{%include example.html
esimerkki-selitys='Tässä esimerkissä Almalla on aluksi 2 pähkinää. Kuinka monta pähkinää Brunolla on?'
esimerkki-koodi='<script>
        almanPähkinät = 2
        brunonPähkinät = 0
        if (almanPähkinät > 5) {
            brunonPähkinät = almanPähkinät/2
            almanPähkinät = almanPähkinät/2
        } else {
            brunonPähkinät = 2
        }
        alert("Almalla on " + almanPähkinät + " pähkinää. Brunolla on " + brunonPähkinät + " pähkinää.")
        
    ${closeScript}'
%}

{% include example.html
esimerkki-selitys='Esimerkissä on kuuntelija, joka odottaa, milloin tekstiä klikataan. Kun tekstiä on klikattu, tarkastamme ehtolauseella, mitä tekstissä lukee. <b>Jos</b> tekstissä lukee "Klikkaa minua.", <b>niin</b> teksti vaihtuu tekstiksi "Moikka moi!". <b>Muutoin</b> teksti vaihtuu tekstiksi "Klikkaa minua.".'
esimerkki-koodi='<p id = teksti>
    Klikkaa minua
<script>
    teksti.onclick = () => {
        if(teksti.textContent === "Klikkaa minua."){
	        teksti.textContent = "Moikka moi!"
        } else {
	        teksti.textContent = "Klikkaa minua."
        }
    }
${closeScript}'
%}

{% include task.html 
tehtava-ohje='Tee ohjelma, joka kysyy käyttäjältä luvun. Jos luku on 42, niin tulosta <code>alert()</code>-komennolla "Löysit onnen lukuni!", Jos käyttäjä syöttää minkä tahansa muun luvun ohjelma tulostaa "Et osunut tällä kertaa oikeaan."'
tehtava-koodi='<script>
    
    ${closeScript}'
%}

## 3.3 Useamman ehdon käyttäminen

{% include example.html
esimerkki-selitys='Useamman ehtolauseen käyttäminen lisää ohjelman mahdollisten lopputulosten määrää.'
esimerkki-koodi='<script>
    let almanPähkinät = prompt("Kuinka monta pähkinää Almalla on?")
    let brunonPähkinät = 0

     if(almanPähkinät == 5){
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    } else if (almanPähkinät > 10){
        almanPähkinät = almanPähkinät - 5;
        brunonPähkinät = 5;
    } else {
        brunonPähkinät = brunonPähkinät + 2;
    }

    alert("Almalla on " + almanPähkinät + " pähkinää. Brunolla on " + brunonPähkinät + " pähkinää.")

${closeScript}'
%}

_Jos_ Almalla on tasan 5 pähkinää _niin_ Alma jakaa pähkinät Brunon kanssa. Muuten _jos_ Almalla on yli 10 pähkinää hän antaa Brunolle 5 pähkinää ja pitää loput ise. _Muuten_ Bruno saa 2 pähkinää.

Jos-ehtoja voidaan ketjuttaa. Tässä ideana on se, että kun ensimmäinen if-ehto täyttyy, niin silloin se **lohko** koodia toteutetaan. Jos mikään if-ehdoista ei täyty, niin silloin siirrytään else-lohkon koodiin. Huomaa, että vain yksi if-ehdoista toteutetaa

```javascript
    if(almanPähkinät == 5){
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    } else if (almanPähkinät > 10){
        almanPähkinät = almanPähkinät - 5;
        brunonPähkinät = brunonPähkinät + 5;
    } else {
        brunonPähkinät = brunonPähkinät + 2;
    }
```

{% include example.html
esimerkki-selitys='Tässä esimerkissä Almalla on aluksi 10 pähkinää.'
esimerkki-koodi='<script>
        almanPähkinät = 7
        brunonPähkinät = 0

        if (almanPähkinät == 5){
            brunonPähkinät = almanPähkinät/2
            almanPähkinät = almanPähkinät/2
        } else if (almanPähkinät > 10){
            almanPähkinät = almanPähkinät - 5
            brunonPähkinät = brunonPähkinät + 5
        } else {
            brunonPähkinät = brunonPähkinät + 2
        }
        alert("Bruno saa " + brunonPähkinät + " pähkinää ja Alma saa " + almanPähkinät)
    ${closeScript}'
%}

## Mitä eroa seuraavilla if-lauseilla on?

{% include example.html
esimerkki-koodi='<p id = teksti></p>
<script>
    muuttuja = ""

    if(muuttuja === ""){
        teksti.textContent = "Heipä hei!"
        muuttuja = "Heipä hei!"
    }
    if(muuttuja === "Heipä hei!"){
        teksti.textContent = "Ankka"
    }
${closeScript}'
%}

{%include example.html
esimerkki-koodi='<p id = teksti></p>
<script>
    muuttuja = ""

    if(muuttuja === ""){
        teksti.textContent = "Heipä hei!"
        muuttuja = "Heipä hei!"
    } else if (muuttuja === "Heipä hei!") {
        teksti.textContent = "Ankka"
    }
${closeScript}'
%}

## Näppäimistön kuuntelija tietylle näppäimelle

Edellisessa osassa tutustuimme, miten voidaan tarkkailla, milloin _mitä tahansa_ näppäintä painetaan. Ehtolauseiden avulla, voimme määrittää tapahtuman tietylle näppäimelle. Aloitetaan sillä, mitä toisessa osassa opittiin eli luodaan näppäimistön kuuntelija ja tekstilementti, jota näppäimen painallus muuttaa

```html
<p id=teksti>
    Mysteerinäppäin vaihtaa tekstini.
</p>
<script>
    document.onkeydown = event => {
        teksti.textContent = "Voitin pelin!"
    }
</script>
```

Halutaan, että kun painetaan näppäintä `a`, niin ohjelma muuttaa tekstielementin tekstiä. Käytetään tähän ehtolausetta. Painetun näppäimen saa tietoon tapahtumalta (englanniksi _event_) käskyllä `event.key`

```html
<p id=teksti>
    Mysteerinäppäin vaihtaa tekstini.
</p>
<script>
    if (event.key === "a") {
        document.onkeydown = event => {
            teksti.textContent = "Voitin pelin!"
        }
    }
</script>
```

{% include example.html
esimerkki-selitys='Mysteerinäppäintä painamalla teksti vaihtuu.'
esimerkki-koodi='<p id=teksti>
    Mysteerinäppäin vaihtaa tekstini.
</p>
<script>
    document.onkeydown = event => {
        if (event.key === "a") {
            teksti.textContent = "Voitin pelin!"
        }
    }
${closeScript}'
%}

Nuolinäppäimet nimet ovat selaimessa _ArrowUp_, _ArrowDown_, _ArrowLeft_ ja _ArrowRight_. Kun vertaillaan painettua näppäintä näihin nimiin, niin tiedetään, mitä nuolipainiketta painettiin.

{% include example.html
esimerkki-selitys='Näppäimistön kuuntelijat reagoivat näppäinten painalluksiin.'
esimerkki-koodi='<p id = teksti>
<script>
    
    document.onkeydown = event => {
        if (event.key == "ArrowUp") {
            teksti.textContent = "Ylös."
        }
        if (event.key == "ArrowDown") {
            teksti.textContent = "Alas."
        }
        if (event.key == "ArrowLeft") {
            teksti.textContent = "Vasemmalle."
        }
        if (event.key == "ArrowRight") {
            teksti.textContent = "Oikealle."
        }
    }
${closeScript}'
%}

## Kysymyksiä

<div id="ehtokysymykset"></div>

<script>createQuestionnaire({
	id: "ehtokysymykset",
	questions: [
		{
			text: "Koodissa lukee: if (pähkinöitä < 5) { if (pähkinöitä > 2) { alert(\"Pähkinöitä on vähän!\") } else { alert(\"Pähkinöitä on liian vähän!\") } } else { alert(\"Pähkinöitä on liikaa!\") }. Pähkinöitä on 3. Mikä viesti näytetään?",
			alternatives: [
				{ text: "Pähkinöitä on vähän!", correct: true },
				{ text: "Pähkinöitä on liian vähän!" },
				{ text: "Pähkinöitä on liikaa!" },
			]
		},
		{
			text: "Koodissa lukee: if (pähkinöitä > 5) { if (pähkinöitä < 3) { alert(\"Vähän!\") } } else { alert(\"Paljon!\") }. Mikä seuraavista pähkinöiden määristä ei tulosta mitään?",
			alternatives: [
				{ text: "2" },
				{ text: "4" },
				{ text: "6", correct: true },
			]
		}
	]
})</script>
