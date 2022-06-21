import { useState } from 'react';
import styles from './Guess.module.scss';

import { Swatch } from '../Swatch/Swatch';
import { ColorPicker } from '../ColorPicker/ColorPicker';

export const Guess = ({ allColors, colors, handleClickChange, activeGuess }) => {

    const [showColorPicker, setShowColorPicker] = useState(false);
    const [colorIndex, setColorIndex] = useState();

    const onSwatchOpen = (index) => {
        setShowColorPicker(!showColorPicker);
        setColorIndex(index);
    }

    const onSwatchChange = (color) => {
        setShowColorPicker(!showColorPicker);
        handleClickChange(colorIndex, color);
    }

    return (
        <div className={styles.overview}>
            <div className={styles.overview__container}>
                {activeGuess ? <div className={styles.overview__colors}>
                    {
                        colors.map((color, index) => (
                            <Swatch color={color} key={`swatch ${color}`} onSwatchClick={() => onSwatchOpen(index)}></Swatch>
                        ))
                    }

                </div> : 
                <div className={styles.overview__colors}>
                 {
                     colors.map((color) => (
                         <Swatch color={color} key={`swatch ${color}`}></Swatch>
                     ))
                 }

                </div>}
            {showColorPicker && <ColorPicker colors={allColors} handleChangeSwatch={(color) => onSwatchChange(color)}></ColorPicker>}
            </div>
        </div>
    )
}