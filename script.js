const title = document.getElementById("typing-title"); // Récupère l'élément HTML qui contient le titre animé.

const text = "Réviser. Comprendre. Maîtriser les réseaux."; // Définit le texte qui sera écrit progressivement.

let index = 0; // Initialise la position du caractère actuellement écrit.

const typingSpeed = 70; // Définit la vitesse d'écriture en millisecondes par caractère.

function typeTitle() { // Crée la fonction responsable de l'animation de frappe.
    if (index < text.length) { // Vérifie s'il reste encore des caractères à afficher.
        title.textContent += text.charAt(index); // Ajoute le caractère actuel au titre.
        index++; // Passe au caractère suivant.
        setTimeout(typeTitle, typingSpeed); // Relance la fonction après le délai défini.
    } // Ferme la condition qui contrôle la frappe.
} // Ferme la fonction typeTitle.

document.addEventListener("DOMContentLoaded", typeTitle); // Lance l'animation lorsque le document HTML est complètement chargé.

const navLinks = document.querySelectorAll(".nav-link"); // Récupère tous les liens de navigation.

const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Récupère le nom de la page actuellement visitée.

navLinks.forEach((link) => { // Parcourt chaque lien de navigation.
    const linkPage = link.getAttribute("href"); // Récupère l'adresse associée au lien.
    if (linkPage === currentPage) { // Vérifie si le lien correspond à la page actuelle.
        link.classList.add("active"); // Ajoute la classe active au lien correspondant.
    } else { // Exécute cette partie pour les autres liens.
        link.classList.remove("active"); // Retire la classe active des autres liens.
    } // Ferme la condition de comparaison.
}); // Ferme la boucle sur les liens.
