/**Création des Objets */

/**Objet Users */

const User = {
  nom: "",
};

/** Objet Heroes */
let Heroes = [
  {
    id: 0,
    nom: User.nom,
    img: "img/hunter.jpg",
    att: 7,
    def: 3,
  },
  {
    id: 1,
    nom: User.nom,
    img: "img/mage.jpg",
    att: 3,
    def: 7,
  },
  {
    id: 2,
    nom: User.nom,
    img: "img/paladin.jpg",
    att: 5,
    def: 5,
  },
];

/**------------------------------------ */

/**----------------------------------- */
/**User s'inscrit */

function register() {
  let prenom;
  prenom = prompt(`Pseudo Obligatoire pour jouer à "Mon Village dégeulasse"`);
  if (prenom == null || isNaN(prenom) == false) {
    return register();
  } else {
    User.nom = prenom;
  }
}
register();
console.log(User.nom, "je suis ici");
/**------------------------------ */

/**------------------------------ */
/**Affichage des persos à choisir */

for (let index = 0; index < Heroes.length; index++) {
  const imageHeroes = document.createElement("img");
  document.getElementById("heros").appendChild(imageHeroes);
  imageHeroes.src = Heroes[index].img;
  imageHeroes.setAttribute("id", Heroes[index].id);
  imageHeroes.setAttribute("class", "imageHeroes");
}
/**------------------------------ */

/**------------------------------ */
/**Function permettant d'afficher l'élément le heroes choisit */

const myPerso = document.querySelectorAll(".imageHeroes");
const userPerso = document.querySelector(".choice");

/**Foreach permet appliquer un function a tous les éléments */
myPerso.forEach((element) => {
  const idChiffre = parseInt(element.id);
  element.addEventListener("click", () => {
    loadHeroes(idChiffre, Heroes);
  });
});

/**écriture de la function loadHeroes */

function loadHeroes(id, object) {
  userPerso.removeChild(userPerso.firstChild);
  const titreUser = document.querySelector(".titre-user");
  const imgPersUser = document.createElement("img");
  imgPersUser.setAttribute("class", "perso-user");
  document.getElementById("bigperso").appendChild(imgPersUser);
  imgPersUser.src = object[id].img;
  imgPersUser.classList = "perso-user";
  titreUser.innerHTML = `${User.nom}`;
}
