// chiedo all'utente quale esercizio vuole eseguire
const scelta = prompt("Vuoi eseguire mail o dadi?").toLowerCase();

// ESERCIZIO 1 - MAIL

if (scelta === "mail") {

  // creata lista email invitati
  const listaEmail = [
    "luigi@gmail.com",
    "anna@gmail.com",
    "alfonso@gmail.com",
    "giada@gmail.com"
  ];
// chiedo all'utente di inserire la propria email
  const emailUtente = prompt("Inserisci la tua email");

 // variabile per verificare se l'email è presente
  let trovato = false;

  // ciclo for per scorrere tutta la lista email
  for (let i = 0; i < listaEmail.length; i++) {

    // confronto email utente con ogni email della lista
    if (emailUtente === listaEmail[i]) {
      trovato = true; // email trovata
    }

  }

  // controllo finale accesso
  if (trovato === true) {
    console.log("Accesso consentito");
  } else {
    console.log("Accesso negato");
  }

}

// ESERCIZIO 2 - DADI
else if (scelta === "dadi") {

  // genero numero casuale per l'utente (da 1 a 6)
  const numeroUtente = Math.floor(Math.random() * 6) + 1;

  // genero numero casuale per il computer (da 1 a 6)
  const numeroComputer = Math.floor(Math.random() * 6) + 1;