const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const levelupSound = new Audio("levelup.mp3");
const winSound = new Audio("win.mp3");
const helicopterSound = new Audio("helicopter.mp3");
const airplaneSound = new Audio("airplane.mp3");

helicopterSound.volume = 0.3;
airplaneSound.volume = 0.3;

const allSounds = [
  correctSound,
  wrongSound,
  levelupSound,
  winSound,
  helicopterSound,
  airplaneSound
];

let audioUnlocked = false;

function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;

  allSounds.forEach(s => {
    s.play().then(() => {
      s.pause();
      s.currentTime = 0;
    }).catch(() => {});
  });
}

document.addEventListener("click", unlockAudio);
document.addEventListener("keydown", unlockAudio);
const customLessons = [
["apple","banana","orange","grape","mango","papaya","watermelon","pineapple","guava","pear","peach","plum","cherry","kiwi","lemon","lime","coconut","fig","dates","melon"],
["mango","orange","banana","blueberry","cranberry","dragonfruit","durian","grapefruit","jackfruit","lychee","mandarin","nectarine","olive","passionfruit","pomegranate","raspberry","strawberry","tamarind","tangerine","mulberry"],
["carrot","potato","onion","tomato","cabbage","spinach","lettuce","cucumber","pumpkin","bean","pea","garlic","ginger","pepper","chili","radish","broccoli","corn","turnip","beetroot"],
["okra","cauliflower","eggplant","zucchini","celery","asparagus","mushroom","leek","parsley","mint","basil","coriander","curry","yam","cassava","kale","mustard","sprout","shallot","capsicum"],
["rose","lotus","jasmine","sunflower","lily","orchid","tulip","daisy","lavender","hibiscus","marigold","violet","poppy","carnation","iris","magnolia","dahlia","petunia","gardenia","camellia"],
["cat","dog","lion","tiger","elephant","giraffe","zebra","monkey","rabbit","deer","bear","camel","horse","goat","cow","dog","cat","wolf","fox","kangaroo","panda","leopard"],
["cheetah","jaguar","donkey","buffalo","sheep","pig","mouse","rat","squirrel","raccoon","hippo","rhino","gorilla","chimpanzee","koala","otter","beaver","sloth","hyena","moose"],
["eagle","parrot","sparrow","crow","pigeon","owl","peacock","duck","goose","swan","falcon","hawk","woodpecker","kingfisher","robin","canary","flamingo","ostrich","penguin","turkey"],
["hen","rooster","vulture","crane","heron","stork","pelican","seagull","albatross","cuckoo","nightingale","swallow","magpie","raven","quail","dove","finch","macaw","hornbill","kiwi"],
["salmon","tuna","shark","catfish","goldfish","trout","sardine","anchovy","mackerel","carp","eel","snapper","grouper","barracuda","tilapia","cod","herring","piranha","ray","sturgeon"],
["swordfish","marlin","bass","perch","flounder","halibut","guppy","betta","clownfish","angelfish","seahorse","lobster","crab","shrimp","octopus","squid","oyster","clam","mussel","jellyfish"],
["car","bus","bike","train","plane","boat","ship","truck","van","taxi","scooter","motorcycle","bicycle","tractor","ambulance","helicopter","submarine","rocket","tram","jeep"],
["computer","keyboard","monitor","mouse","cable","charger","laptop","mobile","tablet","speaker","printer","router","camera","scanner","projector","microphone","earphone","headphone","battery","adapter"],
["television","radio","remote","fan","cooler","heater","fridge","washingmachine","microwave","oven","toaster","blender","mixer","kettle","iron","bulb","switch","socket","wire","inverter"],
["water","cocacola","sprite","fanta","pepsi","redbull","coffee","tea","milk","juice","lemonade","smoothie","shake","latte","espresso","cappuccino","mocha","energydrink","soda","icedtea"],
["shirt","tshirt","jeans","trouser","coat","jacket","sweater","hoodie","shorts","skirt","dress","blazer","suit","tie","cap","hat","sock","glove","scarf","belt"],
["tree","sky","cloud","rain","road","air","water","river","mountain","forest","garden","flower","grass","stone","sand","soil","sun","moon","star","wind"],
["storm","snow","summer","winter","spring","autumn","ocean","sea","lake","pond","island","valley","desert","jungle","hill","waterfall","volcano","earth","planet","rainbow"],
["apple","bread","rice","sugar","salt","flour","oil","butter","cheese","milk","cream","yogurt","egg","chicken","mutton","beef","fish","shrimp","sausage","ham"],
["bacon","tea","coffee","juice","water","cola","sprite","fanta","honey","jam","ketchup","mayonnaise","vinegar","sauce","pickle","biscuit","cookie","cracker","cake","chocolate"],
["candy","chips","noodle","pasta","spaghetti","macaroni","pizza","burger","sandwich","oats","cereal","corn","ricecake","icecream","popcorn","muffin","donut","waffle","pancake","soap"],
["shampoo","toothpaste","toothbrush","detergent","tissue","napkin","diaper","lotion","powder","perfume","razor","comb","brush","bucket","mop","broom","sponge","plate","cup","glass"],
["spoon","fork","knife","bowl","pan","pot","bottle","box","bag","basket","towel","battery","charger","candle","matchbox","lighter","rope","tape","glue","paper"],
["ant","bee","butterfly","mosquito","fly","dragonfly","grasshopper","cricket","cockroach","termite","beetle","ladybug","moth","wasp","centipede","millipede","spider","tick","flea","caterpillar"],
["doctor","nurse","teacher","student","driver","pilot","farmer","engineer","artist","writer","police","soldier","chef","baker","tailor","barber","mason","plumber","painter","guard"],
["red","blue","green","yellow","black","white","pink","purple","orange","brown","gray","gold","silver","violet","indigo","maroon","cyan","cream","navy","beige"],
["head","face","eye","ear","nose","mouth","hair","neck","shoulder","arm","hand","finger","chest","stomach","back","leg","knee","foot","toe","skin"],
["school","teacher","student","book","pen","pencil","eraser","sharpener","ruler","bag","desk","chair","board","chalk","marker","copy","paper","lesson","class","exam"],
["home","room","door","window","wall","floor","roof","kitchen","bathroom","bedroom","table","chair","bed","pillow","blanket","sofa","mirror","clock","lamp","curtain"],
["happy","sad","angry","smart","quick","slow","strong","weak","bright","dark","small","large","short","tall","clean","dirty","soft","hard","hot","cold"],
["india","malaysia","china","japan","korea","nepal","bhutan","thailand","singapore","indonesia","pakistan","bangladesh","srilanka","canada","america","mexico","brazil","france","germany","italy"],
["football","cricket","hockey","tennis","badminton","basketball","volleyball","baseball","golf","boxing","wrestling","running","swimming","cycling","skating","karate","judo","chess","racing","surfing"],
["monday","tuesday","wednesday","thursday","friday","saturday","sunday","morning","evening","night","today","tomorrow","yesterday","week","month","year","hour","minute","second","time"],
["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"],
["circle","square","triangle","rectangle","diamond","oval","line","point","angle","curve","corner","side","center","radius","height","width","length","shape","size","area"],
["keyboard","screen","mouse","folder","file","window","button","link","browser","website","internet","server","coding","script","style","html","css","javascript","android","software"],
["phone","message","call","contact","number","camera","gallery","video","photo","music","ringtone","setting","network","wifi","hotspot","bluetooth","battery","charge","screen","password"],
["market","shop","store","mall","cashier","customer","price","money","change","bill","receipt","cart","basket","counter","shelf","packet","bottle","can","box","sale"],
["knife","spoon","fork","plate","bowl","glass","cup","kettle","stove","oven","fridge","sink","soap","sponge","towel","pan","pot","lid","tray","jar"],
["king","queen","prince","princess","baby","boy","girl","man","woman","father","mother","brother","sister","uncle","aunt","friend","family","neighbor","child","people"],
["temple","church","mosque","school","hospital","bank","airport","station","hotel","office","factory","market","bridge","tower","castle","museum","library","cinema","park","zoo"],
["hammer","screw","nail","drill","saw","wrench","pliers","cutter","ladder","helmet","glove","paint","brush","pipe","wire","tool","machine","engine","motor","wheel"],
["wallet","key","watch","ring","chain","bag","purse","umbrella","ticket","card","coin","note","passport","license","photo","paper","book","pen","bottle","mask"],
["morning","breakfast","lunch","dinner","sleep","wake","walk","run","read","write","play","study","work","cook","clean","wash","drive","travel","buy","sell"],
["north","south","east","west","left","right","up","down","front","back","inside","outside","near","far","above","below","middle","corner","side","center"],
["fire","smoke","ash","dust","mud","rock","leaf","root","branch","seed","fruit","plant","flower","grass","wood","bamboo","thorn","bush","field","farm"],
["metal","plastic","glass","paper","cotton","wool","silk","leather","rubber","wood","stone","steel","iron","copper","gold","silver","clay","cement","brick","sand"],
["music","song","dance","movie","story","poem","game","player","winner","score","level","course","lesson","typing","speed","accuracy","mistake","health","coin","runner"],
["easy","medium","advanced","beginner","perfect","wrong","correct","finish","restart","select","unlock","locked","complete","practice","custom","lesson","word","letter","space","enter"],
["apple","tiger","eagle","salmon","car","keyboard","water","shirt","rose","ant","cloud","bread","doctor","red","hand","school","home","happy","india","cricket"],
["banana","lion","parrot","tuna","bus","monitor","rain","jeans","lotus","bee","tree","milk","teacher","blue","eye","book","room","smart","japan","football"]
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
const viewModeSelect = document.getElementById("viewMode");

let viewMode = localStorage.getItem("viewMode") || "ltr";
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

let health = 10;
let coinTimer = null;
let coinMoveTimer = null;
let activeCoin = null;
let lessonMistake = false;
let mistakeCount = 0;
let unlockedLesson = Number(localStorage.getItem("unlockedLesson")) || 0;
let perfectLessons = JSON.parse(localStorage.getItem("perfectLessons")) || [];
let unlockedRunners = Number(localStorage.getItem("unlockedRunners")) || 1;
let carSpeed = 1;
let lastTypingTime = Date.now();
highScoreDisplay.textContent = highScore;
difficultySelect.value = difficulty;

function updateHealthBar() {
    const fill = document.getElementById("healthFill");
    fill.style.width = (health * 10) + "%";

    if (health >= 8) fill.style.background = "green";
    else if (health >= 6) fill.style.background = "lime";
    else if (health >= 4) fill.style.background = "yellow";
    else if (health >= 2) fill.style.background = "orange";
    else fill.style.background = "red";
}
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
    return customLessons.map(function (lesson, lessonIndex) {
        return lesson.map(function (word, wordIndex) {

            if (type === "beginner") {
                return word.toLowerCase();
            }

            if (type === "medium") {
                return capitalize(word.toLowerCase());
            }

            if (type === "advanced") {
                return makeAdvancedWord(
                    word.toLowerCase(),
                    lessonIndex * 20 + wordIndex
                );
            }

        });
    });
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
   if (viewMode === "rtl") {
    activeCoin.style.left = "-10%";
} else {
    activeCoin.style.left = "95%";
}

let coinX = viewMode === "rtl" ? -10 : 95;
   coinMoveTimer = setInterval(function () {
    let idleTime = Date.now() - lastKeyTime;

    if (idleTime >= 3000) {
        return;
    }

   if (viewMode === "rtl") {
    coinX += 1;
} else {
    coinX -= 1;
}
    activeCoin.style.left = coinX + "%";

      if (
    coinX < -10 ||
    coinX > 110 ||
    activeCoin.classList.contains("collected")
) {  
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

  resetCharacterPosition();  
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

    const finishGate = document.querySelector(".finishGate");

    if (finishGate) {
        if (viewMode === "ltr") {
            characterBox.style.left = (finishGate.offsetLeft - 180) + "px";
        } else {
            characterBox.style.left = (finishGate.offsetLeft + 40) + "px";
        }
    }
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
      characterBox.style.bottom = "140px";
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
    characterBox.style.bottom = "200px";
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
    characterBox.style.bottom = "170px";
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
    characterBox.style.bottom = "35px";
runnerImg.style.width = "330px";
if (window.innerWidth <= 768 && viewMode === "rtl" && characterSelect.value === "runner4") {
    characterBox.style.setProperty("bottom", "10px", "important");
}
if (window.innerWidth > 768 && viewMode === "rtl" && value === "runner4") {
    characterBox.style.setProperty("bottom", "-10px", "important");
}

if (window.innerWidth <= 768) {
    if (viewMode === "rtl") {
        characterBox.style.bottom =
            value === "runner" ? "180px" :
            value === "runner2" ? "130px" :
            value === "runner4" ? "10px" :   // runner4 mobile RTL
               // runner1 mobile RTL
            characterBox.style.bottom;
    } else {
        characterBox.style.bottom =
            value === "runner" ? "25px" :
            value === "runner2" ? "120px" : 
            value === "runner3" ? "120" :   // runner1 mobile LTR
            value === "runner4" ? "90px" :
            characterBox.style.bottom;
    }
            if (window.innerWidth <= 768 && viewMode !== "rtl" && value === "runner4") {
    characterBox.style.setProperty("bottom", "100px", "important");
}
    }
    
}


   runnerImg.style.transform = viewMode === "rtl" ? "scaleX(-1)" : "scaleX(1)";

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

if (isCurrentWrong) {
    playSound(wrongSound);

    health--;
    updateHealthBar();

    if (health <= 0) {
        alert("Out of Health! Restarting the current lesson...");
        health = 10;
        updateHealthBar();

        input.value = "";
        wordIndex = 0;
        mistakeCount = 0;
        lessonMistake = false;
        mistakeLock = false;

        loadLesson();
        resetCharacterPosition();
    }
}

});

input.addEventListener("input", function () {
    lastKeyTime = Date.now();
    lastTypingTime = Date.now();
carSpeed = 1;
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
updateHealthBar();

if (health <= 0) {
    alert("Health depleted! The lesson will restart.");
    health = 10;
    updateHealthBar();
    input.value = "";
wordIndex = 0;
mistakeCount = 0;
lessonMistake = false;
mistakeLock = false;

loadLesson();
resetCharacterPosition();
}
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
   let normalBottom, jumpBottom;

if (viewMode === "rtl") {
    normalBottom =
        characterSelect.value === "runner" ? "90px" :
        characterSelect.value === "runner2" ? "130px" :
        characterSelect.value === "runner3" ? "90px" :
        characterSelect.value === "runner4" ? "0px" :
        "90px";

    jumpBottom =
        characterSelect.value === "runner" ? "180px" :
        characterSelect.value === "runner2" ? "230px" :
        characterSelect.value === "runner3" ? "200px" :
        characterSelect.value === "runner4" ? "100px" :
        "180px";
}
        // if (window.innerWidth <= 768 && viewMode !== "rtl" && characterSelect.value === "runner4") {
    // normalBottom = "90px";
    // jumpBottom = "120px";

// } 

else {
    normalBottom =
        characterSelect.value === "runner" ? "140px" :
        characterSelect.value === "runner2" ? "180px" :
        characterSelect.value === "runner3" ? "170px" :
        characterSelect.value === "runner4" ? "35px" :
        "140px";

    jumpBottom =
        characterSelect.value === "runner" ? "220px" :
        characterSelect.value === "runner2" ? "250px" :
        characterSelect.value === "runner3" ? "250px" :
        characterSelect.value === "runner4" ? "120px" :
        "220px";
}
if (window.innerWidth <= 768 && viewMode === "ltr" && characterSelect.value === "runner4") {
    normalBottom = "90px";
    jumpBottom = "120px";
}

characterBox.style.setProperty("bottom", jumpBottom, "important");

setTimeout(function () {
    characterBox.style.setProperty("bottom", normalBottom, "important");
    if (window.innerWidth <= 768 && viewMode === "rtl") {
    characterBox.style.setProperty(
        "bottom",
        characterSelect.value === "runner" ? "130px" :
        characterSelect.value === "runner2" ? "130px" :
        characterSelect.value === "runner3" ? "130px" :
        characterSelect.value === "runner4" ? "50px" :
        normalBottom,
        "important"
    );

    }
    if (window.innerWidth <= 768 && viewMode !== "rtl") {
    characterBox.style.setProperty(
        "bottom",
        characterSelect.value === "runner" ? "140px" :
        characterSelect.value === "runner2" ? "170px" :
        characterSelect.value === "runner3" ? "160px" :
        characterSelect.value === "runner4" ? "90px" :
        normalBottom,
        "important"
    );
}



}, 250);
        score++;
        wordIndex++;

        scoreDisplay.textContent = score;
        wordCountDisplay.textContent = wordIndex;
moveRunnerStep();

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
   playSound(airplaneSound);

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
  playSound(helicopterSound);
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
updateDecorDirection();
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
    if (window.innerWidth <= 768 && viewMode === "rtl") {
    characterBox.style.setProperty("bottom", "50px", "important");
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
    if (window.innerWidth <= 768 && viewMode === "rtl") {
    characterBox.style.setProperty("bottom", "50px", "important");
}
}
    
}
    }
,200);
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;


function toggleMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        musicBtn.textContent = "🎵 Music ON";
    } else {
        bgMusic.play();
        musicBtn.textContent = "🔇 Music OFF";
    }

    musicPlaying = !musicPlaying;
}
viewModeSelect.value = viewMode;

function changeViewMode() {
    viewMode = viewModeSelect.value;

    localStorage.setItem("viewMode", viewMode);

    position = 20;
    characterBox.style.left = "20px";
    characterBox.style.bottom = "100px";

    updateDecorDirection();
    loadLesson();
    changeCharacter();
}
function resetCharacterPosition() {
    let runnerWidth = window.innerWidth <= 768 ? 120 : 260;
    let maxPosition = road.offsetWidth - runnerWidth;
    if (maxPosition < 20) maxPosition = 20;

    const leftPole = document.querySelector(".leftPole");
const rightPole = document.querySelector(".rightPole");
const finishBanner = document.querySelector(".finishBanner");
    if (viewMode === "rtl") {
        position = maxPosition
        characterBox.style.left = position + "px";


        runnerImg.style.transform = "scaleX(-1)";
       if (viewMode === "rtl") {
    characterBox.style.bottom =
        characterSelect.value === "runner" ? "90px" :
        characterSelect.value === "runner2" ? "-90px" :
        characterSelect.value === "runner3" ? "90px" :
        characterSelect.value === "runner4" ? "20px" :
        "90px";
} 

        
    } 
    
   else {
    position = 20;
    characterBox.style.left = "20px";
    runnerImg.style.transform = "scaleX(1)";

    characterBox.style.bottom =
        characterSelect.value === "runner" ? "140px" :
        characterSelect.value === "runner2" ? "180px" :
        characterSelect.value === "runner3" ? "170px" :
        characterSelect.value === "runner4" ? "35px" :
        "120px";
}
}

