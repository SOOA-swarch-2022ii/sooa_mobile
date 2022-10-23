import React from 'react';
import { TouchableOpacity, Image, ImageBackground } from 'react-native';
import backArrow from "../../assets/backArrow.png";

import { styles } from './styles';

function Back({action }) {
    return (
        <TouchableOpacity
            style={styles.btnback}
            onPress={action}
        >
            <ImageBackground source={backArrow} style={styles.back}/>
        </TouchableOpacity>
    );
}

export default Back;