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
    gold: 0,
  },
  {
    id: 1,
    nom: User.nom,
    img: "img/mage.jpg",
    att: 3,
    def: 7,
    arme: "batton",
    gold: 0,
  },
  {
    id: 2,
    nom: User.nom,
    img: "img/paladin.jpg",
    att: 5,
    def: 5,
    arme: "épée",
    gold: 0,
  },
];

/**Création d'un modal */
// Get the modal
const valider = document.querySelector(".sous-container");
const modal = document.getElementById("myModal");
const progress = document.querySelector(".progress-bar");
const btnNextDaronne = document.querySelector(".btn-nextDaronne");
const btnPrvtDaronne = document.querySelector(".btn-prvtDaronne");
const btnNrxtForgeron = document.querySelector(".btn-nextForgeron");
const btnPrvtForgeron = document.querySelector(".btn-prvtForgeron");
const forgeron = document.querySelector(".btn-forgeron");
const btnForet = document.querySelector(".btn-foret");
// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

function openModal() {
  progress.style.display = "none";
  valider.style.display = "none";
  modal.style.display = "block";
}
openModal();
// btn.onclick = function () {
//   modal.style.display = "block";
// };

/**User s'inscrit !!!!!! A Décommenter*/
const btnRgister = document.querySelector(".btn-register");
btnRgister.addEventListener("click", register);
let prenom;
function register() {
  let prenom;
  prenom = document.getElementById("nom").value;
  if (prenom == null || isNaN(prenom) == false) {
    return register();
  } else {
    modal.style.display = "none";
    User.nom = prenom;
    console.log(User.nom, "je suis ici");
  }
}

// Quand l'User click sur la croix
span.onclick = function () {
  // if (prenom == null || isNaN(prenom) == false) {
  //   return register();
  // }
  modal.style.display = "none";
};

// Quand le User clique en dehors du modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/**Button Valider display == true, lancement d'une progress bar */
const letgo = document.querySelector(".btnValider");
let i = 0;
letgo.addEventListener("click", move);

function move() {
  progress.style.display = "block";
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        letgo.disabled = "true";
        progress.style.display = "none";
        valider.style.display = "flex";
        textHistory.innerHTML = `Bonjour ${User.nom}`;
        forgeron.style.display = "none";
        btnPrvtDaronne.style.display = "none";
        btnNextDaronne.style.display = "none";
        btnForet.style.display = "none";
        btnNrxtForgeron.style.display = "none";
        btnPrvtForgeron.style.display = "none";
        document.getElementById("daronne").disabled = true;
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

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
const comptgold = document.getElementById("gold");
function loadHeroes(id, object) {
  userPerso.removeChild(userPerso.firstChild);
  const imgPersUser = document.createElement("img");
  document.getElementById("bigperso").appendChild(imgPersUser);
  imgPersUser.src = object[id].img;
  imgPersUser.classList = "perso-user";
  titreUser.innerText = `${User.nom}`;
  comptAtt.innerText = `Attaque : ${object[id].att}`;
  comptDef.innerText = `Défense : ${object[id].def}`;
  comptgold.innerText = `Gold : ${object[id].gold}`;
  map.set("id", object[id].id);
  map.set("att", object[id].att);
  map.set("def", object[id].def);
  map.set("arme", object[id].arme);
  map.set("gold", object[id].gold);
  console.log(map.get("att"));
}
/**------------------------------ */

/**------------------------------ */
/**text d'intro avec button précédent et suivant */
let counter = 0;
const textHistory = document.querySelector(".text-history");
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
  textHistory.innerHTML = ``;
  counter++;
  console.log(counter);

  if (counter == 0) {
    textHistory.innerHTML = `Bonjour ${User.nom}`;
  }
  if (counter == 1) {
    prvt.disabled = false;
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
    next.disabled = false;
    textHistory.innerHTML = `${User.nom} tu es dans ta chambre j'ai quelque choses pour toi !!!!`;
  } else if (counter == 10) {
    document.getElementById("daronne").disabled = false;
    textHistory.innerHTML = `Ah la daronne m'appelle`;
  }
}

/**------------------------------------------------------------------ */
/**La Daronne */

/**function permettant de lancer le dialogue avec la daronne */
let count = 0;
const btnDarone = document.querySelector(".btn-daronne");
const imageDialogue = document.querySelector(".chambre");
btnDarone.addEventListener("click", () => {
  gotoDaronne();
});
btnNextDaronne.addEventListener("click", () => {
  nextDialogueDaronne();
});
btnPrvtDaronne.addEventListener("click", () => {
  prvtDialogueDaronne();
});

function gotoDaronne() {
  btnDarone.style.display = "none";
  forgeron.style.display = "block";
  forgeron.disabled = true;
  next.style.display = "none";
  prvt.style.display = "none";
  btnNextDaronne.style.display = "block";
  btnPrvtDaronne.style.display = "block";
  imageDialogue.src = "img/ladraonne.jpeg";
  textHistory.innerHTML = `Cela fait maintenant 2h que je t'appelle ${User.nom}`;
  // document.getElementById("daronne").disabled = true;
}

