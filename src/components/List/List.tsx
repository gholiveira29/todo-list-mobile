import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import Trash from '../../assets/trash.svg';
import Check from '../../assets/check.svg';
import Checked from '../../assets/checked.svg';

type Props = {
    task: string;
    check: boolean;
};

export function List({ task, check = false }: Props) {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.list}>
                    {check ? <TouchableOpacity>
                        <Checked />
                    </TouchableOpacity>
                        :
                        <TouchableOpacity>
                            <Check />
                        </TouchableOpacity>
                    }

                    <Text style={styles.text} >{task}</Text>
                    <TouchableOpacity  >
                        <Trash />
                    </TouchableOpacity>
                </View>
            </View>
        </>

    );
}