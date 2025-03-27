const questions = [
  {
    titre: "[Nom]",
    texte: "Es-tu prêt à découvrir quel type de personne tu es ?",
    reponses: [
      "Bien sûr que oui !",
      "Oui",
      "Non !"
    ],
    type: "radio"
  },
  {
    titre: "Question 1",
    texte: "Lequel des appareils connectés possédez-vous actuellement ?",
    reponses: [
      "Ordinateur de bureau ou portable",
      "Tablette",
      "Téléphone mobile",
      "Smart TV",
      "Autre"
    ],
    type: "checkbox"
  },
  {
    titre: "Question 2",
    texte: "Lors d'une soirée, que préférez-vous faire ?",
    reponses: [
      "Discuter avec tout le monde",
      "Rencontrer de nouvelles personnes",
      "Rester dans un coin tranquille",
      "Participer aux jeux",
      "Partir tôt"
    ],
    type: "radio"
  },
  {
    titre: "Question 3",
    texte: "Quel est ton moment de la journée préféré ?",
    reponses: [
      "Matin",
      "Après-midi",
      "Soir",
      "Nuit",
      "Aucune préférence"
    ],
    type: "radio"
  },
  {
    titre: "Question 4",
    texte: "Comment prends-tu tes décisions ?",
    reponses: [
      "De manière spontanée",
      "Après mûre réflexion",
      "En demandant l'avis des autres",
      "Suivant mon intuition",
      "Je laisse les choses se faire"
    ],
    type: "radio"
  },
  {
    titre: "Question 5",
    texte: "Quel environnement t'inspire le plus ?",
    reponses: [
      "La nature",
      "La ville",
      "L'océan",
      "La montagne",
      "Un endroit calme et isolé"
    ],
    type: "radio"
  },
  {
    titre: "Question 6",
    texte: "Comment décrirais-tu ton style de communication ?",
    reponses: [
      "Direct et franc",
      "Chaleureux et empathique",
      "Réservé et réfléchi",
      "Dynamique et expressif",
      "Éclectique"
    ],
    type: "radio"
  },
  {
    titre: "Question 7",
    texte: "Comment réagis-tu face au stress ?",
    reponses: [
      "Je reste calme et réfléchi",
      "Je deviens anxieux(se)",
      "Je cherche du soutien auprès des autres",
      "Je me réfugie dans mes passions",
      "Je prends du recul"
    ],
    type: "radio"
  },
  {
    titre: "Question 8",
    texte: "Quelle importance accordes-tu à la créativité dans ta vie ?",
    reponses: [
      "Extrêmement importante",
      "Plutôt importante",
      "Moyennement",
      "Peu importante",
      "Pas du tout importante"
    ],
    type: "radio"
  },
  {
    titre: "Question 9",
    texte: "Comment te décrirais-tu en quelques mots ?",
    reponses: [
      "Optimiste",
      "Pragmatique",
      "Intuitif(ve)",
      "Réfléchi(e)",
      "Aventurier(ère)"
    ],
    type: "radio"
  },
  {
    titre: "Question 10",
    texte: "Que recherches-tu dans tes relations interpersonnelles ?",
    reponses: [
      "La loyauté",
      "La passion",
      "La compréhension",
      "L'humour",
      "La stabilité"
    ],
    type: "radio"
  },
  {
    titre: "Question 11",
    texte: "Quelle activité préfères-tu pour te détendre ?",
    reponses: [
      "Lire un livre",
      "Regarder un film",
      "Faire du sport",
      "Méditer",
      "Sortir entre amis"
    ],
    type: "radio"
  },
  {
    titre: "Question 12",
    texte: "Quel est ton rapport au risque ?",
    reponses: [
      "J'aime prendre des risques",
      "Je suis prudent(e)",
      "Je suis équilibré(e)",
      "Je préfère la sécurité",
      "Je prends des risques calculés"
    ],
    type: "radio"
  },
  {
    titre: "Question 13",
    texte: "Comment décrirais-tu ton mode de vie ?",
    reponses: [
      "Organisé et planifié",
      "Spontané et flexible",
      "Axé sur les routines",
      "Toujours à la recherche de nouveautés",
      "Équilibré"
    ],
    type: "radio"
  },
  {
    titre: "Question 14",
    texte: "Qu'est-ce qui te motive le plus dans la vie ?",
    reponses: [
      "Le succès",
      "Les relations humaines",
      "La découverte",
      "L'apprentissage",
      "La contribution à la société"
    ],
    type: "radio"
  },
  {
    titre: "Question 15",
    texte: "Comment décrirais-tu ta manière de gérer les imprévus ?",
    reponses: [
      "Je m'adapte rapidement",
      "Je planifie pour éviter les surprises",
      "Je reste calme et analyse la situation",
      "Je fais appel à mon intuition",
      "Je laisse les choses suivre leur cours"
    ],
    type: "radio"
  }
];

const adImages = [
  "assets/img/864.jpg",
  "assets/img/1023.jpg",
  "assets/img/1104.jpg",
  "assets/img/18966674.jpg",
  "assets/img/18969441.jpg",
  "assets/img/36783.jpg",
  "assets/img/18935571.jpg",
  "assets/img/36802.jpg",
  "assets/img/18966730.jpg",
  "assets/img/1026.jpg",
  "assets/img/867.jpg",
  "assets/img/18966824.jpg",
  "assets/img/863.jpg"
];

