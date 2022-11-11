import { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { EmptyTaskList } from '../../components/EmptyTaskList';
import { TaskCard } from '../../components/TaskCard';
import { TitleTaskText } from '../../components/TitleTaskText';
import { styles } from './styles';

export function Home() {
  const [taskName, setTaskName] = useState('');
  const [task, setTask] = useState<string[]>(['qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe']);

  const handleTaskName = (text: string) => {

    setTaskName(text);
  }

  const handleAddTask = () => {
    if (!taskName.trim()) {
      Alert.alert('Digite o nome da tarefa corretamente');
      return;
    }

    setTask([...task, taskName]);
    setTaskName('');
  }

  const handleRemoveTask = (index: number) => {
    const newTask = task.filter((_, i) => i !== index);
    setTask(newTask);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../../assets/Logo.png')} />
        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={'#B2B2B2'}
            style={styles.textInput}
            onChangeText={handleTaskName}
            value={taskName}
          />
          <TouchableOpacity style={styles.btnAdd} onPress={handleAddTask}>
            <Image source={require('../../../assets/plus.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerTasks}>
          <View style={styles.headerTask}>
            <TitleTaskText title="Criadas" />
            <TitleTaskText title="Concluidas" />
          </View>

          <View style={styles.tasksList}>
            <FlatList
              data={task}
              renderItem={({ item, index }) => <TaskCard description={item} onRemove={() => handleRemoveTask(index)} />}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => <EmptyTaskList />}
            />
          </View>
        </View>
      </View>
    </>
  );
}
