---
layout: default
title: Osa 2
nav-title: Osa 2
---

<!--Pitäsköhän käsitteitäki varten olla joku listaus systeemi.
    Miten tehtäviä pitäs sijotella?
    Voikohan HTML-painikkeita jne kutsua objekteiksi?
    Pitäs varmaan olla joku debuggeri kirjoitusvirheille.-->

# Osa 2 – Nyt alkaa tapahtumaan
## 3.1 Tapahtumat

Kun klikkaat hiirellä tietokoneen näyttöä, saat aikaan tapahtuman. Me ohjelmoijina voimme päättää, mitä tälläisessä tapahtumassa tapahtuu. Aloitamme omien tapahtumien ohjelmoinnin luomalla tekstikappaleen ohjelmaamme, jota klikkaamalla suoritamme <code>alert()</code>-komennon.

<div class="codebox example">
<h3>Esimerkki 3.1</h3>
<p>
Tekstiä klikkaamalla suoritetaan <b>tapahtuma</b>. 
</p>
<script>
addEditor(
`<!doctype HTML>
<p id = teksti>
    Klikkaa minua.
</p>
<script>
    teksti.onclick = () => {
	alert("Onnittelut, klikkasit oikeaa paikkaa.")
    }
${closeScript}`, true
);</script>
	</div>
<p>
	Käydään seuraavaksi läpi pala palalta, mitä koodissa oikein tapahtuu.
</p>
<ol>
	<li> Ensin laitamme ohjelman alkuosaan HTML-koodia.
<script>codeExample(
`
<p id = teksti >
    Klikkaa minua.
</p>
`
);</script>
Koodissa on käytetty teksti-tägiä <code>&lt;p&gt;</code>, jonka sisälle on kirjoitettu merkkijono "Klikkaa minua." Käytämme tälläistä <code>&lt;p&gt;</code>-tägiä, sillä haluamme antaa <b>id-tunnisteen</b> merkkijonolle "Klikkaa minua". Tunniste asetetaan tägin sisälle kirjoittamalla <code>id = teksti</code>. Kun olemme antaneet sivulla näkyvälle merkkijonolle id-tunnisteen, pääsemme siihen käsiksi myös JavaScriptillä.
	    
<li> Seuraavaksi tulee tuttuakin tutumpi &lt;script&gt;-tägi.
<p><script>codeExample(
`
<script>
    //...	    
${closeScript}
`
);</script></p>
&lt;script&gt;-tägejen rajaamaa aluetta kannattaa ajatella kokonaisuutena. Tutkitaan seuraavassa kohdassa, mitä tägien sisällä oleva koodi tekee.

<li> Tarkastellaan seuraavaksi koodilohkoa:
<script>codeExample(
`
teksti.onclick = () => {
    //...
}
`
,"javascript");</script>
Annoimme edellisessä kohdassa id-tunnisteen <code>&lt;p&gt;</code>-lohkolle. Käytämme nyt annettua tunnistetta ja kutsumme tunnistetulle muuttujalle komentoa <code>.onclick</code>. Tämä kertoo meille, että odotamme klikkausta tunnistetulle "teksti"-osalle. Huomasithan lohkorakenteen? Kirjoitamme lohkon sisälle sen, mitä haluamme tapahtuvan, kun tunnistettua kohtaa klikataan.  

<li> Lohkon sisältä löydämme edellisestä osasta tutun komennon.
<script>codeExample(
`
alert("Hello")
`
,"javascript");</script>
Tämä komento toimii, kuten tavallinenkin <code>alert()</code>-komento. Olemme vain sijoittanut sen tapahtuman sisään.
</ol>

<div class="codebox extra">
<h3>Id-tunniste</h3>
Id-tunniste annetaan HTML-koodille. Käytämme id-tunnistetta HTML-koodin ja JavaScript-koodin väliseen komminukaatioon. Kun käytämme id-tunnistetta HTML-koodissa voimme <b>viitata</b> siihen JavaScript-koodissa. 
</div>
<div class="codebox task">
<h3>Tehtävä 3.1a</h3>
<p>Kirjoita ohjelmaan koodi, jolla <code>alert()</code> komennolla tulostetaan "Ankat uivat lammessa."</p>
 <script>
addEditor(
`<!doctype HTML>
<p id = teksti>
    Missä ankat uivat?
</p>
<script>
teksti.onclick = () => {
}
${closeScript}`
		    );</script>
</div>

<div class="codebox task">
<h3>Tehtävä 3.1b</h3>
<p>Kirjoita ohjelmaan koodi, jolla <code>alert()</code> komennolla tulostetaan "Höyhenpeite on myös vettähylkivä."</p>
<script>
   addEditor(
`<!doctype HTML>
<p id = teksti>
    Ankkojen höyhenpeite on pehmeä.
</p>
<script>
${closeScript}`
		);</script>
    </div>

