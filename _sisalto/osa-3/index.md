---
layout: default
title: Osa 3
nav-title: Osa 3
---

# Osa 3 - Ehdot

## Mitä ovat ehto-lauseet?
Jos Almalla on enemmän kuin 5 pähkinää, niin hän voi jakaa ne ystävänsä Brunon kanssa.Jakaako Alma pähkinät Brunon kanssa, jos hänellä on 10 pähkinää? Entäs jos hänellä on 2 pähkinää?

<b>Ehdon</b> "Jos Almalla on enemmän kuin 5 pähkinää, niin hän jakaa pähkinät" perusteella ensimmäisessa tapauksessa Alma jakaa pähkinät Brunon kanssa. Kahden pähkinän tapauksessa näin kuitenkaan ei ole.

Almalla oli ehto, jonka perusteella hän toimi tietyllä tavalla. Seuraavaksi tutustumme, miten voimme antaa tietokoneella samanlaisia ehtoja.

## Jos-niin ehto

<u>Jos</u> Almalla on ennemmän kuin 5 pähkinää <u>niin</u> Alma jakaa pähkinät Brunon kanssa.

Ehto-lause on muotoa <code>if (ehto)</code>. Kun ehto toteutuu, suoritetaan koodi <code>{ }</code> lohkon sisältä. Edellisen kohdan esimerkki voitaisiin siis kirjoittaa muodossa

<code><pre>
    if(almanPähkinät > 5){
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    }
</pre></code>

Tietokone ei kuitenkaan ymmärrä tätä koodia ihan tällaisenään. Tutkitaan JavaScriptillä kirjoitettua esimerkkiä, jonka tietokonekkin ymmärtää.

<div class="codebox example">
<h3>Esimerkki</h3>
Tässä esimerkissä Almalla on aluksi 10 pähkinää.
<script>
addEditor(
`<!doctype HTML>
<script>
    almanPähkinät = 10
    brunonPähkinät = 0
    if (almanPähkinät > 5) {
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
        alert("Almalla on " + almanPähkinät + " pähkinää. Brunolla on " + brunonPähkinät + " pähkinää.")
    }
    
${closeScript}`
);</script>
</div>

<div class="codebox task">
<h3>Tehtävä</h3>

Almalle ei ole annettu lainkaan pähkinöitä! Korjaa koodia niin, että Almalla on 2 pähkinää. Tulostaako ohjelma mitään?
    
<script>
addEditor(
`<!doctype HTML>
<script>
    almanPähkinät = 
    brunonPähkinät = 0
    if (almanPähkinät > 5) {
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
        alert("Almalla on " + almanPähkinät + " pähkinää. Brunolla on " + brunonPähkinät + " pähkinää.")
    }
    
${closeScript}`
                );</script>
</div>

Ehto-lauseesta on erityisesti hyötyä silloin kun saamamme syöte ei ole aina sama.

<div class="codebox example">
<h3>Esimerkki</h3>

Miksi syötteellä 3 Bruno ei saa pähkinöitä, mutta syötteellä 7 hän saa.
    
<script>
addEditor(
`<!doctype HTML>
<script>
    pähkinät = prompt("Kuinka monta pähkinää?")
    brunonPähkinät = 0
    alert("Pähkinöitä on " + pähkinät + " kappaletta.")
    if (pähkinät > 5) {
        brunonPähkinät = pähkinät/2
        pähkinät = pähkinät/2
        alert("Bruno saa " + brunonPähkinät + " pähkinää ja pähkinöitä jää jäljelle " + pähkinät)
    }
    
${closeScript}`
                );</script>
</div>

<div class="extra">
<h3>Vertailu</h3>

Matematiikasta tuttuja vertailuoperaattoreita ovat pienempi <code>&lt;</code>, suurempi <code>&gt;</code> ja yhtäsuuri <code>&equals;</code>. Ohjelmoinnissa käytettään lähes samoja operaattoreita!
    
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
</div>

<div class="codebox task">
<h3>Tehtävä 2.2</h3>

Täydennä jos-ehtoja niin, että nimi tulostuu oikein.
    
<script>
addEditor(
`<!doctype HTML>
    <script>
        ekaNimi = "Bella"
        tokaNimi = "Anton"
        if(){
            alert("Hei Bella!")
        }
        if(){
            alert("Hei Anton!")
        }
    ${closeScript}`
                );</script>

</div>

<div class="codebox task">
<h3>Tehtävä</h3>

Täydennä jos-ehtoa niin, että jos muuttujan brunonPähkinät on pienempää kuin 2, niin Bruno saa lisää pähkinöitä.
    
