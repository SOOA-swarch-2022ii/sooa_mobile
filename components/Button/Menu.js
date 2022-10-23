import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

function Menu({ title, action }) {
    return (
        <TouchableOpacity
            style={styles.btnMenu}
            onPress={action}
        >
            <Text style={styles.btnTextMenu}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Menu;