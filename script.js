// script.js

let notes = [];

// Connexion
function login() {
    let username = document.getElementById("username").value;
    let role = document.getElementById("role").value;
    let message = document.getElementById("loginMessage");

    if(username) {
        message.innerHTML = `Bienvenue ${username}, vous êtes connecté en tant que ${role}.`;
        afficherSection(role);
    } else {
        message.innerHTML = "Veuillez entrer vos identifiants.";
    }
}

// Afficher la section selon le rôle
function afficherSection(role) {
    document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(role).classList.remove("hidden");
}

// Ajouter une note
function ajouterNote() {
    let nom = document.getElementById("nomEleve").value;
    let note = document.getElementById("noteEleve").value;

    if(nom && note) {
        notes.push({nom: nom, note: parseFloat(note)});
        afficherNotes();
        afficherResultatsEleve();
        afficherResultatsParent();
        calculerStats();
    }
}

// Professeur : afficher notes
function afficherNotes() {
    let liste = document.getElementById("listeNotes");
    liste.innerHTML = "<h3>Notes enregistrées :</h3>";
    notes.forEach(n => {
        liste.innerHTML += `<p>${n.nom} : ${n.note}/20</p>`;
    });
}

// Élève : afficher résultats
function afficherResultatsEleve() {
    let resultats = document.getElementById("resultatsEleve");
    resultats.innerHTML = "<h3>Vos résultats :</h3>";
    notes.forEach(n => {
        resultats.innerHTML += `<p>${n.nom} : ${n.note}/20</p>`;
    });
}

// Parent : afficher résultats
function afficherResultatsParent() {
    let resultatsParent = document.getElementById("resultatsParent");
    resultatsParent.innerHTML = "<h3>Résultats de votre enfant :</h3>";
    notes.forEach(n => {
        resultatsParent.innerHTML += `<p>${n.nom} : ${n.note}/20</p>`;
    });
}

// Administration : statistiques
function calculerStats() {
    let statsDiv = document.getElementById("stats");
    if(notes.length > 0) {
        let somme = notes.reduce((acc, n) => acc + n.note, 0);
        let moyenne = (somme / notes.length).toFixed(2);
        statsDiv.innerHTML = `<p>Moyenne générale : ${moyenne}/20</p>`;
    }
}

// Changement de thème
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
    let btn = document.getElementById("themeToggle");
    if(document.body.classList.contains("light")) {
        btn.textContent = "☀️ Mode Clair";
    } else {
        btn.textContent = "🌙 Mode Sombre";
    }
});
