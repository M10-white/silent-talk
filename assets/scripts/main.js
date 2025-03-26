const bgMusic = document.getElementById("bg-music");

introButton.addEventListener("click", () => {
  bgMusic.play()
    .then(() => {
      console.log("Musique lancée !");
    })
    .catch((error) => {
      console.log("Lecture audio bloquée :", error);
    });

const questions = [
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
    texte: "Quelle est votre boisson préférée ?",
    reponses: [
      "Café",
      "Thé",
      "Soda",
      "Eau",
      "Autre"
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

introButton.addEventListener("click", () => {
  introScreen.classList.add("fade-out");

  setTimeout(() => {
    introScreen.classList.add("hidden");
    introScreen.classList.remove("fade-out");

    nameScreen.classList.remove("hidden");
  }, 500);
});

validateNameBtn.addEventListener("click", () => {
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
  questionTitle.textContent = questionActuelle.titre;
  questionText.textContent  = questionActuelle.texte;

  answersContainer.innerHTML = "";

  questionActuelle.reponses.forEach((reponse) => {
    const label = document.createElement("label");
    label.classList.add("answer-option");

    const input = document.createElement("input");
    input.type = questionActuelle.type;
    input.name = "question_" + indice; 
    input.value = reponse;

    const textNode = document.createTextNode(" " + reponse);

    label.appendChild(input);
    label.appendChild(textNode);
    answersContainer.appendChild(label);
  });

  adImage.src = adImages[indice % adImages.length];
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

});