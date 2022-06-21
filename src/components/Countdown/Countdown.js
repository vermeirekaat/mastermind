import styles from './Countdown.module.scss';

export const Countdown = ({ countdown }) => {

    return (
        <p className={`${styles.countdown} typo-md-bold`}>{ countdown }</p>
    )
}