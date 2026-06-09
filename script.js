const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const levelupSound = new Audio("levelup.mp3");
const winSound = new Audio("win.mp3");
const helicopterSound = new Audio("helicopter.mp3");
const airplaneSound = new Audio("airplane.mp3");

helicopterSound.volume = 0.3;
airplaneSound.volume = 0.3;

const beginnerWords = [
    "apple","banana","orange","grape","mango",
"school","teacher","student","book","pen",
"river","mountain","forest","garden","flower",
"rice","oil","salt","sugar","flour","wheat","bread","butter","cheese","milk",
"cream","yogurt","egg","chicken","mutton","beef","fish","shrimp","crab","sausage",
"ham","bacon","tea","coffee","juice","water","cola","sprite","fanta","energy",
"honey","jam","ketchup","mayonnaise","vinegar","sauce","pickle","biscuit","cookie","cracker",
"cake","chocolate","candy","chips","noodle","pasta","spaghetti","macaroni","pizza","burger",
"sandwich","apple","banana","orange","mango","grape","papaya","melon","pear","peach",
"lemon","lime","onion","potato","tomato","carrot","cabbage","spinach","lettuce","cucumber",
"pumpkin","bean","pea","garlic","ginger","pepper","chili","turmeric","coriander","cumin",
"cardamom","clove","cinnamon","almond","cashew","walnut","peanut","raisin","dates","coconut",
"oats","cereal","corn","ricecake","icecream","popcorn","muffin","donut","waffle","pancake",
"doctor","nurse","driver","pilot","farmer",
"king","queen","baby","boy","girl","man","woman","friend","family","home",
"garden","flower","forest","jungle","desert","rain","snow","storm","cloud","wind",
"summer","winter","spring","autumn","morning","evening","night","today","tomorrow","yesterday",
"doctor","nurse","hospital","police","farmer","driver","pilot","engineer","artist","writer",
"mango","orange","grape","lemon","coconut","papaya","melon","cherry",
"dog","cat","tiger","lion","horse","monkey","elephant","rabbit","zebra","panda",
"computer","mouse","keyboard","mobile","laptop","monitor","router","internet","browser","camera",
"school","teacher","student","book","river","mountain","ocean","city","village","planet",
"happy","strong","quick","smart","bright","green","yellow","black","white","small",
"water","milk","bread","rice","sugar","coffee","tea","cake","pizza","burger",
"ball","door","room","table","chair","house","shirt","phone","pen","bag",
"red","blue","pink","gold","silver","grass","tree","sun","moon","star",
"fish","bird","cow","goat","duck","frog","snake","bear","camel","deer",
"hand","foot","eye","ear","nose","hair","face","head","arm","leg",
"car","bus","bike","train","plane","boat","ship","road","street","park",
"king","queen","baby","boy","girl","man","woman","friend","family","home"
];

const symbols = ["@","#","$","&","!","?","%","=","~","*"];

let lessons = [];
let currentLesson = Number(localStorage.getItem("currentLesson")) || 0;
let lessonWords = [];
let wordIndex = 0;
let difficulty = localStorage.getItem("selectedDifficulty") || "beginner";

const wordLine = document.getElementById("wordLine");
const input = document.getElementById("input");
const lessonDisplay = document.getElementById("lesson");
const wordCountDisplay = document.getElementById("wordCount");
const scoreDisplay = document.getElementById("score");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const highScoreDisplay = document.getElementById("highScore");
const message = document.getElementById("message");
const characterBox = document.getElementById("characterBox");
const runnerImg = document.getElementById("runnerImg");
const emojiChar = document.getElementById("emojiChar");
const road = document.getElementById("road");
const difficultySelect = document.getElementById("difficulty");
const characterSelect = document.getElementById("character");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupScore = document.getElementById("popupScore");
const popupWpm = document.getElementById("popupWpm");
const popupAccuracy = document.getElementById("popupAccuracy");
const popupRank = document.getElementById("popupRank");
const popupMistakes = document.getElementById("popupMistakes");
const unlockRule = document.getElementById("unlockRule");

