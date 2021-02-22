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
