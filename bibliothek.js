var Bibliothek = /** @class */ (function () {
    function Bibliothek() {
        this.katalog = [];
    }
    Bibliothek.prototype.buchHinzufuegen = function (buch) {
        this.katalog.push(buch);
    };
    Bibliothek.prototype.katalogAnzeigen = function () {
        console.log("Bibliothekskatalog:");
        this.katalog.forEach(function (buch) {
            console.log("".concat(buch.titel, " von ").concat(buch.autor, ", erschienen ").concat(buch.erscheinungsjahr) + (buch.genre ? ", Genre: ".concat(buch.genre) : ''));
        });
    };
    return Bibliothek;
}());
var bibliothek = new Bibliothek();
bibliothek.buchHinzufuegen({
    id: 1,
    titel: "Der große Gatsby",
    autor: "F. Scott Fitzgerald",
    erscheinungsjahr: 1925,
    genre: "Roman"
});
bibliothek.buchHinzufuegen({
    id: 2,
    titel: "1984",
    autor: "George Orwell",
    erscheinungsjahr: 1949
});
bibliothek.katalogAnzeigen();