const lessonWindow = document.getElementById("lessonWindow");
const lessonGrid = document.getElementById("lessonGrid");

let score = 0;
let position = 20;
let totalTyped = 0;
let correctTyped = 0;
let lastKeyTime = Date.now();
let lessonStartTime = null;
let mistakeLock = false;
let highScore = localStorage.getItem("lessonTypingHighScore") || 0;
let completedLessons = JSON.parse(localStorage.getItem("completedLessons")) || [];

let coinTimer = null;
let coinMoveTimer = null;
let activeCoin = null;
let lessonMistake = false;
let mistakeCount = 0;
let unlockedLesson = Number(localStorage.getItem("unlockedLesson")) || 0;
let perfectLessons = JSON.parse(localStorage.getItem("perfectLessons")) || [];
let unlockedRunners = Number(localStorage.getItem("unlockedRunners")) || 1;
highScoreDisplay.textContent = highScore;
difficultySelect.value = difficulty;

function saveProgress() {
    localStorage.setItem("currentLesson", currentLesson);
    localStorage.setItem("selectedDifficulty", difficulty);
    localStorage.setItem("selectedCharacter", characterSelect.value);
    localStorage.setItem("unlockedRunners", unlockedRunners);
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(function () {});
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function makeHardPracticeWord(i) {
    const hardWords = [
        "buubuubcrrccrrmuumbcqwqwwqwqwqwqwwqwqqwqwxwxwxxexexeexexexextytytytyurururieieieowowowpqpqpq",
        "aassddffjjuukkllqzqzqzwxwxxwxwxwxwxwxexexexxexexervrvrvvrvrvrtvtvtypypypyppyppyypyp",
        "qqwweerrttyyuuiioomumuumuummumumububububynynybybybynyntbtbtbtvtvttvtvvtv",
        "zzxxccvvbbnnmmctctcqzqzqqzqvtdedeededeededexwxwyqyqmymynynyb",
        "ppoolliikkjjuuhhedeededexwxwyqctctcqzqzqqzqctctcqzqzqqzqy",
        "mmnnbbvvccxxzzmumybybbyybybybtmumybybbyybybybtedeededexwxwyqy",
        "tctccctctcqzqzqqzqwxwxwwxwxwxwtctctcununnunumumumybybbyybybybtvtvtvvtttvvttv",
        "ssppaacceebbaarrumumumybybbyybybybtbtbtwxwtctctcununnu",
        "ffiinnggeerrttrraaiinnzqzqzqqzqzqagvgvtdedeededeededexwxwyqyqmymynynybtbtbt"
    ];
    return hardWords[i % hardWords.length];
}

function makeMediumHardWord(i) {
    const mediumHardWords = [
        "BuUbUuBcRrCcRrMuUm",
        "AaSsDdFfJjUuKkLl",
        "QqWwEeRrTtYyUuIiOo",
        "ZzXxCcVvBbNnMm",
        "PpOoLlIiKkJjUuHh",
        "MmNnBbVvCcXxZz",
        "BbRrAaCcKkEeTtSs",
        "SsPpAaCcEeBbAaRr",
        "FfIiNnGgEeRrTtRrAaIiNn"
    ];
    return mediumHardWords[i % mediumHardWords.length];
}

function makeAdvancedHardWord(i) {
    const hardWords = [
        "Aa12@Bb34#Cc56$",
        "Qq78&Ww90*Ee11!",
        "Zz22_Rr33+Tt44=",
        "Mm55%Nn66^Kk77?",
        "Pp88!Ll99@Jj00#",
        "Xx12$Cc34%Vv56&",
        "AaBb12@#CcDd34$",
        "QwEr56&*TyUi78!",
        "ZxCv90%^BnMm12@",
        "RtYu34#FgHj56$"
    ];
    return hardWords[i % hardWords.length];
}

function makeAdvancedWord(base, i) {
    let num = (i * 7) % 100;
    let sym = symbols[i % symbols.length];

    if (i % 3 === 0) return capitalize(base) + sym + num;
    if (i % 3 === 1) return base.toUpperCase() + num + sym;
    return base + sym + num + "X";
}

function buildLessons(type) {
    let allWords = [];

    for (let i = 0; i < 1000; i++) {
        let base = beginnerWords[i % beginnerWords.length];

        if (type === "beginner") {
            if (i >= 780) {
                allWords.push(makeHardPracticeWord(i));
            } else {
                allWords.push(base.toLowerCase());
            }
        }

        if (type === "medium") {
            if (i >= 780) {
                allWords.push(makeMediumHardWord(i));
            } else {
                allWords.push(capitalize(base.toLowerCase()));
            }
        }

        if (type === "advanced") {
            if (i >= 780) {
                allWords.push(makeAdvancedHardWord(i));
            } else {
                allWords.push(makeAdvancedWord(base, i));
            }
        }
    }

    let tempLessons = [];

    for (let l = 0; l < 50; l++) {
        let start = l * 20;
        let wordsPerLesson = 20 + l;
        tempLessons.push(allWords.slice(start, start + wordsPerLesson));
    }

    return tempLessons;
}

function hideAllCoins() {
    document.querySelectorAll(".coin").forEach(function (coin) {
        coin.style.display = "none";
        coin.classList.remove("collected");
        coin.style.left = "95%";
    });
}

function spawnCoin() {
    const coins = document.querySelectorAll(".coin");

    if (coins.length === 0 || !popup.classList.contains("hidden")) return;
    if (
    activeCoin &&
    activeCoin.style.display === "block" &&
    !activeCoin.classList.contains("collected")
) {
    return;
}

    if (coinMoveTimer) clearInterval(coinMoveTimer);

    hideAllCoins();

    activeCoin = coins[Math.floor(Math.random() * coins.length)];
    activeCoin.style.display = "block";
    activeCoin.style.left = "95%";

    let coinX = 95;

   coinMoveTimer = setInterval(function () {
    let idleTime = Date.now() - lastKeyTime;

    if (idleTime >= 3000) {
        return;
    }

    coinX -= 1;
    activeCoin.style.left = coinX + "%";

        if (coinX < -10 || activeCoin.classList.contains("collected")) {
            activeCoin.style.display = "none";
            clearInterval(coinMoveTimer);
        }
    }, 50);
}

function startCoinSystem() {
    stopCoinSystem();
    hideAllCoins();
    setTimeout(spawnCoin, 1500);
    coinTimer = setInterval(spawnCoin, 5000);
}

function stopCoinSystem() {
    if (coinTimer) clearInterval(coinTimer);
    if (coinMoveTimer) clearInterval(coinMoveTimer);

    coinTimer = null;
    coinMoveTimer = null;
    activeCoin = null;

    hideAllCoins();
}

function loadLesson() {
    lessonWords = lessons[currentLesson];
    wordIndex = 0;
    score = 0;
    totalTyped = 0;
    correctTyped = 0;
    position = 20;
    lessonStartTime = null;
    mistakeLock = false;
    lessonMistake = false;
    mistakeCount = 0;

    lessonDisplay.textContent = currentLesson + 1;
    wordCountDisplay.textContent = "0";
    scoreDisplay.textContent = "0";
    wpmDisplay.textContent = "0";
    accuracyDisplay.textContent = "100";

    characterBox.style.left = "20px";
    characterBox.style.bottom = "100px";
    input.value = "";
    input.disabled = false;
    message.textContent = "";
    popup.classList.add("hidden");

    saveProgress();
    showWords();
    startCoinSystem();

    setTimeout(function () {
        input.focus();
    }, 100);
}

function showWords() {
    wordLine.innerHTML = "";

    for (let i = wordIndex; i < lessonWords.length; i++) {
        const word = lessonWords[i];
        const wordSpan = document.createElement("span");

        if (i === wordIndex) {
            wordSpan.className = "activeWord";

            for (let j = 0; j < word.length; j++) {
                const letterSpan = document.createElement("span");
                letterSpan.textContent = word[j];

                if (j < input.value.length) {
                    if (input.value[j] === word[j]) {
                        letterSpan.style.color = "green";
                        letterSpan.style.fontWeight = "bold";
                    } else {
                        letterSpan.style.color = "red";
                        letterSpan.style.fontWeight = "bold";
                    }
                }

                wordSpan.appendChild(letterSpan);
            }
        } else {
            wordSpan.textContent = word;
        }

        wordLine.appendChild(wordSpan);
        wordLine.appendChild(document.createTextNode(" "));
    }
}

function updateStats() {
    let seconds = (Date.now() - lessonStartTime) / 1000;
    let minutes = seconds / 60;

    if (minutes > 0) {
        wpmDisplay.textContent = Math.round(wordIndex / minutes);
    }

    let accuracy = 100 - Math.floor((mistakeCount + 1) / 2);

if (mistakeCount === 0) {
    accuracy = 100;
}

if (accuracy < 0) {
    accuracy = 0;
}

accuracyDisplay.textContent = accuracy;
}

function getRank() {
    let acc = Number(accuracyDisplay.textContent);
    let wpm = Number(wpmDisplay.textContent);

    if (wpm >= 40 && acc >= 95) return "Legend";
    if (wpm >= 25 && acc >= 90) return "Pro";
    if (wpm >= 15 && acc >= 80) return "Good";
    return "Beginner";
}

function finishLesson() {
    input.disabled = true;
    updateStats();
    stopCoinSystem();
    if (mistakeCount <=5) {
    if (currentLesson + 1 > unlockedLesson) {
        unlockedLesson = currentLesson + 1;
        localStorage.setItem("unlockedLesson", unlockedLesson);
    }

    showDiwaliFireworks();
    message.textContent = "🎆 Perfect! Next lesson unlocked!";
} else {
    message.textContent = "🔒 mistakes more than 5 text , next lesson not unlocked.";
}

    if (!completedLessons.includes(currentLesson)) {
        completedLessons.push(currentLesson);
        localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
    }
    if (mistakeCount === 0 && !perfectLessons.includes(currentLesson)) {
    perfectLessons.push(currentLesson);
    localStorage.setItem("perfectLessons", JSON.stringify(perfectLessons));
}

if (perfectLessons.length >= 30) {
    unlockedRunners = 4;
} else if (perfectLessons.length >= 20) {
    unlockedRunners = 3;
} else if (perfectLessons.length >= 10) {
    unlockedRunners = 2;
}

localStorage.setItem("unlockedRunners", unlockedRunners);
unlockedRunners = 4;
localStorage.setItem("unlockedRunners", unlockedRunners);
updateRunnerLocks();

    popupScore.textContent = score;
    popupWpm.textContent = wpmDisplay.textContent;
    popupAccuracy.textContent = accuracyDisplay.textContent;
    popupRank.textContent = getRank();
    popupMistakes.textContent = mistakeCount;

if (mistakeCount <= 5) {
    unlockRule.textContent =
        "Next Lesson Unlock: 5 or less mistakes ✅";
} else {
    unlockRule.textContent =
     "🔒 Next lesson will unlock if mistakes are less than 5 words ❌";
}


    if (currentLesson >= 49) {
        popupTitle.textContent = "🎉 Course Complete!";
        playSound(winSound);
    } else {
        popupTitle.textContent = "✅ Lesson " + (currentLesson + 1) + " Complete!";
        playSound(levelupSound);
    }

    if (score > highScore) {
        highScore = score;
        localStorage.setItem("lessonTypingHighScore", highScore);
        highScoreDisplay.textContent = highScore;
    }

    popup.classList.remove("hidden");
}

function nextLesson() {
    if (currentLesson >= 49) {
        restartCourse();
        return;
    }

    if (currentLesson + 1 <= unlockedLesson) {
        currentLesson++;
        loadLesson();
    } else {
        loadLesson();
    }
}

function openLessonWindow() {
    lessonGrid.innerHTML = "";

    for (let i = 0; i < 50; i++) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.className = "lessonBtn";
        if (i > unlockedLesson) {
    btn.classList.add("lockedLessonBtn");
    btn.textContent = "🔒 " + (i + 1);
    btn.disabled = true;
}

        if (completedLessons.includes(i)) {
            btn.classList.add("completedLessonBtn");
        }

        if (i === currentLesson) {
            btn.classList.add("currentLessonBtn");
        }

        btn.onclick = function () {
            currentLesson = i;
            closeLessonWindow();
            loadLesson();
        };

        lessonGrid.appendChild(btn);
    }

    lessonWindow.classList.remove("hidden");
}

