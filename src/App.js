import styles from './App.module.scss';

import './styles/style.scss';

import { Header } from './components/Header/Header';

function App() {

  const handleNewGame = () => {
    console.log('new game');
  }

  return (
    <div>
      <Header handleClick={(type) => handleNewGame(type)}></Header>

    </div>
  );
}

export default App;
