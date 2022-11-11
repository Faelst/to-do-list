import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: '#262626',
    height: 80,
    borderRadius: 8,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',

  },
  taskCardDoneBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4EA8DE',
    borderRadius: 20,
    width: 25,
    height: 25,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskCardText: {
    width: '75%',
    color: '#F2F2F2',
    fontSize: 14,
  },
  taskCardDeleteBtn: {
    marginLeft: 5,
  }
});