function closeLessonWindow() {
    lessonWindow.classList.add("hidden");
    input.focus();
}

function changeDifficulty() {
    difficulty = difficultySelect.value;
    localStorage.setItem("selectedDifficulty", difficulty);
    currentLesson = 0;
    lessons = buildLessons(difficulty);
    loadLesson();
}
function updateRunnerLocks() {
    const runner2 = document.querySelector('option[value="runner2"]');
    const runner3 = document.querySelector('option[value="runner3"]');
    const runner4 = document.querySelector('option[value="runner4"]');

  unlockedRunners = 1

if (runner2) runner2.textContent = unlockedRunners >= 2 ? "🏃 Runner 2" : "🏃 Runner 2 🔒";
if (runner3) runner3.textContent = unlockedRunners >= 3 ? "🏃 Runner 3" : "🏃 Runner 3 🔒";
if (runner4) runner4.textContent = unlockedRunners >= 4 ? "🐎 Horse Runner" : "🐎 Horse Runner 🔒";
}  

function changeCharacter() {
    const value = characterSelect.value;
    localStorage.setItem("selectedCharacter", value);

    if (value === "runner") {
        runnerImg.src = "runner.gif";
        runnerImg.style.display = "block";
        emojiChar.style.display = "none";
        emojiChar.style.transform = "scaleX(1)";
      characterBox.style.bottom = "100px";
runnerImg.style.width = "330px";  
    }
    if (value === "runner2") {
    if (unlockedRunners < 2) {
       alert(
    "Perfect Lessons: " + perfectLessons.length +
    "\nRunner 2 unlock in: " + (10 - perfectLessons.length) + " more perfect lessons"
);
        characterSelect.value = "runner";
        return;
    }

    runnerImg.src = "runner2.gif";
    runnerImg.style.display = "block";
    emojiChar.style.display = "none";
    characterBox.style.bottom = "120px";
runnerImg.style.width = "330px";
}

if (value === "runner3") {
    if (unlockedRunners < 3) {
        alert(
    "Perfect Lessons: " + perfectLessons.length +
    "\nRunner 3 unlock in: " + (20 - perfectLessons.length) + " more perfect lessons"
);
        characterSelect.value = "runner";
        return;
    }

    runnerImg.src = "runner3.gif";
    runnerImg.style.display = "block";
    emojiChar.style.display = "none";
    characterBox.style.bottom = "120px";
runnerImg.style.width = "330px";
}

if (value === "runner4") {
    if (unlockedRunners < 4) {
        alert("Runner 4 complete 30 perfect lessons without mistakes any text to unlock runner 4");
        characterSelect.value = "runner";
        return;
    }

    runnerImg.src = "runner4.gif";
    runnerImg.style.display = "block";
    emojiChar.style.display = "none";
    characterBox.style.bottom = "20px";
runnerImg.style.width = "330px";
}

   

    input.focus();
}
input.addEventListener("beforeinput", function (e) {
    const currentWord = lessonWords[wordIndex];
    if (!currentWord) return;

    if (e.inputType === "deleteContentBackward") return;
    if (e.data === null) return;

    const pos = input.selectionStart;
    const typedChar = e.data;

    // Space sirf tab chalega jab word ki length complete ho chuki ho
    if (typedChar === " ") {
        if (input.value.length === currentWord.length) {
            return;
        } else {
            e.preventDefault();
            playSound(wrongSound);
            return;
        }
    }

    // Word complete length ke baad koi text key kaam nahi karega
    if (input.value.length >= currentWord.length) {
        e.preventDefault();
        playSound(wrongSound);
        return;
    }

    const correctChar = currentWord[pos];
    const isCurrentWrong = typedChar !== correctChar;

    let previousWrong = false;

    if (pos > 0) {
        previousWrong = input.value[pos - 1] !== currentWord[pos - 1];
    }

    // Ek saath 2 wrong text block
    if (isCurrentWrong && previousWrong) {
        e.preventDefault();
        playSound(wrongSound);
        return;
    }
});

