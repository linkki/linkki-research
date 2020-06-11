# README

deploy locally: bundle exec jekyll serve

## Esimerkin tekeminen

```
{%
 include example.html

 esimerkki-selitys='Tämä on esimerkki esimerkki ohjelmointiympäristön käytöstä'

 esimerkki-koodi='<!doctype HTML>
<p id=esimerkki> Tervetuloa! </p>
<button> Vaihda teksti </button>

<script>
	painike.onclick = () => {
		esimerkki.textContent = "Aloita koodaaminen"
	}
${closeScript}'
%}
```

Kirjoita koodi sellaisenaan ja käytä merkkiä `'` koodin ympäröimiseen. Sisennyksen ja muut tulee sellaisinaan sivulle, joten niiden kanssa kannattaa olla myös tarkkana. `<script>` suljetaan käyttämällä `${closeScript}`.