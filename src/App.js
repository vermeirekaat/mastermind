import logo from './logo.svg';
import styles from './App.module.scss';

import './styles/style.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App__header}>
        <img src={logo} className={styles.App__logo} alt="logo" />
        <p className='typo-xl-bold'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.App__link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
