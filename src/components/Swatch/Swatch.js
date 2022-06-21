import styles from './Swatch.module.scss';

export const Swatch = ({ color, onSwatchClick }) => {

    return (
        <div className={styles.container}>
            <div className={styles.swatch} onClick={() => onSwatchClick(color)}>
                <div className={styles.swatch__outer} style={{ borderColor: color }}></div>
                <div className={styles.swatch__inner} style={{ backgroundColor: color }}>
                </div>
            </div>  
        </div>
    )
}