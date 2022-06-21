import styles from './Swatch.module.scss';

export const Swatch = ({ color }) => {

    return (
        <div className={styles.swatch}>
            <div className={styles.swatch__outer} style={{ borderColor: color }}></div>
            <div className={styles.swatch__inner} style={{ backgroundColor: color }}>
            </div>
        </div>  
    )
}