<div class="codebox task">
<h3>Tehtävä 3.1c</h3>
	    <p>Kirjoita ohjelmaan &lt;p&gt;-tägien sisälle teksti "Koodiankat ovat keltaisia.".
		Anna tägeille tunnisteeksi "teksti".
		Lisää tunnisteeseen viittaus <code>onclick</code>-komentoon oikeaan kohtaan.
	    </p>
	    <script>
		addEditor(
`<!doctype HTML>
<p>
    Saammeko tekstin toimimaan tapahtumana?
</p>
<script>
    .onclick = () => {
	alert("Onnittelut, osasit luoda oikean id-tunnuksen.")
    }
${closeScript}`
	    );</script>
</div>

<div class="codebox task">
<h3>Tehtävä 3.1HAASTE</h3>
<p>Kirjoita ohjelmaan &lt;p&gt;-tägien sisälle teksti "Koodiankat auttavat ihmisiä ohjelmoinnissa.". Anna tägeille tunnisteeksi "teksti". Lisää <code>onclick</code>-komento ja kirjoita sen sisälle <code>alert()</code>-komento, joka tulostaa tekstin "Koodiankat ovat söpöjä.".
	</p>
	<script>
	    addEditor
	    
	    (
`<!doctype HTML>
<script>
${closeScript}`
	);</script>
</div>

<div class="codebox example">
<h3>Esimerkki 3.2</h3>
<p>
   Tekstiä klikkaamalla teksti vaihtuu.
</p>
<script>
    addEditor(
`<!doctype HTML>
<p id = teksti>Klikkaa minua.</p>
<script>
    teksti.onclick = () => {
	teksti.textContent = "Moikka moi!"    
    }
    
${closeScript}`, true
);</script>
</div>

<p>
   Jotta voimme muokata tekstiä, joka on jo asetettu sivulle kerran tarvitaan komentoa <code>textContent</code>. 
	    Edellisessä esimerkissä koodi <code>teksti.textContent = "Moikka moi!"</code> kutsuu tätä komentoa "teksti"-tunnisteille.
	    Yhtäsuuruusmerkeillä (=) asetamme tämän "teksti"-tunnistetun kohdan arvoksi merkkijonon "Moikka moi!".
</p>
	
<h3>Opitut komennot</h3>
<p>
  Opimme tässä osassa muuttamaan tapahtumien avulla HTML-sivulla olevien objektien sisältöä. 
   Kerrataan vielä, mitä komentoja opimme.
	</p>
	<table>
		<caption>Opitut komennot</caption>
		<tr>
		    <th>Komento
		    <th style="width: 450px;">Esimerkki
		    <th>Selitys
		    <tr>
		    <td><code>&lt;p&gt;</code>
<td><script>codeExample(`
<p> 
    Hei maailma!
</p>`
		, "javascript", true);</script>
		<td>Merkitään HTML-tiedoston tekstiosioita.	
		<tr>
		    <td><code>id = teksti </code>
		    <td><script>codeExample(`
<p id = teksti> 
    Tällä tekstillä on tunnisteena "teksti"
</p>`
		    , "javascript", true);</script>
		    <td>Tunnistaa HTML-koodissa olevat tägit
		<tr>
		    <td><code>.onclick = () = {}</code>
		    <td><script>codeExample(
`teksti.onclick = () => {
 //...
}`
		    , "javascript", true);</script>
		    <td>Odottaa käyttäjältä klikkausta asetettuun muuttujaan.
		<tr>
		    <td><code>textContent</code>
		    <td><script>codeExample(
		`teksti.textContent = "Moikka moi!`, "javascript", true);</script>
		    <td>Vaihtaa id-tunnistetun muuttujan arvon.
	    </table>

