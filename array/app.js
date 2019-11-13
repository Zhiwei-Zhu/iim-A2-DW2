// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

function getRandomArray(limit = 30) {
    let arr = [];
    for (let i = 0; i < limit; ++i) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

/**
 * Exercice 1 :
 * Créez un tableau avec la fonction getRandomArray() et multipliez par deux chaque valeur du tableau
 */
const arr = getRandomArray();
const result = arr.map(e => e *2);
console.log('result', result);

/**
 * Exercice 2 :
 * Créez un tableau avec la fonction getRandomArray() et triez par ordre croissant les valeurs
 */
const arr2 = getRandomArray();
const result2 = arr2.sort((a, b) => a - b);
console.log('result2', result2);

/**
 * Exercicec 3.1 :
 * Créez un table avec la fonction getRandomArray() et additionnez toutes les valeurs entre elles
 */


/**
 * Exercice 3.2 :
 * Créez un tableau avec la fonction getRandomArray() et remplacez chaque valeur par cette phrase
 * "Pair : VALUE" si la valeur est pair
 * "Impaire : VALUE" si la valeur est impair
 */

/**
 * Exercice 4 :
 * Créez un tableau avec la fonction getRandomArray() et filtrez seulement les valeurs pair puis ensuite impaire
 */
