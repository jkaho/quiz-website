var questionArr = [
    {
        // questionNumber: "Math-1",
        question: "Solve the following equation: 3 × 10 ÷ 5 + 128 ÷ 2 = ?",
        firstOption: "67",
        secondOption: "68",
        thirdOption: "134",
        fourthOption: "70",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Math-2",
        question: "Solve the following equation: 20 × 0 + 235 - 76 ÷ 2 + 1 = ?",
        firstOption: "198",
        secondOption: "53",
        thirdOption: "80.5",
        fourthOption: "90.5",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Math-3",
        question: "Solve the following equation: √(12² + 25) × 2 = ?",
        firstOption: "13",
        secondOption: "26",
        thirdOption: "62",
        fourthOption: "74",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Math-4",
        question: "Solve the following equation: (5 + √225) ÷ 4 × 9 = ?",
        firstOption: "5/9",
        secondOption: "45",
        thirdOption: "50",
        fourthOption: "742.5",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Math-5",
        question: "What is the formula for the area of a triangle?",
        firstOption: "(Base × Height)²",
        secondOption: "(Base × Height) ÷ 2",
        thirdOption: "Base ÷ Height × 2",
        fourthOption: "Base × 0.5 + Height × 0.5",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Math-6",
        question: "Choose the correct statement.",
        firstOption: "sinθ = opposite/adjacent",
        secondOption: "tanθ = hypotenuse/opposite",
        thirdOption: "cosθ = adjacent/hypotenuse",
        fourthOption: "sinθ = hypotenuse/adjacent",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Math-7",
        question: "There are 10 people at a meeting. If each person shakes every other person's hand once, how many handshakes are there in total?",
        firstOption: "100",
        secondOption: "3628800",
        thirdOption: "64",
        fourthOption: "45",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Math-8",
        question: "How many zeroes are there in ten trillion?",
        firstOption: "9",
        secondOption: "12",
        thirdOption: "15",
        fourthOption: "18",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Math-9",
        question: "Which 3D shape does the formula (1/3)π × r²h give you the volume of?",
        firstOption: "Cone",
        secondOption: "Cylinder",
        thirdOption: "Sphere",
        fourthOption: "Hemisphere",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Math-10",
        question: "How many seconds are there in 2 hours?",
        firstOption: "1800",
        secondOption: "3600",
        thirdOption: "7200",
        fourthOption: "10800",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "English-1",
        question: "Choose the sentence that is gramatically correct.",
        firstOption: "Their are five apples in the tree.",
        secondOption: "I should of taken the bus instead.",
        thirdOption: "There's a lot of people here.",
        fourthOption: "I haven't seen her as of late.",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "English-2",
        question: "Which of the following is an example of a sentence containing a transitive verb?",
        firstOption: "The boy was very hungry.",
        secondOption: "She laughs loudly.",
        thirdOption: "The man bought a loaf of bread.",
        fourthOption: "They will meet tomorrow.",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "English-3",
        question: "Which of the following is not an example of a modal verb?",
        firstOption: "go",
        secondOption: "can",
        thirdOption: "will",
        fourthOption: "need",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "English-4",
        question: "Choose the word that is spelled incorrectly.",
        firstOption: "Philosophical",
        secondOption: "Hieroglyphics",
        thirdOption: "Accomodation",
        fourthOption: "Epistemological",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "English-5",
        question: "Choose the word that is spelled incorrectly.",
        firstOption: "Sabatage",
        secondOption: "Accumulate",
        thirdOption: "Catastrophe",
        fourthOption: "Cirrhosis",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "English-6",
        question: "Choose the word that is spelled incorrectly.",
        firstOption: "Hallelujah",
        secondOption: "Acquaintence",
        thirdOption: "Absence",
        fourthOption: "Fluorescence",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "English-7",
        question: "Which of the following is a synonym for the word \"abide\"?",
        firstOption: "Compromise",
        secondOption: "Obey",
        thirdOption: "Tolerate",
        fourthOption: "Understand",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "English-8",
        question: "Which of the following is NOT an example of tautology?",
        firstOption: "Either it will or it won't.",
        secondOption: "Recently, the Australian dollar has depreciated in value.",
        thirdOption: "His work was not adequate enough.",
        fourthOption: "She greatly exaggerated the situation.",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "English-9",
        question: "Which of the following is an antonym for the word \"consider\"?",
        firstOption: "Dismiss",
        secondOption: "Contemplate",
        thirdOption: "Deem",
        fourthOption: "Confuse",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "English-10",
        question: "How many consonants are there in the word \"library\"?",
        firstOption: "2",
        secondOption: "3",
        thirdOption: "4",
        fourthOption: "5",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "History-1",
        question: "What year was Julius Caesar born?",
        firstOption: "1200BC",
        secondOption: "100BC",
        thirdOption: "100AD",
        fourthOption: "1200AD",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "History-2",
        question: "In what year did World War I start?",
        firstOption: "1900",
        secondOption: "1901",
        thirdOption: "1910",
        fourthOption: "1914",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "History-3",
        question: "In what year was the first successful airplane invented?",
        firstOption: "1903",
        secondOption: "1910",
        thirdOption: "1912",
        fourthOption: "1923",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "History-4",
        question: "How many years did the Vietnam War last?",
        firstOption: "1",
        secondOption: "8",
        thirdOption: "12",
        fourthOption: "19",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "History-5",
        question: "Where was the United Nations founded?",
        firstOption: "New York",
        secondOption: "Geneva",
        thirdOption: "San Francisco",
        fourthOption: "Bern",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "History-6",
        question: "Who of the following was not a Greek philosopher?",
        firstOption: "Aristotle",
        secondOption: "Plato",
        thirdOption: "Descartes",
        fourthOption: "Socrates",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "History-7",
        question: "In which century did the French Revolution take place?",
        firstOption: "16th century",
        secondOption: "17th century",
        thirdOption: "18th century",
        fourthOption: "19th century",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "History-8",
        question: "In what year was 'The Communist Manifesto' published?",
        firstOption: "1835",
        secondOption: "1848",
        thirdOption: "1876",
        fourthOption: "1906",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "History-9",
        question: "Who wrote the novel 'War and Peace'?",
        firstOption: "Leo Tolstoy",
        secondOption: "Fyodor Dostoevsky",
        thirdOption: "Ivan Turgenev",
        fourthOption: "Vladimir Nabokov",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "History-10",
        question: "What year did the American Civil War end?",
        firstOption: "1823",
        secondOption: "1861",
        thirdOption: "1865",
        fourthOption: "1897",
        correctAnswer: "#third-option"
    }
]