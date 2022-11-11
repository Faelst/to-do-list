import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export interface CardProps {
    description: string,
    isDone: boolean
}

type TaskCardProps = {
    data: CardProps
    onRemove: () => void;
    onConfirm: () => void;
}

export function TaskCard({ data, onRemove, onConfirm }: TaskCardProps) {
    return (
        <View style={styles.taskCard}>
            <TouchableOpacity style={styles.taskCardDoneBtn} onPress={onConfirm}>
                {data.isDone && (<Image source={require('../../../assets/check.png')} />)}
            </TouchableOpacity>
            <Text style={styles.taskCardText}>{data.description}</Text>
            <TouchableOpacity style={styles.taskCardDeleteBtn} onPress={onRemove}>
                <Image source={require('../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}