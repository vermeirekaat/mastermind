import styles from './App.module.scss';

import './styles/style.scss';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {

  const handleNewGame = () => {
    console.log('new game');
  }

  return (
    <div>
      <Header handleClick={(type) => handleNewGame(type)}></Header>

      <Footer></Footer>

    </div>
  );
}

export default App;
