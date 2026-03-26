// chiedo all'utente quale esercizio vuole eseguire
const scelta = prompt("Vuoi eseguire MAIL o DADI?").toLowerCase();

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