function nextDialogueDaronne() {
  count++;
  console.log(count);
  if (count == 1) {
    btnPrvtDaronne.disabled = false;
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
    textHistory.innerHTML = `Va voir chez le forgeron si peux pas récupérer l'arme de ton père, qui te permettra de boloss  `;
  } else if (count == 7) {
    textHistory.innerHTML = `pour aller remplacer ton ${map.get(
      "arme"
    )} dégeulasse`;
  } else if (count == 8) {
    textHistory.innerHTML = `aller à tanto bichon je t'aime, ne meurs pas c'est tous ce qu'une darone demande`;
  } else if (count == 9) {
    textHistory.innerHTML = `.....`;
  } else if (count == 10) {
    forgeron.disabled = false;
    btnNextDaronne.disabled = true;
    textHistory.innerHTML = `tiens prend des sous....`;
    map.set("gold", 20);
    comptgold.innerText = `Gold : ${map.get("gold")}`;
    alert(`Gold : ${map.get("gold")} ont été rajouté à votre inventaire`); //remplacer par un modal
  }
}

function prvtDialogueDaronne() {
  textHistory.innerHTML = ``;
  count--;
  if (count == 0) {
    btnPrvtDaronne.disabled = true;
    textHistory.innerHTML = `Bonjour ${User.nom}`;
  } else if (count == 1) {
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
    textHistory.innerHTML = `Va voir chez le forgeron si peux pas récupérer l'arme de ton père, qui te permettra de boloss  `;
  } else if (count == 7) {
    textHistory.innerHTML = `pour aller remplacer ton ${map.get(
      "arme"
    )} dégeulasse`;
  } else if (count == 8) {
    textHistory.innerHTML = `aller à tanto bichon je t'aime, ne meurs pas c'est tous ce qu'une darone demande`;
  } else if (count == 9) {
    forgeron.disabled = true;
    btnNextDaronne.disabled = false;
    textHistory.innerHTML = `..........`;
    map.set("gold", 0);
    comptgold.innerText = `Gold : ${map.get("gold")}`;
    console.log("je suis ici", map);
  } else if (count == 10) {
    forgeron.disabled = false;
    textHistory.innerHTML = `tiens prend des sous....`;
  }
}

/**-------------------------------------------------- */

/**-----FORGERON-----*/
let num = 0;
forgeron.addEventListener("click", gotoForgeron);

function gotoForgeron() {
  forgeron.style.display = "none";
  btnForet.style.display = "block";
  btnForet.disable = true;
  forgeron.disabled = true;
  next.style.display = "none";
  prvt.style.display = "none";
  btnNextDaronne.style.display = "none";
  btnPrvtDaronne.style.display = "none";
  btnNrxtForgeron.style.display = "block";
  btnPrvtForgeron.style.display = "none";
  imageDialogue.src = "img/forgeron.jpg";
  textHistory.innerHTML = `Salut Martin , ou  ${User.nom} ?? je sais plus et on s'en fout`;
}

btnNrxtForgeron.addEventListener("click", nextdialogueForgeron);
// btnPrvtForgeron.addEventListener("click", prvtdialogueForgeron);

function nextdialogueForgeron() {
  num++;

  if (num == 1) {
    btnPrvtForgeron.disabled = false;
    textHistory.innerHTML = `Tu es certaine venu récupérer ${map.get(
      "arme"
    )} de ton daron`;
  } else if (num == 2) {
    textHistory.innerHTML = `il s'avère que je l'ai perdu dans la forêt`;
  } else if (num == 3) {
    textHistory.innerHTML = `par contre tu iras pas très loin avec ton stuff`;
  } else if (num == 4) {
    textHistory.innerHTML = `tu veux que je l'améliore quoi ta jupette ou ton arme "dégeulasse" ?`;
  } else if (num == 5) {
    forgeron.disabled = false;
    btnNrxtForgeron.disabled = true;

    imageDialogue.style.display = "none";
    const btnChoixAtt = document.createElement("button");
    btnChoixAtt.innerHTML = "+5 de Att";
    const btnChoixDef = document.createElement("button");
    btnChoixDef.innerHTML = "+5 de Def";
    document.getElementById("history").appendChild(btnChoixAtt);
    document.getElementById("history").appendChild(btnChoixDef);
    btnChoixAtt.addEventListener("click", addAtt);
    function addAtt() {
      map.set("att", map.get("att") + 5);
      comptAtt.innerText = `Attaque : ${map.get("att")}`;
      alert(`Attaque : ${map.get("att")} ont été rajouté`);
      textHistory.innerHTML = `Bon tu attends quoi Domminique ? va chercher l'arme de ton père`;
      forgeron.disabled = true;
      btnNrxtForgeron.style.display = "none";
      imageDialogue.style.display = "block";
    }
    btnChoixDef.addEventListener("click", addDef);
    function addDef() {
      map.set("def", map.get("def") + 5);
      comptDef.innerText = `Defense : ${map.get("att")}`;
      alert(`Attaque : ${map.get("def")} ont été rajouté`);
      textHistory.innerHTML = `Bon tu attends quoi Domminique ? va chercher l'arme de ton père`;
      forgeron.disabled = true;
      btnNrxtForgeron.style.display = "none";
      imageDialogue.style.display = "block";
    }
  }
}

/**--------------------------------------- */
/**Foret **/

btnForet.addEventListener("click", gotoforest);
function gotoforest() {
  imageDialogue.src = "";
}
