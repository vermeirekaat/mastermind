import styles from './Solution.module.scss';

import { Swatch } from '../Swatch/Swatch';
import { Countdown } from '../Countdown/Countdown';

export const Solution = ({ colors, countdown, finish }) => {

    return (
        <div className={styles.overview}>
            <div className={styles.overview__colors}>
                {finish ? 
                    colors.map((color) => (
                     <Swatch color={color} key={`swatch ${color}`}></Swatch>
                    ))
                 : colors.map((color) => (
                    <Swatch color={'#7A7A80'} key={`swatch ${color}`}></Swatch>
                 ))
                }
            </div>
            <Countdown countdown={countdown}></Countdown>
        </div>
    )
}