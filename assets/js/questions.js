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
        question: "What is the formula for the area of a trapezium?",
        firstOption: "1/2(a + b)h",
        secondOption: "2(a + b)/h",
        thirdOption: "h(a + b)²",
        fourthOption: "1/2 × abh",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Math-7",
        question: "How much larger is the volume of a 10m×5m×2m box than a 8m×4m×1m box?",
        firstOption: "4m³",
        secondOption: "36m³",
        thirdOption: "68m³",
        fourthOption: "132m³",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Math-8",
        question: "Choose the correct statement.",
        firstOption: "sinθ = opposite/adjacent",
        secondOption: "tanθ = hypotenuse/opposite",
        thirdOption: "cosθ = adjacent/hypotenuse",
        fourthOption: "sinθ = hypotenuse/adjacent",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Math-9",
        question: "There are 10 people at a meeting. If each person shakes every other person's hand once, how many handshakes are there in total?",
        firstOption: "100",
        secondOption: "3628800",
        thirdOption: "64",
        fourthOption: "45",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Math-10",
        question: "How many zeroes are there in ten trillion?",
        firstOption: "9",
        secondOption: "12",
        thirdOption: "15",
        fourthOption: "18",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Math-11",
        question: "Which 3D shape does the formula (1/3)π × r²h give you the volume of?",
        firstOption: "Cone",
        secondOption: "Cylinder",
        thirdOption: "Sphere",
        fourthOption: "Hemisphere",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Math-12",
        question: "How many seconds are there in 2 hours?",
        firstOption: "1800",
        secondOption: "3600",
        thirdOption: "7200",
        fourthOption: "10800",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Math-13",
        question: "Sam is 21 and his mum is 48. How many years are there until Sam is exactly half his mum's age?",
        firstOption: "2",
        secondOption: "4",
        thirdOption: "6",
        fourthOption: "12",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Math-15",
        question: "How many days are there in a leap year?",
        firstOption: "363",
        secondOption: "364",
        thirdOption: "365",
        fourthOption: "366",
        correctAnswer: "#fourth-option"
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
        question: "Which of the following is a synonym for the word \"surmise\"?",
        firstOption: "Surpass",
        secondOption: "Deduce",
        thirdOption: "Know",
        fourthOption: "Acknowledge",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "English-9",
        question: "Which of the following is a synonym for the word \"tacit\"?",
        firstOption: "Explicit",
        secondOption: "Inferred",
        thirdOption: "Said",
        fourthOption: "Tactic",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "English-11",
        question: "Which of the following is NOT an example of tautology?",
        firstOption: "Either it will or it won't.",
        secondOption: "Recently, the Australian dollar has depreciated in value.",
        thirdOption: "His work was not adequate enough.",
        fourthOption: "She greatly exaggerated the situation.",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "English-12",
        question: "Which of the following is an antonym for the word \"consider\"?",
        firstOption: "Dismiss",
        secondOption: "Contemplate",
        thirdOption: "Deem",
        fourthOption: "Confuse",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "English-13",
        question: "Which of the following is an antonym for the word \"discord\"?",
        firstOption: "Agreement",
        secondOption: "Happiness",
        thirdOption: "Conflict",
        fourthOption: "Hostility",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "English-14",
        question: "How many consonants are there in the word \"library\"?",
        firstOption: "2",
        secondOption: "3",
        thirdOption: "4",
        fourthOption: "5",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "English-15",
        question: "Which of the following is NOT an example of a metaphor?",
        firstOption: "He has a heart of gold.",
        secondOption: "The world's your oyster.",
        thirdOption: "She's as fast as a cheetah.",
        fourthOption: "Pizza is happiness on a plate.",
        correctAnswer: "#third-option"
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
    },
    {
        // questionNumber: "History-11",
        question: "Which of the following titles is not a play by Shakespeare?",
        firstOption: "The Merchant of Venice",
        secondOption: "Much Ado About Nothing",
        thirdOption: "Oedipus Rex",
        fourthOption: "Hamlet",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "History-12",
        question: "Which of the following countries was not one of the principal Allied powers in World War I?",
        firstOption: "Japan",
        secondOption: "United Kingdom",
        thirdOption: "China",
        fourthOption: "France",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Language-1",
        question: "What is the traditional translation for the French phrase \"Qu'ils mangent de la brioche\"?",
        firstOption: "An apple a day keeps the doctor away",
        secondOption: "Off with their heads",
        thirdOption: "Let them eat cake",
        fourthOption: "Live life to the fullest",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Language-2",
        question: "Which of the following expressions for \"hello\" is not Asian?",
        firstOption: "Jambo",
        secondOption: "Konnichiwa",
        thirdOption: "Kumusta",
        fourthOption: "Annyeonghaseyo",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Language-3",
        question: "What is the Spanish word for \"fish\"?",
        firstOption: "Perro",
        secondOption: "Pan",
        thirdOption: "Pez",
        fourthOption: "Árbol",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Language-4",
        question: "Which of the following is NOT one of the three basic Japanese scripts?",
        firstOption: "Katakana",
        secondOption: "Furigana",
        thirdOption: "Kanji",
        fourthOption: "Hiragana",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Language-5",
        question: "Which of the following is NOT an African language?",
        firstOption: "Telugu",
        secondOption: "Malagasy",
        thirdOption: "Amharic",
        fourthOption: "Zulu",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Language-6",
        question: "What is the national language of Singapore?",
        firstOption: "English",
        secondOption: "Mandarin Chinese",
        thirdOption: "Tamil",
        fourthOption: "Malay",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Language-7",
        question: "How many tones (exluding the neutral tone) are there in Mandarin Chinese?",
        firstOption: "3",
        secondOption: "4",
        thirdOption: "5",
        fourthOption: "6",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Language-8",
        question: "How many tones are there in Thai?",
        firstOption: "3",
        secondOption: "4",
        thirdOption: "5",
        fourthOption: "6",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Language-9",
        question: "What is the literal translation of the Cantonese word \"dim sum\"?",
        firstOption: "Eat food",
        secondOption: "Drink tea",
        thirdOption: "Small Snack",
        fourthOption: "Touch heart",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Language-10",
        question: "What is the official language of Barbados?",
        firstOption: "English",
        secondOption: "Spanish",
        thirdOption: "French",
        fourthOption: "Miskito",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Geography-1",
        question: "Which of the following continents is the largest?",
        firstOption: "Africa",
        secondOption: "North America",
        thirdOption: "Antarctica",
        fourthOption: "Europe",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Geography-2",
        question: "Which country does the Nile River NOT flow through?",
        firstOption: "Egypt",
        secondOption: "Libya",
        thirdOption: "Ethiopia",
        fourthOption: "Uganda",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Geography-3",
        question: "Which of the following European countries is landlocked?",
        firstOption: "Hungary",
        secondOption: "Romania",
        thirdOption: "France",
        fourthOption: "Latvia",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Geography-4",
        question: "What is the capital city of New York state?",
        firstOption: "Buffalo",
        secondOption: "New York",
        thirdOption: "Albany",
        fourthOption: "Rochester",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Geography-5",
        question: "What is the smallest country in the world?",
        firstOption: "Liechtenstein",
        secondOption: "Nauru",
        thirdOption: "Bhutan",
        fourthOption: "Vatican City",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Geography-6",
        question: "Which of the following South American countries is landlocked?",
        firstOption: "Bolivia",
        secondOption: "Argentina",
        thirdOption: "Chile",
        fourthOption: "Suriname",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Geography-7",
        question: "Which of the following is the closest to the total length of the Great Wall of China?",
        firstOption: "200km",
        secondOption: "2,000km",
        thirdOption: "20,000km",
        fourthOption: "200,000km",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Geography-8",
        question: "How many countries border China?",
        firstOption: "8",
        secondOption: "10",
        thirdOption: "12",
        fourthOption: "14",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Geography-9",
        question: "Which of the following African countries is NOT an island country?",
        firstOption: "Seychelles",
        secondOption: "Togo",
        thirdOption: "Madagascar",
        fourthOption: "Mauritius",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Geography-10",
        question: "What is the capital city of Oman?",
        firstOption: "Salalah",
        secondOption: "Sur",
        thirdOption: "Muscat",
        fourthOption: "Nizwa",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Animals-1",
        question: "What is the largest type of whale?",
        firstOption: "Blue whale",
        secondOption: "Killer whale",
        thirdOption: "Humpback whale",
        fourthOption: "Sperm whale",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Animals-2",
        question: "Which of the following is not a breed of hound dog?",
        firstOption: "Basenji",
        secondOption: "Bichon Frise",
        thirdOption: "Beagle",
        fourthOption: "Basset Hound",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Animals-3",
        question: "Which of the following is not a breed of cat?",
        firstOption: "Jersey Wooly",
        secondOption: "British Shorthair",
        thirdOption: "Scottish Fold",
        fourthOption: "Russian Blue",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Animals-4",
        question: "What is the typical lifespan of an emperor penguin in the wild?",
        firstOption: "5-10 years",
        secondOption: "15-20 years",
        thirdOption: "25-30 years",
        fourthOption: "35-40 years",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Animals-5",
        question: "Which of the following animals is not a marsupial?",
        firstOption: "Koala",
        secondOption: "Wombat",
        thirdOption: "Sloth",
        fourthOption: "Kangaroo",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Animals-6",
        question: "How long was Lolong, officially the largest crocodile to have ever been held in captivity?",
        firstOption: "5.48m",
        secondOption: "6.17m",
        thirdOption: "7.32m",
        fourthOption: "8.09m",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Animals-7",
        question: "What is a baby rabbit called?",
        firstOption: "Rabbito",
        secondOption: "Foal",
        thirdOption: "Pup",
        fourthOption: "Kitten",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Animals-8",
        question: "Which of the following animals is NOT a herbivore?",
        firstOption: "Chimpanzee",
        secondOption: "Elephant",
        thirdOption: "Giraffe",
        fourthOption: "Capybara",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Animals-9",
        question: "What is the heaviest land animal?",
        firstOption: "Asian elephant",
        secondOption: "Black rhinoceros",
        thirdOption: "African bush elephant",
        fourthOption: "Hippopotamus",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Animals-10",
        question: "What is the smallest dog breed?",
        firstOption: "Chihuahua",
        secondOption: "Pug",
        thirdOption: "Toy poodle",
        fourthOption: "Yorkshire terrier",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Food-1",
        question: "Which of the following vegetables is not a traditional ingredient in mirepoix?",
        firstOption: "Onion",
        secondOption: "Carrot",
        thirdOption: "Celery",
        fourthOption: "Zucchini",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Food-2",
        question: "Which of the following is not a type of pastry?",
        firstOption: "Croissant",
        secondOption: "Cannoli",
        thirdOption: "Gateau",
        fourthOption: "Pretzel",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Food-3",
        question: "Which of the following is not a culinary cutting term?",
        firstOption: "Dice",
        secondOption: "Julienne",
        thirdOption: "Slash",
        fourthOption: "Slice",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Food-4",
        question: "Which of the following foods is vegetarian?",
        firstOption: "Natto",
        secondOption: "Escargot",
        thirdOption: "Samgyeopsal",
        fourthOption: "Jamón",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Food-5",
        question: "Which of the following is not a root vegetable?",
        firstOption: "Radish",
        secondOption: "Rhubarb",
        thirdOption: "Beetroot",
        fourthOption: "Onion",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Food-6",
        question: "What is seitan made of?",
        firstOption: "Wheat gluten",
        secondOption: "Chicken",
        thirdOption: "Chickpeas",
        fourthOption: "Beans",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Food-7",
        question: "Which country produces the most avocados?",
        firstOption: "Dominican Republic",
        secondOption: "Mexico",
        thirdOption: "China",
        fourthOption: "United States",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Food-8",
        question: "Which country does the cake Baumkuchen originate from?",
        firstOption: "Austria",
        secondOption: "Denmark",
        thirdOption: "Germany",
        fourthOption: "Poland",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Food-9",
        question: "Which of the following is NOT a traditional ingredient in Greek salad?",
        firstOption: "Cucumber",
        secondOption: "Carrot",
        thirdOption: "Kalamata olives",
        fourthOption: "Tomato",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Food-10",
        question: "Which of the following is NOT a traditional ingredient in bánh mì?",
        firstOption: "Brioche",
        secondOption: "Cucumber",
        thirdOption: "Coriander (cilantro)",
        fourthOption: "Pâté",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Media-1",
        question: "Which of the following TV shows has the most episodes?",
        firstOption: "Jeopardy!",
        secondOption: "Wheel of Fortune",
        thirdOption: "Friends",
        fourthOption: "The Bold and the Beautiful",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Media-2",
        question: "Which of the following films was NOT directed by Steven Spielberg?",
        firstOption: "'War of the Worlds'",
        secondOption: "'Schindler's List'",
        thirdOption: "'The Terminal'",
        fourthOption: "'Avatar'",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Media-3",
        question: "Which of the following films is the high-grossing?",
        firstOption: "'Frozen'",
        secondOption: "'Avengers: Infinity War'",
        thirdOption: "'Star Wars: The Force Awakens'",
        fourthOption: "'Avatar'",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Media-4",
        question: "Who plays the character of Andy Dufresne in the film 'The Shawshank Redemption'?",
        firstOption: "Bob Gunton",
        secondOption: "Tim Robbins",
        thirdOption: "Morgan Freeman",
        fourthOption: "Clancy Brown",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Media-5",
        question: "In which of the following Disney films is the main character's sidekick named 'Pascal'?",
        firstOption: "'Mulan'",
        secondOption: "'Beauty and the Beast'",
        thirdOption: "'Pocahontas'",
        fourthOption: "'Tangled'",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Media-6",
        question: "What type pokémon is 'Meganium'?",
        firstOption: "Fire",
        secondOption: "Grass",
        thirdOption: "Water",
        fourthOption: "Electric",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Media-7",
        question: "Which of the following names does not belong to one of Winnie-the-Pooh's friends?",
        firstOption: "Piglet",
        secondOption: "Donkey",
        thirdOption: "Tigger",
        fourthOption: "Roo",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Media-8",
        question: "Which of the following actors has not played James Bond?",
        firstOption: "Sean Penn",
        secondOption: "Roger Moore",
        thirdOption: "Daniel Craig",
        fourthOption: "Pierce Brosnan",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Media-9",
        question: "Who is the main producer of the 'Mission: Impossible' film series?",
        firstOption: "Tom Cruise",
        secondOption: "Steven Spielberg",
        thirdOption: "Martin Scorsese",
        fourthOption: "Sylvester Stallone",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Media-10",
        question: "Which Harry Potter character is played by Rupert Grint?",
        firstOption: "Harry Potter",
        secondOption: "Hermione Granger",
        thirdOption: "Ron Weasley",
        fourthOption: "Draco Malfoy",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Sports-1",
        question: "How many players are there in a water polo team?",
        firstOption: "5",
        secondOption: "6",
        thirdOption: "7",
        fourthOption: "8",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Sports-2",
        question: "What number jersey did Brazilian footballer Pelé wear?",
        firstOption: "1",
        secondOption: "3",
        thirdOption: "9",
        fourthOption: "10",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Sports-3",
        question: "What team does NBA player Blake Griffin play for (as of 2020)?",
        firstOption: "Detroit Pistons",
        secondOption: "Miami Heat",
        thirdOption: "Los Angeles Clippers",
        fourthOption: "Los Angeles Lakers",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Sports-4",
        question: "In baseball, how many points is a home run worth?",
        firstOption: "2",
        secondOption: "3",
        thirdOption: "4",
        fourthOption: "5",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Sports-5",
        question: "Which of the following netball positions is not allowed in the centre third?",
        firstOption: "Wing Attack",
        secondOption: "Goal Defence",
        thirdOption: "Goal Shooter",
        fourthOption: "Centre",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Sports-6",
        question: "What is the world record time for the men's 100m sprint, held by Usain Bolt?",
        firstOption: "8.92 seconds",
        secondOption: "9.15 seconds",
        thirdOption: "9.36 seconds",
        fourthOption: "9.58 seconds",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Sports-7",
        question: "How many points is a touchdown worth in American football?",
        firstOption: "3",
        secondOption: "4",
        thirdOption: "5",
        fourthOption: "6",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Sports-8",
        question: "In table tennis, a player must score at least how many points to win a game?",
        firstOption: "10",
        secondOption: "11",
        thirdOption: "12",
        fourthOption: "13",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Sports-9",
        question: "In tennis, a player must win at least how many games to win a set?",
        firstOption: "4",
        secondOption: "6",
        thirdOption: "8",
        fourthOption: "10",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Sports-10",
        question: "What does the term \"eagle\" refer to in golf?",
        firstOption: "A score of one under par on a hole",
        secondOption: "A score of two under par",
        thirdOption: "A score of three under par",
        fourthOption: "A score of one over par",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Science-1",
        question: "Which element is number 80 on the periodic table?",
        firstOption: "Chromium",
        secondOption: "Hassium",
        thirdOption: "Mercury",
        fourthOption: "Thalium",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Science-2",
        question: "Which element is number 20 on the periodic table?",
        firstOption: "Chlorine",
        secondOption: "Magnesium",
        thirdOption: "Potassium",
        fourthOption: "Calcium",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Science-3",
        question: "Which of the following is NOT a noble gas?",
        firstOption: "Carbon",
        secondOption: "Argon",
        thirdOption: "Helium",
        fourthOption: "Krypton",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Science-4",
        question: "Which planet in our solar system is 6th from the sun?",
        firstOption: "Mars",
        secondOption: "Jupiter",
        thirdOption: "Saturn",
        fourthOption: "Neptune",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Science-5",
        question: "What is the constant for gravitational acceleration?",
        firstOption: "g = 4.98m/s²",
        secondOption: "g = 6.29m/s²",
        thirdOption: "g = 8.72m/s²",
        fourthOption: "g = 9.81m/s²",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Science-6",
        question: "How many carbon dioxide molecules are required in the chemical equation of photosynthesis?",
        firstOption: "3",
        secondOption: "4",
        thirdOption: "5",
        fourthOption: "6",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Science-7",
        question: "Where are the smallest bones in the human body located?",
        firstOption: "Ears",
        secondOption: "Fingers",
        thirdOption: "Nose",
        fourthOption: "Feet",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Science-8",
        question: "Which part of the body does scoliosis affect?",
        firstOption: "Arms",
        secondOption: "Legs",
        thirdOption: "Hip",
        fourthOption: "Spine",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Science-9",
        question: "Mixing red and green results in which colour?",
        firstOption: "Purple",
        secondOption: "Brown",
        thirdOption: "Grey",
        fourthOption: "Khaki",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Science-10",
        question: "Which layer of the atmosphere is closest to us?",
        firstOption: "Troposphere",
        secondOption: "Stratosphere",
        thirdOption: "Exosphere",
        fourthOption: "Mesosphere",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Science-11",
        question: "What kind of colour is fuchsia?",
        firstOption: "Bluish green",
        secondOption: "Yellowish green",
        thirdOption: "Purplish red",
        fourthOption: "Pinkish purple",
        correctAnswer: "#third-option"
    },
    {
        // questionNumber: "Science-12",
        question: "Which of the following is the best definition of kinetic energy?",
        firstOption: "Energy stored within an object that is at rest",
        secondOption: "Energy that an object possesses due to its motion",
        thirdOption: "Energy created by heat",
        fourthOption: "Energy from the sun",
        correctAnswer: "#second-option"
    },
    {
        // questionNumber: "Science-13",
        question: "Which of the following is NOT a source of renewable energy?",
        firstOption: "Sunlight",
        secondOption: "Wind",
        thirdOption: "Tides",
        fourthOption: "Natural gases",
        correctAnswer: "#fourth-option"
    },
    {
        // questionNumber: "Science-14",
        question: "Which of the following is NOT a type of cloud?",
        firstOption: "Columbus",
        secondOption: "Cirrus",
        thirdOption: "Nimbus",
        fourthOption: "Stratus",
        correctAnswer: "#first-option"
    },
    {
        // questionNumber: "Science-15",
        question: "Which of the following is closest to the depth of the Mariana Trench?",
        firstOption: "1km (0.6mi)",
        secondOption: "4km (2.5mi)",
        thirdOption: "8km (5mi)",
        fourthOption: "11km (7mi)",
        correctAnswer: "#fourth-option"
    },
]