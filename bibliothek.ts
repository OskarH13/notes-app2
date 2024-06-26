interface Buch {
    id: number;
    titel: string;
    autor: string;
    erscheinungsjahr: number;
    genre?: string;  // Dies ist eine optionale Eigenschaft
  }
  
  class Bibliothek {
    katalog: Buch[] = [];
  
    buchHinzufuegen(buch: Buch) {
      this.katalog.push(buch);
    }
  
    katalogAnzeigen() {
      console.log("Bibliothekskatalog:");
      this.katalog.forEach(buch => {
        console.log(`${buch.titel} von ${buch.autor}, erschienen ${buch.erscheinungsjahr}` + (buch.genre ? `, Genre: ${buch.genre}` : ''));
      });
    }
  }
  
  let bibliothek = new Bibliothek();
  
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
  