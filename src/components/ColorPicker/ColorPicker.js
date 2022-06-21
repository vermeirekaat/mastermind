import styles from './ColorPicker.module.scss';

import { Swatch } from '../Swatch/Swatch';

export const ColorPicker = ({ colors, handleChangeSwatch }) => {
    return (
        <div className={styles.container}>
            {colors.map((color) => (
                <Swatch color={color} key={`swatch ${color}`} onSwatchClick={(color) => handleChangeSwatch(color)}></Swatch>
            ))}
        </div>
    )
}