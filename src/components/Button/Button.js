import styles from './Button.module.scss';

export const Button = ({ text, onButtonClick }) => {

    return (
        <button className={`${styles.button} typo-s-medium`} onClick={() => onButtonClick()}>
            {text}
        </button>
    )
}