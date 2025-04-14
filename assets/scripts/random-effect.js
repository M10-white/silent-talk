/**************************************************************
 * Variables globales pour les effets d'horreur
 **************************************************************/
let visualEffectUsed = false; // Si l'effet visuel a déjà été activé
let usedHorrorAdImageIndices = []; // Pour garder en mémoire les indices d'images déjà utilisés
let usedHorrorQuestionIndices = []; // Pour garder en mémoire les indices de questions d'horreur utilisées
let lastHorrorAdSoundIndex = -1;
let lastHorrorQuestionSoundIndex = -1;

// Tableaux d'images et de textes d'horreur
const horrorAdImages = [
  "assets/img/horror1.jpg",
  "assets/img/horror2.jpg",
  "assets/img/horror3.jpg"
];

const horrorQuestions = [
  "Ressens-tu cette personne qui te fixe ?",
  "As-tu déjà senti l'ombre derrière toi ?",
  "Entends-tu ces voix dans ma tête ?"
];

// Tableaux d'éléments audio pour les sons d'horreur
const horrorAdSounds = [
  document.getElementById("horror-sound-ad-1"),
  document.getElementById("horror-sound-ad-2"),
  document.getElementById("horror-sound-ad-3")
];
const horrorQuestionSounds = [
  document.getElementById("horror-sound-q-1"),
  document.getElementById("horror-sound-q-2"),
  document.getElementById("horror-sound-q-3")
];

// Fonction utilitaire pour obtenir un indice aléatoire différent du précédent
function getDifferentRandomIndex(n, lastIndex) {
  if (n <= 1) return 0;
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * n);
  } while(newIndex === lastIndex);
  return newIndex;
}

/**************************************************************
 * Fonction pour déclencher aléatoirement un effet d'horreur
 **************************************************************/
// Assurez-vous que meltSound est défini
const meltSound = document.getElementById("melt-sound");

function triggerRandomHorrorEffect() {
  // Pour l'exemple, on déclenche toujours l'effet (vous pouvez ajuster la condition)
  if (Math.random() < 0.3) {
    // 1. Effet visuel "melt"
    if (!visualEffectUsed) {
      // Ajoute la classe "screen-melt" pour déclencher l'animation
      document.body.classList.add("screen-melt");
      visualEffectUsed = true;
      // Jouer le son de melting
      meltSound.currentTime = 0;
      meltSound.play().catch(e => console.log("Erreur lors de la lecture du son melt :", e));
    } else {
      // Si l'effet visuel a déjà été activé, jouer un autre son d'horreur (choisi aléatoirement)
      let soundAdIdx = getDifferentRandomIndex(horrorAdSounds.length, lastHorrorAdSoundIndex);
      lastHorrorAdSoundIndex = soundAdIdx;
      horrorAdSounds[soundAdIdx].currentTime = 0;
      horrorAdSounds[soundAdIdx].play();
    }

    // 2. Changement temporaire de l'image de publicité
    let availableAdIndices = [];
    for (let i = 0; i < horrorAdImages.length; i++) {
      if (!usedHorrorAdImageIndices.includes(i)) {
        availableAdIndices.push(i);
      }
    }
    if (availableAdIndices.length === 0) {
      usedHorrorAdImageIndices = [];
      availableAdIndices = [...Array(horrorAdImages.length).keys()];
    }
    let adIndex = availableAdIndices[Math.floor(Math.random() * availableAdIndices.length)];
    usedHorrorAdImageIndices.push(adIndex);
    // Changer temporairement l'image de pub par une image d'horreur
    adImage.src = horrorAdImages[adIndex];
    let soundAdIdx = getDifferentRandomIndex(horrorAdSounds.length, lastHorrorAdSoundIndex);
    lastHorrorAdSoundIndex = soundAdIdx;
    horrorAdSounds[soundAdIdx].currentTime = 0;
    horrorAdSounds[soundAdIdx].play();

    // 3. Remplacement temporaire du texte de la question par un message d'horreur
    let availableQuestionIndices = [];
    for (let j = 0; j < horrorQuestions.length; j++) {
      if (!usedHorrorQuestionIndices.includes(j)) {
        availableQuestionIndices.push(j);
      }
    }
    if (availableQuestionIndices.length === 0) {
      usedHorrorQuestionIndices = [];
      availableQuestionIndices = [...Array(horrorQuestions.length).keys()];
    }
    let qIndex = availableQuestionIndices[Math.floor(Math.random() * availableQuestionIndices.length)];
    usedHorrorQuestionIndices.push(qIndex);
    const originalQuestionText = questionText.textContent;
    questionText.textContent = horrorQuestions[qIndex];
    let soundQIdx = getDifferentRandomIndex(horrorQuestionSounds.length, lastHorrorQuestionSoundIndex);
    lastHorrorQuestionSoundIndex = soundQIdx;
    horrorQuestionSounds[soundQIdx].currentTime = 0;
    horrorQuestionSounds[soundQIdx].play();

    // Après 1 seconde, rétablir les éléments originaux
    setTimeout(() => {
        if (document.body.classList.contains("screen-melt")) {
          document.body.classList.remove("screen-melt");
        }
        questionText.textContent = originalQuestionText;
        visualEffectUsed = false;
      }, 1000);
  }
}
