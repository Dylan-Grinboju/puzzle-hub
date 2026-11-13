// The game list. To add, remove or fix a game, edit this array.
// Fields: id (unique), name, url, cat (one of CATEGORIES), icon (emoji), desc.
// You can also add games from the dashboard UI ("+ Add game"); those are saved in your browser.

window.CATEGORIES = ["Words", "Geography", "Logic & Math", "Movies, Music & Games", "Trivia & Misc"];

window.GAMES = [
  // ---- Words ----
  { id: "wordle", name: "Wordle", url: "https://www.nytimes.com/games/wordle/index.html", cat: "Words", icon: "🟩", desc: "Guess the 5-letter word in 6 tries." },
  { id: "connections", name: "Connections", url: "https://www.nytimes.com/games/connections", cat: "Words", icon: "🔗", desc: "Sort 16 words into 4 hidden groups." },
  { id: "strands", name: "Strands", url: "https://www.nytimes.com/games/strands", cat: "Words", icon: "🧵", desc: "Find themed words hidden in a letter grid." },
  { id: "spelling-bee", name: "Spelling Bee", url: "https://www.nytimes.com/puzzles/spelling-bee", cat: "Words", icon: "🐝", desc: "Make words from 7 letters around a center." },
  { id: "mini", name: "The Mini", url: "https://www.nytimes.com/crosswords/game/mini", cat: "Words", icon: "✏️", desc: "A tiny crossword, done in a minute or two." },
  { id: "letter-boxed", name: "Letter Boxed", url: "https://www.nytimes.com/puzzles/letter-boxed", cat: "Words", icon: "📦", desc: "Chain words using letters around a square." },
  { id: "quordle", name: "Quordle", url: "https://www.merriam-webster.com/games/quordle/", cat: "Words", icon: "4️⃣", desc: "Four Wordles at once, 9 guesses." },
  { id: "octordle", name: "Octordle", url: "https://octordle.com/", cat: "Words", icon: "8️⃣", desc: "Eight boards, 13 guesses." },
  { id: "semantle", name: "Semantle", url: "https://semantle.com/", cat: "Words", icon: "🧠", desc: "Guess the word by meaning, not spelling." },
  { id: "contexto", name: "Contexto", url: "https://contexto.me/", cat: "Words", icon: "🎯", desc: "Words are ranked by how close they are to the secret." },
  { id: "waffle", name: "Waffle", url: "https://wafflegame.net/", cat: "Words", icon: "🧇", desc: "Swap letters to fix six words in a grid." },
  { id: "squaredle", name: "Squaredle", url: "https://squaredle.app/", cat: "Words", icon: "🔤", desc: "Find every word in a letter square." },
  { id: "phrazle", name: "Phrazle", url: "https://solitaired.com/phrazle", cat: "Words", icon: "💬", desc: "Wordle, but for a whole phrase." },
  { id: "absurdle", name: "Absurdle", url: "https://qntm.org/files/absurdle/absurdle.html", cat: "Words", icon: "😈", desc: "An adversarial Wordle that dodges your guesses." },
  { id: "bracket-city", name: "Bracket City", url: "https://www.theatlantic.com/games/bracket-city/", cat: "Words", icon: "🏙️", desc: "Solve nested clues from the inside out." },

  // ---- Geography ----
  { id: "worldle", name: "Worldle", url: "https://worldle.teuteuf.fr/", cat: "Geography", icon: "🌍", desc: "Name the country from its silhouette." },
  { id: "globle", name: "Globle", url: "https://globle-game.com/", cat: "Geography", icon: "🌐", desc: "Find the mystery country; the globe heats up as you get close." },
  { id: "flagle", name: "Flagle", url: "https://www.flagle.io/", cat: "Geography", icon: "🏳️", desc: "Guess the flag one piece at a time." },
  { id: "tradle", name: "Tradle", url: "https://oec.world/en/games/tradle", cat: "Geography", icon: "🚢", desc: "Guess the country from what it exports." },
  { id: "travle", name: "Travle", url: "https://travle.earth/", cat: "Geography", icon: "🧭", desc: "Connect two countries through their neighbours." },
  { id: "wheretaken", name: "WhereTaken", url: "https://wheretaken.teuteuf.fr/", cat: "Geography", icon: "📸", desc: "Work out where a photo was taken." },

  // ---- Logic & Math ----
  { id: "nerdle", name: "Nerdle", url: "https://nerdlegame.com/", cat: "Logic & Math", icon: "🧮", desc: "Guess the hidden equation." },
  { id: "mathler", name: "Mathler", url: "https://www.mathler.com/", cat: "Logic & Math", icon: "➗", desc: "Find the equation that equals the target." },
  { id: "queens", name: "Queens", url: "https://www.linkedin.com/games/queens/", cat: "Logic & Math", icon: "👑", desc: "One queen per row, column and colour region." },
  { id: "tango", name: "Tango", url: "https://www.linkedin.com/games/tango/", cat: "Logic & Math", icon: "🌗", desc: "Fill the grid with suns and moons." },
  { id: "zip", name: "Zip", url: "https://www.linkedin.com/games/zip/", cat: "Logic & Math", icon: "〰️", desc: "Draw one path through every cell in order." },
  { id: "pips", name: "Pips", url: "https://www.nytimes.com/games/pips", cat: "Logic & Math", icon: "🁢", desc: "Place dominoes to satisfy the region rules." },
  { id: "murdle", name: "Murdle", url: "https://murdle.com/", cat: "Logic & Math", icon: "🔍", desc: "Solve a little murder mystery with logic grids." },

  // ---- Movies, Music & Games ----
  { id: "framed", name: "Framed", url: "https://framed.wtf/", cat: "Movies, Music & Games", icon: "🎬", desc: "Name the movie from its frames." },
  { id: "moviedle", name: "Moviedle", url: "https://moviedle.app/", cat: "Movies, Music & Games", icon: "🍿", desc: "A whole movie sped up into seconds." },
  { id: "actorle", name: "Actorle", url: "https://actorle.com/", cat: "Movies, Music & Games", icon: "🎭", desc: "Guess the actor from their filmography." },
  { id: "bandle", name: "Bandle", url: "https://bandle.app/", cat: "Movies, Music & Games", icon: "🎸", desc: "Guess the song as instruments are added." },
  { id: "spotle", name: "Spotle", url: "https://spotle.io/", cat: "Movies, Music & Games", icon: "🎧", desc: "Guess the artist from their stats." },
  { id: "gamedle", name: "Gamedle", url: "https://www.gamedle.wtf/", cat: "Movies, Music & Games", icon: "🎮", desc: "Guess the video game from its art." },
  { id: "pokedle", name: "Pokedle", url: "https://pokedle.net/", cat: "Movies, Music & Games", icon: "⚡", desc: "Guess the Pokémon from its traits." },
  { id: "loldle", name: "LoLdle", url: "https://loldle.net/", cat: "Movies, Music & Games", icon: "⚔️", desc: "Guess the League of Legends champion." },

  // ---- Trivia & Misc ----
  { id: "costcodle", name: "Costcodle", url: "https://costcodle.com/", cat: "Trivia & Misc", icon: "🛒", desc: "Guess the price of a Costco item." },
  { id: "timeguessr", name: "TimeGuessr", url: "https://timeguessr.com/", cat: "Trivia & Misc", icon: "⏳", desc: "Guess where and when a photo was taken." },
  { id: "chronophoto", name: "Chronophoto", url: "https://www.chronophoto.app/", cat: "Trivia & Misc", icon: "📷", desc: "Guess the year a photo was taken." },
  { id: "foodguessr", name: "FoodGuessr", url: "https://www.foodguessr.com/", cat: "Trivia & Misc", icon: "🍜", desc: "Guess where a dish comes from." },
  { id: "thrice", name: "Thrice", url: "https://thrice.geekswhodrink.com/", cat: "Trivia & Misc", icon: "3️⃣", desc: "Trivia with three clues per question." },
  { id: "pinpoint", name: "Pinpoint", url: "https://www.linkedin.com/games/pinpoint/", cat: "Trivia & Misc", icon: "📌", desc: "Find the category linking five clues." },
];