function moveRunnerStep() {
   let runnerWidth = window.innerWidth <= 768 ? 90 : 260
let maxPosition = road.offsetWidth - runnerWidth;

if (maxPosition < 20) maxPosition = 20;
    

    if (viewMode === "rtl") {
        position -= 30;
        if (position < 20) position = 20;
        characterBox.style.left = position + "px";
    } else {
        position += 30;
        if (position > maxPosition) position = maxPosition;
        characterBox.style.left = position + "px";
    }
}
function updateDecorDirection() {
    document.querySelectorAll(".tree, .mountain1, .mountain2").forEach(item => {
        item.style.animationDirection = viewMode === "rtl" ? "reverse" : "normal";
    });

    document.querySelectorAll(".carDecor, .animalDecor").forEach(item => {
        if (viewMode === "rtl") {
            item.style.animationName = "decorMoveRtl";
        } else {
            item.style.animationName = "decorMove";
        }
    });
    
    road.classList.toggle("rtlRoad", viewMode === "rtl");
}
setInterval(() => {
    const slow = Date.now() - lastTypingTime > 3000;

    document.querySelectorAll(".carDecor, .animalDecor").forEach(item => {
        item.getAnimations().forEach(anim => {
     const isMobile = window.innerWidth <= 768;

if (isMobile && viewMode === "rtl") {
    anim.playbackRate = slow ? 4 : 9;
}
else if (isMobile) {
    anim.playbackRate = slow ? 4 : 9;
}
else {
    anim.playbackRate = slow ? 2 : 6;
}
        });
    });
}, 500);
function startGame(){
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("gameScreen").classList.remove("hidden");
    input.focus();
}

function showHighScore(){
    alert("High Score: " + highScore);
}