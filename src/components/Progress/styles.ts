import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    criadas: {
        color: '#1E6F9F',
        marginLeft: 20,
        fontSize: 14,
        fontWeight: '700'
    },
    concluidas: {
        color: '#8284FA',
        marginRight: 3,
        fontSize: 14,
        fontWeight: '700'
    },
    quantidade: {
        borderColor: '#333333',
        borderRadius: 50,
        borderWidth: 1,
        height: 30,
        width: 40,
        color: '#fff',
        textAlign: 'center',
        marginLeft: 5,
        marginTop: -5
    },
    alinhaText: {
        flexDirection: 'row',
        marginRight: 20
    }
});