input.addEventListener("input", function () {
    lastKeyTime = Date.now();
    if (!lessonStartTime) {
        lessonStartTime = Date.now();
    }
    

    const currentWord = lessonWords[wordIndex];
    const typed = input.value;

    totalTyped++;

    let lastIndex = typed.length - 1;
    if (lastIndex >= 0 && typed[lastIndex] === currentWord[lastIndex]) {
        correctTyped++;
    }
    if (
    lastIndex >= 0 &&
    typed !== currentWord + " " &&
    typed[lastIndex] !== currentWord[lastIndex]
) {
    lessonMistake = true;
    mistakeCount++;
}

   if (
    typed.length > 0 &&
    typed !== currentWord + " " &&
    !currentWord.startsWith(typed) &&
    !mistakeLock
) {
        mistakeLock = true;
        playSound(wrongSound);
        lessonMistake = true;
    }
    

    if (currentWord.startsWith(typed)) {
        mistakeLock = false;
    }

    let speed = Math.max(0.05, 1 - (typed.length * 0.08));
    road.style.setProperty("--roadSpeed", speed + "s");

    showWords();
    updateStats();

   if (
    input.value.endsWith(" ") &&
    input.value.trimEnd().length === currentWord.length
) {
        playSound(correctSound);

        characterBox.style.transition = "bottom 0.25s ease";
        let normalBottom = "100px";
let jumpBottom = "170px";

if (characterSelect.value === "runner4") {
    normalBottom = "10px";
    jumpBottom = "70px";
}

characterBox.style.bottom = jumpBottom;

setTimeout(function () {
    characterBox.style.bottom = normalBottom;
}, 250);

        score++;
        wordIndex++;

        scoreDisplay.textContent = score;
        wordCountDisplay.textContent = wordIndex;

        position += 30;
        let maxPosition = road.offsetWidth - 230;
if (position > maxPosition) position = maxPosition;
        characterBox.style.left = position + "px";

        input.value = "";

        road.style.setProperty("--roadSpeed", "0.04s");

        setTimeout(function () {
            road.style.setProperty("--roadSpeed", "1s");
        }, 400);
        console.log("wordIndex:", wordIndex, "total:", lessonWords.length);
        if (wordIndex >= lessonWords.length) {
            finishLesson();
            return;
        }

        showWords();
        updateStats();
    }
});
 
 
function nextLesson() {
    if (currentLesson >= 49) {
        restartCourse();
        return;
    }

    if (currentLesson + 1 <= unlockedLesson) {
        currentLesson++;
        loadLesson();
    } else {
        loadLesson();
    }
    setTimeout(function () {
    input.focus();
}, 100);
}
 
