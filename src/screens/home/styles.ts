import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#0D0D0D',
        height: 160

    },
    container: {
        backgroundColor: '#1A1A1A',
        flex: 1
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: -35,
        marginBottom: 42,
        justifyContent: "center"
    },
    input: {
        backgroundColor: '#262626',
        height: 56,
        borderRadius: 6,
        borderColor: '#0D0D0D',
        borderWidth: 1,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 5,
        width: 300,
        marginLeft: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 10,
        backgroundColor: '#1E6F9F',
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: '#808080',
        textAlign: 'center',

    },
    img: {
        marginLeft: '40%'
    },
    notTask: {
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: "50%"
    }

});
