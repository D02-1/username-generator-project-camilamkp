const fs = require('fs'); // Filesystem, zum lesen des Dateisystems
const path = require('path'); //Path, zum arbeiten mit Dateipfaden


// First of all: escrever o que de fato faremos e como uma lista com cada passo como faremos.
// neste caso:

//Benutzernamen Generator
//Beispiel für Benutzer: ShinySunflower55555 oder FlyingAutomobile34567 oder BeautifulCheesecake44567

// Was benötigen wir?
// - Eine Funktion um die Werte aus der JSON Datei zu lesen;

/** 
* @function getWords
* @description Reads words from json file.
* @returns { object }
*/

function getWords()
{
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    //wir geben die Worte zurück
    return json;
}

// - Eine Funktion um die zufällige Nummer hinter dem Namen zu generieren;
// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben (PascalCase);
// - Eine Funktion mi der wie den benutzernamen generieren und auf die ergebnisse der anderen funktionen zugreifen;
// - Einen export, um die Applikation in einer anderen Datei zu nutzen.