function showDiwaliFireworks() {
    for (let i = 0; i < 18; i++) {
        const firework = document.createElement("div");
        firework.className = "firework";
        firework.textContent = i % 2 === 0 ? "🎆" : "🚀";

        firework.style.left = (road.offsetWidth - 250 + Math.random() * 180) + "px";
        firework.style.top = (80 + Math.random() * 180) + "px";

        road.appendChild(firework);

        setTimeout(function () {
            firework.remove();
        }, 1800);
    }
}


function checkCoinCollision() {
   const runnerRect = runnerImg.getBoundingClientRect(); 
    const coins = document.querySelectorAll(".coin");

    coins.forEach(function (coin) {
        if (coin.classList.contains("collected")) return;
        if (coin.style.display === "none") return;

        const coinRect = coin.getBoundingClientRect();

        const isColliding =
            runnerRect.left < coinRect.right &&
            runnerRect.right > coinRect.left &&
            runnerRect.top < coinRect.bottom &&
            runnerRect.bottom > coinRect.top;

        if (isColliding) {
            coin.classList.add("collected");
            coin.style.display = "none";
            score += 5;
            scoreDisplay.textContent = score;
            message.textContent = "🪙 Coin Collected +5";
            playSound(correctSound);

            setTimeout(function () {
                if (message.textContent === "🪙 Coin Collected +5") {
                    message.textContent = "";
                }
            }, 1000);
        }
    });
}

