---
layout: default
title: Osa 3 - Ehdot
nav-title: Osa 3
---
## 3. 1 Mitä ovat ehto-lauseet?

Jos Almalla on enemmän kuin 5 pähkinää, niin hän voi jakaa ne ystävänsä Brunon kanssa.Jakaako Alma pähkinät Brunon kanssa, jos hänellä on 10 pähkinää? Entäs jos hänellä on 2 pähkinää?

**Ehdon** "Jos Almalla on enemmän kuin 5 pähkinää, niin hän jakaa pähkinät" perusteella ensimmäisessa tapauksessa Alma jakaa pähkinät Brunon kanssa. Kahden pähkinän tapauksessa näin kuitenkaan ei ole.

Almalla oli ehto, jonka perusteella hän toimi tietyllä tavalla. Seuraavaksi tutustumme, miten voimme antaa tietokoneella samanlaisia ehtoja.

## 3.2 Jos-niin ehto

_Jos_ Almalla on ennemmän kuin 5 pähkinää _niin_ Alma jakaa pähkinät Brunon kanssa.

Ehto-lause on muotoa `if (ehto)`. Kun ehto toteutuu, suoritetaan koodi `{ }` lohkon sisältä. Edellisen kohdan esimerkki voitaisiin siis kirjoittaa muodossa

```javascript
    if(almanPähkinät > 5){
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    }
```

Tietokone ei kuitenkaan ymmärrä tätä koodia ihan tällaisenään. Tutkitaan JavaScriptillä kirjoitettua esimerkkiä, jonka tietokonekkin ymmärtää.

{% include example.html
esimerkki-selitys='Tässä esimerkissä Almalla on aluksi 10 pähkinää.'
esimerkki-koodi='<!doctype HTML>
<script>
    almanPähkinät = 10
    brunonPähkinät = 0
    if (almanPähkinät > 5) {
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
        alert("Almalla on " + almanPähkinät + " pähkinää. Brunolla on " + brunonPähkinät + " pähkinää.")
    }
${closeScript}'
%}

{% include task.html
tehtava-ohje='Almalle ei ole annettu lainkaan pähkinöitä! Korjaa koodia niin, että Almalla on 2 pähkinää. Tulostaako ohjelma mitään?'
tehtava-koodi='<!doctype HTML>
<script>
    almanPähkinät = 
    brunonPähkinät = 0
    if (almanPähkinät > 5) {
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
        alert("Almalla on " + almanPähkinät + " pähkinää. Brunolla on " + brunonPähkinät + " pähkinää.")
    }
${closeScript}'
%}

Ehto-lauseesta on erityisesti hyötyä silloin kun saamamme syöte ei ole aina sama.

{% include example.html
esimerkki-selitys='Miksi syötteellä 3 Bruno ei saa pähkinöitä, mutta syötteellä 7 hän saa.'
esimerkki-koodi='<!doctype HTML>
<script>
    pähkinät = prompt("Kuinka monta pähkinää?")
    brunonPähkinät = 0
    alert("Pähkinöitä on " + pähkinät + " kappaletta.")
    if (pähkinät > 5) {
        brunonPähkinät = pähkinät/2
        pähkinät = pähkinät/2
        alert("Bruno saa " + brunonPähkinät + " pähkinää ja pähkinöitä jää jäljelle " + pähkinät)
    }
${closeScript}'
%}

