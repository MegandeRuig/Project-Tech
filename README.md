# Valorant Matching App

---

## Inleiding
Welkom in de README.md van de Valorant Matching App! Deze app wordt ontworpen met als doel om de Valorant spelers gemakkelijker aan een 5 stack te helpen. De app zal geheel gemaakt worden in de style van de game. De app zal ervoor zorgen dat gebruikers met elkaar gematched worden op zowel rank, gespeelde agents, mic / geen mic als leeftijd. Hierdoor kunnen er meer geschikte 5 stacks ontstaan dan tijdens een willekeurige qeue in de game zelf. 

De feature van de app die zal worden uitgewerkt is de registreer en login functie waarbij users zich kunnen aanmelden met hun username, email en wachtwoord. En vervolgens hiermee kunnen inloggen. Bij het registreren worden de gegevens van de user opgeslagen in de aangemaakte database in MongoDB. Wanneer er ingelogt wordt zal de code de gegevens vergelijken met de users in de database en als de gegevens overeenkomen zal er een alert verschijnen. 

## Installatie

Om dit project gemakkelijk te installeren is er een connectie met Git nodig en moet NodeJS geinstalleerd zijn. Indien dit zo is ga dan verder naar de volgende stappen indien je deze 2 punten nog niet hebt zorg dan eerst dat deze werkend op de pc komen te staan voordat je verder gaat.

### 1. Clone github
Door het onderstaande commando in de terminal te gebruiken kan het project worden gedownload:

`git clone https://github.com/MegandeRuig/Project-Tech`

### 2. Installeer NPM packages
Om dit project te laten runnen zijn er een aantal NPM packages nodig. Deze staan in de package.json file en zijn te installeren door het gebruik van het volgende commando: 

`npm install`

### 3. Run de code
Vervolgens is het tijd om gebruik te maken van het project dit kan gedaan worden gebruik te maken van het commando:

'node server.js'

### 4. Gebruik
Nadat het project is opgestart kan het gevonden worden op de localhost:8000 of kan het project gevonden worden op Heroku.

`Heroku: https://projecttechmegan.herokuapp.com/`

## License

Copyright 2022 Megan de Ruig

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