<script>
addEditor(
`<!doctype HTML>
    <script>
        brunonPähkinät = Number(prompt("Kuinka monta pähkinää Brunolla on?"))
        if(){
            pähkinät = Number(prompt("Kuinka monta pähkinää Brunolle annetaan?"))
            brunonPähkinät += pähkinät
        }
        alert("Brunolla on " + brunonPähkinät + " pähkinää.")
    ${closeScript}`
                );</script>

</div>

## Jos muuten

<u>Jos</u> Almalla on ennemmän kuin 5 pähkinää <u>niin</u> Alma jakaa pähkinät Brunon kanssa. <u>Muuten</u> Bruno saa 2 pähkinää.

Edellisessä esimerkissä jos Almalla on 5 pähkinää, niin hän jakaa pähkinät Brunon kanssa. Mitä jos Almalla on alle 5 pähkinää? Tällöin Bruno ei saa yhtään pähkinää.Tälläinen tilanne on Brunon mielestä epäreilu ja hän joutuu katselemaan vierestä, kun Alma syö pähkinöitä. Voimme kuitenkin määritellä, että Bruno saa lohdutus palkinnoksi 3 pähkinää.

<code><pre>
    if(almanPähkinät > 5){
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    } else {
        brunonPähkinät = 2
    }
</pre></code>

<div class="codebox example">
<h3>Esimerkki</h3>

Tässä esimerkissä Almalla on aluksi 2 pähkinää. Kuinka monta pähkinää Brunolla on?
    
<script>
addEditor(
`<!doctype HTML>
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
        
    ${closeScript}`
    );</script>
</div>

<div class="codebox example">
<h3>Esimerkki</h3>

Esimerkissä on kuuntelija, joka odottaa, milloin tekstiä klikataan. Kun tekstiä on klikattu, tarkastamme ehto-lauseella, mitä tekstissä lukee. <b>Jos</b> tekstissä lukee "Klikkaa minua.", <b>niin</b> teksti vaihtuu tekstiksi "Moikka moi!". <b>Muutoin</b> teksti vaihtuu tekstiksi "Klikkaa minua.".
<script>
addEditor(
`<!doctype HTML>
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
    
${closeScript}`, true
                );</script>
</div>

## Useamman ehdon käyttäminen

<u>Jos</u> Almalla on tasan 5 pähkinää <u>niin</u> Alma jakaa pähkinät Brunon kanssa. <u>Muuten jos</u> Almalla on yli 10 pähkinää hän antaa Brunolle 5 pähkinää ja pitää loput ise. <u>Muuten</u> Bruno saa 2 pähkinää.

Jos-ehtoja voidaan ketjuttaa. Tässä ideana on se, että kun ensimmäinen if-ehto täyttyy, niin silloin se <b>lohko</b> koodia toteutetaan. Jos mikään if-ehdoista ei täyty, niin silloin siirrytään else-lohkon koodiin. Huomaa, että vain yksi if-ehdoista toteutetaa

<code><pre>
    if(almanPähkinät == 5){
        brunonPähkinät = almanPähkinät/2
        almanPähkinät = almanPähkinät/2
    } else if (almanPähkinät > 10){
        almanPähkinät = almanPähkinät - 5;
        brunonPähkinät = brunonPähkinät + 5;
    } else {
        brunonPähkinät = brunonPähkinät + 2;
    }
</pre></code>
<div class="codebox example">
<h3>Esimerkki</h3>

Tässä esimerkissä Almalla on aluksi 10 pähkinää.    
<script>
addEditor(
`<!doctype HTML>
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
        
    ${closeScript}`
                );</script>
        
Mitä eroa seuraavilla if-lauseilla on?

<div class="codebox example">
 <h3>Esimerkki</h3>

<script>
addEditor(
`<!doctype HTML>
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
${closeScript}`, 
            );</script>
    </div>
    <div class="codebox example">
        <h3>Esimerkki</h3>
            

        <script>
            addEditor(
                `<!doctype HTML>
<p id = teksti>
<script>
    muuttuja = ""

    if(muuttuja === ""){
        teksti.textContent = "Heipä hei!"
        muuttuja = "Heipä hei!"
    } else if (muuttuja === "Heipä hei!") {
        teksti.textContent = "Ankka"
    }
${closeScript}`, 
            );</script>
    </div>
    
## Näppäimistön kuuntelija

Jotta voimme kuunnella näppäimistöä, meidän täytyy käyttää monia asioita, joita olemme tähän asti opetelleet. Ensinnäkin tarvitsemme <b>tapahtuman kuuntelijan</b>, joka kuuntelee selaimessa, milloin painiketta painetaan. Kun näppäimen painaminen tapahtuu, meidän tulee tarkastaa, mitä näppäintä painettiin. 

<div class="codebox example">
<h3>Esimerkki</h3>    
<script>
                addEditor(
 `<!doctype HTML>
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
    
${closeScript}`,
                );</script>
        </div>
