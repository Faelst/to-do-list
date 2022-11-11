import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { EmptyTaskList } from '../../components/EmptyTaskList';

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
            <View
              style={{
                width: '77%',
                flexDirection: `row`,
              }}
            >
              <Text style={styles.titleTaskText}>Criadas</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  height: 19,
                  width: 19,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 9,
                  marginLeft: 5,
                }}
              >
                <Text style={{ color: 'white' }}>0</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: `row`,
              }}
            >
              <Text style={styles.titleTaskText}>Criadas</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  height: 19,
                  width: 19,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 9,
                  marginLeft: 5,
                }}
              >
                <Text style={{ color: 'white' }}>0</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.tasksList}>
            <EmptyTaskList />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 65,
  },
  form: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  textInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#262626',
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#0D0D0D',
  },
  btnAdd: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
  },
  containerTasks: {
    height: '69%',
    paddingHorizontal: 25,
  },
  headerTask: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTaskText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  tasksList: {
    height: '95%',
  },
});
