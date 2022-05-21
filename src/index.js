import './style.css';

const refresh = document.querySelector('.refresh');
const gameContainer = document.getElementById('form');
const newScoreler = document.getElementById('name');
const scores = document.getElementById('score')
// const listContainer = document.querySelector('.scores-list')
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'

const renderScore = (gameUsers) => {
    const gamers = (gameUsers.result);
    let list = '';
    gamers.forEach((gameUser) => {
      list += `<span>${gameUser.user} : ${gameUser.score}</span>`;
      scoreDiv.innerHTML = list;
    });
  };
  
const getScores = async () => {
    const res = await fetch(url);
    const data = await res.json();
    renderScore(data);
  }

  refresh.addEventListener('click', () => {
    getScores();
  });

  const addScoreForm = async () => {
    const res = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: newScoreler.value,
        score: scores.value,
      }),
    });
    const data = await (await res).json();
    newScoreler.value = '';
    scores.value = '';
    return data;
  };

  gameContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    addScoreForm();
  });
  