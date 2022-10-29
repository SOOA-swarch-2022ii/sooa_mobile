import React from 'react';
import { TouchableOpacity, Image, ImageBackground } from 'react-native';
import Close from "../../assets/close.png";

import { styles } from './styles';

function CloseSesion({action }) {
    return (
        <TouchableOpacity
            style={styles.btnClose}
            onPress={action}
        >
            <ImageBackground source={Close} style={styles.back}/>
        </TouchableOpacity>
    );
}

export default CloseSesion;