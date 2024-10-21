## Kurssin lopputyönä tehtävä web-sivusto ##

Linkki saitille: http://jsiirone.github.io/Web-sovellusten-perusteet-projekti

### HTML (25%) ###

**1/5: Basic HTML structure is present.**

`index.html`: Löytyy `<html>`, `<head>` `<body>` yms. end tageineen sekä deklaraatiot kuten `<!DOCTYPE html>`.

**2/5: HTML structure with clear content differentiation (headings, paragraphs, lists).**

`index.html`:  `<h1>` ja `<h2>` käytetty otsikointiin, `<p>` tekstikappaleisiin, `<button>` nappeihin jne.

**3/5: Use of forms, links, and media.**

`index.html`:  Kuvia riveillä 19-22, linkkejä rivillä 43 ja Web3Formsilla toteutettu form riviltä 45 alkaen. 

**4/5: Tables are effectively used.**

`index.html`:  Riviltä 94 alkaen sivun ytimenä toimiva table.

**5/5: Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.**

`index.html`:  Sivu on jaettu headeriin, sectioniin, mainiin ja footeriin. Muutenkin elementtien nimitykset vastaavat tarkoitustaan.


### CSS (25%) ###
**1/5: Basic CSS styling (colors, fonts).**

`index.css`: Riviltä 1 lähtien määritetty bodylle.

**2/5: Use of classes and IDs to style specific elements.**

`index.css`: Esim. rivillä 58 flex-container-header `class` ja rivillä 67 header-logo-box `id` määrittelyineen.

**3/5: Implementation of responsive design elements.**

`index.css`: Kokoaan muuttavia flexboxeja käytetty lähes kaiken sisällön säilömiseen. Rivillä 45 lisäksi @media-määrittely kaposemmalle resoluutiolle.

**4/5: Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)**

`index.css`: Lähes kaikki toteutettu flexboxeilla.

**5/5: Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.**

`index.css`: Tästä voi olla montaa mieltä. Itse pidän konstailemattomista ja selkeistä sivuista. Nähdäkseni kaikki käyttäjälle tarpeelliset toiminnot löytyvät, ja esimerkiksi napit on kaikki tyylitelty johdonmukaisesti. 


### JavaScript Basics (25%) ###
**1/5: Simple interactions (like alerts on button click).**

`index.js`: Riviltä 169 määritelty nappeja näyttämään ja piilottamaan about-osion sisältöä.

**2/5: Multiple event listeners and basic DOM manipulations.**

`index.js`: Riviltä 152 alkaen event listenerejä. Riviltä 169 määritelty nappeja näyttämään ja piilottamaan about-osion sisältöä.

**3/5: Use of arrays, objects, and functions.**

`index.js`: Arrayitä, objekteja ja funktioita käytetään haetun datan käsittelyyn. Kts. esim riveiltä 66-78 getReleaseYears-funktiota, jossa käytetään arraytä ja Set-objektia.

**4/5: Advanced logic, looping through data, and dynamic DOM updates.**

`index.js`: Ehtolausekkeita ja iterointia esim. filterMoviesByReleaseYear-funktiossa riveillä 131-141. createCheckBoxes-funktio (81-99) luo dynaamisesti vuosiluku-checkboxit fetchatun datan perusteella. 

**5/5: Consistent use of Object-Oriented JavaScript principles.**

Tätä olisi ollut viisasta käyttää esim. geneerisen filtteröinti/checkbox-luontitoiminnon toteuttamiseen, mutta en nyt muka sitten joutanut.


### Asynchronous Operations (25%) ###
**1/5: Use of timers.**

`index.js`: Riveillä 36-38 intervalUpdater, jota kutsutaan rivillä 9. Jos käyttäjä unohtuu ihailemaan sivua viideksi minuutiksi, data fetchataan moviesArrayhyn taustalla uusiksi (näkyy käyttäjälle vasta kun tämä itse päivittää tablen jollain toiminnolla).

**2/5: Successful implementation of an AJAX call or Fetch.**

`index.js`: Riveillä 20-34 fetchDataFromDatabase-funktio joka, fetchaa .json-filusta dataa.

**3/5: Data from the asynchronous call is displayed on the webpage.**

`index.js`: Em. funktion hakema data laitetaan arrayhyn, jonka sisällöllä täytetään table.

**4/5: Error handling is implemented (for failed API calls, etc.).**

`index.js`: Riveillä 20-34 fetchDataFromDatabase-funktiossa console-logitus errorin sattuessa.

**5/5: Effective use of asynchronous data to enhance user experience (like filtering, sorting).**

`index.js`: Käyttäjä voi järjestää taulukkodatan aakkosnumeeriseen järjestyksen kunkin kentän mukaan tai suodattaa elokuvia sivupalkista löytyvillä julkaisuvuotta vastaavilla checkboxeilla. 