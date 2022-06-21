import styles from './Solution.module.scss';

import { Swatch } from '../Swatch/Swatch';
import { Countdown } from '../Countdown/Countdown';

export const Solution = ({ colors, countdown }) => {

    return (
        <div className={styles.overview}>
            <div className={styles.overview__colors}>
                {colors.map((color) => (
                    <Swatch color={color} key={`swatch ${color}`}></Swatch>
                ))}
            </div>
            <Countdown countdown={countdown}></Countdown>
        </div>
    )
}