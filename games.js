// The game list. To add, remove or fix a game, edit this array.
// Fields: id (unique), name, url, cat (one of CATEGORIES), icon (emoji), desc.
// You can also add games from the dashboard UI ("+ Add game"); those are saved in your browser.

window.CATEGORIES = ["Words", "Trivia & History", "Geography", "Luck"];

window.GAMES = [
  // ---- Words ----
  { id: "connections", name: "Connections", url: "https://www.nytimes.com/games/connections", cat: "Words", icon: "🔗", desc: "Sort 16 words into 4 hidden groups." },
  { id: "haaretz-ma-hakesher", name: "מה הקשר?", url: "https://www.haaretz.co.il/riddles/2024-03-20/ty-article-static/.premium/0000018d-9705-d57f-a1ef-bf1d5b3d0000", cat: "Words", icon: "🧩", desc: "Haaretz's Hebrew Connections: 16 words, 4 groups." },
  { id: "pinpoint", name: "Pinpoint", url: "https://www.linkedin.com/games/pinpoint/", cat: "Words", icon: "📌", desc: "Find the category linking five clues." },
  { id: "crossclimb", name: "Crossclimb", url: "https://www.linkedin.com/games/crossclimb/", cat: "Words", icon: "🪜", desc: "Build a word ladder, one letter change per rung." },

  // ---- Trivia & History ----
  { id: "krillion", name: "Krillion", url: "https://krillion.io/", cat: "Trivia & History", icon: "🦐", desc: "Seven prompts; the rarer your answer, the deeper you dive." },
  { id: "eraly", name: "Eraly", url: "https://eraly.io/", cat: "Trivia & History", icon: "⏳", desc: "Seven moments from history. Guess the year." },
  { id: "chrono", name: "Chrono", url: "https://chrono.quest/", cat: "Trivia & History", icon: "🕰️", desc: "Put historical events in order on a timeline." },

  // ---- Geography ----
  { id: "farflung", name: "Farflung", url: "https://farflung.game/", cat: "Geography", icon: "🗺️", desc: "The daily map quiz." },

  // ---- Luck ----
  { id: "rngdle", name: "RNGdle", url: "https://www.rngdle.com/", cat: "Luck", icon: "🎰", desc: "Roll a random number, scored by how rare it is." },
  { id: "hexdle", name: "HEXdle", url: "https://hexdle.pages.dev/", cat: "Luck", icon: "🎨", desc: "Roll a random hex color, scored by how rare it is." },
];