<h2>3.2 Painikkeet</h2>
    <p>
	Tekstin lisäksi voimme tehdä painikkeita. 
	Kuten <button>tämä.</button>
	Tästä painikkeesta ei vielä kuitenkaan tapahdu mitään.
	JavaScriptillä saamme painikkeesta tapahtumia aikaiseksi.
    </p>
    <p>
	Ensin painike täytyy luoda. 
	Tämä onnistuu kirjoittamalla <code>&lt;button&gt;tämä.&lt;/button&gt;</code>. 
    </p>
    <p>
	Tämän jälkeen luomme toiminnalisuuden painikkeelle <code>&lt;script&gt;&lt;/script&gt;</code> lohkon sisälle. 
    </p>
		<div class="codebox example">
			<h3>Esimerkki 3.3</h3>
			<p>
				Painikkeesta tapahtuu alert().
			</p>
			<script>
				addEditor(
`<!doctype HTML>
<button id=nappi>Klikkaa tästä.</button>
<script>
	nappi.onclick = () =>  {
		alert("Nappia painettiin.")
	}
${closeScript}`, true
			);</script>
	    </div>
	    <p>
		Kutsumme siis tällä kertaa <code>.onclick</code> komentoa <code>&lt;button&gt;</code> objektille, 
		jolle olemme antaneet id-tunnisteeksi "nappi".
		Toiminnallisuus näyttää hyvin samalta, kuin edellisessä osiossa teimme tekstin muuuttamisen kanssa.
	    </p>
	    <p>
		Tehdään seuraavaksi ohjelma, joka käyttää kahta erilaista id-tunnistettua HTML-objektia. 
	    </p>
	    <div class="codebox example">
		<h3>Esimerkki 3.4</h3>
		<p>
		    Painiketta <code>&lt;button&gt;</code> painettaessa suoritetaan komento <code>nappi.onclick</code>. 
		</p>
		<script>		addEditor(
`<!doctype HTML>
<p id = teksti>hello!<p>
<button id=nappi>Vaihda tekstiä</button>
<script>
    nappi.onclick = () =>  {
	teksti.textContent = "Moikka moi!"
    }
${closeScript}`, true
		);</script>
	    </div>

	    <div class="codebox task">
		    <h3>Tehtävä 3.2.1a</h3>
		    <p>
			Kirjoita ohjelma, joka tulostaa näytölle "Klikkasit painiketta."</p>
		    <script>
			addEditor(
`<!doctype HTML>
<button id=nappi>Klikkaa minua</button>
<script>
nappi.onclick = () => {
}
${closeScript}`
		    );</script>
	</div>

	<div class="codebox task">
		<h3>Tehtävä 3.2.1b</h3>
		<p>
		   Lisää ohjelmaan id-tunniste painikkeelle.
		   Huomaa, että id-tunniste tulee antaa myös <code>.onclick</code>-metodille.
		</p>
		<script>
		    addEditor(
`<!doctype HTML>
<button>Klikkaa minua</button>
.onclick = () => {
    alert("Hyvää työtä!")
}
<script>
${closeScript}`
		);</script>
    </div>
    
    <div class="codebox task">
	<h3>Tehtävä 3.2.1c</h3>
	<p>
	    Tässä tehtävässä vaihdetaan <code>&lt;p id=teksti&gt;</code>-objektin tekstiä.
	    Lisää komento, joka vaihtaa <code>&lt;p id=teksti&gt;</code>-objektin tekstin tekstiksi "Onnistuin!".
	</p>
	<script>
	    addEditor(
`<!doctype HTML>
<p id=teksti>
    Onnistutko vaihtamaan tämän tekstin?
<p>
<button id=nappi>Vaihda tekstiä</button>
<script>
    nappi.onclick = () => {
    }
${closeScript}`
	);</script>
    </div>

	    <p>
		Osaamme luoda objekteja, tapahtumia ja kuuntelijoita. 
		Osaamme siis tehdä jo aika paljon kaikenlaista. 
		Kerrataan vielä, mitä olemme oppineet.
	    </p>

	    <h3>Opitut komennot</h3>
	    <p>
		Opimme tässä osassa muuttamaan tapahtumien avulla HTML-sivulla olevien objektien sisältöä. 
		Kerrataan vielä, mitä komentoja opimme.
	    </p>
	    <table>
		    <caption>Opitut komennot</caption>
		    <tr>
			<th>Komento
			<th style="width: 450px;">Esimerkki
			<th>Selitys
		    <tr>
			<td><code> &lt;button id=nappi&gt; </code>
			<td><script>codeExample(`<button id=nappi>Tämä on painike.</button>`, "javascript", true);</script>
			<td>Luo painikkeen HTML-koodissa.
		</table>
 <!--	   <p>
		Lopuksi tehdään vähän haastavampi esimerkki. 
		Seuraavassa esimerkissä kirjoitamme ohjelman, 
		joka painiketta painamalla vaihtaa kuvaa. 
		Tätä tehtävää varten meidän tulee vaihtaa kuvan lähde eli <code>src</code>.
		Kuvan lähde on url-osoite.
	    </p>
	    <div class="codebox example">
		<h3>Esimerkki 3.5</h3>
		<p>
		    Kuvan vaihtaminen.
		</p>
		<script>
		    addEditor(
 
`<!doctype HTML>
<img id=kuva src="https://linkki.github.io/linkki-research/osa3/kuva1.png">
<button id=nappi>Vaihda kuvaa</button>
<script>
    nappi.onclick = () => {
	kuva.setAttribute('src','https://linkki.github.io/linkki-research/osa3/kuva2.png')
    }
${closeScript}`, true
		);</script>
	    </div>
-->	    
	</div>
</body>
</html>