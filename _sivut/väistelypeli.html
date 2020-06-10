---
layout: default
title: Väistelypeli
---
# Väistelypeli

<canvas width = 800 height = 600 id = kangas ></canvas>

<script>

// Apufunktio etäisyyden laskemiseen
function etäisyys(hahmo1, hahmo2) {
	const dx = hahmo1.X - hahmo2.X
	const dy = hahmo1.Y - hahmo2.Y
	return Math.sqrt(dx*dx + dy*dy)
}

// Apufunktio siirtämiseen
function siirräKohti(hahmo1, hahmo2, nopeus) {
	const dx = hahmo2.X - hahmo1.X
	const dy = hahmo2.Y - hahmo1.Y
	const e = etäisyys(hahmo2, hahmo1)
	
	hahmo1.X += dx/e*nopeus
	hahmo1.Y += dy/e*nopeus
}

const piirtäjä = kangas.getContext("2d")

// Määritellään hahmot
const hiiri = {
	X: 0,
	Y: 0,
}
const pelaaja = {
	X: 100,
	Y: 100,
	pisteet: 0,
}
const viholliset = []

// Pidetään hiiren koordinaatit ajan tasalla
kangas.onmousemove = event => {
	hiiri.X = event.offsetX
	hiiri.Y = event.offsetY
}

function piirrä() {
	// Tyhjennetään ruutu
	piirtäjä.clearRect(0, 0, 800, 600)

	// Piirretään pisteet
	piirtäjä.fillStyle = "black"
	piirtäjä.fillText("Pisteet: " + pelaaja.pisteet, 10, 20)
	
	// Piirretään pelaajahahmo
	piirtäjä.fillStyle = "blue"
	piirtäjä.fillRect(pelaaja.X-50, pelaaja.Y-50, 100, 100)
	
	// Käydään läpi vihollishahmot
	for (const vihollinen of viholliset) {
		// Piirretään vihollishahmo
		piirtäjä.fillStyle = "red"
		piirtäjä.fillRect(vihollinen.X-50, vihollinen.Y-50, 100, 100)
	}
	
	// Pyydetään selainta piirtämään samat asiat kohta uudestaan
	requestAnimationFrame(piirrä)
}

// Pyydetään selainta piirtämään asiat ensimmäisen kerran
requestAnimationFrame(piirrä)

// Liikutetaan hahmoa ja vihollisia (ikuisessa silmukassa)
setInterval(() => {
	siirräKohti(pelaaja, hiiri, 3)
	
	// Käydään läpi viholliset
	for (const vihollinen of viholliset) {
		// Liikutetaan vihollista
		siirräKohti(vihollinen, pelaaja, 0.5)
		vihollinen.X -= 2

		// Tarkistetaan osuma pelaajaan
		if (etäisyys(pelaaja, vihollinen) < 100) {
			pelaaja.pisteet = 0
			pelaaja.X = 100
			pelaaja.Y = 100
			viholliset.splice(0, viholliset.length)
		}

		// Tarkistetaan osuma reunaan ja siirretään tarvittaessa takaisin alkuun
		if (vihollinen.X < -100) {
			vihollinen.X = 900
		}
	}
}, 10)

// Luodaan uusi vihollinen viiden sekunnin välein ja kasvatetaan samalla pisteitä
setInterval(() => {
	pelaaja.pisteet += 1
	viholliset.push({
		X: 900,
		Y: Math.random()*600,
	})
}, 5000)
</script>

<h2>Ohjeet</h2>

<h3>Alkuvalmistelut</h3>