setInterval(checkCoinCollision, 100);

function restartCourse() {
    currentLesson = 0;
    lessons = buildLessons(difficulty);
   position = 20;
characterBox.style.left = "20px";
    loadLesson();
    changeCharacter();
}

function goToFirstLesson() {
    currentLesson = 0;
    loadLesson();
    input.value = "";
    input.focus();
}

const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

function setDayMode() {
    road.classList.remove("nightMode");
    road.classList.add("dayMode");

    if (sun) sun.style.display = "block";
    if (moon) moon.style.display = "none";

    document.querySelectorAll(".star").forEach(function (s) {
        s.style.display = "none";
    });
}

function setNightMode() {
    road.classList.remove("dayMode");
    road.classList.add("nightMode");

    if (sun) sun.style.display = "none";
    if (moon) moon.style.display = "block";

    document.querySelectorAll(".star").forEach(function (s) {
        s.style.display = "block";
    });
}

for (let i = 0; i < 25; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.textContent = "✦";
    star.style.left = Math.random() * 90 + "%";
    star.style.top = Math.random() * 180 + "px";
    road.appendChild(star);
}

setDayMode();

setInterval(function () {
    if (road.classList.contains("dayMode")) {
        setNightMode();
    } else {
        setDayMode();
    }
}, 180000);