let indexQuestion = 0;
let nomUtilisateur = "";

const introScreen       = document.getElementById("intro-screen");
const introButton       = document.getElementById("intro-button");

const nameScreen        = document.getElementById("name-screen");
const inputNom          = document.getElementById("user-name");
const validateNameBtn   = document.getElementById("validate-name-button");

const questionsScreen   = document.getElementById("questions-screen");
const questionTitle     = document.getElementById("question-title");
const questionText      = document.getElementById("question-text");
const answersContainer  = document.getElementById("answers-container");
const nextButton        = document.getElementById("next-button");

const endScreen         = document.getElementById("end-screen");
const userNameDisplay   = document.getElementById("user-name-display");

const adImage           = document.getElementById("ad-image");

const bgMusic           = document.getElementById("bg-music");
const volumeSlider      = document.getElementById("volume-slider");

const clickSound        = document.getElementById("click-sound");
const typingSound       = document.getElementById("typing-sound");
const bugSound    = document.getElementById("bug-sound");

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function playTypingSound() {
  typingSound.currentTime = 0;
  typingSound.play();
}

volumeSlider.addEventListener("input", () => {
  bgMusic.volume = volumeSlider.value;
});

inputNom.addEventListener("keydown", playTypingSound);

introButton.addEventListener("click", () => {
  playClickSound();

  bgMusic.play().catch((err) => {
    console.log("Lecture audio bloquée :", err);
  });

  if (adImages.length > 0) {
    adImage.src = adImages[0];
  }

  introScreen.classList.add("fade-out");
  setTimeout(() => {
    introScreen.classList.add("hidden");
    introScreen.classList.remove("fade-out");

    nameScreen.classList.remove("hidden");
  }, 500);
});

validateNameBtn.addEventListener("click", () => {
  playClickSound();
  nomUtilisateur = inputNom.value.trim();
  if (nomUtilisateur === "") {
    alert("Veuillez saisir votre nom pour continuer.");
    return;
  }

  nameScreen.classList.add("fade-out");
  setTimeout(() => {
    nameScreen.classList.add("hidden");
    nameScreen.classList.remove("fade-out");

    questionsScreen.classList.remove("hidden");
    afficherQuestion(indexQuestion);
  }, 500);
});

nextButton.addEventListener("click", () => {
  playClickSound();
  const reponsesSelectionnees = getSelectedAnswers();
  console.log(`Réponses question ${indexQuestion + 1} :`, reponsesSelectionnees);

  questionsScreen.classList.add("fade-out");
  setTimeout(() => {
    questionsScreen.classList.remove("fade-out");
    indexQuestion++;
    if (indexQuestion < questions.length) {
      afficherQuestion(indexQuestion);
    } else {
      afficherEcranFinal();
    }
  }, 500);
});

function afficherQuestion(indice) {
  const questionActuelle = questions[indice];
  
  if (indice === 0) {
    questionTitle.textContent = nomUtilisateur + "...";
  } else {
    questionTitle.textContent = questionActuelle.titre;
  }
  
  questionText.textContent  = questionActuelle.texte;

  answersContainer.innerHTML = "";

  questionActuelle.reponses.forEach((reponse) => {
    const label = document.createElement("label");
    label.classList.add("answer-option");
  
    const input = document.createElement("input");
    input.type = questionActuelle.type;
    input.name = "question_" + indice; 
    input.value = reponse;
  
    input.addEventListener("click", playClickSound);
  
    const spanText = document.createElement("span");
    spanText.classList.add("answer-text");
    spanText.textContent = " " + reponse;
  
    if (reponse === "Non !") {
      const mouseEnterHandler = () => {
        if (spanText.textContent.trim() === "Non !") {
          bugSound.currentTime = 0;
          bugSound.play();
  
          document.body.classList.add("glitch-screen");
  
          adImage.src = "assets/img/129055.gif";
  
          setTimeout(() => {
            document.body.classList.remove("glitch-screen");
            adImage.src = adImages[(indice + 1) % adImages.length];
          }, 500);
  
          spanText.classList.add("shake-effect");
          spanText.style.textDecoration = "line-through";
  
          setTimeout(() => {
            spanText.textContent = " Carrément !!!";
            spanText.style.textDecoration = "none";
            spanText.classList.remove("shake-effect");
            spanText.removeEventListener("mouseenter", mouseEnterHandler);
          }, 500);
        }
      };
      spanText.addEventListener("mouseenter", mouseEnterHandler);
    }
  
    label.appendChild(input);
    label.appendChild(spanText);
    answersContainer.appendChild(label);
  });

  adImage.src = adImages[(indice + 1) % adImages.length];
}

function getSelectedAnswers() {
  const inputs = answersContainer.querySelectorAll("input");
  const selected = [];
  inputs.forEach(input => {
    if (input.checked) {
      selected.push(input.value);
    }
  });
  return selected;
}

function afficherEcranFinal() {
  questionsScreen.classList.add("hidden");
  userNameDisplay.textContent = nomUtilisateur;
  endScreen.classList.remove("hidden");
}