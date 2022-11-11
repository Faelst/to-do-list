import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function TaskCard() {
    return (
        <View style={styles.taskCard}>
            <TouchableOpacity style={styles.taskCardDoneBtn}>
                <Image source={require('../../../assets/check.png')} />
            </TouchableOpacity>
            <Text style={styles.taskCardText}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
            <TouchableOpacity style={styles.taskCardDeleteBtn}>
                <Image source={require('../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}