const airplane = document.getElementById("airplane");
const helicopter = document.getElementById("helicopter");

function flyPlane() {
    if (!airplane) return;

    airplane.style.display = "block";
    airplaneSound.currentTime = 0;
    airplaneSound.play().catch(function(){});

    airplane.style.left = "-250px";
    airplane.style.top = "20px";
    airplane.style.transform = "rotate(50deg)";

    let x = -250;

    const planeMove = setInterval(function () {
        x += 3;
        airplane.style.left = x + "px";
        airplane.style.transform = "rotate(50deg)";

        if (Math.random() < 0.18) {
            const smoke = document.createElement("div");
            smoke.className = "smoke";
            smoke.textContent = "☁️";
            smoke.style.left = (x - 40) + "px";
            smoke.style.top = "60px";
            road.appendChild(smoke);

            setTimeout(function () {
                smoke.remove();
            }, 3000);
        }

        if (x > road.offsetWidth + 300) {
            airplane.style.display = "none";
            clearInterval(planeMove);
        }
    }, 30);
}

function flyHelicopter() {
    if (!helicopter) return;

    helicopter.style.display = "block";
    helicopterSound.currentTime = 0;
    helicopterSound.play().catch(function(){});

    helicopter.style.left = "-250px";
    helicopter.style.top = "30px";
    helicopter.style.transform = "scaleX(-1)";

    let x = -250;

    const heliMove = setInterval(function () {
        x += 2;
        helicopter.style.left = x + "px";
        helicopter.style.transform = "scaleX(-1)";

        if (x > road.offsetWidth + 300) {
            helicopter.style.display = "none";
            clearInterval(heliMove);
        }
    }, 35);
}

