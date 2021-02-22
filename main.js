/**Création des Objets */

/**Objet Users */

const User = {
  nom: "",
};

/** Objet Heroes */
let Heroes = [
  {
    id: 0,
    nom: "Toufou",
    img: "img/hunter.jpg",
    att: 7,
    def: 3,
  },
  {
    id: 1,
    nom: "Pimpom",
    img: "img/mage.jpg",
    att: 3,
    def: 7,
  },
  {
    id: 0,
    nom: "Paladin",
    img: "img/paladin.jpg",
    att: 5,
    def: 5,
  },
];

/**------------------------------------ */

/**----------------------------------- */

/**User s'inscrit */

// function register() {
//   let prenom;
//   prenom = prompt(`Pseudo Obligatoire pour jouer à "Mon Village dégeulasse"`);
//   if (prenom == null || isNaN(prenom) == false) {
//     return register();
//   } else {
//     User.nom = prenom;
//   }
// }
// register();
// console.log(User.nom, "je suis ici");

/**------------------------------ */
/**------------------------------ */

/**Affichage des persos à choisir */

for (let index = 0; index < Heroes.length; index++) {
  const imageHeroes = document.createElement("img");
  document.getElementById("heros").appendChild(imageHeroes);
  imageHeroes.src = Heroes[index].img;
  imageHeroes.setAttribute("id", Heroes[index].id);
}
