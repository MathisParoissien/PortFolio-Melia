// utils.js

export function formatUrl(titre) {
    let sansAccents = titre.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Mettre en minuscules
    let titreMinuscule = sansAccents.toLowerCase();

    // Remplacer les espaces et caractères non-alphanumériques (sauf les tirets) par des tirets
    let titreUrl = titreMinuscule.replace(/[^a-z0-9-]+/g, "-");

    // Enlever les tirets en début et fin de chaîne
    titreUrl = titreUrl.replace(/^-+|-+$/g, "");

    return titreUrl;
}
