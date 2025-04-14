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
function triggerRandomHorrorEffect() {
    // Avec une chance par exemple de 50% (ici condition forcée à true pour le test)
    if (Math.random() < 1) {
      // 1. Effet visuel : simulateur "melt" sur l'écran
      if (!visualEffectUsed) {
        // Au lieu de "glitch-screen", on utilise "screen-melt"
        document.body.classList.add("screen-melt");
        visualEffectUsed = true;
        // Jouer le son de melting (assurez-vous que meltSound est défini)
        meltSound.currentTime = 0;
        meltSound.play();
      } else {
        // Si l'effet melt a déjà été activé, on joue un son d'horreur choisi dans celui des pubs, différent du précédent.
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
      adImage.src = horrorAdImages[adIndex];
      let soundAdIdx = getDifferentRandomIndex(horrorAdSounds.length, lastHorrorAdSoundIndex);
      lastHorrorAdSoundIndex = soundAdIdx;
      horrorAdSounds[soundAdIdx].currentTime = 0;
      horrorAdSounds[soundAdIdx].play();
  
      // 3. Remplacement temporaire de la question par une question d'horreur
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
      }, 1000);
    }
  }  
