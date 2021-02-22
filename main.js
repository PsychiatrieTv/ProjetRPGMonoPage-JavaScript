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
    arme: "arc",
  },
  {
    id: 1,
    nom: User.nom,
    img: "img/mage.jpg",
    att: 3,
    def: 7,
    arme: "batton",
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
/**User s'inscrit !!!!!! A Décommenter*/

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

/**Button Valider display == true, lancement d'une progress bar */

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
const map = new Map();
/**Foreach permet appliquer une function à tous les éléments */
myPerso.forEach((element) => {
  const idChiffre = parseInt(element.id);
  element.addEventListener("click", () => {
    loadHeroes(idChiffre, Heroes);
  });
});

/**écriture de la function loadHeroes + mettre par rapport a Att et Def */
const titreUser = document.querySelector(".titre-user");
const comptAtt = document.getElementById("att");
const comptDef = document.getElementById("def");
function loadHeroes(id, object) {
  userPerso.removeChild(userPerso.firstChild);
  const imgPersUser = document.createElement("img");
  document.getElementById("bigperso").appendChild(imgPersUser);
  imgPersUser.src = object[id].img;
  imgPersUser.classList = "perso-user";
  titreUser.innerText = `${User.nom}`;
  comptAtt.innerText = `Attaque : ${object[id].att}`;
  comptDef.innerText = `Défense : ${object[id].def}`;
  map.set("att", object[id].att);
  map.set("def", object[id].def);
  map.set("arme", object[id].arme);
  console.log(map.get("att"));
}
/**------------------------------ */

/**------------------------------ */
/**text d'intro avec button précédent et suivant */
let counter = 0;
const textHistory = document.querySelector(".text-history");
if (counter == 0) {
  textHistory.innerHTML = `Bonjour ${User.nom}`;
}

const next = document.querySelector(".btn-next");
const prvt = document.querySelector(".btn-prvt");
next.addEventListener("click", () => {
  suivant();
});
prvt.addEventListener("click", () => {
  precedent();
});

/**Affichage du text d'intro */
function suivant() {
  document.getElementById("daronne").disabled = true;
  textHistory.innerHTML = ``;
  counter++;
  console.log(counter);

  if (counter == 0) {
    textHistory.innerHTML = `Bonjour ${User.nom}`;
  }
  if (counter == 1) {
    textHistory.innerHTML = `Oula je vois que tu es entrain de te faire chier mon ami`;
  } else if (counter == 2) {
    textHistory.innerHTML = `Tu n'as pas envie de vivre une aventure sensationnelle ??`;
  } else if (counter == 3) {
    textHistory.innerHTML = `Aller parcourir les montagnes, les champs de blé, traverser les lacs, les rivières !!`;
  } else if (counter == 4) {
    textHistory.innerHTML = `te battre avec des requins, DPS DES AD !!! FOCUS LA TÊTE DE MORT !!!`;
  } else if (counter == 5) {
    textHistory.innerHTML = `LE HEALER ????? HEALER ???? PUTAIN HEAL IL EST OU LE HEAL ??!! `;
  } else if (counter == 6) {
    textHistory.innerHTML = `........`;
  } else if (counter == 7) {
    textHistory.innerHTML = `pardon je me suis emporté, je suis juste l'intro moi tu sais, je suis même pas un tuto alors :'(`;
  } else if (counter == 8) {
    textHistory.innerHTML = `Je suis juste la voix dans ta tête`;
  } else if (counter == 9) {
    textHistory.innerHTML = `${User.nom} tu es dans ta chambre j'ai quelque choses pour toi !!!!`;
  } else if (counter == 10) {
    next.disabled = true;
    document.getElementById("daronne").disabled = false;
    textHistory.innerHTML = `Ah la daronne m'appelle`;
  }
}

function precedent() {
  document.getElementById("daronne").disabled = true;
  textHistory.innerHTML = ``;
  counter--;
  console.log(counter);

  if (counter == 0) {
    prvt.disabled = true;
    textHistory.innerHTML = `Bonjour ${User.nom}`;
  } else if (counter == 1) {
    textHistory.innerHTML = `Oula je vois que tu es entrain de te faire chier mon ami`;
  } else if (counter == 2) {
    textHistory.innerHTML = `Tu n'as pas envie de vivre une aventure sensationnelle ??`;
  } else if (counter == 3) {
    textHistory.innerHTML = `Aller parcourir les montagnes, les champs de blé, traverser les lacs, les rivières !!`;
  } else if (counter == 4) {
    textHistory.innerHTML = `te battre avec des requins, DPS DES AD !!! FOCUS LA TÊTE DE MORT !!!`;
  } else if (counter == 5) {
    textHistory.innerHTML = `LE HEALER ????? HEALER ???? PUTAIN HEAL IL EST OU LE HEAL ??!! `;
  } else if (counter == 6) {
    textHistory.innerHTML = `........`;
  } else if (counter == 7) {
    textHistory.innerHTML = `pardon je me suis emporté, je suis juste l'intro moi tu sais, je suis même pas un tuto alors :'(`;
  } else if (counter == 8) {
    textHistory.innerHTML = `Je suis juste la voix dans ta tête`;
  } else if (counter == 9) {
    textHistory.innerHTML = `${User.nom} tu es dans ta chambre j'ai quelque choses pour toi !!!!`;
  } else if (counter == 10) {
    document.getElementById("daronne").disabled = false;
    textHistory.innerHTML = `Ah la daronne m'appelle`;
  }
}

/**La Daronne */

/**function permettant de lancer le dialogue avec la daronne */
let count = 0;
const btnDarone = document.querySelector(".btn-daronne");
const imageDialogue = document.querySelector(".chambre");
btnDarone.addEventListener("click", () => {
  suivant();
});

function suivant() {
  imageDialogue.src = "img/ladraonne.jpeg";
  textHistory.innerHTML = `Cela fait maintenant 2h que je t'appelle ${User.nom}`;
  document.getElementById("daronne").disabled = true;

  count--;
  console.log(count);

  if (count == 1) {
    textHistory.innerHTML = `Je sais que tu n'as que 10ans`;
  } else if (count == 2) {
    textHistory.innerHTML = `Mais ça me ferai exprèment plaisir d'aller`;
  } else if (count == 3) {
    textHistory.innerHTML = `Que tu suives les traces de ton daron`;
  } else if (count == 4) {
    textHistory.innerHTML = `plombier a casquette verte certe mais il était courageux lui`;
  } else if (count == 5) {
    textHistory.innerHTML = `il a parcourut du chemin pour venir me chercher dans un chateau  `;
  } else if (count == 6) {
    textHistory.innerHTML = `Va voir chez le forgeron si peux pas récupérer l'arme de ton père `;
  } else if (count == 7) {
    textHistory.innerHTML = `pour aller remplacer ton ${map.get(
      "arme"
    )} dégeulasse`;
  } else if (count == 8) {
    textHistory.innerHTML = `aller à tanto bichon je t'aime, ne meurs pas c'est tous ce qu'une darone demande`;
  } else if (count == 9) {
    textHistory.innerHTML = `${User.nom} tu es dans ta chambre j'ai quelque choses pour toi !!!!`;
  } else if (count == 10) {
    next.disabled = true;
    document.getElementById("daronne").disabled = false;
    textHistory.innerHTML = `Ah la daronne m'appelle`;
  }
}
