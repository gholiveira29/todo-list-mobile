import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import Trash from '../../assets/trash.svg';
import Check from '../../assets/check.svg';
import Checked from '../../assets/checked.svg';
import { useState } from 'react';

type Props = {
    task: string;
    checked: boolean;
    onChecked: () => void;
    onRemove: () => void;
};

export function List({ task, checked = false, onChecked, onRemove }: Props) {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.list}>
                    {checked ? <TouchableOpacity onPress={onChecked}>
                        <Checked />
                    </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={onChecked}>
                            <Check />
                        </TouchableOpacity>
                    }

                    <Text style={styles.text} >{task}</Text>
                    <TouchableOpacity onPress={onRemove}  >
                        <Trash />
                    </TouchableOpacity>
                </View>
            </View>
        </>

    );
}