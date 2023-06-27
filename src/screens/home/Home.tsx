import { Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

import Logo from '../../assets/logo.svg';
import Plus from '../../assets/plus.svg';
import { styles } from './styles';
import { List } from '../../components/List/List';



export function Home() {
    const tasks = [{ task: 'Beber agua', check: true, id: 1 }, { task: 'comer bem', check: false, id: 2 }, { task: 'Trabalhar', check: true, id: 3 }, { task: 'Estudar', check: false, id: 4 }];
    return (
        <>
            <View style={styles.header}>
                <Logo />
            </View>

            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={'#6b6b6b'}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}><Plus /></Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={tasks}

                    renderItem={({ item }) => (
                        <List
                            key={item.id}
                            task={item.task}
                            check={item.check}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.notTask}>
                            <Image style={styles.img} source={require('../../assets/Clipboard.png')}></Image>
                            <Text style={styles.text}>
                                Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />

            </View>
        </>
    );
}