function launchFlyingVehicle() {
    flyPlane();

    setTimeout(function () {
        flyHelicopter();
    }, 8000);
}

const savedCharacter = localStorage.getItem("selectedCharacter") || "runner";
characterSelect.value = savedCharacter;
if (savedCharacter === "runner2" && unlockedRunners < 2) {
    characterSelect.value = "runner";
}

if (savedCharacter === "runner3" && unlockedRunners < 3) {
    characterSelect.value = "runner";
}

if (savedCharacter === "runner4" && unlockedRunners < 4) {
    characterSelect.value = "runner";
}

lessons = buildLessons(difficulty);
updateRunnerLocks();
loadLesson();
changeCharacter();
setTimeout(function () {
    launchFlyingVehicle();
}, 5000);

setInterval(function () {
    launchFlyingVehicle();
}, 45000);

window.onload = function () {
    input.focus();
};
let treeMode = "";

function setTreeSpeed(rate, mode) {
    if (treeMode === mode) return;
    treeMode = mode;

    document.querySelectorAll(".tree").forEach(tree => {
        tree.getAnimations().forEach(anim => {
            anim.playbackRate = rate;
        });
    });
}

let mountainMode = "";

function setMountainSpeed(rate, mode) {
    if (mountainMode === mode) return;
    mountainMode = mode;

    document.querySelectorAll(".mountain1, .mountain2").forEach(mountain => {
        mountain.getAnimations().forEach(anim => {
            anim.playbackRate = rate;
        });
    });
}

setInterval(() => {
    let idleTime = Date.now() - lastKeyTime;
if (idleTime < 3000) {
    setTreeSpeed(1, "fast");
    setMountainSpeed(3, "fast");
    road.classList.remove("pausedDecor");
    road.style.setProperty("--roadSpeed", "0.2s");

   if (characterSelect.value === "runner") {
    if (!runnerImg.src.includes("runner.gif")) {
        runnerImg.src = "runner.gif";
    }
}
    if (characterSelect.value === "runner2") {
    if (!runnerImg.src.includes("runner2.gif")) {
        runnerImg.src = "runner2.gif";
    }
}
if (characterSelect.value === "runner3") {
    if (!runnerImg.src.includes("runner3.gif")) {
        runnerImg.src = "runner3.gif";
    }
}

if (characterSelect.value === "runner4") {
    if (!runnerImg.src.includes("runner4.gif")) {
        runnerImg.src = "runner4.gif";
    }
}

} else {
    setTreeSpeed(0.25, "slow");
    setMountainSpeed(0.25, "slow");
    road.style.setProperty("--roadSpeed", "4s");

 if (characterSelect.value === "runner") {
    if (!runnerImg.src.includes("runnerwalk.gif")) {
        runnerImg.src = "runnerwalk.gif";
    }
} 
if (characterSelect.value === "runner2") {
    if (!runnerImg.src.includes("runnerwalk2.gif")) {
        runnerImg.src = "runnerwalk2.gif";
    }
}
if (characterSelect.value === "runner3") {
    if (!runnerImg.src.includes("runnerwalk3.gif")) {
        runnerImg.src = "runnerwalk3.gif";
    }
}

if (characterSelect.value === "runner4") {
    if (!runnerImg.src.includes("runnerwalk4.gif")) {
        runnerImg.src = "runnerwalk4.gif";
    }
}
    road.classList.add("pausedDecor");
}
    }
,200);