import styles from './Modal.module.scss';

export const Modal = ({ children }) => {

    return (
        <dialog className={styles.modal}>{children}</dialog>
    )
}