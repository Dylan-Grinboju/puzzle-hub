// Shared state for the dashboard and the random page, kept in localStorage.
// "Played today" resets automatically when the date changes.

(function () {
  const KEY = "daily-puzzles:v1";

  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function read() {
    let s;
    try { s = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { s = {}; }
    s.favorites ||= [];
    s.custom ||= [];
    s.hidden ||= [];
    if (s.playedDate !== todayKey()) { s.playedDate = todayKey(); s.played = []; }
    s.played ||= [];
    return s;
  }

  function write(s) { localStorage.setItem(KEY, JSON.stringify(s)); }

  function toggle(list, id) {
    const s = read();
    const i = s[list].indexOf(id);
    if (i >= 0) s[list].splice(i, 1); else s[list].push(id);
    write(s);
    return i < 0;
  }

  window.Store = {
    get: read,
    allGames() {
      const s = read();
      return [...window.GAMES, ...s.custom.map(g => ({ ...g, custom: true }))]
        .filter(g => !s.hidden.includes(g.id));
    },
    hiddenGames() {
      const s = read();
      return window.GAMES.filter(g => s.hidden.includes(g.id));
    },
    markPlayed(id) {
      const s = read();
      if (!s.played.includes(id)) { s.played.push(id); write(s); }
    },
    unmarkPlayed(id) {
      const s = read();
      s.played = s.played.filter(x => x !== id);
      write(s);
    },
    resetPlayed() { const s = read(); s.played = []; write(s); },
    toggleFavorite(id) { return toggle("favorites", id); },
    addCustom(game) { const s = read(); s.custom.push(game); write(s); },
    removeGame(id) {
      const s = read();
      if (s.custom.some(g => g.id === id)) s.custom = s.custom.filter(g => g.id !== id);
      else if (!s.hidden.includes(id)) s.hidden.push(id);
      write(s);
    },
    restoreAll() { const s = read(); s.hidden = []; write(s); },

    // Filters shared by the dashboard and the random page.
    // opts: { cat, fav, unplayed, q }
    filter(games, opts) {
      const s = read();
      const q = (opts.q || "").trim().toLowerCase();
      return games.filter(g =>
        (!opts.cat || g.cat === opts.cat) &&
        (!opts.fav || s.favorites.includes(g.id)) &&
        (!opts.unplayed || !s.played.includes(g.id)) &&
        (!q || g.name.toLowerCase().includes(q) || (g.desc || "").toLowerCase().includes(q))
      );
    },
  };
})();
