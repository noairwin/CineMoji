// scripts.js


// arr of questions
const questions = [
    {
        emojis: "🧙‍♂️💍🔥",
        options: ["The Hobbit", "The Lord of the Rings", "Harry Potter"],
        answer: "The Lord of the Rings"
    },
    {
        emojis: "🚢💔🧊",
        options: ["Titanic", "Frozen", "Avatar"],
        answer: "Titanic"
    },
    {
        emojis: "🦁👑🌅",
        options: ["The Lion King", "Madagascar", "Zootopia"],
        answer: "The Lion King"
    },

    {
        emojis: "🐟🔍🌊",
        options: ["The Little Mermaid", "The Polar Express", "Finding Nemo"],
        answer: "Finding Nemo"
    },

    {
        emojis: "👻🏠🚫",
        options: ["Halloween", "Ghostbusters", "Casper"],
        answer: "Ghostbusters"
    },

    {
    emojis: "🧛‍♂️🏰🩸",
    options: ["Hotel Transylvania", "Dracula", "Twilight"],
    answer: "Hotel Transylvania"
    },
    
    {
        emojis: "🧔🏽🔫🚬",
        options: ["Hitman","John Wick",  "Mission Impossible"],
        answer: "John Wick"
    },

    {
        emojis: "🧞‍♂️🕌🪔",
        options: [ "The Prince of Egypt", "Sinbad", "Aladdin"],
        answer: "Aladdin"
    },

    {
        emojis: "🦁🐘🦓🗽",
        options: [ "The Lion King","Madagascar", "Zootopia"],
        answer: "Madagascar"
    },

    {
        emojis: "👨‍🔬🧪⚡",
        options: [ "Iron Man", "Back to the Future","The Flash"],
        answer: "Back to the Future"
    },

    {
        emojis: "🧙‍♂️⚔️🐉",
        options: ["Eragon", "Harry Potter", "Percy Jackson"],
        answer: "Eragon"
    },

    {
        emojis: "🤠🦖🧸",
        options: ["Toy Story", "Indiana Jones", "Night at the Museum"],
        answer: "Toy Story"
    },

    {
        emojis: "🧑‍🚀🌌⏳",
        options: [ "The Martian", "Gravity","Interstellar"],
        answer: "Interstellar"
    }

];

let currentQuestion = 0; // says what q the user is on
let score = 0;          // saves the score

const emojiDisplay = document.getElementById("emoji-display");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");

// load new question
function loadQuestion() {
    const q = questions[currentQuestion];
    emojiDisplay.textContent = q.emojis;
    
    // clears the buttons
    optionsContainer.innerHTML = "";

    // creates new ones
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option");
        btn.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(btn);
    });

    feedback.textContent = "";
}

// checks the answer
function checkAnswer(selected) {
    const q = questions[currentQuestion];
    if (selected === q.answer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "lightgreen";
        score++;
        currentQuestion++;

        // checks for new questions
        if (currentQuestion < questions.length) {
            setTimeout(loadQuestion, 1000); // contineus after a sec
        } else {
            setTimeout(showWinScreen, 1000);
        }
    } else {
        feedback.textContent = "Wrong. try again!";
        feedback.style.color = "salmon";
    }
}

// win screen
function showWinScreen() {
    emojiDisplay.textContent = "🏆";
    optionsContainer.innerHTML = "";
    feedback.innerHTML = `You finished the game with <b>${score}</b> correct answers! `;
    feedback.style.color = "gold";

    // creates a play again button
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "play again";
    playAgainBtn.classList.add("option"); 
    playAgainBtn.addEventListener("click", () => {
        currentQuestion = 0;
        score = 0;
        loadQuestion(); // load the game from the start
    });

    optionsContainer.appendChild(playAgainBtn);
}


// starts
loadQuestion();
