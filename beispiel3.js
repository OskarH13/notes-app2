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
var meinAuto = new Auto("Ford", "Focus", 2018);
meinAuto.anhalten(); // Ausgabe: Das Auto hält an.
