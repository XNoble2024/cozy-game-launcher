fetch('games.json')
  .then(res => res.json())
  .then(games => {
    const launcher = document.getElementById('launcher');

    Object.entries(games).forEach(([key, game]) => {
      const div = document.createElement('div');
      div.className = 'game';
      div.onclick = () => window.api.launchGame(key);

      div.innerHTML = `
        <img src="${game.icon}" />
        <video src="${game.video}" autoplay muted loop></video>
        <div class="label">${game.name}</div>
      `;

      launcher.appendChild(div);
    });
  });