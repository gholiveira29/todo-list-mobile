import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
    },
    list: {
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: '#262626',
        borderRadius: 10,
        borderColor: '#333',
        borderWidth: 1,
        marginBottom: 10,
        flexDirection: 'row',
        height: 70,
        width: "90%",
        gap: 8,
        padding: 10
    },
    text: {
        color: '#F2F2F2',
        fontSize: 18,
    }
});
