var Auto = /** @class */ (function () {
    function Auto(marke, modell, baujahr) {
        this.marke = marke;
        this.modell = modell;
        this.baujahr = baujahr;
    }
    Auto.prototype.starten = function () {
        console.log("Das Auto startet.");
    };
    Auto.prototype.anhalten = function () {
        console.log("Das Auto hält an.");
    };
    return Auto;
}());
// Erstellung eines neuen Auto-Objekts
var meinAuto = new Auto("Toyota", "Corolla", 2021);
meinAuto.starten(); // Ausgabe: Das Auto startet.
