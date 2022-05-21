import './style.css';

const refreh = document.querySelector('.refresh');
const gameContainer = document.getElementById('form');
const newGame = document.getElementById('name');
const scores = document.getElementById('score')
const listContainer = document.querySelector('.scores-list')
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'

const renderScore = (gameUsers) => {
    const gamers = (gameUsers.result);
    let list = '';
    gamers.forEach((gameUser) => {
      list += `<span>${gameUser.user} : ${gameUser.score}</span>`;
      scoreDiv.innerHTML = list;
    });
  };
  