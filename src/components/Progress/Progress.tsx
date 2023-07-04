import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

type Props = {
    criadas: any;
    concluidas?: any;
};
export function Progress({ criadas, concluidas }: Props) {
    let tasksCriadas = String(criadas);
    let tasksConcluidas = String(concluidas);
    return (
        <View style={styles.container}>
            <View style={styles.alinhaText}>
                <Text style={styles.criadas}>Criadas
                </Text>
                <TextInput
                    style={styles.quantidade}
                    value={tasksCriadas}
                    editable={false}
                />
            </View>
            <View style={styles.alinhaText}>
                <Text style={styles.concluidas}>Concluidas</Text>
                <TextInput
                    style={styles.quantidade}
                    value={tasksConcluidas}
                    editable={false}
                />
            </View>
        </View>

    );
}