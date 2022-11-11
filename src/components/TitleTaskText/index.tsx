import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type TitleTaskTextProps = {
    title: string;
}

export function TitleTaskText({ title }: TitleTaskTextProps) {
    return (
        <View
            style={styles.container}
        >
            <Text style={{ ...styles.titleTaskText, color: title === "Concluidas" ? '#8284FA' : '#4EA8DE' }}>{title}</Text>
            <TouchableOpacity style={styles.span}>
                <Text style={styles.textSpan}>0</Text>
            </TouchableOpacity>
        </View >
    );
}