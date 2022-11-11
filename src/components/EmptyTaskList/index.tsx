import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export function EmptyTaskList() {
  return (
    <View style={styles.emptyTasksList}>
      <Image source={require('../../../assets/Clipboard.png')} />
      <Text
        style={{
          color: '#808080',
          textAlign: `center`,
          fontWeight: 'bold',
          marginTop: 15,
        }}
      >
        Você ainda não tem tarefas cadastradas :(
      </Text>
      <Text style={{ color: '#808080', textAlign: `center` }}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
