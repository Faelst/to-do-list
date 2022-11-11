import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { TaskCard } from '../../components/TaskCard';
import { TitleTaskText } from '../../components/TitleTaskText';
import { styles } from './styles';

export function Home() {
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
          />
          <TouchableOpacity style={styles.btnAdd}>
            <Image source={require('../../../assets/plus.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerTasks}>
          <View style={styles.headerTask}>
            <TitleTaskText title="Criadas" />
            <TitleTaskText title="Concluidas" />
          </View>

          <View style={styles.tasksList}>
            <TaskCard />
          </View>
        </View>
      </View>
    </>
  );
}
