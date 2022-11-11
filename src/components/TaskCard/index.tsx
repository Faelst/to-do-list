import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type TaskCardProps = {
    description: string;
    onRemove: () => void;
}

export function TaskCard({ description, onRemove }: TaskCardProps) {

    return (
        <View style={styles.taskCard}>
            <TouchableOpacity style={styles.taskCardDoneBtn}>
                <Image source={require('../../../assets/check.png')} />
            </TouchableOpacity>
            <Text style={styles.taskCardText}>{description}</Text>
            <TouchableOpacity style={styles.taskCardDeleteBtn} onPress={onRemove}>
                <Image source={require('../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}