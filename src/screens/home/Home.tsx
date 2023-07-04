import { Text, View, TextInput, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { useState } from 'react';

import Logo from '../../assets/logo.svg';
import Plus from '../../assets/plus.svg';
import { styles } from './styles';
import { List } from '../../components/List/List';
import { Progress } from '../../components/Progress/Progress';



export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [task, setTaskName] = useState('');
    const [checked, setChecked] = useState<boolean>(false);
    const [tasksChecked, setTasksChecked] = useState<string[]>([]);

    function handleSetChecked(name: string) {
        if (tasksChecked.includes(name)) {
            setTasksChecked(prevState => prevState.filter(element => element !== name));
        }
        else {
            setTasksChecked(prevState => [...prevState, name]);
        }
    }

    function handleSetNewTask() {
        if (task == '') {
            return Alert.alert('Nome vazio!', 'O nome da tarefa não pode ser vazio!');
        }
        if (tasks.includes(task)) {
            return Alert.alert('Tarefa existe', 'Já existe uma tarega na lista com esse nome.');
        }
        setTasks(prevState => [...prevState, task]);
        setTaskName('');
    }

    function handleRemoveTask(name: string) {
        Alert.alert('Deletar', `Deseja Deletar a tarefa ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

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
                        onChangeText={setTaskName}
                        value={task}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSetNewTask}
                    >
                        <Text style={styles.buttonText}><Plus /></Text>
                    </TouchableOpacity>
                </View>

                <Progress
                    criadas={tasks.length}
                    concluidas={tasksChecked.length}
                />

                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <List
                            key={item}
                            task={item}
                            onChecked={() => handleSetChecked(item)}
                            checked={tasksChecked.includes(item)}
                            onRemove={() => handleRemoveTask(item)}
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