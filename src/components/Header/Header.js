import styles from './Header.module.scss';

import { Button } from '../Button/Button';

export const Header = ({ handleClick }) => {

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <h1 className="typo-lg-bold">Code d'Or Mastermind</h1>

                <Button text="new game" onButtonClick={() => handleClick()}></Button>
            </div>
        </header>
    )
}