<p class=task>Kopioi aloituspohja (kankaan kokoa ja väriä voi muuttaa halutessaan:</p>
<script>codeExample(`<!doctype HTML>

<canvas width = 800
        height = 600
        style = background-color:beige;></canvas>

<script>

${closeScript}`, "html");</script>

<p class=task>Käytämme tehtävässä seuraavia funktioita kahden hahmon etäisyyden laskemiseen ja hahmon liikuttamiseen. Kopioi ne <code>&lt;script&gt;</code>-tägien väliin.</p>
<script>codeExample(`// Apufunktio etäisyyden laskemiseen
function etäisyys(hahmo1, hahmo2) {
	const dx = hahmo1.X - hahmo2.X
	const dy = hahmo1.Y - hahmo2.Y
	return Math.sqrt(dx*dx + dy*dy)
}

// Apufunktio siirtämiseen
function siirräKohti(hahmo1, hahmo2, nopeus) {
	const dx = hahmo2.X - hahmo1.X
	const dy = hahmo2.Y - hahmo1.Y
	const e = etäisyys(hahmo2, hahmo1)
	
	hahmo1.X += dx/e*nopeus
	hahmo1.Y += dy/e*nopeus
}
`, "javascript");</script>

<p class=task>Määrittele piirtäjä-muuttuja piirtämistä varten:</p>
<script>codeExample(`const piirtäjä = kangas.getContext("2d") `, "javascript");</script>

<h3>Hahmojen muuttujat</h3>

<p>Muistutuksena hahmo-olion ja sen sisältämät muuttujat luodaan näin:</p>

<script>codeExample(`const pelaaja = {
	X: 100,
	Y: 100,
	pisteet: 0,
}
`, "javascript");</script>

<p>
	<span class=task>Luo <code>pelaaja</code>, jolla on muuttujat <code>X</code>, <code>Y</code> ja <code>pisteet</code>.</span>
	<span class=task>Lisäksi luo <code>hiiri</code>, joilla on vain <code>X</code> ja <code>Y</code>.</span>
	Voit asettaa hahmojen X- ja Y-koordinaatit alussa miten haluat.
</p>

<p>
	Hiiri-hahmon tarkoitus on olla siinä, missä hiiri on.
	JavaScriptissä emme voi selvittää milloin vain, missä hiiri on, vaan saamme tietää hiiren sijainnin vain, kun se liikkuu.
	Siirtämällä hiiri-hahmon kursorin päälle sen liikkuessa tiedämme aina, missä hiiri on.
	<span class=task>Käytä seuraavaa koodia:</span>
</p>

<script>codeExample(`// Pidetään hiiren koordinaatit ajan tasalla
kangas.onmousemove = event => {
	hiiri.X = event.offsetX
	hiiri.Y = event.offsetY
}
`, "javascript");</script>

<h3>Piirtosilmukka</h3>

<p class=task>Tee <code>piirrä</code>-funktiosta piirtosilmukka käyttäen <code>requestAnimationFrame</code>-funktiota:</p>

<script>codeExample(`function piirrä() {
	// Tyhjennetään ruutu
	piirtäjä.clearRect(0, 0, 800, 600)
	
	/* Piirretään hahmot tässä */
	
	// Pyydetään selainta piirtämään samat asiat kohta uudestaan
	requestAnimationFrame(piirrä)
}

// Pyydetään selainta piirtämään asiat ensimmäisen kerran
requestAnimationFrame(piirrä)
`, "javascript");</script>

<p class=task>
	Piirrä funktion sisällä pelaaja.
	Pelaajan koordinaatit ovat <code>pelaaja.X</code> ja <code>pelaaja.Y</code>.
	Voit piirtää joko neliön <code>fillRect</code>-komennolla tai kuvan <code>drawImage</code>-komennolla.
</p>

<p>
	Hiiren kohdalle ei tarvitse piirtää mitään, näkyyhän siinä jo käyttöjärjestelmän oma kursori, mutta siihen voi halutessaan piirtää oman kuvan.
</p>

<p class=task>
	Piirrä myös teksti <code>"Pisteet " + pelaaja.pisteet</code> näkymän yläreunaan. 
</p>

<p>
	Kokeile nyt, toimiiko pelaajan piirtäminen. Pisteiden kohdalla pitäisi lukea tietysti 0.
</p>

<h3>Pelaajan liikuttaminen</h3>

<p class=task>Tee <code>setInterval</code>-silmukka hahmojen liikuttamista varten:</p>

<script>codeExample(`setInterval(() => {
	
	/* Tähän tulee liikuttamisen koodi */
	
})
`, "javascript");</script>

<p class=task>
	Lisää komento hahmon liikuttamista varten.
	Hahmoja liikutetaan alussa luodulla <code>siirräKohti</code>-funktiolla.
	Aluksi meidän tarvitsee vain siirtää pelaajaa kohti hiirtä: <code>siirräKohti(pelaaja, hiiri, 1)</code>.
	Lopun <code>1</code> kertoo, millä nopeudella pelaaja liikkuu, ja voit muuttaa sitä halutessasi.
	Kokeile eri arvoja välillä 1–5.
</p>

<p>
	Kokeile tässä vaiheessa, toimiiko peli ja hahmon liikuttaminen.
</p>

<h3>Vihollislista</h3>

<p>
	Tallennamme viholliset listaan, johon voimme lisätä aina tarvittaessa lisää vihollisia.
	<span class=task>Tee uusi muuttuja vihollislistaa varten pelaaja- ja hiirihahmojen jälkeen:</span>
</p>

<script>codeExample(`const viholliset = [] `, "javascript");</script>

<p>
	Lista on alussa tyhjä.
	Siihen voi lisätä uuden vihollisen <code>.push()</code>-komennolla:
</p>

<script>codeExample(`viholliset.push({
	X: 400,
	Y: Math.random()*600,
}) `, "javascript");</script>

<p>Voit kokeilun vuoksi lisätä yhden vihollisen listaan heti listan luomisen jälkeen.</p>

<h3>Vihollisten piirtäminen</h3>

<p class=task>
	Piirrä viholliset piirtofunktiossa.
	Käytä <code>for of</code> -silmukkaa käydäksesi läpi kaikki viholliset.
	Käytä silmukan sisällä samanlaista komentoa kuin pelaajankin piirtämiseen (eri värillä/kuvalla).
	Silmukan sisällä vihollisen X ja Y ovat <code>vihu.X</code> ja <code>vihu.Y</code>.
</p>

<script>codeExample(`for (const vihu of viholliset) {
	
} `, "javascript");</script>

<h3>Vihollisten liikuttaminen</h3>

<p class=task>
	Tee päivitysfunktion (missä pelaajaa liikutetaan) sisälle <code>for of</code> -silmukka, jossa käydään läpi kaikki viholliset.
	Voit siirtää vihollista pelaajaa kohti samalla tavalla kuin pelaajaa hiirtä kohti, eli <code>siirräKohti</code>-funktiolla.
	Pelistä tulee kiinnostavampi, jos viholliset eivät vain jahtaa pelaajaa, vaan myös liikkuvat vasemmalle samalla kuin esimerkissä.
	Tämän saa aikaan komennolla <code>vihu.X -= 2</code>.
	Kokeile taas eri nopeuksia sekä pelaajaa päin liikuttaessa että vasemmalle liikuttaessa.
</p>

<p>
	Jos viholliset liikkuvat vasemmalle, ne törmäävät lopulta seinään ja ne on siirrettävä takaisin oikeaan reunaan.
	Tämän voi tehdä seuraavanlaisella ehtolauseella.
	<span class=task>Lisää se <code>for of</code> -silmukan sisälle.</span>
</p>

<script>codeExample(`if (vihu.X < -100) {
	vihu.X = 900
} `, "javascript");</script>

<p class=task>
	Tarkista <code>for of</code> -silmukan sisällä myös, törmääkö pelaaja viholliseen.
	Tähän voi käyttää keräilypelistä tuttua ehtoa:
</p>

<script>codeExample(`if (etäisyys(pelaaja, vihu) < 100) {

}
`, "javascript");</script>

<p>
	Tee ehtolauseen sisällä mitä haluat.
	Voit esimerkiksi asettaa pisteet nollaan ja poistaa viholliset pelistä komennolla <code>viholliset.splice(0, viholliset.length)</code>.
</p>

<h3>Uusien vihollisten luominen</h3>

<p class=task>
	Luo uusi <code>setInterval</code>-silmukka uusien vihollisten luomista varten (aseta silmukan ajaksi esim. 5 000 ms).
	Käytä sen sisällä aiemmin mainittua komentoa, jolla voi lisätä vihollisen listaan.
	Vihollisen X:ksi kannattaa asettaa <code>900</code>, joka on juuri kankaan ulkopuolella, jotta vihollinen ei ilmesty rumasti keskelle peliä.
</p>

<p class=task>
	Kasvata luomasi <code>setInterval</code>-silmukan sisällä pelaajan pisteitä.
	Pisteiden määrä on siis sama kuin vihollisten määrä kartalla.
</p>

