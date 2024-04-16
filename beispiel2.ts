class Auto {
    marke: string;
    modell: string;
    baujahr: number;
  
    constructor(marke: string, modell: string, baujahr: number) {
      this.marke = marke;
      this.modell = modell;
      this.baujahr = baujahr;
    }
  
    starten() {
      console.log("Das Auto startet.");
    }
  
    anhalten() {
      console.log("Das Auto hält an.");
    }
  }
  
  // Erstellung eines neuen Auto-Objekts
  let meinAuto = new Auto("Toyota", "Corolla", 2021);
  meinAuto.starten();  // Ausgabe: Das Auto startet.
  