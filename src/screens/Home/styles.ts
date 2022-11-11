import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
  },
  header: {
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
    paddingBottom: 45,
  },
  form: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
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
    color: '#FFF',
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
    height: 600,
    marginTop: 55,
    paddingHorizontal: 10,
  },
  headerTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTaskText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  tasksList: {
    marginBottom: 60,
  },
  titleTaskTextSpan: {
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginLeft: 5,
  }
});
