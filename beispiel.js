var buch = {
    titel: "Der Hobbit",
    autor: "J.R.R. Tolkien",
    jahr: 1937,
    ausleihen: function () {
        console.log("".concat(this.titel, " wurde ausgeliehen."));
    }
};
// Zugriff auf eine Eigenschaft des Objekts
console.log(buch.titel); // "Der Hobbit"
// Aufrufen einer Methode des Objekts
buch.ausleihen(); // "Der Hobbit wurde ausgeliehen."
