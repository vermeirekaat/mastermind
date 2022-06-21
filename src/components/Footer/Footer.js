import styles from './Footer.module.scss';

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <p className="typo-s-bold">&copy; Code d'Or</p>
            </div>
        </footer>
    )
}