{% include extra.html
otsikko='Vertailu'
vinkki='Matematiikasta tuttuja vertailuoperaattoreita ovat pienempi <code>&lt;</code>, suurempi <code>&gt;</code> ja yhtäsuuri <code>&equals;</code>. Ohjelmoinnissa käytettään lähes samoja operaattoreita!
    
Numeroiden kokoa voidaan vertailla pienempi ja suurempi kuin merkeillä tavallisesti.
    
<div class="codebox example">

<script>
addEditor(
`<!doctype HTML>
    <script>
        if (6 > 3) {
            alert("Kuusi on suurempaa kuin kolme.")
        }
        if (2 < 7) {
            alert("Kaksi on pienempää kuin seitsemän.")
        }
        if (5 < 3) {
            alert("Viisi on pienempää kuin kolme.")
        }
    ${closeScript}`
                    );</script>
</div>

Usein ohjelmissa halaumme tietää, onko kaksi asiaa täsmälleen samat. Tämä onnistuu JavaScriptissä käyttämällä kolmoisyhtäsuuruutta <code>===</code>. Kolmoisyhtäsuuruus käy merkkijonojen ja numeroiden vertailuun.
    
<div class="codebox example">

<script>
addEditor(
`<!doctype HTML>
    <script>
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
    ${closeScript}`
                    );</script>
</div>

<div class="note">
<h3>"ankka" === "Ankka"</h3>
Huomasithan, että edellisessä esimerkissä isolla kirjoitettu Ankka ei ollut sama asia kuin pienellä kirjoitettu ankka. Tässä tuleekin olla erityisen tarkkana. JavaScript on <b>case sensitive</b> eli sen mielestä isolla ja pienellä kirjoitetut sanat ovat erilaisia.
</div>'
%}

{% include task.html
tehtava-ohje='Täydennä jos-ehtoja niin, että nimi tulostuu oikein.'
tehtava-koodi='<!doctype HTML>
    <script>
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
tehtava-koodi='<!doctype HTML>
    <script>
        brunonPähkinät = Number(prompt("Kuinka monta pähkinää Brunolla on?"))
        if(){
            pähkinät = Number(prompt("Kuinka monta pähkinää Brunolle annetaan?"))
            brunonPähkinät += pähkinät
        }
        alert("Brunolla on " + brunonPähkinät + " pähkinää.")
    ${closeScript}'
%}

## 3.2 Jos muuten

_Jos_ Almalla on ennemmän kuin 5 pähkinää _niin_ Alma jakaa pähkinät Brunon kanssa. _Muuten_ Bruno saa 2 pähkinää.

Edellisessä esimerkissä jos Almalla on 5 pähkinää, niin hän jakaa pähkinät Brunon kanssa. Mitä jos Almalla on alle 5 pähkinää? Tällöin Bruno ei saa yhtään pähkinää.Tälläinen tilanne on Brunon mielestä epäreilu ja hän joutuu katselemaan vierestä, kun Alma syö pähkinöitä. Voimme kuitenkin määritellä, että Bruno saa lohdutus palkinnoksi 3 pähkinää.

```javascript
    if(almanPähkinät > 5){
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    } else {
        brunonPähkinät = 2
    }
```

{%include example.html
esimerkki-selitys='Tässä esimerkissä Almalla on aluksi 2 pähkinää. Kuinka monta pähkinää Brunolla on?'
esimerkki-koodi='<!doctype HTML>
    <script>
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
esimerkki-selitys='Esimerkissä on kuuntelija, joka odottaa, milloin tekstiä klikataan. Kun tekstiä on klikattu, tarkastamme ehto-lauseella, mitä tekstissä lukee. <b>Jos</b> tekstissä lukee "Klikkaa minua.", <b>niin</b> teksti vaihtuu tekstiksi "Moikka moi!". <b>Muutoin</b> teksti vaihtuu tekstiksi "Klikkaa minua.".'
esimerkki-koodi='<!doctype HTML>
<p id = teksti>
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

## 3.3 Useamman ehdon käyttäminen

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
esimerkki-koodi='<!doctype HTML>
    <script>
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

Mitä eroa seuraavilla if-lauseilla on?

{% include example.html
esimerkki-koodi='<!doctype HTML>
<p id = teksti></p>
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
esimerkki-koodi='<!doctype HTML>
<p id = teksti></p>
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

## Näppäimistön kuuntelija

Jotta voimme kuunnella näppäimistöä, meidän täytyy käyttää monia asioita, joita olemme tähän asti opetelleet. Ensinnäkin tarvitsemme **tapahtuman kuuntelijan**, joka kuuntelee selaimessa, milloin painiketta painetaan. Kun näppäimen painaminen tapahtuu, meidän tulee tarkastaa, mitä näppäintä painettiin.

{% include example.html
esimerkki-selitys='Näppäimistön kuuntelijat reagoivat näppäinten painalluksiin.'
esimerkki-koodi='<!doctype HTML>
  <p id = teksti>
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
