import { useState } from 'react';

import './styles/style.scss';

import styles from './App.module.scss';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Solution } from './components/Solution/Solution';
import { Guess } from './components/Guess/Guess';

function App() {

  const allColors = ['#2900FF', '#EE00B8', '#FF0072', '#FF6A3F', '#FFBB34', '#F9F871', '#00CA99'];

  const [counter, setCounter] = useState('05:00');
  const [solution, setSolution] = useState([]);
  const [guess, setGuess] = useState(['#7A7A80','#7A7A80', '#7A7A80', '#7A7A80']);
  const [savedGuesses, setSavedGuesses] = useState([]);
  const [savedResults, setSavedResults] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);

  const shuffleIndexes = () => {
    const numbers = [];
    allColors.forEach((item) => {
      numbers.push(allColors.indexOf(item));
    });

    for(var j, x, i = numbers.length; i; j = parseInt(Math.random() * i), x = numbers[--i], numbers[i] = numbers[j], numbers[j] = x);

    return numbers.slice(0, -3);
  }


  const handleNewGame = () => {
    setStartGame(true);
    // reset the counter by counting down from 5 min
    const duration = 60 * .05;

    let timer = duration, minutes, seconds;
    const countdown = setInterval(() => {

        minutes = parseInt(timer/ 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        setCounter(minutes + ':' + seconds);

        if (--timer < 0) {
          clearInterval(countdown);
          setEndGame(true);
        }
       
      }, 1000);
    
    // generate random code 
    const randomIndexes = shuffleIndexes();
    const generatedCode = [];

    randomIndexes.forEach((index) => {
      generatedCode.push(allColors[index]);
    })
    setSolution(generatedCode);
  };

  const handleChangeGuess = (index, color) => {
    const copy = [...guess];
    copy[index] = color;

    setGuess(copy);
  }

  const handleSaveGuess = () => {
    const copy = [...savedGuesses];

    copy.unshift(guess);
    setSavedGuesses(copy);

    checkCurrentResult();

    setGuess(['#7A7A80','#7A7A80', '#7A7A80', '#7A7A80']);
  }

  const checkCurrentResult = () => {
    const codeResult = [];
    for (let i = 0; i <= 3; i++) {
      if (guess[i] === solution[i]) {
        codeResult.push('#5E60CE')

        if (codeResult.length === 4) {
          setEndGame(true);
        }
      }
      else if (solution.includes(guess[i])) {
        codeResult.push('#333333');
      }
    }

    const rest = 4 - codeResult.length;
    if (rest > 0) {
      for (let i = 0; i < rest; i++) {
        codeResult.push('#7A7A80')
      }
    }

    const copy = [...savedResults];
    copy.unshift(codeResult.sort());

    setSavedResults(copy);
  }

  return (
    <div>
      <Header handleClick={() => handleNewGame()}></Header>

      {startGame && <Solution colors={solution} countdown={counter} finish={endGame}></Solution>}

      {(startGame || endGame) && <Guess allColors={allColors} colors={guess} handleClickChange={(index, color) => handleChangeGuess(index, color)} handleClickButton={() => handleSaveGuess()} activeGuess={true}></Guess>}

      {savedGuesses.map((guess) => (
          <Guess colors={guess} results={savedResults} activeGuess={false} index={savedGuesses.indexOf(guess)}></Guess>
        ))}

      <Footer></Footer>

    </div>
  );
}

export default App;
