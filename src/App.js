import { useState } from 'react';

import './styles/style.scss';
import styles from './App.module.scss';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Countdown } from './components/Countdown/Countdown';

function App() {

  const [counter, setCounter] = useState('05:00');

  const handleNewGame = () => {
    // reset the counter by counting down from 5 min
    const duration = 60 * 5;

    let timer = duration, minutes, seconds;
    const countdown = setInterval(() => {

        minutes = parseInt(timer/ 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        setCounter(minutes + ':' + seconds);

        if (--timer < 0) {
          clearInterval(countdown);
        }
       
      }, 1000);
  }

  return (
    <div>
      <Header handleClick={(type) => handleNewGame(type)}></Header>

      <Countdown countdown={counter}></Countdown>

      <Footer></Footer>

    </div>
  );
}

export default App;
